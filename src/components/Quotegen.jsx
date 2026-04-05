import {useLoaderData,useRevalidator,useNavigation} from "react-router-dom"

export async function quoteLoader() {
    let res= await fetch('https://dummyjson.com/quotes/random');
    let data= await res.json();
    return data;
}

function Quotegen() {
    let re=useRevalidator()
    let data=useLoaderData()
    let navigate=useNavigation();
    const handleLike=()=>
    {
        let liked=localStorage.getItem('liked');
        let likedItems=localStorage.getItem('likedQuotes');
        liked=liked?JSON.parse(liked):[];
        liked.push(data.id);
        likedItems=likedItems?JSON.parse(likedItems):[];
        likedItems.push(data.quote)
        localStorage.setItem('liked', JSON.stringify(liked));
        localStorage.setItem('likedQuotes', JSON.stringify(likedItems));
        re.revalidate();
    }
    const isFetching=navigate.state==="loading" || re.state==="loading";
  return (
    <div style={{
        display:'flex',
        flexDirection:'column'
        }} className={`quote-card ${isFetching?"loading-blur":''}`}>
        <h1>Random Quote</h1>
        {isFetching?(
            <div >
                <p>Fetching inspiration...</p>
            </div>
        ):(
            <>
            <h2>ID: {data.id}</h2>
            <div>Quote: {data.quote}</div>
            </>
        )}
        <div style={{
            display:'flex',
            justifyContent:'center',
            gap:'1rem'
        }}>
            <button onClick={()=>{re.revalidate()}} disabled={isFetching}>{isFetching ? "Loading..." : "Get Quote"}</button>
            <button onClick={handleLike} disabled={isFetching}>Like</button>
        </div>
    </div>
  )
}
export default Quotegen