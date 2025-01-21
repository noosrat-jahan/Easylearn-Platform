import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const CheckoutForm = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)


    const { id } = useParams()
    console.log(id);

    const { data: classDetails = {} } = useQuery({
        queryKey: ['classDetails'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/AllnewlyCreatedClass/${id}`)
            console.log(res.data);
            return res.data
        }
    })
    console.log(classDetails);


    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');

    // const price = 100

    useEffect(() => {
        if (classDetails) {
            axios.post('https://edu-manage-website-server.vercel.app/create-confirm-intent', { price: parseInt(classDetails.price) })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axios, parseInt(classDetails.price)])

    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentMethod(paymentMethod)
            setErrorMessage('')

        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }

            }
        })

        if (confirmError) {
            console.log('confirm error:', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transactionId', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // now save the payment in the database
                const payment = {
                    studentEmail: user?.email,
                    teacherName: classDetails.name,
                    classID: classDetails._id,
                    classTitle: classDetails.title,
                    classPrice: classDetails.price,
                    classThumbnail: classDetails.image,
                    classDetails: classDetails.details,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    // cartIds: cart.map(item => item._id),
                    // menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axios.post('https://edu-manage-website-server.vercel.app/payments', payment)
                console.log('saved payment info', res.data.insertedId);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment Successful!",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/studentdashboard/studentclasses')
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h1 className='uppercase text-xl font-bold text-teal-600 mb-3'>Payment Amount:  ${classDetails.price}</h1>
                <p className='text-red-500 mb-2'>{errorMessage}</p>
                <CardElement
                    options={{
                        style: {
                            base: {
                                backgroundColor: "#FFFFFF",
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#11efe3',
                            },
                        },
                    }}
                    className=" border-2 rounded p-2 flex flex-col bg-white"
                />

                <button disabled={!stripe || !clientSecret} className='btn bg-teal-600 btn-sm text-lg my-5 w-full text-white font-roboto' type="submit">
                    PAY
                </button>
                {
                    transactionId && <p className='text-green-600'>Your Transaction ID NO: {transactionId}</p>
                }

            </form>
        </div>
    );
};

export default CheckoutForm;