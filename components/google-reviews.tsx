import { Component } from "types/component";
import { GoogleReview } from "./google-review";
import Caitlyn from "../assets/google-users/caitlyn.png";
import Juan from "../assets/google-users/juan.png";
import Lindsey from "../assets/google-users/lindsey.png";

export const GoogleReviews: Component = () => {
  return (
    <div className="mb-4">
      <GoogleReview
        profilePic={Juan}
        name="Juan B."
        date="November 2022"
        review="Sam is a great realtor! He is very knowledgeable, responsive, and patient. He would always point out potential issues with homes and flag any big ticket items. If you want a realtor that has his client's best interests in mind, go with Sam!"
      />
      <GoogleReview
        profilePic={Lindsey}
        name="Lindsey Neag"
        date="November 2022"
        review="Sam is great! He was super accommodating to us as we needed to buy a home quickly and were constantly traveling back and forth from Ohio. He always made us feel welcome and was honest throughout the whole buying process."
      />
      <GoogleReview
        profilePic={Caitlyn}
        name="Caitlnn Strobel"
        date="February 2022"
        review="Sam is a very knowledgeable realtor! My husband and I were very thankful for all of Sam’s help when buying our first home. Sam was always patient with us and quick to respond to our questions. 10/10 would recommend!"
      />
      <div className="d-flex justify-content-end">
        <a
          target="_blank"
          href="https://www.google.com/search?q=sam+snyder+realtor&ei=v0lkY__pDMGlptQP3dedqAI&ved=0ahUKEwi_xaeykJP7AhXBkokEHd1rByUQ4dUDCBA&uact=5&oq=sam+snyder+realtor&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgIIJjoKCAAQRxDWBBCwAzoHCAAQsAMQQzoMCC4QyAMQsAMQQxgBOgsIABCxAxCDARCRAjoFCAAQgAQ6CwguEIAEEMcBENEDOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOhEILhCxAxCDARDHARDRAxDUAjoNCC4QsQMQxwEQ0QMQQzoECAAQQzoECC4QQzoHCC4Q1AIQQzoRCC4QgwEQxwEQsQMQ0QMQgAQ6CwguEIAEEMcBEK8BOgoILhDUAhDlBBBDOgcILhDlBBBDOgoILhCxAxCDARBDOgcILhCxAxBDOgsILhCABBCxAxCDAToICC4QgAQQsQM6CAgAEIAEELEDOgsILhCxAxCDARDUAjoLCC4QgAQQsQMQ1AI6BQguEIAEOggILhCABBDUAjoNCC4QgAQQsQMQgwEQCjoKCC4QgAQQsQMQCjoKCAAQgAQQsQMQCjoHCAAQgAQQCjoFCAAQhgNKBAhBGABKBAhGGABQzAVY4hVg2RZoA3ABeACAAbgBiAHZD5IBBDQuMTOYAQCgAQHIAQzAAQHaAQQIARgI&sclient=gws-wiz-serp#lrd=0x8815e3f8c5c26381:0xe8672c966262c296,1,,,"
        >
          <button className="btn btn-primary btn-gradient-primary me-4">
            See More Reviews!
          </button>
        </a>
      </div>
    </div>
  );
};
