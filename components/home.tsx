import { Fullshot } from "./fullshot";
import { Col, Row, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faCalendarDays, faHouse, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Axios from "axios";
import { PropertyDetailsResponse } from "types/property-details-response";
import { LocationSuggestionResponse } from "types/location-suggestion-response";
import { capitalCase } from "change-case";
import propertyDetailsMock from "__mocks__/property-details-mock";
import React from "react";
import { Chart } from "react-google-charts";
import { Section } from "./section";
import GoogleMapReact from 'google-map-react';
import { ImageCarousel } from "./image-carousel";
import { sendAdminMail } from "notifications/mailproxy";
import { NewLeadTemplate } from "notifications/templates/newlead";
import { Button } from "react-bootstrap";
import Link from "next/link";

type LeadCache = string[];

interface Props {
  lat: number,
  lng: number
}

const Marker = (_: Props) => {
  return (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  )
}

export const Home = () => {
  const [cookies, setCookie] = useCookies(["__leads"]);
  const [property, setProperty] = useState<PropertyDetailsResponse>();
  const [propertyKey, setPropertyKey] = useState<string>();
  const [invalid, setInvalid] = useState(false);
  const [couldNotFindProperty, setCouldNotFindProperty] = useState<boolean>(false);
  const router = useRouter();

  function numberWithCommas(x: number) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function handleNewLead(firstName: string, lastName: string, email: string, propertyKey: string) {
    console.log("Creating new lead!", firstName, lastName, email, propertyKey);
    sendAdminMail("New Lead", <NewLeadTemplate firstName={firstName} lastName={lastName} email={email} address={propertyKey} />)
  }

  async function handlePageLoad() {
    if (!router.isReady) return;
    const { firstName, lastName, email, propertyKey } = router.query as { [key: string]: string };

    if (!firstName || !lastName || !email || !propertyKey) {
      setInvalid(true);
      return;
    }

    setPropertyKey(propertyKey);

    const leads: LeadCache = cookies.__leads || [];

    const propertiesCache = localStorage.getItem("__properties");
    const properties = propertiesCache ? JSON.parse(propertiesCache) : {};

    if (!leads.includes(email)) {
      leads.push(email)
      handleNewLead(firstName, lastName, email, propertyKey);
    }

    if (!properties[propertyKey]) {
      if (process.env.NODE_ENV == "production") {
        console.log("CALLING API");

        const locationSuggestion = await Axios.get<LocationSuggestionResponse>("https://us-real-estate.p.rapidapi.com/location/suggest", {
          params: { input: propertyKey },
          headers: {
            'X-RapidAPI-Key': 'e3bd71178bmsh7d000eacc500dbep1b88c5jsn697ea76af05d',
            'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
          }
        });

        const location = locationSuggestion.data.data?.find(p => p.area_type == "address");

        if (!location) {
          setCouldNotFindProperty(true);
          return;
        }

        const propertyDetails = await Axios.get<PropertyDetailsResponse>("https://us-real-estate.p.rapidapi.com/v2/property-detail", {
          params: { property_id: location.property_id },
          headers: {
            'X-RapidAPI-Key': 'e3bd71178bmsh7d000eacc500dbep1b88c5jsn697ea76af05d',
            'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
          }
        });

        properties[propertyKey] = propertyDetails.data
      } else {
        console.log("CALLING API (MOCK)");
        properties[propertyKey] = propertyDetailsMock
      }
    }

    setCookie("__leads", leads, { path: "/" });
    localStorage.setItem("__properties", JSON.stringify(properties));
    setProperty(properties[propertyKey]);
  }

  useEffect(() => {
    handlePageLoad();
  }, [router.isReady, router.query])

  useEffect(() => {
    if (invalid) {
      router.push("/")
    }
  }, [invalid]);

  return (
    <div className="pb-5 home-value-ff">
      <div style={{ minHeight: "100vh" }} className="esv-container px-4">
        {property ? <div className="py-4 mw-1100 m-auto">
          <div>
            <h1 className="text-dark">
              <b>
                {property?.data.property_detail.address.line}, {property?.data.property_detail.address.city}, {property?.data.property_detail.address.state_code}, {property?.data.property_detail.address.postal_code}
              </b>
            </h1>
            <h1 className="fs-4 text-dark">
              {property?.data.property_detail.address.county} County, {property?.data.property_detail.address.country}
            </h1>
          </div>
          <hr />
          <div className="border-start border-primary border-4 p-4 mb-4 shadow" style={{ backgroundColor: "#FFFFFF40" }}>
            <h2 className="fs-4 text-primary font-monospace">Overview</h2>
            <p dangerouslySetInnerHTML={{ __html: property!.data.property_detail.property_overview }}></p>
          </div>
          <Row>
            <Col sm={12} md={{ span: 6 }}>
              <div>
                <ImageCarousel images={property.data.property_detail.photos?.map(p => p.href)} />
              </div>
            </Col>
            <Col sm={12} md={{ span: 6 }}>
              <div className="position-relative esv-data rounded shadow mb-5 overflow-hidden mt-4 mt-md-0" style={{ paddingBottom: 30 }}>
                <div className="p-4">
                  <h1 className="esv-value fs-2">Estimated Property Value</h1>
                  <hr />
                  <small className="font-monospace">Best Estimate</small>
                  <h2>${numberWithCommas(property.data.property_detail.avm.value)}</h2>
                  <div>
                    <small className="font-monospace">Value Range</small>
                    <h5>${numberWithCommas(property.data.property_detail.avm.value_low)} - ${numberWithCommas(property.data.property_detail.avm.value_high)}</h5>
                  </div>
                </div>
                <div className="position-absolute bg-white text-primary w-100 text-center d-flex justify-content-center py-2" style={{ bottom: 0 }}>
                  <div className="me-2">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <p className="m-0">Evaluated on {property.data.property_detail.avm.valuation_date?.slice(0, 4) + "-" + property.data.property_detail.avm.valuation_date?.slice(4, 6) + "-" + property.data.property_detail.avm.valuation_date?.slice(6, 8)}</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <div className="mt-4 shadow rounded overflow-hidden" style={{ height: '300px', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDUkaMW__Jh-cNULHhsTQ3z9vcWbbGEkAs" }}
                defaultCenter={{
                  lat: property.data.property_detail.address.location.lat,
                  lng: property.data.property_detail.address.location.lon
                }}
                defaultZoom={13}
              >
                <Marker lng={property.data.property_detail.address.location.lon} lat={property.data.property_detail.address.location.lat} />
              </GoogleMapReact>
            </div>
          </div>
          <Section>
            <div className="my-4 p-4 border border-primary shadow rounded text-center" style={{ backgroundColor: "#FFFFFF40" }}>
              <h1 className="fs-4 font-monospace text-primary">Transaction History</h1>
              <div>{property.data.property_detail.property_history?.map(event => <div key={event.iso_date}>
                <hr />
                <small className="m-0 mb-2 text-primary"><b>{event.date}</b></small>
                <h5 className="d-flex justify-content-center"><span>{event.event_name}</span><span className="text-primary mx-2">|</span> <span>${numberWithCommas(event.price)}</span></h5>
              </div>) || "[Not Found]"}</div>
            </div>
            <div>
              <div className="border-start border-primary border-4 p-4 mt-4 shadow" style={{ backgroundColor: "#FFFFFF40" }}>
                <h2 className="fs-4 text-primary font-monospace">Latest Listing</h2>
                <p dangerouslySetInnerHTML={{ __html: property!.data.property_detail.listings?.[0]?.description || "[Not Found]" }}></p>
              </div>
              <div className="mt-4 p-4 pt-3 border border-primary rounded shadow" style={{ backgroundColor: "#FFFFFF40" }}>
                <h2 className="text-monospace pb-3 text-primary fs-5">Important Property Details</h2>
                <div className="d-flex flex-wrap font-monospace">
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.display_property_type}</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.beds} Bed(s)</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.baths} Bath(s)</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.rooms} Room(s)</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{capitalCase(property!.data.property_detail.flood.flood_factor_severity)} Flood Factor</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.garage == null ? "No Garage" : `${property!.data.property_detail.description.garage} Garage Spaces`}</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.construction}</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">{property!.data.property_detail.description.roofing} Roof</p>
                  <p className="badge bg-white text-primary border border-primary shadow mx-1">Built in Year {property!.data.property_detail.description.year_built}</p>
                </div>
              </div>
            </div>
          </Section>
          <Section def={[12, 12]} md={[6, 6]}>
            {property.data.property_detail.avm_history ? <div className="border border-primary mt-4 rounded shadow text-center position-relative overflow-hidden">
              <Chart
                options={{
                  title: "Property Evaluation History", vAxis: { format: 'currency' }
                }}
                chartType="LineChart"
                data={[["Date", "Value"], ...(property.data.property_detail.avm_history || []).map(h => [h.valuation_date, h.value]).reverse()]}
                width="100%"
                height="400px"
                legendToggle
              />
            </div> : ""}
            {property.data.property_detail.avm_trend.forecast ? (
              <div className="border border-primary bg-white mt-4 rounded shadow text-center overflow-hidden mb-5">
                <Chart
                  options={{
                    title: "Property Evaluation Forcast", vAxis: { format: 'currency' }
                  }}
                  chartType="LineChart"
                  data={[["Date", "Value"], ...(property.data.property_detail.avm_trend.forecast || [])?.map(f => [f.valuation_date, f.value])]}
                  width="100%"
                  height="400px"
                  legendToggle
                />
              </div>
            ) : <div></div>}
          </Section>
        </div> : (
          couldNotFindProperty ? (<div className="p-5">
            <div>
              <div className="position-relative d-flex justify-content-center w-100">
                <div style={{ width: 275, height: 275 }} className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon size="5x" className="text-secondary drop-shadow position-relative" icon={faQuestion} style={{ zIndex: 3, bottom: 20 }} />
                </div>
                <FontAwesomeIcon size="10x" className="position-absolute text-primary drop-shadow" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} icon={faHouse} />
              </div>
              <div className="text-center">
                <h1 className="font-monospace mt-4 text-primary ">Sorry, we couldn't find that property :(</h1>
                <p>"{propertyKey}" may exist but we cannot find a record for it. <br /> If you want to try again, or search another property, go back.</p>
                <Link href="/">
                  <Button size="lg" className="btn-primary-gradient mt-2">Go Back</Button>
                </Link>
              </div>
            </div>
          </div>) : <div className="p-5">
            <div>
              <div className="position-relative d-flex justify-content-center w-100">
                <div>
                  <Spinner style={{ width: 275, height: 275 }} variant="secondary" animation="grow" />
                </div>
                <FontAwesomeIcon size="10x" className="position-absolute text-primary drop-shadow" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} icon={faHouse} />
              </div>
              <h1 className="text-primary text-center font-monospace mt-4">Loading Property Data</h1>
            </div>
          </div>
        )}
      </div>
      <Row className="mw-1100 m-auto py-5">
        <Col sm={12} md={6}>
          <Fullshot />
        </Col>
        <Col sm={12} md={6}>
          <div className="cta-copy my-4">
            <h1>Let’s take the next step together!</h1>
            <p>
              Whether you are ready to sell your home, or just want to ask a few
              questions, Sam Snyder is here to help. Schedule a time on my
              calendar and I will talk you through how we can turn your dream
              into a reality.
            </p>
            <button
              style={{ width: "100%" }}
              className="btn btn-primary btn-gradient-primary btn-lg px-5 shadow"
            >
              <FontAwesomeIcon
                className="pe-2"
                icon={faCalendarDays as IconProp}
              />
              Schedule A Chat
            </button>
          </div>
        </Col>
      </Row>
    </div >
  );
};
