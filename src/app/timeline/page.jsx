"use client";
import TimelineHistory from '@/component/TimelineHistory/TimelineHistory';
import React, { useEffect, useState } from 'react';

const TimelinePage = () => {

    const [ filter, setFilter] = useState("all")

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);

    const filterTimeline = filter === "all" ? timeline : timeline.filter(item => item.type === filter);

    return (

        <div className='bg-base-300'>
            <div className='max-w-270 m-auto py-17 '>
                <div className='flex flex-wrap justify-between items-center'>
                    <h1 className='text-5xl font-bold'>Timeline</h1>
                    
                    <div className='my-6 '>

                        <select value={filter} onChange={(e) => setFilter(e.target.value)} 
                            className='py-3 px-12 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl'>

                            <option value="all">Filter timeline</option>
                            <option value="call">Call</option>
                            <option value="text">Text</option>
                            <option value="video">Video</option>

                        </select>

                    </div>
                </div>
                

                {
                    filterTimeline.map((item, index) => <TimelineHistory key={index} item = {item}></TimelineHistory>)
                }


            </div>
        </div>
    );
};

export default TimelinePage;