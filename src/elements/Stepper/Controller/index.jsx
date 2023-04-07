import React from 'react';

export default function Controller(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3">{props.children}</div>
      </div>
    </div>
  );
}
