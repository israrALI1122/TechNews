import { useGlobalCon } from "./Context"


const Home = () => {
    const {hits, loading, removePost} = useGlobalCon()

    if(loading){
      return(
        <>
        <h2>Loading.....</h2>
        </>
      )
    }
  return (
    <div>
      {hits.map((cur)=>{
        const {objectID,title,} = cur
        return(
          <div key={objectID}>
          <h3>{title}</h3>
          <button onClick={()=> removePost(objectID)}>remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default Home