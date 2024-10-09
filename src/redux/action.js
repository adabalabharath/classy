import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes"


export const fetchData=async(dispatch)=>{
    try{
       
       dispatch({type:DATA_REQUEST})
       let response=await axios.get('http://localhost:3000/brands')
       dispatch({type:DATA_SUCCESS,payload:response.data})

    }catch(error){
       dispatch({type:DATA_FAILURE})
    }
}