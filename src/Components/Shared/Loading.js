import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <progress class="progress w-56"></progress>
            </div>
        </div>
    );
};

export default Loading;