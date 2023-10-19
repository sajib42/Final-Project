import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';
import Navbar from '../../../layout/Navbar';
import Footer from '../../Footer/Footer';
import GmingBanner from './GmingBanner';

const Consol = () => {
    const con = useLoaderData();
    console.log(con.result);

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <GmingBanner></GmingBanner>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto mt-20'>
                {
                    con.result.map(e => <PhoneCard key={e._id} phon={e}  ></PhoneCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Consol;