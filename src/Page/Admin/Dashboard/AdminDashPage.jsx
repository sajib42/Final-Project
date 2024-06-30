import OderTable from "../../../Component/OderTable";
import OderCard from "../OderCard";


const AdminDashPage = () => {

    const newData = window.localStorage.getItem('userData')
    const userData = JSON.parse(newData)
    console.log(userData)
    return (
        <div>
            <section>
                <div>
                    {/* <OderTable /> */}
                </div>
                <h1 className="text-4xl text-center bg-base-200 py-4 mb-4 rounded">Ordered Items</h1>
                <section className=" grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {
                        userData?.map((data, idx) => <OderCard key={idx} data={data} />)
                    }
                </section>
            </section>
        </div>
    );
};

export default AdminDashPage;