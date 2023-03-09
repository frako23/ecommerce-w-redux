import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from "../reducers/cart/cartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

    return (
        <div className='mt-5 pt-4'>
            <h2>Tú carrito de compras</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Codigo</th>
                        <th scope='col'>Talla</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    {productsList.map(product => {
                        return (
                            <tr key={product.id}>
                                <th scope='row'>{product.id}</th>
                                <th scope='row'>{product.code}</th>
                                <th scope='row'>{product.size}</th>
                                <th scope='row'>{product.price}</th>
                                <th scope='row'><button className='btn btn-danger' onClick={() => handleRemoveProduct (product.id)}>Eliminar</button></th>
                            </tr>)
                    })}
                </tbody>
            </table>
            <a className='btn btn-success mb-5' href={`https://api.whatsapp.com/send?phone=+584242526757&text=Quiero%20mas%20informaci%C3%B3n%${productsList}`}> Completa tu pedido por <i class="fa-brands fa-whatsapp fs-3 ms-2"></i></a>
        </div>
    )
}