
import Navbar from '../../../layout/Navbar';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';

const Mackbook = () => {
    const mac = useLoaderData();
    console.log(mac);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                {
                    mac.result.map(mac => <PhoneCard key={mac._id} phon={mac}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Mackbook;