import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes"

const initial={
    loading:false,
    data:[],
    error:''
}

export const reducer=(state=initial,action)=>{
    switch(action.type){
        case DATA_REQUEST:
            return{
               loading:true 
            }
        case DATA_SUCCESS:
            return{
                loading:false,
                data:action.payload
            }
        case DATA_FAILURE:
            return{
                error:action.payload
            }
    }
}