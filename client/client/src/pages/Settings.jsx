import React from 'react'

function Settings() {
  return (
    <div>
        <h2 className='text-2xl font-bold  mb-6'>Settings</h2>
        <div className='bg-white rounded-xl p-6 shadow-sm space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'
                 >Theme</label>

                 <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option> 
                 </select>

            </div>

          
        <div>
            <label className='block text-sm font-medium text-gray-700'> 
                Notifications
            </label>
            <input type="checkbox" />
            Enable Notifications
        </div>
    </div>
    </div>
  )
}

export default Settings