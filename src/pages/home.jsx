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
        
        
        <div className="row contenedor" style={{gap:"3rem"}}>
            {
                uniforms.map ( uniform => {
                    return (
                        
        <div className="card mt-3 border  mx-2 p-0" style={{width: "20rem", height: "auto"}} key={uniform.id}>
            
            <Carousel data={uniform} className="pt-5"/>
            
            <div className="card-body">
            <span className="float-start badge rounded-pill bg-primary" style={{fontSize:"1em"}}>{uniform.code}</span> 
            <span className="float-end price-hp">${uniform.price}</span>                
                <div className="card-text" style={{padding: "2rem", marginTop: "2rem"}}>
                        <div className="d-flex"><b>Modelos:</b><h6 className="pt-1 ms-1">{uniform.carModels}</h6></div>
                        <div><b>Tipo:</b> {uniform.type}</div>
                                                </div>
                <a onClick={() => {handleAddOrRemoveProduct(uniform.id)}} 
                className={` d-flex justify-content-center btn rounded-pill ${productsList.find(unf => unf.id === uniform.id) ? "btn-danger" : "btn-success" } mt-2`}
                > {productsList.find(unf => unf.id === uniform.id) ? "Remover del carrito" : "Añadir al carrito"}  
                </a>
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