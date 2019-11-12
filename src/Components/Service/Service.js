import React, { Component } from 'react';
import './Service.css';
import { Translate } from 'react-localize-redux';

class Service extends Component {
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
              <h4>{translate('service.title')}</h4>
          }
        </Translate>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="text-justify">
              <Translate id="service.content"></Translate>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;