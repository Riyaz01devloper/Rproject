import React from 'react'
import { useOutletContext } from 'react-router-dom'


import ProgressChart from '../components/ProgressChart'
import OverallProgressPie from '../components/OverallProgressPie'

function Progress() {
    const{skills} = useOutletContext();
    const overallProgress = skills.length===0 ? 0
    : Math.round(skills.reduce((sum,skill)=> sum+skill.progress,0)/skills.length);
    
  return (
    <div> 
        <h2 className='text-2xl font-bold mb-6'>Progress Overview</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            <OverallProgressPie value={overallProgress} />
            <ProgressChart skills={skills} />
        </div>
    </div> 
  )
}

export default Progress