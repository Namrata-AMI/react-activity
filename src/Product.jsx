import "./Product.css"
function Product({title, price, features}){
    let list = features.map((feature)=><li>feature</li>);
    return(
        <div className="Product">
            <h2>{title}</h2>
            <h5>Price : {price}</h5>
            <p> {list}</p>

        </div>
    )
}

export default Product;