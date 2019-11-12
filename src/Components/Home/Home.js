import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home } from '../../Containers/HomeContainer/action';
import { Translate } from 'react-localize-redux';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ item: event.target.value });
  }
  render() {

    let { isHomePending, isHomeSuccess, homeError, homeData } = this.props;
    const listItem = homeData.map((data, index) =>
      <li className="list-group-item text-left"><span className="badge badge-info">{index + 1}</span> {data}</li>
    );

    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Translate id="home.title" />
          <Translate>
            {
              ({ translate }) =>
                <form name="loginForm" className="col-md-12" onSubmit={this.onSubmit}>
                  <div className="form-group-collection">
                    <div className="form-group">
                      <Translate>
                        {({ translate }) => <input className="form-control" name="item" placeholder={translate('home.add-item')} onChange={this.handleChange} value={this.state.item ? this.state.item : ''} />}
                      </Translate>

                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-info btn-block">{translate('home.add-item')}</button>
                  </div>
                  <div className="message">
                    {isHomePending && <div className="alert alert-info">{translate("please-wait")}</div>}
                    {isHomeSuccess && <div className="alert alert-success">{translate("success")}</div>}
                    {homeError && <div className="alert alert-danger">{homeError.message}</div>}
                  </div>
                </form>
            }
          </Translate>
          <ul className="list-group">
            {listItem}
          </ul>
        </div>

      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { item } = this.state;
    console.log("item",item);
    this.props.home(item);
    this.setState({
      item: ''
    });
  }
}

const mapStateToProps = (state) => {

  return {
    isHomePending: state.homeReducer.isHomePending,
    isHomeSuccess: state.homeReducer.isHomeSuccess,
    homeError: state.homeReducer.homeError,
    homeData: state.homeReducer.homeData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    home: (item) => dispatch(home(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

