import Axios from "axios";
import React from "react";
import ReactDomServer from "react-dom/server";

export async function sendAdminMail(subject: string, body: React.ReactElement) {
  await Axios.post(
    "https://mailer-o6jtfuuaia-uc.a.run.app/",
    ReactDomServer.renderToString(body),
    {
      headers: {
        "x-mailer-subject": subject,
        "x-mailer-to":
          process.env.NEXT_PUBLIC_ENV == "production" ? "<admin>" : "<dev>",
        'content-type': 'text/plain'
      }
    }
  );
}
