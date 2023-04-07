import React from 'react';

import Button from 'elements/Button';

export default function MostPopular(props) {
  return (
    <section className="container" ref={props.refMostPopular}>
      <>
        <h4 className="mt-5">Most Popular</h4>
        <div className="row">
          {props.data.map((item, index) => {
            return (
              <div key={`mostpopular-${index}`} className={`item column-4${index === 0 ? ' col-md-3 col-6 mt-2' : ' col-md-3 col-6 mt-2'}`}>
                <div className="card shadow cardCategories">
                  <div className="tag">
                    $ <span className="font-weight-bold">{item.price}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ''} alt={item.name} />
                  </figure>
                  <div className="meta-wrapper">
                    <Button type="link" href={`/detail/${item._id}`} className="stretched-link d-block text-gray">
                      <h5 style={{ color: '#152c5b', fontSize: '18px' }}>{item.title}</h5>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </section>
  );
}
