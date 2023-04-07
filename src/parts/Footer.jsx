import Button from 'elements/Button';
import React from 'react';
import IconText from './IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <IconText />
            <p className="brand-tag-line">Continue Foodish 2023 All rights reserved</p>
          </div>
          <div className="col-md-auto footerLeft">
            <h6 className="mt-2">Menu</h6>
            <ul className="list-group list-group flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  Home
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/services">
                  Services
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footerLeft">
            <h6 className="mt-2">Information</h6>
            <ul className="list-group list-group flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  Menu
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/services">
                  Quality
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/about">
                  Fast Delivery
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footerLeft">
            <h6 className="mt-2">Menu</h6>
            <ul className="list-group list-group flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  0826-2282-2929
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/services">
                  Explore
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/about">
                  infoyukfood.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/about">
                  0772, Pemalang, Jawa Tengah, Indonesia
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
