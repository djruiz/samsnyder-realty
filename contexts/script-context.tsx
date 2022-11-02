import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import { Component } from "types/component";

export const ScriptContext = React.createContext<{
  googleMapsScriptReady: boolean
}>({
  googleMapsScriptReady: false
});

export const ScriptContextProvider: Component = ({ children }) => {
  const router = useRouter();
  const [googleMapsScriptReady, setGoogleMapsScriptReady] = React.useState(false);
  return (
    <ScriptContext.Provider value={{ googleMapsScriptReady }}>
      {children}
      {router.pathname == "/" ? <Script
        type="text/javascript"
        strategy="lazyOnload"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUkaMW__Jh-cNULHhsTQ3z9vcWbbGEkAs&libraries=places"
        onLoad={() => setGoogleMapsScriptReady(true)}
      ></Script> : null}
    </ScriptContext.Provider>
  )
}