'use client'

import FormControls from "../form-controls"

const controls = [
    {
        name: 'name',
        placeholder: 'Project Name',
        type: 'text',
        label: 'Project Name'
    },
    {
        name: 'website',
        placeholder: 'Website Name',
        type: 'text',
        label: 'Website Name'
    },
    {
        name: 'technologies',
        placeholder: 'Technologies Names',
        type: 'text',
        label: 'Technologies Names'
    },
    {
        name: 'github',
        placeholder: 'Github Link',
        type: 'text',
        label: 'Github Link'
    }
]

export default function AdminProjectView({ formData, setFormData, handleSaveData }) {
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
    );
}