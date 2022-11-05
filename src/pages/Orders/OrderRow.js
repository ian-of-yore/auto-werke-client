import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDeleteOrder, handleOrderStatus }) => {
    const { _id, serviceName, service, customer, phone, price, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteOrder(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            {
                                orderService?.img && <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleOrderStatus(_id)} className="btn btn-ghost btn-xs">{status ? status : "pending"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;