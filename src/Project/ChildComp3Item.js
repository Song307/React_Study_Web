import './TestComp.css';

function ChildComp3Item({...it}){

    return(
        <div className='compItem'>
            <div className='item_Id'>{it.id}</div>
            <div className='item_Name'>{it.name}</div>
            <div className='item_age'>{it.age}</div>
            <button className='btn_Del'>Del</button>
        </div>
    )
}

export default ChildComp3Item;