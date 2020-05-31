import {GET_POSTS} from './types'
import axios from 'axios'


export const getPost = ()=>(dispatch)=>(
    axios.get('http://127.0.0.1:8000/api/v1/post/')
    .then(res=>{
        dispatch({
            type:GET_POSTS,
            payload:res.data
        })
    })
    .catch(error=>console.log(error))
    )







