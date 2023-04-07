import Breadcrumb from 'elements/Breadcrumb';
import React from 'react';

export default function PageDetailTittle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row align-items-center">
        <div className="col-md-4">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-md-4 text-center">
          <h1 className="h2">{data.title}</h1>
        </div>
      </div>
    </section>
  );
}
