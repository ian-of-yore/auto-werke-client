import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autoWerke-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, userLogOut])

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm("Delete this order?")
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    const handleOrderStatus = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id);
                    const selected = orders.find(order => order._id === id);
                    selected.status = "Approved";
                    const newOrders = [...remaining, selected];
                    setOrders(newOrders)
                }
            })
    }

    return (
        <div className='w-3/4 mx-auto mb-32'>
            <p className='text-4xl text-center mb-5'>Total orders in your cart:</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Job</th>
                            <th>Name</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDeleteOrder={handleDeleteOrder}
                                handleOrderStatus={handleOrderStatus}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;