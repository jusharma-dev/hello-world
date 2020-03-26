import React from "react";

class Fetch extends React.Component {
  /**
   * ToDo:can create params of a type params class
   * params = { headers : {}, method : "", payload : null, isCors : false}
   * @param {*} url
   * @param {*} params
   * @author Juhi
   */
  static post(url, params) {

    let options = {
      method: params.method || "GET",
      headers: params.headers || {}
    };

    let payload = params.payload || {};

    if (typeof params.payload === "string") {
      options.headers["content-type"] = "text/plain";
    } else {
      options.headers["content-type"] = "application/json";
    }

    if (["GET", "DELETE"].indexOf(options.method.toUpperCase()) === -1) {
      options.body = JSON.stringify(payload);
    }

    //can set cors and other if required
    if (!params.isCors) {
      options.mode = "no-cors";
    } else {
      options.credentials = "same-origin";
    }

    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
         // throw new Error("Network response was not ok");
         return {
          error: {
            message: "Server has failed to respond"
          }
        };
        }
        response.json();
      })
      .catch(error => {
        console.error(error);
        //returning an error object in case of https errors
        return {
          error: {
            message: error.message
          }
        };
      });
  }
}

export default Fetch;
