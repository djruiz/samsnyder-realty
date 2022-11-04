import Axios from "axios";
import React from "react";
import ReactDomServer from "react-dom/server";

export async function sendAdminMail(subject: string, body: React.ReactElement) {
  if (process.env.NODE_ENV == "production") {
    const html = ReactDomServer.renderToString(body);

    await Axios.post(
      "https://mailer-o6jtfuuaia-uc.a.run.app/",
      { html },
      {
        headers: {
          "X-Mailer-Subject": subject,
          "X-Mailer-To":
            process.env.NEXT_PUBLIC_ENV == "production" ? "<admin>" : "<dev>",
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
