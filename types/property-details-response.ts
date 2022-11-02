export interface Photo {
  href: string;
}

export interface ForwardedPropertyIds {
}

export interface Boundary {
  coordinates: number[];
  type: string;
}

export interface Location {
  lon: number;
  lat: number;
}

export interface Address {
  street_post_direction?: any;
  state: string;
  address_validation_code: string;
  line: string;
  boundary: Boundary;
  street_number: string;
  street_suffix: string;
  time_zone: string;
  state_code: string;
  county: string;
  street_direction: string;
  postal_code: string;
  county_needed_for_uniq: boolean;
  street_name: string;
  country: string;
  city: string;
  location: Location;
  unit_value?: any;
}

export interface BuyerAgentForFar {
}

export interface Flood {
  environmental_risk: number;
  flood_factor_score: number;
  fema_zone: string[];
  fsid: string;
  trend_direction: number;
  flood_factor_severity: string;
}

export interface Agent {
}

export interface Office {
}

export interface Noise {
  score_text: string;
  traffic_text: string;
  local_text: string;
  score: number;
  airport_text: string;
}

export interface RentalAvm {
  estimate_high: number;
  date: string;
  id: string;
  estimate_low: number;
  estimate: number;
}

export interface County {
  fips: string;
  name: string;
}

export interface SearchArea {
  city: string;
  state_code: string;
}

export interface PublicRecord {
  garage_spaces?: any;
  floor_1_sqft: number;
  exterior1?: any;
  baths_1qtr?: any;
  lot_size: number;
  date_updated: string;
  baths_full: number;
  pool?: any;
  cl_id: string;
  year_built: number;
  garage?: any;
  stories: number;
  year_renovated: number;
  lot_width: number;
  view?: any;
  roofing: string;
  sqft: number;
  garage_sqft?: any;
  style?: any;
  fireplace?: any;
  heating: string;
  units?: any;
  prop_type: string;
  building_sqft: number;
  baths_half?: any;
  cooling: string;
  lot_depth: number;
  baths: number;
  distinct_baths: number;
  construction_quality?: any;
  rooms: number;
  baths_3qtr?: any;
  beds: number;
  construction: string;
}

export interface PropCommon {
  type: string;
  bath_full: number;
  bath: number;
  year_built: number;
  last_sold_price: number;
  permalink: string;
  status: string;
  lot_sqft: number;
  sqft: number;
  baths_partial_calc?: any;
  baths_full_calc: number;
  description: string;
  rental_estimate: number;
  bed: number;
  original_price?: any;
  price: number;
}

export interface Query {
  client_id: string;
  schema: string;
}

export interface Description {
  garage_max?: any;
  exterior?: any;
  sqft_min?: any;
  baths_partial_calc?: any;
  sub_type?: any;
  beds_min?: any;
  baths_min?: any;
  name?: any;
  pool?: any;
  baths_full_calc: number;
  garage?: any;
  stories: number;
  type: string;
  garage_type?: any;
  construction: string;
  roofing: string;
  sqft: number;
  rooms: number;
  baths_total: number;
  lot_sqft: number;
  zoning?: any;
  year_renovated: number;
  baths_3qtr?: any;
  year_built: number;
  units?: any;
  cooling: string;
  beds: number;
  baths_half?: any;
  text?: any;
  heating: string;
  baths: number;
  baths_full: number;
  sqft_max?: any;
  baths_max?: any;
  beds_max?: any;
  garage_min?: any;
  fireplace?: any;
}

export interface Forecast {
  value: number;
  valuation_date: string;
}

export interface Historical {
  value: number;
  valuation_date: string;
}

export interface AvmTrend {
  forecast: Forecast[];
  historical: Historical[];
}

export interface Photo2 {
  href: string;
}

export interface SuppressionFlags {
  has_suppress_foreclosure: boolean;
  has_suppress_sold_info: boolean;
}

export interface Office2 {
  slogan: string;
  name: string;
  out_of_community?: any;
  application_url?: any;
  fulfillment_id: string;
  href: string;
  mls_set: string;
  email: string;
}

export interface Broker {
  logo: string;
  name: string;
  accent_color: string;
  fulfillment_id: string;
}

export interface Advertiser {
  office: Office2;
  broker: Broker;
  name: string;
  mls_set: string;
  email: string;
  nrds_id: string;
  type: string;
  href: string;
  slogan: string;
  fulfillment_id: string;
}

export interface Description2 {
  text: string;
}

export interface Agent2 {
  office_name: string;
  type: string;
  office_phone: string;
  agent_name: string;
  agent_id: string;
  office_id: string;
}

export interface Source {
  agents: Agent2[];
  id: string;
}

export interface Listing {
  last_status_change_date: Date;
  photos: Photo2[];
  last_update_date: Date;
  list_price: number;
  status: string;
  suppression_flags: SuppressionFlags;
  advertisers: Advertiser[];
  buyers?: any;
  description: Description2;
  listing_id: string;
  source: Source;
  list_date: Date;
}

export interface PropertyHistory {
  price_range_min?: any;
  event_name: string;
  date: string;
  source: string;
  sqft: number;
  iso_date: string;
  price_changed: number;
  datasource_name: string;
  previous_event_price: number;
  listing: Listing;
  price: number;
  price_range_max?: any;
  listing_id?: number;
}

export interface Broker2 {
}

export interface Range {
  high: string;
  low: string;
}

export interface Grades {
  range: Range;
}

export interface Ratings {
  parent_rating?: number;
  great_schools_rating?: number;
}

export interface Location2 {
  postal_code: string;
  state: string;
  street: string;
  city: string;
  city_slug_id: string;
  county: string;
}

export interface School {
  grades: Grades;
  distance_in_miles: number;
  relevance: string;
  id: string;
  ratings: Ratings;
  name: string;
  phone: string;
  funding_type: string;
  greatschools_id: string;
  lat: number;
  lon: number;
  student_teacher_ratio: number;
  education_levels: string[];
  student_count: number;
  location: Location2;
  nces_id: string;
}

export interface AvmHistory {
  value: number;
  valuation_date: string;
}

export interface Photo3 {
  href: string;
}

export interface ClientFlags {
  is_price_reduced: boolean;
  is_tcpa_message_enabled: boolean;
  is_newly_listed: boolean;
}

export interface LocalPhones {
  comm_console_mweb: string;
}

export interface LeadForm {
  show_contact_an_agent: boolean;
  local_phone: string;
  google_cashback_enabled: boolean;
  form_type: string;
  smarthome_enabled: boolean;
  cashback_enabled: boolean;
  show_contact_a_lender: boolean;
  lead_type: string;
  local_phones: LocalPhones;
  is_lcm_enabled: boolean;
  show_text_leads: boolean;
  show_veterans_united: boolean;
  flip_the_market_enabled: boolean;
}

export interface Listing2 {
  photos: Photo3[];
  selling_agent_name: string;
  selling_office_url: string;
  selling_office_id: string;
  client_flags: ClientFlags;
  selling_agent_id: string;
  lead_forms: LeadForm[];
  selling_office_name: string;
  description: string;
  listing_id: any;
  mls_id: string;
  listing_status: string;
  selling_agent_url: string;
}

export interface Avm {
  value: number;
  value_high: number;
  model: string;
  cl_id: string;
  value_low: number;
  valuation_date: string;
}

export interface ClientDisplayFlags {
  presentation_status: string;
}

export interface Assessment {
  building: number;
  total: number;
  land: number;
}

export interface Market {
  building: number;
  total: number;
  land: number;
}

export interface TaxHistory {
  assessment: Assessment;
  tax: number;
  year: number;
  market: Market;
}

export interface PropertyDetail {
  photos: Photo[];
  forwarded_property_ids: ForwardedPropertyIds;
  mpr_id: number;
  address: Address;
  buyer_agent_for_far: BuyerAgentForFar;
  property_overview: string;
  flood: Flood;
  agent: Agent;
  office: Office;
  noise: Noise;
  display_property_type: string;
  property_id: number;
  rental_avm: RentalAvm;
  county: County;
  listing_id?: any;
  stories: number;
  search_areas: SearchArea[];
  id: number;
  public_records: PublicRecord[];
  prop_common: PropCommon;
  query: Query;
  description: Description;
  avm_trend: AvmTrend;
  property_history: PropertyHistory[];
  broker: Broker2;
  photo_count: number;
  schools: School[];
  avm_history: AvmHistory[];
  listings: Listing2[];
  products: string[];
  avm: Avm;
  client_display_flags: ClientDisplayFlags;
  suppression_flags: string[];
  tax_history: TaxHistory[];
  sold_date: string;
}

export interface Data {
  property_detail: PropertyDetail;
}

export interface PropertyDetailsResponse {
  status: number;
  data: Data;
}