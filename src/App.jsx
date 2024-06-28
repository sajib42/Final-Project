import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Page/Footer/Footer'
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';

function App() {
  // async function getData() {
  //   const data = await axios.get('${url}/getproduct')
  //   console.log(data.data);

  // }
  // useEffect(() => {
  //   getData();

  // }, [])

  return (
    <>

      {/* <Link to={"/"}>this is root // root</Link> */}
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default App
