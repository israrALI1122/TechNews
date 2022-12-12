import React from 'react'
import { useGlobalCon } from './Context'

const Pagination = () => {
    const {page , nbPages,pervpage,nextpage} = useGlobalCon()
  return (
    <div>
        <div>
            <button onClick={()=> pervpage()}>perv</button>
            <p>{ page + 1 } & { nbPages }</p>       
            <button onClick={()=>nextpage()}>Next</button>
        </div>
    </div>
  )
}

export default Pagination