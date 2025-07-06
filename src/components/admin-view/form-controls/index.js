'use client'
export default function FormControls({controls, formData, setFormData}){
    return controls.map(controlItem => 
    <div className="mb-4">
        <div className='block text-gray-900 text-sm font-bold mb-2'>
            {controlItem.label}
        </div>
        <input 
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            name={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    [controlItem.name] : e.target.value
                })
            }}
            className="shadow border bg-white rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
        >
        
        </input>
    </div>
    )
}