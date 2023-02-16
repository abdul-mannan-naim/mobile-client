import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DoneDelivered from './DoneDelivered';

const Delivered = () => {
    const [delivered, setDelivered] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/delivered')
            .then(res => res.json())
            .then(data => setDelivered(data))
    }, [delivered])



    return (
        <div>
            <div>
                <NavLink className='btn mr-2 ' to='/dashboard/orderControl/shipped' > Shipped </NavLink>
                <NavLink className='btn  ' to="/dashboard/orderControl" >  Order Control   </NavLink >
                <div>
                    {delivered.length}
                    <div >
                         {delivered.map(de=>  <DoneDelivered
                         key={de._id}
                         de={de}
                         ></DoneDelivered>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivered;