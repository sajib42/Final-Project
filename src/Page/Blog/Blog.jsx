
import Navbar from '../../layout/Navbar';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className='space-y-5 text-center px-20 py-4 md:py-40 '>
                <h1 className='text-4xl font-bold'>About Us!</h1>
                <h1 className='text-lg font-medium'>Welcome To Z-Grear</h1>
                <p>Z-Gear is a Professional e commerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Gadget, with a focus on dependability and Services. We're working to turn our passion for e commerce into a booming online website. We hope you enjoy our e commerce as much as we enjoy offering them to you.</p>
                <p>I will keep posting more important posts on my Z-Gear for all of you. Please give your support and love.</p>
                <p className='font-semibold text-lg'>Thanks For Visiting Our Site
                    <br />
                    Have a nice day! 🌼
                </p>

            </div>

            <div><Footer></Footer></div>
        </div>
    );
};

export default Blog;