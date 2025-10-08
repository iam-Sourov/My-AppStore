import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-220px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;