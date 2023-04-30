import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
    isOpen: boolean
}
type CartItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header className="" closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item: CartItemProps) => <CartItem key={item.id} {...item} />)}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)

                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
    </Offcanvas>
}