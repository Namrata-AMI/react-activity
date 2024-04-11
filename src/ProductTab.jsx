import Product from "./Product";

function ProductTab(){
    let options = [<li>hi-tech</li>,<li>durable</li>,<li>fast</li>];
    return(
        <>
        <Product title="phone" price={30000} features={options}/>
        <Product title="laptop" price={40000}/>
        <Product title="pen" price={90}/>
        </>
    )
}

export default ProductTab;