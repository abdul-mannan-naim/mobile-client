import { signInAnonymously, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SingleUser from './SingleUser';

const AllUser = () => {
  const [customer, setCustomer] = useState([])
  const [doctor, setDoctor] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5000/users', {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403 || res.status === 404) {
          signOut(auth)
          localStorage.removeItem("accessToken")
          navigate('/')
        }
        return res.json()
      })
      .then(data => {
        setCustomer(data)

      })
  }, [customer])

  return (
    <div>
      {customer.length}
      <div className='border-2 rounded-xl'>
        <div class="overflow-x-auto">
          <table class="table w-full ">

            <thead className=''>
              <tr>
                <th></th> 
                <th> Email <br /> Make Admin </th>
              </tr>
            </thead>
            <tbody>

              {
                customer.map((cus, index) => <SingleUser
                  key={cus._id}
                  index={index + 1}
                  cus={cus}
                  setDoctor={setDoctor}
                ></SingleUser>)
              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllUser;