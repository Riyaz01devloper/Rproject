import React from 'react' 
import{
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,

}  from "recharts"
const Colors = ["#3b82f6", "#e5e7eb"]

 
function OverallProgressPie({value}) {
  const data = [
    {name: "Completed", value},
    {name: "remaining", value:100-value},
  ]; 
  
  return (
     <div className='bg-white rounded-2xl p-6 shadow-sm mb-6'>
        <h3 className='text-lg font-semibold mb-4'>
        overall Progress  
        </h3>
        <div className='h-56 relative'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie  
                    data={data}
                    dataKey="value" 
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    >
                        {data.map((__,index) =>(
                            <Cell key={index} fill={Colors[index]} />
                         ) )
                        }
                            </Pie>

                    </PieChart>
                 </ResponsiveContainer> 

        </div>
        
        </div>
  ) 
}

export default OverallProgressPie 