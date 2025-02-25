import Navbar from '@/components/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <React.Fragment>
            <div className="flex h-screen bg-background-primary">
                <Navbar />
                <div className="sticky top-0 overflow-auto w-full h-screen">
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppLayout;
