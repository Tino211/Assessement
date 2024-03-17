import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
         <h2> Welcome to the Home Page</h2>
         <Link to="/login">Login</Link>
         <Link to="/signup">Signup</Link>
         <Link to="/allproducts">AllProducts</Link>
         <Link to="/allcurrencies">AllCurrencies</Link>
        </div>
    )
}

export default Home