
const Reducer = (state, action) =>{
    switch(action.type){
        case"loading":
        return{
            ...state,
            loading:true,
        }
        case"getdata":
        return{
            ...state,
            loading:false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages
        }
        case"remove":
        return{
            ...state,
            hits: state.hits.filter((cur)=>{
                const{objectID}=cur
                return objectID !== action.payload
            })
        }
        case"search":
        return{
            ...state,
            query: action.payload
        }
        case"pervpage":
        let pagedec = state.page - 1;
        if(pagedec < 0){
            pagedec = 0
        }
        return{
            ...state,
            page:pagedec 
        }
        case"nextpagee":
        let pageinc = state.page + 1;
        if(pageinc >= state.nbPages){
            pageinc = 0
        }
        return{
            ...state,
            page: pageinc
        }
    }

    return state
}

export default Reducer