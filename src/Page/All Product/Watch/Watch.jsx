import React from 'react';
import Navbar from '../../../layout/Navbar';
import BannerIphone from '../Iphone/BannerIphone';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';

const Watch = () => {
    const watch = useLoaderData()
    console.log(watch.result);
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <BannerIphone></BannerIphone>
            </div>
            <div>
                {
                    watch.result.map(e => <PhoneCard key={e._id} phon={e} ></PhoneCard>)
                }
            </div>

            watch
        </div>
    );
};

export default Watch;