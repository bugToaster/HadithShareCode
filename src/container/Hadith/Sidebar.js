import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getBookData,
  getSectionDataById,
  getPublications
} from "../../actions";
import { Col } from "reactstrap";
import {
  SidebarHadithBook,
  SidebarHadithSections
} from "../../components/Hadith/Sidebar_hadith/index";

export class Sidebar extends Component {
  componentDidMount() {
    this.props.getBookData();
    // this.props.getPublications();
  }

  sectionChangedHendler = event => {
    this.props.getSectionDataById(event.value);
  };

  render() {
    return (
      <Col md="3">
        <SidebarHadithBook
          title="গ্রন্থরে নাম"
          placeholder="সকল গ্রন্থ"
          hadithSidebarData={this.props.books}
          onUpdateBook={this.sectionChangedHendler}
        />
        <SidebarHadithSections
          title="গ্রন্থরে ধরন"
          placeholder="সকল ধরন"
          hadithSidebarData={this.props.sections}
        />
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.hbr.books.slice(),
    sections: state.hbr.sections
  };
}

export default connect(
  mapStateToProps,
  { getBookData, getSectionDataById, getPublications }
)(Sidebar);
