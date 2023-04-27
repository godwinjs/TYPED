import {Row, Col} from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItems } from '../components/StoreItems'

export function Store(){
    return <>
        <h1>store</h1>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {storeItems.map(item => {
                return <Col key={item.id}><StoreItems {...item} /></Col>
            })}
        </Row>
    </>
}