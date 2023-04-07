import Button from 'elements/Button';
import React from 'react';
import { Fade } from 'react-reveal';

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <Fade bottom>
        <section className="container rowCategories" key={`category-${index1}`}>
          <h4 className="font-weight-medium">{category.name}</h4>
          <div className="row">
            {category.itemId.map((item, index2) => {
              return (
                <Fade bottom delay={300 * index2}>
                  <div className="col-md-3 col-6 mt-2" key={`category-${index1}-item-${index2}`}>
                    <div className="card shadow cardCategories">
                      {item.isPopular && (
                        <div className="tag">
                          Popular <span className="font-weight-light">Food</span>
                        </div>
                      )}
                      <figure className="img-wrapper">
                        <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ''} alt={item.name} />
                      </figure>
                      <div>
                        <div className="titleBuy">
                          <Button style={{ color: '#152c5b' }} type="link" href={`/detail/${item._id}`}>
                            <span>{item.title}</span>
                          </Button>
                        </div>
                        <div className="titleProduk mt-2 d-flex justify-content-between">
                          <Button style={{ color: '#152c5b' }} type="link" href={`/detail/${item._id}`}>
                            <span>${item.price}</span>
                          </Button>
                          <Button style={{ textDecoration: 'none', color: '#04a558' }} type="link" href={`/detail/${item._id}`}>
                            <button className="btnBuy">Buy</button>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </section>
      </Fade>
    );
  });
}
