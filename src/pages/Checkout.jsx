import OrderInformation from 'parts/Checkout/OrderInformation';
import Header from 'parts/Header';
import React, { Component } from 'react';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';
import Button from 'elements/Button';
import Stepper, { Controller, MainContent, Meta, Numbering } from 'elements/Stepper';
import { Fade } from 'react-reveal';
import { connect } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import { submitOrder } from 'store/actions/checkout';

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      alamat: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'YukFood | Checkout';
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append('firstName', data.firstName);
    payload.append('lastName', data.lastName);
    payload.append('email', data.email);
    payload.append('phoneNumber', data.phone);
    payload.append('idItem', checkout._id);
    payload.append('duration', checkout.duration);
    payload.append('accountHolder', data.bankHolder);
    payload.append('bankName', data.bankName);
    payload.append('image', data.proofPayment[0]);

    this.props.submitOrder(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;

    const { checkout, page } = this.props;

    console.log(data);

    if (!checkout) {
      return (
        <div className="container " style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="row">
            <div className="col-12">
              <center>
                <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_tll0j4bb.json"></Player>
              </center>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div>
                <center>
                  <h4 className="notH3">
                    Hmm... <br /> Sepertinya anda belum memilih apapun untuk diorder
                  </h4>
                  <Button className="btn mt-2" type="button" onClick={() => this.props.history.goBack()} isPrimary>
                    Back To Home
                  </Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const steps = {
      orderInformation: {
        title: 'Order Information',
        description: 'silahkan baca terlebih dahulu',
        content: <OrderInformation data={data} checkout={checkout} ItemDetails={page[checkout._id]} onChange={this.onChange} />,
      },
      payment: {
        title: 'Payment',
        description: 'silahkan baca terlebih dahulu',
        content: <Payment data={data} checkout={checkout} ItemDetails={page[checkout._id]} onChange={this.onChange} />,
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === 'orderInformation' && (
                <Controller>
                  {data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.phone !== '' && data.alamat !== '' && (
                    <Fade>
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn d-flex justify-content-center align-items-center" type="link" isBlock isLight href={`/detail/${checkout._id}`}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' && data.bankName !== '' && data.bankHolder !== '' && (
                    <Fade>
                      <Button className="btn mb-3" type="button" onClick={() => this._Submit(nextStep)} isPrimary isBlock hasShadow>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className="btn" type="button" isBlock isLight onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === 'completed' && (
                <Controller>
                  <Button className="btn d-flex justify-content-center align-items-center" type="link" isBlock isPrimary hasShadow href="">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitOrder })(Checkout);
