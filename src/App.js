import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import allCoupons from './allCoupons';

import Menu from './Menu';
import Game from './Game';
import Coupons from './Coupons';
import Profile from './Profile';

import './App.css';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      coupons: []
    }
    this.setClicks = this.setClicks.bind(this);
    this.claimCoupon = this.claimCoupon.bind(this);
  }

  setClicks(clicks) {
    this.setState({
      clicks: clicks
    });
  }

  claimCoupon(couponId) {
    let filteredCoupons = allCoupons.filter(offer => offer.id === couponId)
    let selectedCoupon = Object.assign({},filteredCoupons[0]);
    selectedCoupon.claimed = Date.now();
    selectedCoupon.validDue = Date.now() + 14 * 24 * 60 * 60 * 1000;
    let clicks = this.state.clicks;
    clicks = clicks - selectedCoupon.price;
    let coupons = this.state.coupons.slice();
    coupons.push(selectedCoupon);
    this.setState({
      clicks: clicks,
      coupons: coupons
    });
  }

  render(){
    return (
      <Router>
        <div className="clicker">

          <Route path="/" exact render={props => (
            <Game clicks={this.state.clicks} setClicks={this.setClicks}/>
          )} />

          <Route path="/coupons" render={props => (
            <Coupons clicks={this.state.clicks} claimCoupon={this.claimCoupon} />
          )} />

          <Route path="/profile" render={props => (
            <Profile coupons={this.state.coupons} />
          )} />
          <Menu claimableCoupons={5}/>
        </div>
      </Router>
    );
  }
}

export default Clicker;