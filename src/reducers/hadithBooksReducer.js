import {GET_BOOKS, GET_PUBLICATION,GET_SECTION_BY_ID} from "../constants/action-types";

const initialState = {
    sections: [],
    books: [],
    // publications: [],
    publication: []
};
const hadithBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.data,
                // publications: action.pubData
            };
        case GET_PUBLICATION:
            return{
                ...state,
                publication: action.data
            };
        case GET_SECTION_BY_ID:
            return{
                ...state,
                sections: action.data,
                bookId: action.bookId
            };

        default:
            return state;
    }

}

export default hadithBooksReducer;
