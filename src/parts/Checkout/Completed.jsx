import React from 'react';
import { Fade } from 'react-reveal';
import CompletedIlustration from 'assets/images/completed.png';

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-md-4">
            <img src={CompletedIlustration} alt="completed checkout apartment" className="img-fluid" />
            <p className="text-gray-500">we will your inform you via email later once the transaction has been accepted</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
