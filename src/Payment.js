import React, { useState} from 'react';
import './payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckOutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios'

import{ db} from './firebase'

function Payment() {
const [data, setdata] =useState()
  
  const [{ basket, user }] = useStateValue();


  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" }
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee"
      }
    }
  }
  const [success, setSuccess ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })


if(!error) {
    try {
        const {id} = paymentMethod
        const response = await axios.post("http://localhost:4000/payment", {
            amount: getBasketTotal(basket) * 100,
            id
        })
        

        if(response.data.success) {
         
          setdata(JSON.parse(response.config.data  ))
          
             db.collection('users')
              .doc(user?.uid)
              .collection('orders')
               .doc(data?.id)
               .set({
                 basket: basket,
               amount: data?.amount,
                  created:'#'
              })
            setSuccess(true)
        }

    } catch (error) {
        console.log("Error", error)
    }
} else {
    console.log(error.message)
}
}







return (
<div className='payment'>
<div className='payment__container'>
<h1>
Checkout (
<Link to="/checkout">{basket?.length} items</Link>
)
</h1>


{/* Payment section - delivery address */}
<div className='payment__section'>
<div className='payment__title'>
<h3>Delivery Address</h3>
</div>
<div className='payment__address'>
<p>{user?.email}</p>
<p>123 React Lane</p>
<p>Los Angeles, CA</p>
</div>
</div>

{/* Payment section - Review Items */}
<div className='payment__section'>
<div className='payment__title'>
<h3>Review items and delivery</h3>
</div>
<div className='payment__items'>
<CurrencyFormat
renderText={(value) => (
<h3>Order Total: {value}</h3>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}
/>
{basket.map(item => (
<   CheckoutProduct
id={item.id}
title={item.title}
image={item.image}
price={item.price}
rating={item.rating}
/>
))}
</div>
</div>


{/* Payment section - Payment method */}
<div className='payment__section'>
<div className="payment__title">
<h3>Payment Method</h3>
</div>
<div className="payment__details">
{/* Stripe magic will go */}
<>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className='buttn'>Pay</button>
        </form>
        :
       <div>   
        uuuuuuu
       
       </div> 
        }
            
        </>

</div>
</div>
</div>
</div>
)
}

export default Payment
