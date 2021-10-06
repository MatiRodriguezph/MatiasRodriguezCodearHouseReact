import { children, createContext, useState } from "react";

export const contextoCarrito = createContext()

const {Provider} = contextoCarrito

export const ProviderCarrito = ({children}) => {
    
    const [arrayProductos, setArrayProductos] = useState([])
    
    //El estado "Contador" sirve para llevar un registro de la cantidad TOTAL
    //de elementos agregados al carrito. Se usa para ir actualizando el
    //badge del CartWidget
    const [contador, setContador] = useState(0)

    let arrayAuxiliar = []
    let contadorAuxiliar = 0

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            for (const producto of arrayProductos) {
                if (producto.id == item.id) producto.cantidadComprada += quantity
            }
        } else {
            arrayAuxiliar = arrayProductos
            arrayAuxiliar.push(item)
            setArrayProductos(arrayAuxiliar)
        }
        contadorAuxiliar = contador + quantity
        setContador(contadorAuxiliar)
    }

    const removeItem = itemId => {
        arrayProductos.forEach((elemento, indice, array) => {
            if (elemento.id == itemId) {
                setContador(contador - elemento.cantidadComprada)
                arrayProductos.splice(indice,1)
            }
        })
    }

    const clearCart = () => {
        setArrayProductos([])
        setContador(0)
    }

    const isInCart = itemId => {
        if (arrayProductos.find(elemento => elemento.id == itemId)) return true;
        else return false
    }

    const valorDelContexto = {
        arrayProductos: arrayProductos,
        contador: contador,
        setContador: setContador,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

