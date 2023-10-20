
import Navbar from '../../layout/Navbar';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className='space-y-5 text-center px-10 py-4'>
                <h1 className='text-4xl font-bold'>About Us!</h1>
                <h1 className='text-lg font-medium'>Welcome To Z-Grear</h1>
                <p>WebsiteName is a Professional WebsiteType Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of WebsiteType, with a focus on dependability and WebsiteSpeciality. We're working to turn our passion for WebsiteType into a booming online website. We hope you enjoy our WebsiteType as much as we enjoy offering them to you.</p>
                <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                <p className='font-semibold text-lg'>Thanks For Visiting Our Site
                    <br />
                    Have a nice day!
                </p>

            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Blog;