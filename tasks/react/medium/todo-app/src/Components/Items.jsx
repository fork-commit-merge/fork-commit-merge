function  Items({title, desc}){
    return(
        <>
        <div>
            <div className="boxingitem itemstyle">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button className='but'>Edit</button>
            <button className='but'>Delete</button>
        </div>
        </>
    )
}
 
export default Items;
