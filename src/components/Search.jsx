import React from 'react'
import { useGlobalCon } from './Context'

const Search = () => {
    const {query,searchPost}= useGlobalCon()
  return (
    <div>
        <form action="">
            <input type="text" placeholder='search here....' value={query} onChange={(e)=> searchPost(e.target.value)} />
        </form>
    </div>
  )
}

export default Search