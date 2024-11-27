import Payment from "../payment/Payment";
import CartDetail from "./CartDetail";
import { CartContext } from "../context/Context";
import { useContext } from "react";
const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log("cartdetail page:", cart);
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
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

        <div class="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 class="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>

          <div class="flex items-center justify-between gap-5 ">
            <button class="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 class="font-manrope font-bold text-3xl lead-10 text-indigo-600">
              $440
            </h6>
          </div>
        </div>
        <div class="max-lg:max-w-lg max-lg:mx-auto">
          <p class="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <button class="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
            Checkout
          </button>
        </div>
      </div>
    </section>
    // <div className="font-sans max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
    //   <div className="grid lg:grid-cols-2 gap-12">
    //     <div>
    //       <div className="bg-gray-100 p-6 rounded-md">
    //         <h2 className="text-2xl font-extrabold text-gray-800">Your Cart</h2>
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

    //       <div className="mt-4 flex flex-wrap justify-center gap-4">
    //         <img
    //           src="https://readymadeui.com/images/master.webp"
    //           alt="card1"
    //           className="w-12 object-contain"
    //         />
    //         <img
    //           src="https://readymadeui.com/images/visa.webp"
    //           alt="card2"
    //           className="w-12 object-contain"
    //         />
    //         <img
    //           src="https://readymadeui.com/images/american-express.webp"
    //           alt="card3"
    //           className="w-12 object-contain"
    //         />
    //       </div>
    //     </div>

    //     <Payment />
    //   </div>
    // </div>
  );
};

export default Cart;
