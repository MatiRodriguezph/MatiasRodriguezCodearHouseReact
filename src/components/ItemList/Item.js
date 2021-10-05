import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = (props) => {

    const {id, name, categoria, description, price, stock, pictureUrl} = props.item

    return (
        <Card className="m-3 box-shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} style={{ width: '200px', height: "auto" }} />
            <Card.Body>
                <Link item={props.item} to={`/item/${id}`}><Card.Title>{name}</Card.Title></Link>
                <Card.Text>
                    <span>Precio: $ {price}</span><br/>
                    <span>Stock disponible: {stock}</span>
                </Card.Text>
                <div class="d-flex align-items-baseline">
                    <ItemCount stock={5} initial={1} onAdd={() => {}}/>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item