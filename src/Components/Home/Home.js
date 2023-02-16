import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from './Banner';
import Footer from './Footer';
import TextBox from './TextBox';


const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <div>
            <div>
                {
                    user ? <>  <p className='text-2xl text-primary font-bold '>  Welcome to Solis
                    </p> </> : <>
                        You Didn't logged in
                    </>
                }
            </div>
            <div className='flex justify-center'>
                <TextBox></TextBox>
            </div>
            <div> 
            <Banner></Banner>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;