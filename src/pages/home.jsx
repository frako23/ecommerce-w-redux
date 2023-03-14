import {data} from "../assets/data";
import { Navbar } from "../components/navbar";
import { addProductToCart, removeProductFromCart } from "../reducers/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";



export const Home = ( ) =>{
    const dispatch = useDispatch();
    const uniforms = data;
    const { productsList } = useSelector(state => state.cart);


    const handleAddOrRemoveProduct = (uniformId) =>{
        if (productsList.some(unf => unf.id === uniformId)) { 
            dispatch(removeProductFromCart(uniformId));
        } else { 

            const uniform = uniforms.find(unf => unf.id === uniformId);
            dispatch(addProductToCart(uniform));
        }
    } 

    return (
        <>
        <div className="container mt-5 pt-4">
        
        
        <div className="row contenedor">
            {
                uniforms.map ( uniform => {
                    return (
                        
        <div className="card mt-3 border border-dark mx-2" style={{width: "18rem"}} key={uniform.id}>
            <img src="https://picsum.photos/300/200" className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{uniform.id}</h5>
                <div className="card-text">
                        <div><b>Código:</b> {uniform.code}</div>
                        <div><b>Talla:</b> {uniform.size}</div>
                        <div><b>Marca:</b> {uniform.brand}</div>
                        <div><b>Precio:</b> {uniform.price}</div></div>
                <button onClick={() => {handleAddOrRemoveProduct(uniform.id)}} 
                className={`btn ${productsList.find(unf => unf.id === uniform.id) ? "btn-danger" : "btn-success" }`}
                > {productsList.find(unf => unf.id === uniform.id) ? "Remover del carrito" : "Añadir al carrito"}  
                 </button>
                 
            </div>
        </div>
                        
                    )
                })
            }
        </div>
        </div>
        </>
    )
}