import React, {Component} from 'react';
// import $ from 'jquery';
import {Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap';

import './Top_header.css';

class Top_header extends Component {
    static propTypes = {}
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render = () => (
        <div className="topHeader">
            <Container>
                <Row className="justify-content-end">
                    <div className="topSocialWrapper">
                        <ul className="socialWrapper">
                            <li>
                                <a href="https://facebook.com" id="Tooltip-fb">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <UncontrolledTooltip placement="bottom" target="Tooltip-fb">
                                    à¦à¦®à¦¾à¦¦à§à¦° à¦«à§à¦¸à¦¬à§à¦ à¦ªà§à¦à¦
                                </UncontrolledTooltip>
                            </li>
                            <li>
                                <a href="https://twitter.com" id="Tooltip-tw">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <UncontrolledTooltip placement="bottom" target="Tooltip-tw">
                                    à¦à¦®à¦¾à¦¦à§à¦° à¦à§à¦à¦à¦à¦¾à¦° à¦ªà§à¦à¦
                                </UncontrolledTooltip>
                            </li>
                            <li>
                                <a href="http://youtube.com" id="Tooltip-yp">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                                <UncontrolledTooltip placement="bottom" target="Tooltip-yp">
                                    à¦à¦®à¦¾à¦¦à§à¦° à¦à¦à¦à¦¿à¦à¦¬ à¦ªà§à¦à¦
                                </UncontrolledTooltip>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" id="Tooltip-ins">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <UncontrolledTooltip placement="bottom" target="Tooltip-ins">
                                    à¦à¦®à¦¾à¦¦à§à¦° à¦à¦¨à§à¦¸à¦à¦¾à¦à§à¦°à¦¾à¦® à¦ªà§à¦à¦
                                </UncontrolledTooltip>
                            </li>
                        </ul>
                        <div className="loginWrapper">
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </DropdownToggle>
                                <DropdownMenu className="loginDropdown">
                                    <DropdownItem>à¦¸à¦¾à¦à¦¨ à¦à¦¨</DropdownItem>
                                    <DropdownItem>à¦¸à¦¾à¦à¦¨ à¦à¦ª</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Top_header;
