import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { arrayProductos } from "../../datos";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const parametros = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            document.getElementById("spinner").style.display = "block"
            setTimeout(() => {
                resolve(arrayProductos)
                document.getElementById("spinner").style.display = "none"
            }, 2000)
        })

        promesa.then(res => {
            if (parametros.id == 1){
                res = res.filter(a => a.categoria == "Notebooks");
            }

            if (parametros.id == 2){
                res = res.filter(a => a.categoria == "Perifericos");
            }

            if (parametros.id == 3){
                res = res.filter(a => a.categoria == "Sillas gamer");
            }

            setProductos(res)
        })

    }, [parametros])
    
    return (    
        <>
            <Spinner id="spinner" animation="grow" />
            <ItemList items={productos}/>
        </>
    )
}

export default ItemListContainer