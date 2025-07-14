'use client'
import AdminAboutView from '@/components/admin-view/about';
import AdminHomeView from '@/components/admin-view/home';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminProjectView from '@/components/admin-view/project';
import AdminContactView from '@/components/admin-view/contact';
import { useState } from 'react';
import { addData } from '@/services';

const initializeHomeFormData = {
    heading: "",
    summary: ""
};

const initializeAboutFormData = {
    aboutme: "",
    noofprojects: "",
    yearofexperience: "",
    noofclients: "",
    skills: ""
};

const initializeExperienceFormData = {
    position: "",
    company: "",
    duration: "",
    location: "",
    jobprofile: ""
};

const initializeEducationFormData = {
    degree: "",
    year: "",
    college: ""
};

const initializeProjectFormData = {
    name: "",
    website: "",
    technologies: "",
    github: ""
};

export default function AdminView(){

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, setHomeViewFromData] = useState(initializeHomeFormData);
    const [aboutViewFormData, setAboutViewFromData] = useState(initializeAboutFormData);
    const [experienceViewFormData, setExperienceViewFromData] = useState(initializeExperienceFormData);
    const [educationViewFormData, setEducationViewFromData] = useState(initializeEducationFormData);
    const [projectViewFormData, setProjectViewFromData] = useState(initializeProjectFormData);
    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView 
                formData = {homeViewFormData}
                setFormData = {setHomeViewFromData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView 
                formData = {aboutViewFormData}
                setFormData = {setAboutViewFromData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView 
                formData = {educationViewFormData}
                setFormData = {setEducationViewFromData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView 
                formData = {experienceViewFormData}
                setFormData = {setExperienceViewFromData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView 
                formData = {projectViewFormData}
                setFormData = {setProjectViewFromData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView />
        }
        
    ]

    async function handleSaveData() {
        const dataMap = {
            home: homeViewFormData,
            about: aboutViewFormData,
            experience: experienceViewFormData,
            education: educationViewFormData,
            project: projectViewFormData,
        };

        const response = await addData(currentSelectedTab, dataMap[currentSelectedTab]);

        console.log(response, "response");

        if (response.success) {
            resetFormData();
        }
    }

    function resetFormData(){
        setHomeViewFromData(initializeHomeFormData);
        setAboutViewFromData(initializeAboutFormData);
        setEducationViewFromData(initializeEducationFormData);
        setExperienceViewFromData(initializeExperienceFormData);
        setProjectViewFromData(initializeProjectFormData);
    }

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
                        resetFormData();
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