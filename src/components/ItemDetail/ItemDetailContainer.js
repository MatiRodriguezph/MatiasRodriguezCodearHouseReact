import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const parametros = useParams()

    useEffect(() => {
        //Referencia de la base de datos
        const db = firestore

        //obtener colección de productos
        const coleccion = db.collection("productos")

        //consulta --> es una promesa
        const consulta = coleccion.doc(parametros.id).get()
        consulta
            .then(res => setProducto(res.data()))
            .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer