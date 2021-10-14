import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { arrayProductos } from "../../datos";
import Spinner from 'react-bootstrap/Spinner';
import { firestore } from "../../firebase";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const parametros = useParams()

    useEffect(() => {

        const db = firestore


        const coleccion = db.collection("productos")
        
        let consulta
        if (!parametros.id) consulta = coleccion.get()
        if (parametros.id == 1) consulta = coleccion.where("categoryId", "==", "1").get()
        if (parametros.id == 2) consulta = coleccion.where("categoryId", "==", "2").get()
        if (parametros.id == 3) consulta = coleccion.where("categoryId", "==", "3").get()

        consulta
            .then(res => {
                const documento = res.docs
                let auxiliarProductos = []

                documento.forEach(producto => {
                    const consultaFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    auxiliarProductos.push(consultaFinal)
                })

                setProductos(auxiliarProductos)
                document.getElementById("spinner").style.display = "none"
            })
            .catch(err => console.log(err))
    }, [parametros])
    
    return (    
        <>
            <Spinner id="spinner" animation="grow" />
            <ItemList items={productos}/>
        </>
    )
}

export default ItemListContainer