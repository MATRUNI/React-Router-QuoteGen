
function DiplayQoutes() {
    let indexes=localStorage.getItem('liked');
    let data=localStorage.getItem('likedQuotes');
    indexes=indexes?JSON.parse(indexes):[];
    data=data?JSON.parse(data):[];
    const handleClear = () => {
      console.log("handleClear")
        if (window.confirm("Are you sure you want to clear all liked quotes?")) {
            localStorage.clear();
            window.location.reload(); 
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