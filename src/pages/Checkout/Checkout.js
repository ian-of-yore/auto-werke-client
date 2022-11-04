import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { price, title, _id } = useLoaderData();


    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || "unregistered";
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            price,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                form.reset();
                if (data.acknowledged) {
                    alert('order placed successfully')
                }
            })
            .catch((err) => console.error(err))


    }


    return (
        <form onSubmit={handlePlaceOrder} className='w-2/4 mx-auto min-h-screen'>
            <div className='text-center'>
                <p className='text-2xl font-semibold'>You're about to buy: <span className='text-red-700'>{title}</span></p>
                <p className='text-xl font-semibold '>Price: <span className='text-red-700'>${price}</span></p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                <input type="text" name='firstName' placeholder="First Name" className="input w-full max-w-xs" />
                <input type="text" name='lastName' placeholder="Last Name" className="input w-full max-w-xs" />
                <input type="" name='phone' placeholder="Your Phone" className="input w-full max-w-xs" />
                <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full max-w-xs" />
            </div>
            <textarea name='message' className="textarea h-24 border w-full border-black block mb-8" placeholder="Your Message (optional)"></textarea>
            <input type="submit" className='btn bg-orange-500 w-full hover:bg-orange-700' value="Place Your Order" />
        </form>
    );
};

export default Checkout;