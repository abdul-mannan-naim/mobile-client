import React from 'react';

const DoneDelivered = ({de}) => {
    const { img, description, name,_id } = de;
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-xl m-2">
                <figure><img src={img} className='w-[140px] h-[140px] rounded-lg' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {description} </p>
                    <div className="card-actions justify-end">
                        {/* <button   className="btn btn-primary">Delivered  </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoneDelivered;