
import Navbar from '../../../layout/Navbar';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';
import MacBanner from './MacBanner';
import Footer from '../../Footer/Footer';

const Mackbook = () => {
    const mac = useLoaderData();
    console.log(mac);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <MacBanner></MacBanner>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl'>
                {
                    mac.result.map(mac => <PhoneCard key={mac._id} phon={mac}></PhoneCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mackbook;