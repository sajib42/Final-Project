
import { Outlet } from 'react-router-dom';
import AdminNav from './sideNav/AdminNav';


const AdminDash = () => {
    // const newData = window.localStorage.getItem('userData')
    // const userData = JSON.parse(newData)
    // console.log(userData);

    return (
        <div>

            <div className='flex gap-4 '>
                <div className='min-h-screen bg-[#F9FAFB] w-3/12 '>
                    <AdminNav />
                </div>
                <div className='w-9/12 m-4 overscroll-y-auto'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default AdminDash;