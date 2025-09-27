function  Items({val, title, desc, arr, setArr}){
    return(
        <>
        <div>
            <div className="boxingitem itemstyle">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button type='button' className='but' onClick={()=>{
                setArr(prev=>[...prev.slice(0,val),...prev.slice(val+1)])
            }}>Delete</button>
            <button type='button' className='but' >Edit</button>
        </div>
        </>
    )
}
 
export default Items;
