import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import './Footer.css';

const Footer = () => (
    <Container className="footerWrapper">
        <Row>
            <Col>
                <div className="footerHeaderTitle">
                    <h2><i className="fa fa-copyright" aria-hidden="true"></i> Copyright</h2>
                </div>
                <div className="footerContentWrapper">
                    <p className="small text-white-50">Â© 2013- 2018 Bangla Hadith, All rights reserved.</p>
                    <p className="small text-white-50">Developed & Maintain by: Rokon-ul-Haque</p>
                </div>
            </Col>
            <Col>
                <div className="footerHeaderTitle">
                    <h2><i className="fa fa-heart" aria-hidden="true"></i> Donation</h2>
                </div>
                <div className="footerContentWrapper">
                    <p className="small text-white-50">à¦¬à¦¾à¦à¦²à¦¾ à¦¹à¦¾à¦¦à¦¿à¦¸à§à¦° à¦ªà§à¦°à¦à§à¦à§à¦ à¦¸à¦®à§à¦¹à¦à§ à¦¸à¦¹à¦¯à§à¦à¦¿à¦¤à¦¾ à¦à¦°à§à¦¨à¥¤ à¦à¦à¦¿ à¦¸à¦®à§à¦ªà§à¦°à§à¦£ à¦¬à§à¦¯à¦¾à¦à§à¦¤à¦¿ à¦à¦¦à§à¦¯à§à¦à§ à¦ªà¦°à¦¿à¦à¦¾à¦²à¦¿à¦¤ à¦à¦¬à¦ à¦¡à§à¦¨à§à¦¶à¦¨
                        à¦¨à¦¿à¦°à§à¦­à¦° à¦à¦à¦à¦¿ à¦ªà§à¦°à¦à§à¦à§à¦à¥¤ à¦à¦®à¦¾à¦¦à§à¦° à¦²à¦à§à¦·à§à¦¯ à¦¬à¦¿à¦¶à§à¦¦à§à¦§ à¦¦à§à¦¬à§à¦¨à¦à§ à¦®à¦¾à¦¨à§à¦·à§à¦° à¦¦à§à¦° à¦à§à¦¡à¦¼à¦¾à¦¯à¦¼ à¦ªà§à¦à¦à§ à¦¦à§à¦¯à¦¼à¦¾ à¥¤ à¦¦à§à¦¬à§à¦¨à¦à§
                        à¦à¦à¦¿à¦¯à¦¼à§ à¦¨à¦¿à¦¯à¦¼à§ à¦¯à¦¾à¦¬à¦¾à¦° à¦²à¦à§à¦·à§à¦¯à§ à¦¸à¦¾à¦¦à¦¾à¦à¦¾à¦¯à¦¼à§ à¦à¦¾à¦°à¦¿à¦¯à¦¼à¦¾à¦° à¦à¦ à¦ªà§à¦°à§à¦à§à¦à§à¦à§ à¦à¦à¦¶à¦à§à¦°à¦¹à¦¨ à¦à¦°à§à¦¨à¥¤</p>
                </div>
            </Col>
            <Col>
                <div className="footerHeaderTitle">
                    <h2><i className="fa fa-location-arrow" aria-hidden="true"></i> Contact us</h2>
                </div>
                <div className="footerContentWrapper">
                    <address className="small text-white-50">
                        ROKON-UL-HAQUE<br />
                        <i className="fa fa-envelope-open"></i> info@hadithbd.com<br />
                        <i className="fa fa-mobile-alt"></i> +880 1714110630<br />
                        <i className="fa fa-facebook"></i> https://www.facebook.com/hadithbd<br />
                        <i className="fa fa-youtube"></i> https://www.youtube.com/hadithbdTube<br />
                        <i className="fa fa-twitter"></i> https://twitter.com/hadithbd<br />
                        <i className="fa fa-instagram"></i> https://www.instagram.com/hadithbdcom<br />
                    </address>
                </div>
            </Col>
            <Col>
                <div className="footerHeaderTitle">
                    <h2><i className="fa fa-users" aria-hidden="true"></i> Visitors counter</h2>
                </div>
                <div className="footerContentWrapper">
                    <p className="small text-white-50">Â© 2013- 2018 Bangla Hadith, All rights reserved.</p>
                    <p className="small text-white-50">Developed & Maintain by: Rokon-ul-Haque</p>
                </div>
            </Col>
        </Row>
    </Container>
);

Footer.propTypes = {};

export default Footer;
