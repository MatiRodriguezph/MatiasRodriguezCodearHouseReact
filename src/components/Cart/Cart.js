import { contextoCarrito } from '../Context/CartContext'
import { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./cart.css"
import Button from 'react-bootstrap/Button'
import ItemCountCart from './ItemCountCart'

const Cart = () => {

    const carrito = useContext(contextoCarrito)

    let montoTotal = 0

    for (const producto of carrito.arrayProductos) {
        if (producto.cantidadComprada != 0){
            montoTotal += producto.cantidadComprada * producto.price
        }
    }
    
    useEffect(() => {
        if (carrito.arrayProductos.length != 0){
            document.getElementById("siHayElementos").style.display = "flex"
            document.getElementById("siNoHayElementos").style.display = "none"
        }
    }, [])

    return (
        <div id="carritoContainer">
            <h1 id="siNoHayElementos">No hay productos agregados al carrito. <Link to="/">Volver a HOME</Link></h1>
            {carrito.arrayProductos.map((element, index) => <div id="itemCarrito" key={element.id}>
                <h5>{element.title} - $ {element.price}</h5>
                <ItemCountCart cantidadAgregada={element.cantidadComprada} indice={index}/>
                <Button variant="danger" id="btnQuitarCarrito" onClick={() => {
                        if (carrito.arrayProductos.length == 1){
                            document.getElementById("siHayElementos").style.display = "none"
                            document.getElementById("siNoHayElementos").style.display = "block"
                        }
                        carrito.removeItem(element.id)
                    }}>
                    X
                </Button>
            </div>)}
            <hr/>
            <div id="siHayElementos">
                <h2>TOTAL: ${montoTotal}</h2>
                <Button variant="danger" id="btnVaciarCarrito" onClick={() => {
                        carrito.clearCart()
                        document.getElementById("siHayElementos").style.display = "none"
                        document.getElementById("siNoHayElementos").style.display = "block" 
                    }}>
                    Vaciar carrito
                </Button>
                <Button variant="ok" id="btnTerminarCompra">Terminar compra</Button>
            </div>
        </div>
    )
}

export default Cart