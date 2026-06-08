import React from 'react'

import{
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,


}  from "recharts"



function ProgressChart({skills}) {
    const data= skills?.map(skill => ({
        name:skill.title, 
        progress:skill.progress, 
    })) ||[];
  return (

    <div className='bg-white rounded-2xl p-6 shadow-sm mb-6'> 
        <h3 className='text-lg font-semibold mb-4'> 
            Skill Progress Overview 
        </h3>
        
    {data.length===0 ? (  
        <p className='text-sm text-gray-500'>
            No skills added yet.
        </p>
    ) : (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data ={data}>
               <XAxis
  dataKey="name"
  interval={0}
  tick={{ fontSize: 12 }}
  
  textAnchor="end"
/>

                <YAxis domain= {[0,100]} />
                <Tooltip/>
                <Bar dataKey="progress" fill="#3b82f6" radius= {[5,5,0,0]} />
            </BarChart>
        </ResponsiveContainer>  
    )}
    </div>
  )
}

export default ProgressChart 