import { Outlet } from 'react-router-dom'
import './App.css'
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';

function App() {
  // async function getData() {
  //   const data = await axios.get('http://localhost:5000/getproduct')
  //   console.log(data.data);

  // }
  // useEffect(() => {
  //   getData();

  // }, [])

  return (
    <>

      {/* <Link to={"/"}>this is root // root</Link> */}
      <Outlet></Outlet>
    </>
  )
}

export default App
