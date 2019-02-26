// import $ from 'jquery';
import React from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
// import Popper from 'popper.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Header/Menu/index";
import "./Layout.css";
import Site from "../Site/index";
// import Quran from "../Quran/index";
import Hadith from "../Hadith/index";
// import BookChapter from "../Hadith/Book_chapter/BookChapter";
import Chapter from "../../container/Hadith/Chapter";
// import Pillar from "../Pillar_of_islam/index";
// import Question from "../Question/index";
// import Article from "../Article/index";
// import Download from "../Download/index";
// import Other from "../Other/index";
import Footer from "../Footer/index";

const layout = props => (
  <BrowserRouter>
    <Container fluid>
      <Row>
        <header className="mainHeader">
          <Menu />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Site} />
            <Route exact path="/hadith" component={Hadith} />

            <Route
              exact
              path="/hadith/book/:id"
              render={props => <Chapter {...props} />}
            />

            <Route
              exact
              path="/hadith/book/:bookId/chap/:chapId"
              render={props => <BookDetail {...props.match.params} />}
            />
            {/* both /roster and /roster/:number begin with /roster */}
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Row>
    </Container>
  </BrowserRouter>
);

function mapStateToProps(state) {
  return {
    bookId: state.hbr.bookId
  };
}

export default connect(mapStateToProps)(layout);
// function myJquery() {
//     $("#sss").html('Button Change');
// }
