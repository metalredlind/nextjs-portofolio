'use client'
import AdminAboutView from '@/components/admin-view/about';
import AdminHomeView from '@/components/admin-view/home';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminProjectView from '@/components/admin-view/project';
import AdminContactView from '@/components/admin-view/contact';
import { useState } from 'react';

const initializeHomeFormData = {
    heading: "",
    summary: ""
}

export default function AdminView(){

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, setHomeViewFromData] = useState(initializeHomeFormData);
    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView 
                formData = {homeViewFormData}
                setFormData = {setHomeViewFromData}
            />
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView />
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView />
        }
        
    ]

    return  (
        <div className='border-b border-gray-400'>
            <nav className='-mb-0.5 flex justify-center space-x-6' role='tablist'>
                {menuItem.map((item) => (
                    <button
                    key={item.id}
                    type="button"
                    className='p-4 font-bold text-xl text-black'
                    onClick={()=>{
                        setCurrentSelectedTab(item.id);
                    }}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
            <div className='mt-10 p-10'>
                {
                    menuItem.map(item => item.id === currentSelectedTab && item.component)
                }
            </div>
        </div>
    )
}