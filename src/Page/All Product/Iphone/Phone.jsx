
import Navbar from '../../../layout/Navbar';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';
import BannerIphone from './BannerIphone';
import Footer from '../../Footer/Footer';


const Phone = () => {
    const phone = useLoaderData();
    console.log(phone.result);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <BannerIphone></BannerIphone>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto'>
                {
                    phone.result.map((e) => <PhoneCard key={e._id} phon={e} ></PhoneCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Phone;