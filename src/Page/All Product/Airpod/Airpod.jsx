
import Navbar from '../../../layout/Navbar';


import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';
import Footer from '../../Footer/Footer';
import AirpodBanner from './AirpodBanner';


const Airpod = () => {
    const airpod = useLoaderData()
    // console.log(watch.result);
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <AirpodBanner></AirpodBanner>
            </div>
            <div>
                {
                    airpod.result.length ? <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto mt-20'>
                        {
                            airpod.result.map(e => <PhoneCard key={e._id} phon={e} ></PhoneCard>)
                        }
                    </div>
                        :
                        <h1>noo product </h1>


                }
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Airpod;