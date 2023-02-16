import React, { useEffect } from 'react';

const NewOrder = ({ newOrder }) => {
    const { img, name, description, _id } = newOrder; 

        const handleShipped = () => {
            const shipped = {
                shipped: true,
            }
            fetch(`http://localhost:5000/shipped/${_id}`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(shipped) 
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
                        <button onClick={handleShipped} className="btn btn-primary">Shipped  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewOrder;