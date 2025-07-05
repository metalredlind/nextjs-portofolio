'use client'
import adminHomeView from './../../components/admin-view/home/index';
import adminAboutView from './../../components/admin-view/about/index';
import adminContactView from './../../components/admin-view/contact/index';
import adminEducationView from './../../components/admin-view/education/index';
import adminExperienceView from './../../components/admin-view/experience/index';
import adminProjectView from './../../components/admin-view/project/index';

export default function adminView(){

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <adminHomeView />
        },
        {
            id: 'about',
            label: 'About',
            component: <adminAboutView />
        },
        {
            id: 'education',
            label: 'Education',
            component: <adminEducationView />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <adminExperienceView />
        },
        {
            id: 'project',
            label: 'Project',
            component: <adminProjectView />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <adminContactView />
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
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
            <div className='mt-10 p-10'>

            </div>
        </div>
    )
}