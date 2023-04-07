import React from 'react';
import { Fade } from 'react-reveal';
import Button from 'elements/Button';

export default function MostPopular(props) {
  return (
    <section className="container" ref={props.refMostPopular}>
      <Fade bottom>
        <h4 className="mt-5">Most Popular</h4>
        <div className="row">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={300 * index}>
                <div key={`mostpopular-${index}`} className={`item column-4${index === 0 ? ' col-md-3 col-6 mt-2' : ' col-md-3 col-6 mt-2'}`}>
                  <Fade bottom delay={500 * index}>
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
                  </Fade>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
