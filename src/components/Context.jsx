import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";

 const MyApiContext = createContext()
 let Api = "https://hn.algolia.com/api/v1/search?";

 const initailstate = {
    loading: true,
    hits:[],
    query:"css",
    page:0,
    nbPages:0
 }


 const ApiProvider = ({children})=>{

    const [state , dispatch ] = useReducer(Reducer ,initailstate)

    const MyApi = async(url )=>{

        dispatch({type:"loading"})

        const res = await fetch(url);
        const data = await res.json()
        console.log(data);
        dispatch({
            type:"getdata",
            payload:{
                hits: data.hits,
                nbPages: data.nbPages
            }
        })

    }

    // remove posts
    const removePost =(id)=>{
        dispatch({type:"remove", payload:id})
    }

    //search Posts 
    const searchPost =(search)=>{
        dispatch({type:"search", payload: search})

    }
    //pagination
    const pervpage =()=>{
        dispatch({type:"pervpage"})
    }
    const nextpage =()=>{
        dispatch({type:"nextpagee"})
    }


    useEffect(()=>{
        MyApi(`${Api}query=${state.query}&page=${state.page}`)

    },[state.query, state.page])

    return(
        <MyApiContext.Provider value={{...state,removePost,searchPost,pervpage,nextpage}}>{children}</MyApiContext.Provider>
    )
 }

 const useGlobalCon =() =>{
    return  useContext(MyApiContext)
 }

 export{MyApiContext, ApiProvider, useGlobalCon}