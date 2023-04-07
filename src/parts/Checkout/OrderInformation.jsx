import React from 'react';
import { Fade } from 'react-reveal';
import InpuText from 'elements/Form/InputText';

export default function OrderInformation(props) {
  const { data, ItemDetails, checkout } = props;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 border-right py-5">
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper">
                  <img src={`${process.env.REACT_APP_HOST}/${ItemDetails.item.imageId[0].imageUrl}`} alt={ItemDetails.item.title} />
                </figure>
                <div className="row align-items-center ">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.item.title}</h5>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * ItemDetails.item.price} USD <span className="text-gray-500">per</span> {checkout.duration} {ItemDetails.item.unit} {+checkout.duration > 1 ? '' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-5 py-5">
            <Fade delay={600}>
              <label htmlFor="firstName">FirstName</label>
              <InpuText id="firstName" name="firstName" onChange={props.onChange} value={data.firstName} />

              <label htmlFor="lastName">LastName</label>
              <InpuText id="lastName" name="lastName" onChange={props.onChange} value={data.lastName} />

              <label htmlFor="email">Email Adress</label>
              <InpuText id="email" name="email" onChange={props.onChange} value={data.email} />

              <label htmlFor="phone">Phone Number</label>
              <InpuText id="phone" name="phone" onChange={props.onChange} value={data.phone} />

              <label htmlFor="alamat">Alamat</label>
              <InpuText id="alamat" name="alamat" onChange={props.onChange} value={data.alamat} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
