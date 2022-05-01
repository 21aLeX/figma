import axios from 'axios'
import React, { Component } from 'react'

export default class Get extends Component {
    static async getAll() {
      var formdata = new FormData();
      formdata.append("actionName", "MessagesLoad");
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      const r = await fetch("http://f0665380.xsph.ru/", requestOptions)
        .then(response =>  response.json())
        .then(result => {return result})
        .catch(error => console.log('error', error));
        return r.Messages
      }

}
