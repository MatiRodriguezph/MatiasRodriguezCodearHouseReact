import { contextoCarrito } from '../Context/CartContext'
import { useContext, useEffect } from 'react'
import "./cart.css"
import Button from 'react-bootstrap/Button'
import ItemCountCart from './ItemCountCart'

const Cart = () => {

    const carrito = useContext(contextoCarrito)

    useEffect(() => {
        if (carrito.arrayProductos.length != 0){
            document.getElementById("btnVaciarCarrito").style.display = "block"
        }
    }, [])

    return (
        <div id="carritoContainer">
            {carrito.arrayProductos.map((element, index) => {
            <div id="itemCarrito" key={element.id}>
                <h4>{element.name} - $ {element.price}</h4>
                <ItemCountCart cantidadAgregada={element.cantidadComprada} indice={index}/>
                <Button variant="danger" id="btnQuitarCarrito" onClick={() => {
                        if (carrito.arrayProductos.length == 1){
                            document.getElementById("btnVaciarCarrito").style.display = "none"
                        }
                        carrito.removeItem(element.id)
                    }}>
                    X
                </Button>
            </div>
            })}
            <hr/>
            <Button variant="danger" id="btnVaciarCarrito" onClick={() => {
                    carrito.clearCart()
                    document.getElementById("btnVaciarCarrito").style.display = "none"
                }}>
                Vaciar carrito
            </Button>
        </div>
    )
}

export default Cart