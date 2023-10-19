import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';
import Navbar from '../../../layout/Navbar';

const Consol = () => {
    const con = useLoaderData();
    console.log(con.result);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                {
                    con.result.map(e => <PhoneCard key={e._id} phon={e}  ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Consol;