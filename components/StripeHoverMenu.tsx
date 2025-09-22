import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Wrapper ---
const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {children}
        </svg>
    </div>
);

// --- Icons for Menu Items ---
const ProjectIcon = () => <IconWrapper className="bg-orange-100 text-orange-600"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></IconWrapper>;
const PortfolioIcon = () => <IconWrapper className="bg-gray-100 text-gray-600"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></IconWrapper>;
const PlannerIcon = () => <IconWrapper className="bg-blue-100 text-blue-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4" /></IconWrapper>;
const ScheduleIcon = () => <IconWrapper className="bg-purple-100 text-purple-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></IconWrapper>;
const DirectoryIcon = () => <IconWrapper className="bg-sky-100 text-sky-600"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></IconWrapper>;
const MyTeamIcon = () => <IconWrapper className="bg-sky-100 text-sky-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></IconWrapper>;
const CommunicationIcon = () => <IconWrapper className="bg-sky-100 text-sky-600"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></IconWrapper>;
const FinanceIcon = () => <IconWrapper className="bg-green-100 text-green-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></IconWrapper>;
const ContractIcon = () => <IconWrapper className="bg-green-100 text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="m16 14-2-2-2 2"/><path d="m10 10 2 2 2-2"/><path d="M14 2v6h6"/></IconWrapper>;
const ChangeOrderIcon = () => <IconWrapper className="bg-teal-100 text-teal-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3c0 1.66 1.34 3 3 3Z"/><path d="M12 12v-1"/></IconWrapper>;
const CostsIcon = () => <IconWrapper className="bg-green-100 text-green-600"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></IconWrapper>;
const FieldIcon = () => <IconWrapper className="bg-amber-100 text-amber-600"><path d="M20.5 14.5A4.5 4.5 0 0 0 21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.2.4 2.4 1.2 3.2L7 18.5V21h10v-2.5l2.8-2.8H21z"/><path d="M7 15h10"/></IconWrapper>;
const SiteIcon = () => <IconWrapper className="bg-orange-100 text-orange-600"><path d="m12 13.4-4.5 4.5" /><path d="m18 17.1-4.5-4.5" /><path d="m12 3-4.5 4.5" /><path d="m18 7.5-4.5-4.5" /><path d="M21 11.5a8.38 8.38 0 0 1-3.6 7.4l-4.9-4.9" /><path d="M3 11.5a8.38 8.38 0 0 0 3.6 7.4l4.9-4.9" /><path d="M12 21a8.38 8.38 0 0 0 7.4-3.6" /><path d="M12 3a8.38 8.38 0 0 1 7.4 3.6" /></IconWrapper>;
const EquipmentsIcon = () => <IconWrapper className="bg-amber-100 text-amber-600"><path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2"/><path d="M17 18h-2v-4.3c0-.6.4-1.2 1-1.4l1-.4c.6-.2 1.2.2 1.4 1l.6 1.7"/><path d="M17 18H9"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></IconWrapper>;
const SafetyIcon = () => <IconWrapper className="bg-amber-100 text-amber-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></IconWrapper>;
const DocumentIcon = () => <IconWrapper className="bg-cyan-100 text-cyan-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></IconWrapper>;
const RFIIcon = () => <IconWrapper className="bg-cyan-100 text-cyan-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="12" cy="14" r="1"/><path d="M12 10a2 2 0 0 1-2-2c0-1.5.5-3 3-3s3 1.5 3 3"/></IconWrapper>;
const SubmittalsIcon = () => <IconWrapper className="bg-cyan-100 text-cyan-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></IconWrapper>;
const PlansIcon = () => <IconWrapper className="bg-blue-100 text-blue-600"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M18 3v5h5"/><path d="M8 18h8"/><path d="M8 14h8"/><path d="M8 10h3"/></IconWrapper>;
const AnalyticsIcon = () => <IconWrapper className="bg-indigo-100 text-indigo-600"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></IconWrapper>;
const FeedsIcon = () => <IconWrapper className="bg-yellow-100 text-yellow-600"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></IconWrapper>;
const SpecbookIcon = () => <IconWrapper className="bg-cyan-100 text-cyan-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconWrapper>;
const PunchlistIcon = () => <IconWrapper className="bg-rose-100 text-rose-600"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><polyline points="3 6 4 7 6 5"></polyline><polyline points="3 12 4 13 6 11"></polyline><polyline points="3 18 4 19 6 17"></polyline></IconWrapper>;
const ChecklistIcon = () => <IconWrapper className="bg-rose-100 text-rose-600"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"/></IconWrapper>;


// --- Component for Primary Menu Items ---
interface PrimaryMenuItemProps {
    icon: React.ReactNode;
    label: string;
    description: string;
}
const PrimaryMenuItem: React.FC<PrimaryMenuItemProps> = ({ icon, label, description }) => (
    <a href="#" className="flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group">
        {icon}
        <div>
            <h5 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600">{label}</h5>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    </a>
);

// --- Component for "More" section items ---
const MoreMenuItem: React.FC<{ label: string }> = ({ label }) => (
    <a href="#" className="block text-sm font-medium text-gray-600 hover:text-blue-600 py-1">{label}</a>
);

// --- Data Structure for the Menu ---
const menuContent = {
    column1: [
        {
            title: 'Project Management',
            items: [
                { label: 'Project', description: 'Core project management', icon: <ProjectIcon /> },
                { label: 'Portfolio', description: 'Oversee multiple projects', icon: <PortfolioIcon /> },
                { label: 'Planner', description: 'Task and milestone planning', icon: <PlannerIcon /> },
                { label: 'Schedule', description: 'Detailed project timelines', icon: <ScheduleIcon /> },
            ]
        },
        {
            title: 'Collaboration',
            items: [
                { label: 'Communication', description: 'Team messaging and updates', icon: <CommunicationIcon /> },
                { label: 'Directory', description: 'Contact info for stakeholders', icon: <DirectoryIcon /> },
                { label: 'My Team', description: 'Manage your direct team', icon: <MyTeamIcon /> },
            ]
        }
    ],
    column2: [
         {
            title: 'Finance & Cost Control',
            items: [
                { label: 'Finance', description: 'Main financial dashboard', icon: <FinanceIcon /> },
                { label: 'Costs', description: 'Track all project expenses', icon: <CostsIcon /> },
                { label: 'Contract', description: 'Manage contracts and vendors', icon: <ContractIcon /> },
                { label: 'Change Order', description: 'Handle contract modifications', icon: <ChangeOrderIcon /> },
            ]
        },
        {
            title: 'Field & Site Operations',
            items: [
                { label: 'Site', description: 'Daily site management tools', icon: <SiteIcon /> },
                { label: 'Field', description: 'Reports and data collection', icon: <FieldIcon /> },
                { label: 'Equipment', description: 'Track and manage equipment', icon: <EquipmentsIcon /> },
                { label: 'Safety', description: 'Compliance and reports', icon: <SafetyIcon /> },
                { label: 'Analytics', description: 'Field data and insights', icon: <AnalyticsIcon /> },
                { label: 'Feeds', description: 'Real-time project updates', icon: <FeedsIcon /> },
            ]
        }
    ],
    column3: [
        {
            title: 'Documentation',
            items: [
                { label: 'Document', description: 'Central document repository', icon: <DocumentIcon /> },
                { label: 'Plans', description: 'View and manage blueprints', icon: <PlansIcon /> },
                { label: 'RFI', description: 'Manage requests for information', icon: <RFIIcon /> },
                { label: 'Submittals', description: 'Track and approve submittals', icon: <SubmittalsIcon /> },
                { label: 'Specbook', description: 'Review project specifications', icon: <SpecbookIcon /> },
            ]
        },
        {
            title: 'Quality',
            items: [
                { label: 'Punchlist', description: 'Track and resolve issues', icon: <PunchlistIcon /> },
                { label: 'Checklist', description: 'Ensure standards are met', icon: <ChecklistIcon /> },
            ]
        },
        {
            title: 'More',
            items: ['Reports', 'Configure']
        }
    ]
};

// --- Type definitions for menu data ---
interface PrimaryItemData {
    label: string;
    description: string;
    icon: React.ReactNode;
}

interface StandardCategory {
    title: string;
    items: PrimaryItemData[];
}

interface MoreCategory {
    title: 'More';
    items: string[];
}

type Category = StandardCategory | MoreCategory;

// --- Helper to render a column ---
const renderColumn = (categories: Category[]) => {
  return categories.map(category => (
    <div key={category.title}>
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{category.title}</h4>
        <div className="space-y-3">
            {category.title === 'More'
                ? (category as MoreCategory).items.map(item => <MoreMenuItem key={item} label={item} />)
                : (category as StandardCategory).items.map(item => (
                    <PrimaryMenuItem key={item.label} icon={item.icon} label={item.label} description={item.description} />
                  ))
            }
        </div>
    </div>
  ));
};


// --- Main Component Definition ---
const StripeHoverMenu: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-4 bg-white rounded-xl shadow-2xl p-8 z-50 origin-top-left"
        >
            <div className="grid grid-cols-3 gap-x-8 text-black" style={{minWidth: '850px'}}>
                <div className="space-y-8 border-r border-gray-100 pr-8">
                    {renderColumn(menuContent.column1 as Category[])}
                </div>
                <div className="space-y-8 border-r border-gray-100 pr-8">
                    {renderColumn(menuContent.column2 as Category[])}
                </div>
                <div className="space-y-8">
                    {renderColumn(menuContent.column3 as Category[])}
                </div>
            </div>
        </motion.div>
    );
};

export default StripeHoverMenu;