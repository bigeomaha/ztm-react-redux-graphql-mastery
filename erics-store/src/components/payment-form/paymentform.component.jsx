import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import InputButton, {BUTTON_TYPE_CLASSES} from "../form-input/button.component";
import { selectShoppingCartTotalPrice } from "../../store/shoppingcart/shopcart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import "./paymentform.styles.scss";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const currentUser = useSelector(selectCurrentUser);
    const cart_total = useSelector(selectShoppingCartTotalPrice);
    const [is_processing, setIsProcessing] = useState(false);

    const paymentHandler = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        console.log('paymentHandler')
        setTimeout((e) => {
            paymentHandler01(e)
        }, 5000);

    }

    const paymentHandler01 = async (e) => {
        // e.preventDefault();

        if(!stripe || !elements) {
            // Abort if stripe.js has not loaded yet
            return;
        }
        setIsProcessing(true);
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: cart_total*100 })
        }).then((res) => res.json());

        const client_secret = response.paymentIntent.client_secret;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest",
                },
            }
        });

        if(paymentResult.error) {
            alert(paymentResult.error.message);
            setIsProcessing(false);
        }
        else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment succeeded");
            }
        }
    };
    return (
        <div className="payment-form-container">
            <h1>Payment Form</h1>
            <form onSubmit={paymentHandler}>
                <CardElement />
                <InputButton is_loading={is_processing} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</InputButton>
            </form>
        </div>
    );
}

export default PaymentForm;
