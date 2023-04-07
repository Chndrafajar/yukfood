import Header from 'parts/Header';
import Categories from 'parts/Categories';

import Hero from 'parts/Hero';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';

import landingPage from 'json/landingPage.json';
import Footer from 'parts/Footer';
import MostPopular from 'parts/MostPopular';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPopular = React.createRef();
  }

  componentDidMount() {
    window.title = 'YukFood | Home';
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) this.props.fetchPage(`/landing-page`, 'landingPage');
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty('landingPage')) return null;

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPopular={this.refMostPopular} />
        <MostPopular refMostPopular={this.refMostPopular} data={page.landingPage.mostPopular} />
        <Categories data={page.landingPage.category} />

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
