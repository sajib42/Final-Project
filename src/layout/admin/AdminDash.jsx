
import { Outlet } from 'react-router-dom';
import AdminNav from './sideNav/AdminNav';
import OderTable from '../../Component/OderTable';

const AdminDash = () => {
    return (
        <div>

            <div className='flex '>
                <div className='min-h-screen bg-[#F9FAFB]'>

                    <AdminNav />
                </div>
                <div>

                    <OderTable />
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default AdminDash;