import React from 'react';

const MakeShipped = ({ ms }) => {
    const { img, description, name,_id } = ms;

    const handleDelivered = () => {
        const delivered = {
            delivered: true,
        }
        fetch(`http://localhost:5000/delivered/${_id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(delivered) 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl m-2">
                <figure><img src={img} className='w-[140px] h-[140px] rounded-lg' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {description} </p>
                    <div className="card-actions justify-end">
                        <button onClick={handleDelivered} className="btn btn-primary">Delivered  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeShipped;