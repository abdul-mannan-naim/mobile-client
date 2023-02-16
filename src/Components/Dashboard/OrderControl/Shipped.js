import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MakeShipped from './MakeShipped';

const Shipped = () => {
    const [makeShipped, setMakeShipped] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/notDelivered')
            .then(res => res.json())
            .then(data => setMakeShipped(data))
    }, [makeShipped])

    return (
        <div>
            <div>
                <NavLink className='btn  mr-2' to='/dashboard/orderControl/delivered'> Delivered </NavLink>
                <NavLink className='btn  ' to="/dashboard/orderControl" >  Order Control   </NavLink >
            </div>
            <div>
              <p>
             Shipped Items: {makeShipped.length}
              </p>
                 <div >
                    {makeShipped.map(ms => <MakeShipped
                    key={ms._id}
                    ms={ms} 
                    ></MakeShipped> )}
                 </div>
            </div>
        </div>
    );
};

export default Shipped;