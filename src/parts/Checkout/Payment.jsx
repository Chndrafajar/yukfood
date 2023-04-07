import React from 'react';
import { Fade } from 'react-reveal';

import LogoBca from 'assets/images/icons/ic_bankBCA.jpg';
import logoMandiri from 'assets/images/icons/ic_bankMandiri.jpg';
import InputFile from 'elements/Form/InputFile';
import InpuText from 'elements/Form/InputText';

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 5;

  const subTotal = ItemDetails.item.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Ongkir: {tax}%</p>
              <p>Sub Total: ${subTotal}</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={LogoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2032 9292</dd>
                    <dd>YukFood Ordering</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2322 8382</dd>
                    <dd>YukFood Ordering</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-5 py-5">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />

              <label htmlFor="bankName">Asal Bank</label>
              <InpuText id="bankName" name="bankName" type="text" value={data.bankName} onChange={props.onChange} />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InpuText id="bankHolder" name="bankHolder" type="text" value={data.bankHolder} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
