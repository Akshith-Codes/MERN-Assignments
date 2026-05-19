function Product(props){  //{x:{productObj:{}}}
const { productObj }=props;
    //state
    //return react ele
    return(
        <div className="shadow-2xl shadow-zinc-900 ring-2 rounded-3xl ring-blue-400 p-4 back">
    <h2 className="text-2xl text-blue-600">{productObj.title}</h2>
    <p className="font-bold"> {productObj.price}</p>
    <p className="font-bold">{productObj.description}</p>
    </div>
    )
}
export default Product;