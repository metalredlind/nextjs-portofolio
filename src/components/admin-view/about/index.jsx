'use client'

import FormControls from "../form-controls"

const controls = [
    {
        name: 'aboutme',
        placeholder: 'About Me',
        type: 'text',
        label: 'About Me'
    },
    {
        name: 'noofprojects',
        placeholder: 'Number of Projects',
        type: 'text',
        label: 'Number of Projects'
    },
    {
        name: 'yearofexperience',
        placeholder: 'Years of Experience',
        type: 'text',
        label: 'Years of Experience'
    },
    {
        name: 'noofclients',
        placeholder: 'Number of Clients',
        type: 'text',
        label: 'Number of Clients'
    },
    {
        name: 'skills',
        placeholder: 'Your Skills',
        type: 'text',
        label: 'Your Skills'
    },
]


export default function AdminAboutView({formData, setFormData, handleSaveData}){
    console.log(formData);
    return (
            <div className="w-full">
                    <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormControls 
                        controls={controls}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <button onClick={()=> handleSaveData('about')} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-blue-400 rounded-md">
                        Save Changes
                    </button>
                </div>
            </div>
        )
}