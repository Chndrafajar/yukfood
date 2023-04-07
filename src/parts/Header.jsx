import React, { useState } from 'react';
import Button from 'elements/Button';
import { Fade } from 'react-reveal';
import IconText from './IconText';
import BarsIcon from 'assets/images/icons/bars-solid.svg';
import Xicons from 'assets/images/icons/x-solid.svg';

export default function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light">
              <Button type="link" href="/" className="mx-auto">
                <IconText />
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );

  return (
    <>
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <IconText />
              <span className="barsIcons">
                <img src={BarsIcon} alt="barsIcon" onClick={() => setMenuOpen(!menuOpen)} />
              </span>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Button className="nav-link" type="link" href="/">
                      Home
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button className="nav-link" type="link" href="/services">
                      Services
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button className="nav-link" type="link" href="/about">
                      About
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </Fade>

      <div className={'navMobile ' + (menuOpen && 'active')}>
        <ul>
          <div className="iconMobile">
            <IconText />
            <img src={Xicons} alt="" width="20" onClick={() => setMenuOpen(false)} style={{ cursor: 'pointer' }} />
          </div>

          <li className="nav-item">
            <Button className="nav-link" type="link" href="/">
              Home
            </Button>
          </li>
          <li className="nav-item">
            <Button className="nav-link" type="link" href="/services">
              Services
            </Button>
          </li>
          <li className="nav-item">
            <Button className="nav-link" type="link" href="/about">
              About
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
