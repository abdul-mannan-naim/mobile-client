import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';


const HideOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate()




    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myHidedOrders?user=${user.email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem("accessToken")
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                })
        }
    }, [myOrders, user])
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <div>
                    <Link to='/dashboard/myOrders' className='btn'> My Orders </Link>
                </div>
                <p className='text-accent font-bold'> Your Orders {
                    myOrders.length
                }</p>
            </div>
            <div>
                <div>
                    <div class="overflow-x-auto hidden lg:block  w-full">
                        <table class="table w-full ">
                            <thead>
                                <tr className=' '>
                                    <th>
                                        <label>
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name <br />
                                        Quality
                                    </th>
                                    <th> Quantity x Price <br />
                                        Ordered Time </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='  '>
                                {
                                    myOrders.map(a =>
                                        <tr >
                                            <th className={`bg-${a.paid ? "info" : ""}`}>
                                                <label>
                                                    <p> {a.quantity} </p>
                                                </label>
                                            </th>
                                            <td className={`bg-${a.paid ? "info" : ""}`}>
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src={a.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold"> {a.name} </div>
                                                        <div class="text-sm opacity-50"> {a.quality}  </div>
                                                        {(a.price && a.transactionId) && <span class="  text-warning font-bold ">  {a.transactionId} </span>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`bg-${a.paid ? "info" : ""}`} >
                                                <p> Total Price: {a.price}</p>
                                                {(!a.paid && !a.shipped) && <p className='text-error'> Please Pay </p>}
                                                {(a.paid && !a.shipped) && <p className='text-primary'> Shipping </p>}
                                                {(a.shipped && !a.delivered) && <p className='text-gray-400'> Shipped </p>}
                                                {(a.delivered && a.shipped) && <p className='text-green-400'> Delivered </p>}
                                            </td>
                                            <th className={`bg-${a.paid ? "info" : ""}`} >
                                                <p> {a.date} </p>
                                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} > <button class="btn btn-accent btn-xs">Pay </button></Link>}
                                                {(a.price && a.paid) && <span class="  text-warning font-bold text-xl ">Paid </span>}
                                            </th>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="overflow-x-auto  lg:hidden  ">
                            <table class="table  ">
                                <thead>
                                    <tr className=' '>
                                        <th>
                                            Order details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        myOrders.map(a => <tr>
                                            <td>
                                                <div class="flex items-center justify-between space-x-3">
                                                    <div class="flex items-center space-x-3">
                                                        <div class="avatar">
                                                            <div class="mask mask-squircle w-12 h-12">
                                                                <img src={a.img} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="font-bold"> {a.name} </div>
                                                            <div class="text-sm opacity-50"> {a.quality}  </div>
                                                        </div>
                                                    </div>


                                                    <div>
                                                        <div>
                                                            <td className={`bg-${a.paid ? "info" : ""} text-right`} >
                                                                {/* ----------------- */}
                                                                <p> Total Price: {a.price}</p>
                                                                {/* ------------------ */}

                                                                {(!a.paid && !a.shipped) && <p className='text-error'> Please Pay </p>}
                                                                {(a.paid && !a.shipped) && <p className='text-primary'> Shipping </p>}
                                                                {(a.shipped && !a.delivered) && <p className='text-gray-400'> Shipped </p>}
                                                                {(a.delivered && a.shipped) && <p className='text-green-400'> Delivered </p>}

                                                                <>
                                                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} > <button class="btn btn-accent btn-xs">Pay </button></Link>}
                                                                    {(a.price && a.paid) && <span class="  text-warning font-bold text-xl ">Paid </span>}
                                                                </>
                                                            </td>
                                                        </div>


                                                    </div>
                                                </div>
                                                {(a.price && a.transactionId) && <span class="  text-warning font-bold ">  {a.transactionId} </span>}
                                            </td>

                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HideOrders;