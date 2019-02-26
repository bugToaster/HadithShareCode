import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

import { Link } from "react-router-dom";

export const HadithBooks = props => (
  <Row>
    {props.hadithBooksData.map(book => (
      <Col key={book.BookID} md="4" className="mb-4 ht_bookWrapper">
        <Link to={`/hadith/book/${book.BookID}`}>
          <Card className="shadow bg-white rounded">
            <CardHeader>
              <CardTitle>{book.BookNameBD}</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <span>Book Publisher Namme : </span> {book.SourceNameBD}
              </CardText>
              <CardText>
                <span>Total Hadith : </span> {props.hadithNumber}
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    ))}
  </Row>
);
