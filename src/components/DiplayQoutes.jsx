import { useState } from "react";

function DiplayQoutes() {
    let indexes=localStorage.getItem('liked');
    const [data, setData] = useState(() => {
        const d = localStorage.getItem('likedQuotes');
        return d ? JSON.parse(d) : [];
    });
    indexes=indexes?JSON.parse(indexes):[];
    const handleClear = () => {
      console.log("handleClear")
        if (window.confirm("Are you sure you want to clear all liked quotes?")) {
            localStorage.clear();
            setData([]);
        }
    }
  return (
    <div className='display-div'>
        {data.map((item,index)=>{
            return <li key={indexes[index]}>ID: {indexes[index]}<br/> Quote: {item}</li>
        })}
        {data.length===0&&<h1>No liked quotes yet!</h1>}
        {data.length!==0&&<button onClick={handleClear}>Clear</button>}
    </div>
  )
}

export default DiplayQoutes