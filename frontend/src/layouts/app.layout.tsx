import Navbar from '@/components/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <React.Fragment>
            <div className="bg-background-primary">
                <Navbar />
                <div className="mx-auto container">
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppLayout;
