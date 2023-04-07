import React from 'react';
import { Fade } from 'react-reveal';

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div>
        <div key={`FeaturedImage${data}`}>
          <Fade bottom delay={300 * data}>
            <div className="card shadow mt-3">
              <figure className="imgFeatured">
                <img src={`${process.env.REACT_APP_HOST}/${data.imageId[0].imageUrl}`} alt={data._id} />
              </figure>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
