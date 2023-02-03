import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


function Subtotal() {
  
  const [{ basket },] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => {}}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;


// function Subtotal() {

//   const [{ basket }, dispatch] = useStateValue();
//   const [product, setProduct] = useState({
//     name: "React from FB",
//     price: 10,
//     productBy: "facebook"
//   });
//   const makePayment = token => {
//     const body = {
//       token,
//       product
//     };
//     const headers = {
//       "Content-Type": "application/json"
//     };

//     return fetch(`http://localhost:8282/payment`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body)
//     })
//       .then(response => {
//         console.log("RESPONSE ", response);
//         const { status } = response;
//         console.log("STATUS ", status);
//       })
//       .catch(error => console.log(error));
//   };
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               {/* Part of the homework */}
//               Subtotal ({basket?.length} items):<strong>{value}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)} // Part of the homework
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />
//     <StripeCheckout
//           stripeKey='pk_test_51MAKG3IJh8cujezgdd1AoesRezIrWnFIDBBy6e7MD9us8vJxiCEmrErtMcoLfF5LRnQKyUePg6DERNO90XKi19nv00iqufvGb2'
//           token={makePayment}
//           name="Buy React"
//           amount={getBasketTotal(basket) * 100}
//           shippingAddress
//           billingAddress>
//           <button className="btn-large blue">
//           Proceed with purchase{getBasketTotal(basket)}$
//           </button>
//         </StripeCheckout>
      
//     </div>
//   );
// }






// function App() {
//   const [product, setProduct] = useState({
//     name: "React from FB",
//     price: 10,
//     productBy: "facebook"
//   });

//   const makePayment = token => {
//     const body = {
//       token,
//       product
//     };
//     const headers = {
//       "Content-Type": "application/json"
//     };

//     return fetch(`http://localhost:8282/payment`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body)
//     })
//       .then(response => {
//         console.log("RESPONSE ", response);
//         const { status } = response;
//         console.log("STATUS ", status);
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
       

    

//         <StripeCheckout
//           stripeKey='pk_test_51MAKG3IJh8cujezgdd1AoesRezIrWnFIDBBy6e7MD9us8vJxiCEmrErtMcoLfF5LRnQKyUePg6DERNO90XKi19nv00iqufvGb2'
//           token={makePayment}
//           name="Buy React"
//           amount={product.price * 100}
//           shippingAddress
//           billingAddress
//         >
//           <button className="btn-large blue">
//             Buy react is just {product.price} $
//           </button>
//         </StripeCheckout>
//       </header>
//     </div>
//   );
// }

// export default App;

//  export default Subtotal;