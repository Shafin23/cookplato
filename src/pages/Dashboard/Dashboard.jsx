import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Stat from './Stat/Stat';

const Dashboard = () => {
    const [option, setOption] = useState(""); // option for menu of dashboard
    
    return (
        <div className=' py-16 w-[95vw] mx-auto flex justify-between items-start'>
            <Menu setOption={setOption} option={option} />
            <Stat option={option} />
        </div>
    );
};

export default Dashboard;