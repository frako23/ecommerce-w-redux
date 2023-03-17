import {data} from "../assets/data";
import { addProductToCart, removeProductFromCart } from "../reducers/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "../components/carousel";
import "../styles/App.css"



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
        <div className="ms-4 mt-5 pt-4">
        
        
        <div className="row contenedor">
            {
                uniforms.map ( uniform => {
                    return (
                        
        <div className="card mt-3 border border-dark mx-2" style={{width: "20rem", height: "33rem"}} key={uniform.id}>
            
            <Carousel data={uniform} />
            
            <div className="card-body">
                <h5 className="card-title">{uniform.code}</h5>
                <div className="card-text">
                        <div className="d-flex"><b>Modelos:</b><h6 className="pt-1 ms-1">{uniform.carModels}</h6></div>
                        <div><b>Tipo:</b> {uniform.type}</div>
                        <div><b>Precio:</b> $ {uniform.price}</div>
                        <div><b>Inventario:</b> {uniform.inventory}</div></div>
                <button onClick={() => {handleAddOrRemoveProduct(uniform.id)}} 
                className={`btn ${productsList.find(unf => unf.id === uniform.id) ? "btn-danger" : "btn-success" } mt-2`}
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