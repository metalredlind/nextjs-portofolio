'use client'
import AdminAboutView from '@/components/admin-view/about';
import AdminHomeView from '@/components/admin-view/home';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminProjectView from '@/components/admin-view/project';
import AdminContactView from '@/components/admin-view/contact';
import { useEffect, useState } from 'react';
import { addData, getData } from '@/services';

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
    const [homeViewFormData, setHomeViewFormData] = useState(initializeHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] = useState(initializeAboutFormData);
    const [experienceViewFormData, setExperienceViewFormData] = useState(initializeExperienceFormData);
    const [educationViewFormData, setEducationViewFormData] = useState(initializeEducationFormData);
    const [projectViewFormData, setProjectViewFormData] = useState(initializeProjectFormData);

    const [allData, setAllData] = useState({})

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView 
                formData = {homeViewFormData}
                setFormData = {setHomeViewFormData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView 
                formData = {aboutViewFormData}
                setFormData = {setAboutViewFormData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView 
                formData = {educationViewFormData}
                setFormData = {setEducationViewFormData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView 
                formData = {experienceViewFormData}
                setFormData = {setExperienceViewFormData}
                handleSaveData = {handleSaveData}
            />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView 
                formData = {projectViewFormData}
                setFormData = {setProjectViewFormData}
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

        console.log('API Response:', response);

        if (response.success) {
            resetFormData();
            extractAllData();
        }
    }

    useEffect(()=> {
        extractAllData();
    },[currentSelectedTab]);

    async function extractAllData() {
        const response = await getData(currentSelectedTab);

        if (
            currentSelectedTab === "home" && 
            response && 
            response.data && 
            response.data.length
        ) {
            setHomeViewFormData(response && response.data[0]);
        }

        if (
            currentSelectedTab === "about" && 
            response && 
            response.data && 
            response.data.length
        ) {
            setAboutViewFormData(response && response.data[0]);
        }

        if (response?.success) {
            setAllData({
                ...allData,
                [currentSelectedTab]: response && response.data
            });
        }
    }

    console.log(allData, homeViewFormData, 'homeViewFormData');

    function resetFormData(){
        setHomeViewFormData(initializeHomeFormData);
        setAboutViewFormData(initializeAboutFormData);
        setEducationViewFormData(initializeEducationFormData);
        setExperienceViewFormData(initializeExperienceFormData);
        setProjectViewFormData(initializeProjectFormData);
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