import { useState } from 'react';
import {
  Home,
  FileText,
  Box,
  HardHat,
  Wrench,
  Leaf,
  ShieldAlert,
  Radio,
  Menu,
  ChevronRight,
  Building,
} from 'lucide-react';

// Import our new UI Layout components
import { SidebarItem, HomePage, ConceptPage } from './components/Layout';

// Import our Content "Bricks"
import { Week1Background, Week1Artifact, Week1Reflection } from './components/weeks/Week1Content';
import { Week2Background, Week2Artifact, Week2Reflection } from './components/weeks/Week2Content';
import { Week3Background, Week3Artifact, Week3Reflection } from './components/weeks/Week3Content';
import { Week45Background, Week45Artifact, Week45Reflection } from './components/weeks/Week45Content';
import { Week6Background, Week6Artifact, Week6Reflection } from './components/weeks/Week6Content';
import { Week7Background, Week7Artifact, Week7Reflection } from './components/weeks/Week7Content';
import { Week8Background, Week8Artifact, Week8Reflection } from './components/weeks/Week8Content';

// --- Configuration Data ---
const concepts = [
  {
    id: 1,
    title: 'Digital Transformation',
    week: 'Week 1',
    icon: FileText, // <--- This link was likely missing!
    description: 'Impact of Digital Transformation for Construction Companies',
    deliverables: [
      {
        part: 'Background',
        prompt: 'What are the main processes, stakeholders and information flows of your project of interest (PoI)?',
        content: <Week1Background />,
      },
      {
        part: 'Artifact',
        prompt: 'Develop a BIM Execution Plan (BEP) for your Project of Interest.',
        type: 'document',
        content: <Week1Artifact />,
      },
      {
        part: 'Reflection',
        prompt: 'What are the challenges in developing a BIM Execution Plan? What is the added value of a BIM Execution Plan for companies and organizations?',
        content: <Week1Reflection />,
      },
    ],
  },
  {
    id: 2,
    title: 'BIM Modelling',
    week: 'Week 2',
    icon: Box, // <--- Reconnecting Box icon
    description: 'BIM Modelling and Interoperability',
    deliverables: [
      {
        part: 'Background',
        prompt: 'Who are the stakeholders during the BIM model development phase? What datasets are needed to generate a BIM model?',
        content: <Week2Background />,
      },
      {
        part: 'Artifact',
        prompt: '1. A Systems Breakdown Structure (SBS) of the selected project. 2. A BIM model with at least two systems integrated (or three systems integrated if using one of the provided models). 3. A custom-modeled component developed by the team, in addition to working with the existing model — this may include a room, an MEP subsystem, or a structural element designed and integrated into the project model. 4. Enrichment of the BIM model with additional parameters, including the SBS ID derived from the Systems Breakdown Structure.',
        type: 'model',
        content: <Week2Artifact />,
      },
      {
        part: 'Reflection',
        prompt: '1. What are the challenges in working with BIM models. Were there any interoperability issues? Did the size of the model have an impact on your working? 2. What decisions can be improved using the developed artifact (BIM model & SBS)? 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week2Reflection />,
      },
    ],
  },
{
    id: 3,
    title: 'Digital Construction',
    week: 'Week 3',
    icon: HardHat,
    description: 'Information Systems for Construction (Clash Detection & 4D)',
    deliverables: [
      {
        part: 'Background',
        prompt: 'Who are the stakeholders involved in ensuring constructability? What datasets are integrated- from what information systems?',
        content: <Week3Background />, // <--- Linked
      },
      {
        part: 'Artifact',
        prompt: '1. Clash detection report. Clash detection should be on an integrated model with atleast 2 systems (Architectural/structural/MEP etc).If you find clashes, make sure you remove 2-3 of clashes by modifying the relevant 3d models. Show the clash resolution. 2. A 4D BIM animation of your project, focusing on a complex area (if the project is too large). The animation should clearly illustrate a problem at the construction site and how it is identified early and removed using a 4D plan.',
        type: 'video',
        content: <Week3Artifact />,   // <--- Linked
      },
      {
        part: 'Reflection',
        prompt: '1. Challenges in developing the above artifacts, 2. How do these artifacts (both) help you as a Construction Project Manager in your decision-making? What decisions were improved using each of these artifacts, 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week3Reflection />, // <--- Linked
      },
    ],
  },
  {
    id: 4,
    title: 'Asset Management',
    week: 'Weeks 4-5',
    icon: Wrench,
    description: 'Information Systems for Maintenance & Asset Management',
    deliverables: [
      {
        part: 'Background',
        prompt: 'Who are the stakeholders involved in ensuring maintainability?, What datasets are integrated- from what information systems?',
        content: <Week45Background />,
      },
      {
        part: 'Artifact',
        prompt: '1. Import the models generated from concepts 1& 2 into a maintenance management system (Autodesk Tandem or similar) 2. Add additional parameters to ensure maintenance management (ex maintenance manuals and maintenance schedules 3. Create a dashboard for maintainance',
        type: 'dashboard',
        content: <Week45Artifact />,
      },
      {
        part: 'Reflection',
        prompt: '1. Challenges in developing the above artifacts, 2. How do these artifacts (both) help you as a Asset Manager in your decision-making? What decisions were improved using each of these artifacts, 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week45Reflection />, // <--- Linked
      },
    ],
  },
  {
    id: 5,
    title: 'Sustainability',
    week: 'Week 6',
    icon: Leaf,
    description: 'Information Systems for Sustainability (LCA/Carbon)',
    deliverables: [
      {
        part: 'Background',
        prompt: 'Who are the stakeholders involved in ensuring sustainability? What datasets are integrated- from what information systems?',
        content: <Week6Background />,
      },
      {
        part: 'Artifact',
        prompt: '1. Import the models generated from concepts 1& 2 into sustainability analysis software (Autodesk insights/Oneclick LCA etc). Make sure you strip the model of unnecessary details to ease analysis. 2. Do an analysis to identify the embodied carbon contribution of different components of your building. 3. Create a dashboard showing these aspects.',
        type: 'dashboard',
        content: <Week6Artifact />,
      },
      {
        part: 'Reflection',
        prompt: '1. Challenges in developing the above artifacts, 2. How do these artifacts (both) help you as a project manager in your decision-making to improve project sustainability metrics? What decisions were improved using each of these artifacts, 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week6Reflection />, // <--- Linked
      },
    ],
  },
  {
    id: 6,
    title: 'Safety',
    week: 'Week 7',
    icon: ShieldAlert,
    description: 'Information Systems for Safety (Virtual Safety Walk)',
    deliverables: [
      {
        part: 'Background',
        prompt: 'Who are the stakeholders involved in ensuring safety?, What datasets are integrated- from what information systems to do BIM based safety analysis?',
        content: <Week7Background />,
      },
      {
        part: 'Artifact',
        prompt: '1. Use the models from concept 2 to do a safety walk through or similar. 2. Identify the safety problems and highlight it. 3. Modify the model to remove the safety issue, 4. Show both before resolution and after resolution safety issues side by side.',
        type: 'images',
        content: <Week7Artifact />,
      },
      {
        part: 'Reflection',
        prompt: '1. Challenges in developing the above artifacts, 2. How do these artifacts (both) help you as a project manager in your decision-making to improve project safety? What decisions were improved using each of these artifacts 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week7Reflection />, // <--- Linked
      },
    ],
  },
  {
    id: 7,
    title: 'Future Construction',
    week: 'Week 8',
    icon: Radio,
    description: 'Information Systems for Future Construction (IoT/Sensors)',
    deliverables: [
      {
        part: 'Background',
        prompt: 'How can your project benefit from newer future technologies?',
        content: <Week8Background />,
      },
      {
        part: 'Artifact',
        prompt: '1. Connect building asset to virtual sensor stream (IoT). 2. Show sensor data on dashboard.',
        type: 'tech',
        content: <Week8Artifact />,
      },
      {
        part: 'Reflection',
        prompt: '1. Challenges in developing the above artifacts, 2. How do these artifacts (both) help you as a project manager in your decision-making to improve project safety? What decisions were improved using each of these artifacts 3. If you had more time and resources, how would you further improve these artifacts and integrate them with other models or tools for better decision-making?',
        content: <Week8Reflection />, // <--- Linked
      },
    ],
  },
];

// --- Main App Logic ---

const App = () => {
  const [activeTab, setActiveTab] = useState<string | number>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <HomePage
          navigateToFirst={() => {
            setActiveTab(1);
            window.scrollTo(0, 0);
          }}
        />
      );
    }
    const concept = concepts.find((c) => c.id === activeTab);
    return concept ? <ConceptPage concept={concept} /> : <div>Not Found</div>;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-80 bg-white border-r border-slate-200 z-30 transform transition-transform duration-300 ease-out lg:translate-x-0 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Building size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-none">
                ODL Portfolio
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                CME4121 2025/26
              </div>
            </div>
          </div>
          <button onClick={closeSidebar} className="lg:hidden text-slate-400">
            <ChevronRight className="rotate-180" />
          </button>
        </div>

        <nav className="p-4 space-y-1.5">
          <SidebarItem
            icon={Home}
            label="Home & Overview"
            isActive={activeTab === 'home'}
            onClick={() => {
              setActiveTab('home');
              closeSidebar();
              window.scrollTo(0, 0);
            }}
          />

          <div className="pt-6 pb-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="h-px bg-slate-200 flex-1"></span>
            <span>Weekly Concepts</span>
            <span className="h-px bg-slate-200 flex-1"></span>
          </div>

          {concepts.map((concept) => (
            <SidebarItem
              key={concept.id}
              icon={concept.icon}
              label={concept.title}
              subLabel={concept.week}
              isActive={activeTab === concept.id}
              onClick={() => {
                setActiveTab(concept.id);
                closeSidebar();
                window.scrollTo(0, 0);
              }}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col">
        <div className="lg:hidden bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-20">
          <div className="font-bold text-slate-800 flex items-center gap-2">
            <Building size={18} className="text-blue-600" />
            <span>ODL Portfolio</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="p-6 lg:p-12 max-w-7xl mx-auto w-full flex-1">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;