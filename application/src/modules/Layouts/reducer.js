import {types} from './action';
import {produce} from 'immer';

const initialState = {
    user: {}
};

export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return produce(state, craftState => {
                craftState.user = action.payload;
            });
        default:
            return {...state};
    }
}; 