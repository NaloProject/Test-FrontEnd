import {Card, Button} from "react-bootstrap";
import Link from 'next/link';

function NftCard(props) {
  console.log(props);
  return (<Card style={{
      width: '18rem'
    }}>
    <Card.Img variant="top" src={props.nft.image}/>
    <Card.Body>
      <Card.Title>{props.nft.name}</Card.Title>
      <Card.Text>
        price is {props.nft.price}
      </Card.Text>
        <Link href={`/nft/${props.nft.id}`}>
          <a>Detail</a>
        </Link>
    </Card.Body>
  </Card>)
}

export default NftCard
