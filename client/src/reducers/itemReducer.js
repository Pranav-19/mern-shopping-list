import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPDATE_ITEM } from '../actions/types';

const initialState = {
    items:[]
}


export default function itemReducer(state = initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return{
                ...state,
                items:state.items.filter(item => item._id !== action.payload)
            };
        case UPDATE_ITEM:
            return{
                ...state,
                items:state.items.map(item => {
                    if(item._id === action.payload.id){
                        return{
                            id: item._id,
                            name:action.payload.name
                        }
                    }
                    else return item
                })
            };
        case ADD_ITEM:
            return{
                ...state,
                items:[action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
        }
}

