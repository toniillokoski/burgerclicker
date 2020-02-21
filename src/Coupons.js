import React from 'react';
import allCoupons from './allCoupons';

class Coupons extends React.Component {

render(){

const burgers = Math.floor(this.props.clicks);

let filteredCoupons = allCoupons.filter( coupon =>
  coupon.price <= burgers
);

  let rows = filteredCoupons.map(coupon => {
    return (
      <div className="coupon" key={coupon.id}>

          <div className="coupon__offer">
            <div className="coupon__offerName">{coupon.name}</div>
            <div className="coupon__offerDesc">{coupon.desc}</div>
          </div>

          <div className="coupon__prices">
            <div className="coupon__newPrice">{coupon.newPrice.toFixed(2)}</div>
            <div className="coupon__oldPrice">{coupon.oldPrice.toFixed(2)}</div>
          </div>

          <div className="coupon__button">
            <button onClick={() => {this.props.claimCoupon(coupon.id)}}>
            <div className="coupon__price">{coupon.price}</div>
            <div className="coupon__claim">Claim!</div>
            </button>
          </div>

      </div>
      );
    }
  );
      
    return (
      <>
        <div className="header">
            <h1>Coupons</h1>
        </div>
        <div className="content">
            {rows.length > 0 ? rows : "No coupons to claim."}
        </div>
      </>
    );
  }

}

export default Coupons;