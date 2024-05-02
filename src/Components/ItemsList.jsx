import Filter from "./Filter";
import Display from "./Display";


const ItemsList = () => {
    return (
        <div>
        <Filter />
        <h2>Here is a list of all items</h2>
        <button>List new item</button>
        <Display />
    
        </div>
    )
}

export default ItemsList;
