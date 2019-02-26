import React, {Component} from 'react';
import {connect} from "react-redux";
import {getSectionDataById} from "../../actions";
import BookChapter from "../../components/Hadith/Book_chapter/BookChapter";

export class Chapter extends Component {
    componentDidMount() {
        const {match: {params}} = this.props;
        this.props.getSectionDataById(params.id);
    };

    render() {
        return (
            <BookChapter
                sectionData={this.props.sections}
                bookId="1"
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        sections: state.hbr.sections
    };
}

export default connect(
    mapStateToProps,
    {getSectionDataById}
)(Chapter);
