import Button from 'elements/Button';
import InputNumber from 'elements/Form/InputNumber';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

class OrderFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
      },
    };
  }

  updateDate = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (data !== data) {
      this.setState({
        data: {
          ...this.state.duration,
        },
      });
    }
  }

  startOrder = () => {
    const { data } = this.state;
    this.props.startOrder({
      _id: this.props.itemDetails._id,
      duration: data.duration,
    });
    this.props.history.push('/checkout');
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <div className="card bordered orderFood mt-3">
        <h4 className="mb-3">Start Order</h4>
        <h5 className="h2 text-teal mb-4">${itemDetails.price}</h5>
        <label htmlFor="duration">how much food will you buy?</label>
        <InputNumber max={30} suffix={' order'} isSufixPlural name="duration" onChange={this.updateDate} value={data.duration} />
        <h6 className="text-gray-500 font-weight light">
          You will pay <span className="text-gray-900">${itemDetails.price * data.duration}</span> USD per{' '}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button className="btn mt-3" hasShadow isPrimary isBlock onClick={this.startOrder}>
          Continue to Order
        </Button>
      </div>
    );
  }
}

OrderFood.propTypes = {
  itemDetails: propTypes.object,
  startOrder: propTypes.func,
};

export default withRouter(OrderFood);
