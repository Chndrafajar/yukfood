import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from 'elements/Button';

export default function NotFound() {
  return (
    <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="row ">
        <div className="col-md-12">
          <center>
            <Player autoplay loop src="https://assets8.lottiefiles.com/packages/lf20_u1xuufn3.json"></Player>
          </center>
        </div>
        <div className="col-md-12">
          <center>
            <h4 className="notH3">
              Hmm... <br />
              Sepertinya Halaman yang anda cari tidak tersedia!!!
            </h4>
            <Button className="btn" type="link" href="/">
              <button className="btn404">Back to Home</button>
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}
