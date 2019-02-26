import React from 'react';
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Badge
} from 'reactstrap';
import {Link} from 'react-router-dom';
import './BookChapter.css';
import HadithSidebar from '../../../container/Hadith/Sidebar';


const BookChapter = (props) => (
    <Container className="mt-3 mb-3 pt-3 pb-3 shadow-lg bg-white">
        <Row>
            <HadithSidebar />
            <Col md="9">
                <div className="ht_contentHeaderWrapper htb_contentHeaderWrapper mb-4">
                    <Col md="8" className="h100p">
                        <Row className="ht_contentHeaderNumber h100p">
                            <p><i className="fa fa-leanpub"></i> à¦¤à¦¾à¦à¦¹à§à¦¦ à¦ªà¦¾à¦¬à¦²à¦¿à¦à§à¦¶à¦¨<br/>
                                <i className="fa fa-book"></i> à¦¸à¦¹à§à¦¹ à¦¬à§à¦à¦¾à¦°à§ (à¦¤à¦¾à¦à¦¹à§à¦¦)<br/>
                                <i className="fa fa-calculator"></i> 7563 à¦à¦¿ à¦¹à¦¾à¦¦à¦¿à¦¸</p>
                        </Row>
                    </Col>
                    <Col md="4" className="h100p">
                        <Row className="ht_contentHeaderDate h100p">
                            <p>à§§à§ª à¦°à¦¬à¦¿à¦à¦² à¦à¦à¦¾à¦°, à§§à§ªà§ªà§¦</p>
                        </Row>
                    </Col>
                </div>
                <div className="ht_contentBodyWrapper htb_contentBodyWrapper">
                    <Row>
                        <Col md="12" className="">
                            <ListGroup>
                                <ListGroupItem active><h5 className="float-left">à¦à¦§à§à¦¯à¦¾à¦¯à¦¼à§à¦° à¦¨à¦¾à¦®</h5> <h5
                                    className="float-right">à¦¹à¦¾à¦¦à¦¿à¦¸ à¦¨à¦¾à¦®à§à¦¬à¦¾à¦° (à¦¶à§à¦°à§-à¦¶à§à¦·) / à¦¹à¦¾à¦¦à¦¿à¦¸ à¦¸à¦à¦à§à¦¯à¦¾</h5>
                                </ListGroupItem>
                                {
                                    props.sectionData.map((section,index) =>(
                                        <ListGroupItem key={index} className="htb_listItem">
                                            <Link to={`/hadith/book/${section.BookID}/chap/`+section.SectionID}
                                                  className="htb_listItemLink">
                                                <span>{section.SectionBD}</span>
                                                <Badge className="float-right" color="secondary"> 1 <i
                                                    className="fa fa-arrows-alt-h"></i> 7 à¦ªà¦°à§à¦¯à¦¨à§à¦¤ <span
                                                    className="text-danger"> 7</span> à¦</Badge>
                                            </Link>
                                        </ListGroupItem>
                                    ))
                                }

                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
);

export default BookChapter;


