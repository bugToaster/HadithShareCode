import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import HadithBooks from '../../container/Hadith/Books';
import './Hadith.css';
import HadithSidebar from '../../container/Hadith/Sidebar';


class Hadith extends Component {

    render() {
        return (
            <Container className="mt-3 mb-3 pt-3 pb-3 shadow-lg bg-white">
                <Row>
                    <HadithSidebar />
                    <Col md="9">
                        <div className="ht_contentBodyWrapper">
                            <HadithBooks />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Hadith;
