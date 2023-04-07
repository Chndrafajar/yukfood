import React from 'react';

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div>
        <div key={`FeaturedImage${data}`}>
          <>
            <div className="card shadow mt-3">
              <figure className="imgFeatured">
                <img src={`${process.env.REACT_APP_HOST}/${data.imageId[0].imageUrl}`} alt={data._id} />
              </figure>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
