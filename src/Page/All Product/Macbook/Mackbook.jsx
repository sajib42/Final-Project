
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
            <div>
                {
                    mac?.result.length ? <div className='grid grid-cols-1 md:grid-cols-4 gap-0
                    max-w-7xl mx-auto mt-20'>
                        {
                            mac.result.map(mac => <PhoneCard key={mac._id} phon={mac}></PhoneCard>)
                        }
                    </div>
                        :
                        <div>
                            <h1>No product</h1>
                        </div>

                }
            </div>
            <div>

            </div>
            <div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mackbook;