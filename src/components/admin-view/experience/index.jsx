'use client'

import FormControls from "../form-controls"

const controls = [
    {
        name: 'position',
        placeholder: 'Position Name',
        type: 'text',
        label: 'Position Name'
    },
    {
        name: 'company',
        placeholder: 'Company Name',
        type: 'text',
        label: 'Company Name'
    },
    {
        name: 'duration',
        placeholder: 'Durations',
        type: 'text',
        label: 'Durations'
    },
    {
        name: 'location',
        placeholder: 'Location of Company',
        type: 'text',
        label: 'Location of Company'
    },
    {
        name: 'jobprofile',
        placeholder: 'Job Profile',
        type: 'text',
        label: 'Job Profile'
    }
]

export default function AdminExperienceView({formData, setFormData, handleSaveData, data}){
        return <div className="w-full">
                        <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        
                        <div className="mb-10 space-y-6">
                            {data && data.length ? (
                                data.map((item,index) => (
                                    <div key={index} className="bg-[#ffffff] flex flex-col gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300">
                                        <p className="text-lg font-semibold text-gray-700">Position: {item.position}</p>
                                        <p className="text-lg text-gray-700">Company: {item.company}</p>
                                        <p className="text-lg text-gray-700">Duration: {item.duration}</p>
                                        <p className="text-lg text-gray-700">Location: {item.location}</p>
                                        <p className="text-lg text-gray-700">{item.jobprofile}</p>
                                    </div>
                                ))
                            ) :
                                <p className="text-center text-gray-600">No Job Experience Data Available</p>
                            }
                        </div>

                        <FormControls 
                            controls={controls}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <button onClick={()=> handleSaveData('experience')} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-blue-400 rounded-md">
                            Add Experience
                        </button>
                    </div>
                </div>

}