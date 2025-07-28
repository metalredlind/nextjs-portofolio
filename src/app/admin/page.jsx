'use client'
import AdminAboutView from '@/components/admin-view/about';
import AdminHomeView from '@/components/admin-view/home';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminProjectView from '@/components/admin-view/project';
import AdminContactView from '@/components/admin-view/contact';
import { useEffect, useState } from 'react';
import { addData, getData, login, updateData } from '@/services';
import Login from '@/components/admin-view/login';

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

const initializeLoginFormData = {
    username: "",
    password: ""
};

export default function AdminView(){

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, setHomeViewFormData] = useState(initializeHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] = useState(initializeAboutFormData);
    const [experienceViewFormData, setExperienceViewFormData] = useState(initializeExperienceFormData);
    const [educationViewFormData, setEducationViewFormData] = useState(initializeEducationFormData);
    const [projectViewFormData, setProjectViewFormData] = useState(initializeProjectFormData);

    const [allData, setAllData] = useState({});
    const [update, setUpdate] = useState(false);
    const [authUser, setAuthUser] = useState(false);
    const [loginFormData, setLoginFormData] = useState(initializeLoginFormData);

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
                data = {allData?.education}
                setAllData={setAllData}
            />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView 
                formData = {experienceViewFormData}
                setFormData = {setExperienceViewFormData}
                handleSaveData = {handleSaveData}
                data = {allData?.experience}
            />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView 
                formData = {projectViewFormData}
                setFormData = {setProjectViewFormData}
                handleSaveData = {handleSaveData}
                data = {allData?.project}
            />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView 
                data = {allData && allData?.contact}
            />
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

        const response = update ? 
        await updateData(currentSelectedTab, dataMap[currentSelectedTab]) :
        await addData(currentSelectedTab, dataMap[currentSelectedTab]);

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
            setUpdate(true);
        }

        if (
            currentSelectedTab === "about" && 
            response && 
            response.data && 
            response.data.length
        ) {
            setAboutViewFormData(response && response.data[0]);
            setUpdate(true);
        }

        if (response?.success) {
            setAllData({
                ...allData,
                [currentSelectedTab]: response && response.data
            });
        }
    }

    function resetFormData(){
        setHomeViewFormData(initializeHomeFormData);
        setAboutViewFormData(initializeAboutFormData);
        setEducationViewFormData(initializeEducationFormData);
        setExperienceViewFormData(initializeExperienceFormData);
        setProjectViewFormData(initializeProjectFormData);
    }

    async function handleLogin() {
        const res = await login(loginFormData)
        if (res?.success) {
            setAuthUser(true);
            sessionStorage.setItem("authUser",JSON.stringify(true));
        }
    }

    useEffect(()=> {
        setAuthUser(JSON.parse(sessionStorage.getItem("authUser")))
    },[]);

    if (!authUser)
        return (
            <Login 
                formData = {loginFormData}
                setFormData = {setLoginFormData}
                handleLogin = {handleLogin}
            />
        )
    

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
                        setUpdate(false);
                    }}
                    >
                        {item.label}
                    </button>
                ))}

                <button
                    onClick={()=> {
                        setAuthUser(false);
                        sessionStorage.removeItem("authUser");
                    }}
                    className='p-4 font-bold text-xl text-black'
                >
                    Logout
                </button>
            </nav>
            <div className='mt-10 p-10'>
                {
                    menuItem.map(item => item.id === currentSelectedTab && item.component)
                }
            </div>
        </div>
    )
}