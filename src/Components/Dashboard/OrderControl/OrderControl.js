import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewOrder from './NewOrder';

const OrderControl = () => {

    const [newOrders, setNewOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/notShipped')
            .then(res => res.json())
            .then(data => setNewOrders(data))
    }, [newOrders])


    return (
        <div>
            <div>
                <NavLink className='btn mr-2 ' to='/dashboard/orderControl/shipped' > Shipped </NavLink>
                <NavLink className='btn  ' to='/dashboard/orderControl/delivered'> Delivered </NavLink>
                <div>

                <p>  New Orders:  {newOrders.length}</p>
                     <div >
                        {
                            newOrders.map( (newOrder)=> <NewOrder 
                            key={newOrder._id}
                            newOrder={newOrder}
                            ></NewOrder>  )
                        }
                     </div>

                </div>
            </div>
        </div>
    );
};

export default OrderControl;