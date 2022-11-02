export interface Centroid {
  lon: number;
  lat: number;
}

export interface Datum {
  prop_status: string[];
  validation_code: string[];
  _id: string;
  property_id: string;
  state_code: string;
  centroid: Centroid;
  mpr_id: string;
  postal_code: string;
  city: string;
  full_address: string[];
  country: string;
  _score: number;
  line: string;
  area_type: string;
}

export interface LocationSuggestionResponse {
  status: number;
  data: Datum[];
}
