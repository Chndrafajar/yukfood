import React from 'react';

import Button from 'elements/Button';

import HeroImages from 'assets/images/hero/hero right.png';

export default function Hero(props) {
  function showMostPopular() {
    window.scrollTo({
      top: props.refMostPopular.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className="container">
        <div className="row rowHero">
          <div className="col-md-6 d-flex align-items-center heroTittle">
            <div>
              <h1 className="font-weight-bold line-height-1 mb-3">
                All Fast Food is <br />
                Available at Yuk<span className="text-primary">Food</span>
              </h1>
              <p className="mb-4 font-weight-light text-gray-500 w-75">we are just a click away when you crave for delicious fast food</p>
              <Button className="btn px-5 mt-3" hasShadow isPrimary onClick={showMostPopular}>
                Buy Now
              </Button>
            </div>
          </div>
          <div className="col-md-6 imgHero">
            <img src={HeroImages} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
}
