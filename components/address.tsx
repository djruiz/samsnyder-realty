import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { ChangeEvent, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Component } from "types/component";
import { ErrorMessage, Field, useField } from "formik";
import { ScriptContext } from "contexts/script-context";

interface Props {
  onChange?: (value: String) => void
}

export const Address: Component<Props> = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
    init
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
    initOnMount: false
  });
  const { googleMapsScriptReady } = useContext(ScriptContext);
  const [, , helpers] = useField({ name: "homeAddress" });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  useEffect(() => {
    if (googleMapsScriptReady) {
      init()
    }
  }, [googleMapsScriptReady])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
    helpers.setValue(e.target.value)
  };

  const handleSelect = ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      helpers.setValue(description);
      clearSuggestions();
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)} className="w-100 py-2 bg-light list-group-item m-0 pointer" style={{ listStyle: "none", zIndex: 2 }}>
          <span className="text-primary me-2"><FontAwesomeIcon icon={faHouse} /></span>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div style={{ zIndex: 2 }} ref={ref} className="position-relative">
      <Field
        name="homeAddress"
        className="form-control my-2"
        value={value}
        onChange={handleInput}
        placeholder="Home Address"
      />
      <ErrorMessage name="homeAddress" className="text-danger" component="small" />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className="list-group text-start mt-1 position-absolute w-100">{renderSuggestions()}</ul>}
    </div>
  );
};