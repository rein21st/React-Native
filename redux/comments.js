import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENTS:
        
        let id = state.comments.length;
        let newComment = action.payload;
        newComment.id = state.comments.length;

        let cArray =  [...state.comments, newComment];
        return {...state, comments: cArray};
        default:
            return state;
    }
};