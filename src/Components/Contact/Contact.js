import React, { Component } from 'react';
import './Contact.css';
import { Translate } from 'react-localize-redux';

class Contact extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div>
        <Translate>
          {
            ({ translate }) =>
              <h4>{translate('contact.title')}</h4>
          }
        </Translate>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="text-justify">
              <Translate id="contact.content"></Translate>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;