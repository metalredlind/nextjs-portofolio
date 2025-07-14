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

export default function AdminExperienceView({formData, setFormData, handleSaveData}){
    console.log(formData);
        return (
                <div className="w-full">
                        <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            )
}