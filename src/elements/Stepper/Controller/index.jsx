import React from 'react';
import { Fade } from 'react-reveal';

export default function Controller(props) {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">{props.children}</div>
        </div>
      </div>
    </Fade>
  );
}
