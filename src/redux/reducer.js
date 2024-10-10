import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes"

const initial = {
    loading: false,
    data: [],
    error: '',
    searched: []
};


export const reducer=(state=initial,action)=>{
    switch(action.type){
        case DATA_REQUEST:
            return{
                ...state,
               loading:true 
            }
        case DATA_SUCCESS:
            return{
                 ...state,
                loading:false,
                data:action.payload
            }
        case DATA_FAILURE:
            return{
                 ...state,
                error:action.payload
            }
        case 'SEARCH_SUCCESS':
            return{
                 ...state,
                loading:false,
                searched:action.payload
            }
         case 'SEARCH_CLEAR':
            return{
                 ...state,
                searched:[]
            }
    }
}