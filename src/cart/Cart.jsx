import Payment from "../payment/Payment";
import CartDetail from "./CartDetail";
import { CartContext } from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router";
const Cart = () => {
  const { cart, sum } = useContext(CartContext);
  console.log("cartdetail page:", cart);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        <ul>
          {cart.map((currentVal) => (
            <li key={currentVal.id}>
              <CartDetail
                image={currentVal.image}
                title={currentVal.title}
                price={currentVal.price}
                id={currentVal.id}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>

          <div className="flex items-center justify-between gap-5 ">
            <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
              {`$${sum}`}
            </h6>
          </div>
        </div>
        <div className=" max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <Link to="payment">
            <div className="rounded-full   py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
              Checkout
            </div>
          </Link>
        </div>
      </div>
    </section>
    // <div classNameName="font-sans max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
    //   <div classNameName="grid lg:grid-cols-2 gap-12">
    //     <div>
    //       <div classNameName="bg-gray-100 p-6 rounded-md">
    //         <h2 classNameName="text-2xl font-extrabold text-gray-800">Your Cart</h2>
    //         <ul>
    //           {cart.map((currentVal) => (
    //             <li key={currentVal.id}>
    //               <CartDetail
    //                 image={currentVal.image}
    //                 title={currentVal.title}
    //                 price={currentVal.price}
    //                 id={currentVal.id}
    //               />
    //             </li>
    //           ))}
    //         </ul>
    //         {/* <CartDetail /> */}
    //       </div>

    //       <div classNameName="mt-4 flex flex-wrap justify-center gap-4">
    //         <img
    //           src="https://readymadeui.com/images/master.webp"
    //           alt="card1"
    //           classNameName="w-12 object-contain"
    //         />
    //         <img
    //           src="https://readymadeui.com/images/visa.webp"
    //           alt="card2"
    //           classNameName="w-12 object-contain"
    //         />
    //         <img
    //           src="https://readymadeui.com/images/american-express.webp"
    //           alt="card3"
    //           classNameName="w-12 object-contain"
    //         />
    //       </div>
    //     </div>

    //     <Payment />
    //   </div>
    // </div>
  );
};

export default Cart;
