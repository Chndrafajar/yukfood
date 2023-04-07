import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageDetailTittle from 'parts/PageDetailTittle';
import ItemDetails from 'json/itemDetails.json';
import FeaturedImage from 'parts/FeaturedImage';
import OrderFood from 'parts/OrderFood';
import Categories from 'parts/Categories';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

import { checkoutOrder } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailPages extends Component {
  componentDidMount() {
    window.title = 'YukFood | Home';
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id);
  }

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'Food Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props} />
        <div className="container mt-2">
          <PageDetailTittle breadcrumb={breadcrumb} data={page[match.params.id].item} />
          <div className="row">
            <div className="col-md-8">
              <FeaturedImage data={page[match.params.id].item} />
            </div>
            <div className="col-md-4">
              <OrderFood itemDetails={page[match.params.id].item} startOrder={this.props.checkoutOrder} />
            </div>
          </div>
        </div>
        {/* <Categories data={ItemDetails.categories} /> */}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutOrder, fetchPage })(DetailPages);
