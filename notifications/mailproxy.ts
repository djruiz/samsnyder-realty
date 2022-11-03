import Axios from "axios"
import React from "react";
import ReactDomServer from "react-dom/server";

export async function sendAdminMail<T extends Object>(
  subject: string,
  body: React.ReactElement
) {
  await Axios.post("https://mailer-o6jtfuuaia-uc.a.run.app/", {
    to: process.env.NODE_ENV == "production" ? "<admin>" : "<dev>",
    subject,
    body: ReactDomServer.renderToString(body)
  });
}