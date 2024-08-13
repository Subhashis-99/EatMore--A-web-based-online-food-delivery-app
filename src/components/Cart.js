import { useDispatch, useSelector } from "react-redux";
import { Fooditem } from "./Fooditem";
import { clearCart } from "../utils/Cartslice";
import { removeItem } from "../utils/Cartslice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();

  const DeleteCart = () => {
    dispatch(clearCart());
  };
  const ClearItem = () => {
    dispatch(removeItem());
  };
  return (
    <div>
      <h1 className="font-bold text-2xl m-2">
        Cart items - {cartItems.length}
      </h1>
      <button
        className="bg-green-500 text-2xl rounded-md p-2 m-2"
        onClick={() => DeleteCart()}
      >
        Delete
      </button>
      <button
        className="bg-orange-500 text-2xl rounded-md p-2 m-2"
        onClick={() => ClearItem()}
      >
        Remove
      </button>
      <div className="flex flex-wrap ml-5">
        {cartItems.map((item) => (
          <Fooditem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
