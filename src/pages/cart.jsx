import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeProductFromCart } from "../reducers/cart/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
    const [linkHref, setLinkHref] = useState("");
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);
    let codigo = ""

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));
    // const whatsappUrl = () => {
        
        //     let urlResult = urlBase
        
        
        //     console.log("me ejecuto");
        
        //     setLinkHref("https:www.google.com") 
        
        //     return "#"
        
        for (let index = 0; index < productsList.length; index++) {
            
            if (index == productsList.length - 1) {
                
                codigo = codigo.concat(productsList[index].id)
                console.log("entra aqui");
            }
            
            else {
                codigo = codigo.concat(`${productsList[index].id},%20`)        
            }

            
            // console.log(productsList[index].id);
            
    }

    
    const urlBase = `https://api.whatsapp.com/send?phone=+584242526757&text=Hola!%20estoy%20interesad@%20en%20los%20siguientes%20productos%0A%0A*Codigos*:%20${codigo}`;

    console.log(urlBase)

    

    return (
        <div className='mt-5 pt-4'>
            <h2>Tú carrito de compras</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Código</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map(product => {
                        return (
                            <tr key={product.id}>
                                <th scope='row'>{product.code}</th>
                                <th scope='row'> $ {product.price}</th>
                                <th scope='row'><button className='btn btn-danger' onClick={() => handleRemoveProduct (product.id)}>Eliminar</button></th>
                            </tr>)
                    })}
                </tbody>
            </table>
            <a className='btn btn-success mb-5 rounded-pill' href={urlBase}> Completa tu pedido por <i className="fa-brands fa-whatsapp fs-3 ms-2"></i></a>
            <Link to="/">
            <button className='btn btn-warning mb-5 rounded-pill ms-5'> Regresar <i className="fa-brands fa-return fs-3 ms-2"></i></button>
            </Link>
            
            {/* <a className='btn btn-success mb-5' onClick={() => whatsappUrl()} href={`${linkHref}`}></a> */}

                    {/* {whatsappUrl()} */}
                {/* {productsList.forEach(element => {
                    console.log(JSON.stringify(element.id));
                })} */}
            
        </div>
    )
}