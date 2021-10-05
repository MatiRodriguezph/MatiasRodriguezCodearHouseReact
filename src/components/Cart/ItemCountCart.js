import { useState, useContext } from "react"
import { contextoCarrito } from '../Context/CartContext'
import Button from "react-bootstrap/Button"

const ItemCountCart = ({cantidadAgregada, indice}) => {
    
    const [contador, setContador] = useState(cantidadAgregada)
    const carrito = useContext(contextoCarrito)

    function aumentarContador(){
        setContador(contador+1)
        carrito.setContador(contador+1)
        carrito.arrayProductos[indice].cantidadComprada = contador+1
    }

    function reducirContador(){
        if (contador > 1){
            setContador(contador-1)
            carrito.setContador(contador-1)
            carrito.arrayProductos[indice].cantidadComprada = contador-1
        }
    }
    
    return (
        <div id="item" class="d-flex justify-content-evenly align-items-center">
            <button class="btn btn-primary" id="btnIncrementar" onClick={() => aumentarContador()}>
                +
            </button>
            <p id="contadorInput">{contador}</p>
            <button class="btn btn-primary" id="btnReducir" onClick={() => reducirContador()}>
                -
            </button>
        </div>
    )
}

export default ItemCountCart