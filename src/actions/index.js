import axios from "axios";
import {
  GET_BOOKS,
  GET_PUBLICATION,
  GET_SECTION_BY_ID
} from "../constants/action-types";

const apiRoot = "https://api.myjson.com/bins/";

export function getBookData() {
  return function(dispatch) {
    return axios
      .get(apiRoot + "szvr6")
      .then(response => response.data[0]["data"])
      .then(json => {
        dispatch({ type: GET_BOOKS, data: json });
        // json.map((publications, i) => {
        //     return axios.get(apiRoot + "hadith-source-by-column?SourceID=" + publications.PubID)
        //         .then(response => response.data)
        //         .then(publication => {
        //             dispatch({type: GET_BOOKS, data: json, pubData: publication});
        //         });
        // })
      });
  };
}

export function getPublications(pubId) {
  return function(dispatch) {
    return axios
      .get(apiRoot + "oak2q")
      .then(response => response.data)
      .then(json => {
        dispatch({ type: GET_PUBLICATION, data: json });
      });
  };
}

export function getSectionDataById(id) {
  return function(dispatch) {
    return axios
      .get(apiRoot + "uubqa")
      .then(response => response.data)
      .then(json => {
        dispatch({ type: GET_SECTION_BY_ID, data: json, bookId: id });
      });
  };
}
