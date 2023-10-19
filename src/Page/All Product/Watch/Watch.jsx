import React from 'react';
import Navbar from '../../../layout/Navbar';
import BannerIphone from '../Iphone/BannerIphone';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';
import WatchBanner from './WatchBanner';
import Footer from '../../Footer/Footer';

const Watch = () => {
    const watch = useLoaderData()
    console.log(watch.result);
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <WatchBanner></WatchBanner>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto mt-20'>
                {
                    watch.result.map(e => <PhoneCard key={e._id} phon={e} ></PhoneCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Watch;