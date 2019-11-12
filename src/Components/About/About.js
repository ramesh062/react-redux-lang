import React, { Component } from 'react';
import './About.css';
import { Translate } from 'react-localize-redux';

class About extends Component {
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
              <div>{translate('about.title')}</div>
          }
        </Translate>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="text-justify">
              <Translate id="about.content"></Translate>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;