import React, { Component } from "react";
import { connect } from "react-redux";
// import { getPublicationByBookId } from "../../actions";
import {HadithBooks} from '../../components/Hadith/HadithBooks/HadithBooks';
// import Publications from "./Publications";

import {Row} from 'reactstrap';
export class Books extends Component {
    render() {
        return (
            <Row>
                <HadithBooks
                hadithBooksData={this.props.books}
                hadithNumber="7563"
                />
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.hbr.books.slice(),
        // pubData: state.hbr.publications
    };
}
export default connect(
    mapStateToProps
)(Books)
