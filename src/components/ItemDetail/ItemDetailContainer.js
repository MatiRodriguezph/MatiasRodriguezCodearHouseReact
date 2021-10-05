import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { arrayProductos } from "../../datos";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const parametros = useParams()

    //console.log(props)

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            resolve(arrayProductos)
        })
        
        promesa.then(res => {
            setProducto(res.find(r => r.id == parametros.id))
        })

    }, [])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer