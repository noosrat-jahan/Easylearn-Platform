import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const StudentPayment = () => {

    return (
        <div className='min-h-[40vh] w-7/12  mx-auto shadow-md bg-[#f6f9fc] p-10 my-20'>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default StudentPayment;