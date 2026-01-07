import React, { useState } from 'react';
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
  Info,
  Users,
  Building,
  Download,
} from 'lucide-react';

// --- Components for Inputs ---

const DescriptionTextArea = ({ placeholder }) => (
  <textarea
    className="w-full p-3 border border-slate-200 rounded-lg text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px] mb-4 bg-white"
    placeholder={placeholder || 'Add a description for this artifact...'}
  />
);

const DownloadButton = ({ label, subtext }) => (
  <div className="flex flex-col items-start gap-2">
    <button className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center">
      <Download size={18} />
      <span className="font-medium">{label}</span>
    </button>
    {subtext && (
      <p className="text-xs text-slate-500 italic flex items-center gap-1">
        <Info size={12} />
        {subtext}
      </p>
    )}
  </div>
);

// --- Configuration & Data based on CME4121 Study Guide ---

const concepts = [
  {
    id: 1,
    title: 'Digital Transformation',
    week: 'Week 1',
    icon: FileText,
    description: 'Impact of Digital Transformation for Construction Companies',
    deliverables: [
      {
        part: 'Background',
        prompt:
          'What are the main processes, stakeholders and information flows of your project of interest (PoI)?',
      },
      {
        part: 'Artifact',
        prompt:
          'Develop a BIM Execution Plan (BEP) for your Project of Interest.',
        type: 'document',
      },
      {
        part: 'Reflection',
        prompt:
          'What are the challenges in developing a BIM Execution Plan? What is the added value for companies?',
      },
    ],
  },
  {
    id: 2,
    title: 'BIM Modelling',
    week: 'Week 2',
    icon: Box,
    description: 'BIM Modelling and Interoperability',
    deliverables: [
      {
        part: 'Background',
        prompt:
          'Who are the stakeholders during the BIM model development phase? What datasets are needed?',
      },
      {
        part: 'Artifact',
        prompt:
          '1. Systems Breakdown Structure (SBS). 2. Integrated BIM model (2+ systems). 3. Custom-modeled component. 4. Enrichment with parameters (SBS ID).',
        type: 'model',
        content: (
          <div className="space-y-10">
            {/* 1. SBS */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3 text-lg">
                1. Systems Breakdown Structure (SBS)
              </h4>
              <DescriptionTextArea placeholder="Describe the Systems Breakdown Structure logic and hierarchy here..." />
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <img
                  src="organigram.jpg"
                  alt="Systems Breakdown Structure Organigram"
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
                  <FileText size={48} className="mb-2 opacity-50" />
                  <span>Image not found: organigram.jpg</span>
                </div>
              </div>
            </div>

            {/* 2. Integrated BIM Model */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3 text-lg">
                2. Integrated BIM Model
              </h4>
              <DescriptionTextArea placeholder="Describe the integrated model, the systems included, and the integration process..." />
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-4 text-slate-700">
                  <Box className="text-blue-600" size={24} />
                  <span className="font-semibold">
                    Navisworks Coordination Model
                  </span>
                </div>
                <DownloadButton
                  label="Download Navisworks File (.nwd)"
                  subtext="If the button doesn't work, the file has been uploaded on Brightspace."
                />
              </div>
            </div>

            {/* 3. Enriched Model (SBS ID) */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3 text-lg">
                3. Enriched BIM Model (SBS ID)
              </h4>
              <DescriptionTextArea placeholder="Describe how the model was enriched with SBS IDs and the classification method used..." />
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-4 text-slate-700">
                  <Box className="text-blue-600" size={24} />
                  <span className="font-semibold">
                    Enriched Revit/IFC Model
                  </span>
                </div>
                <DownloadButton
                  label="Download Enriched Model"
                  subtext="If the button doesn't work, the file has been uploaded on Brightspace."
                />
              </div>
            </div>

            {/* 4. Parameter Schedule (PDF) */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3 text-lg">
                4. Enrichment Parameters Schedule
              </h4>
              <DescriptionTextArea placeholder="Describe the parameters added to the schedule and their purpose..." />
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <div className="border-2 border-dashed border-slate-200 rounded-lg h-64 flex flex-col items-center justify-center bg-slate-50 text-slate-400 group cursor-pointer hover:bg-slate-100 hover:border-blue-300 transition-all">
                  <FileText
                    size={40}
                    className="mb-2 group-hover:text-blue-500 transition-colors"
                  />
                  <span className="font-medium text-slate-600 group-hover:text-blue-700">
                    Schedule PDF Placeholder
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Click to upload or view PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        part: 'Reflection',
        prompt:
          'What are the challenges in working with BIM models? Were there interoperability issues? How does the model improve decisions?',
        content: (
          <div className="space-y-4">
            <p>
              Working with the BIM models was challenging mainly because Revit
              was very unstable on the available hardware and software setup,
              and this strongly affected productivity and the ability to use
              multiple tools in parallel. There were also
              interoperability-related frustrations around versions and support,
              although the main issues in this case were performance, crashes,
              and limited local support rather than file exchange errors.
            </p>

            <div>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">
                Software stability and performance
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Downloading and installing Revit took a very long time, which
                  already delayed the start of modelling work and made it
                  difficult to quickly switch or reinstall versions when
                  problems occurred.
                </li>
                <li>
                  The newest Revit version caused many issues on the computer
                  (high CPU/RAM usage, freezes, and slow response), which aligns
                  with how newer Revit releases can be heavier and more
                  demanding than older ones on the same hardware.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">
                Crashes and loss of work
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Revit crashed frequently, especially when working with larger
                  or more complex models, which is typical because file size and
                  model complexity can push RAM and CPU to their limits and lead
                  to sudden failures rather than graceful slowdowns.
                </li>
                <li>
                  These frequent crashes caused repeated loss of progress, since
                  not every action had been synchronised or autosaved, a known
                  risk in BIM workflows where a single large file often contains
                  most of the project information.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">
                Model size and multitasking
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  The size and complexity of the BIM model clearly impacted the
                  work: large Revit files with many elements, links and views
                  are known to increase load times, slow down navigation, and
                  raise the probability of crashes.
                </li>
                <li>
                  Because the model consumed so many resources, it was
                  practically impossible to run other programs in parallel (for
                  example, scheduling tools, PDF viewers, or browsers), which is
                  consistent with guidelines that warn Revit may consume a
                  multiple of the file size in RAM when open.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">
                Interoperability aspects
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  In general, BIM workflows can suffer from interoperability
                  issues such as software incompatibility, non-standard data
                  formats, and problems exchanging IFC or discipline models
                  between tools like Revit, Navisworks, and others.
                </li>
                <li>
                  In this specific experience, the main bottleneck was not a
                  concrete file-exchange error but rather that the chosen Revit
                  version and performance problems limited smooth integration
                  with other software, since having Revit barely running already
                  made it difficult to test and troubleshoot interoperability.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2 mt-4">
                Support and helpdesks
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  To cope with these issues, Friday sessions were attended to
                  get help with Revit and BIM workflows, reflecting the general
                  advice that training and guided support are important for
                  overcoming BIM technical challenges.
                </li>
                <li>
                  The TU Delft CiTG helpdesk could not resolve the
                  Revit-specific problems, so support was escalated to the ABE
                  helpdesk.
                </li>
              </ul>
            </div>
          </div>
        ),
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
        prompt:
          'Who are the stakeholders involved in ensuring constructability?',
      },
      {
        part: 'Artifact',
        prompt:
          '1. Clash detection report (with resolutions). 2. 4D BIM animation of a complex area.',
        type: 'video',
      },
      {
        part: 'Reflection',
        prompt:
          'How do these artifacts help a Construction Project Manager? What specific decisions were improved?',
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
        prompt:
          'Who are the stakeholders involved in ensuring maintainability?',
      },
      {
        part: 'Artifact',
        prompt:
          '1. Asset Management System (e.g. Tandem) setup. 2. Maintenance parameters & manuals. 3. Maintenance Dashboard.',
        type: 'dashboard',
      },
      {
        part: 'Reflection',
        prompt:
          'How do these artifacts help an Asset Manager? What technical challenges did you face?',
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
        prompt: 'Who are the stakeholders involved in ensuring sustainability?',
      },
      {
        part: 'Artifact',
        prompt:
          '1. Sustainability analysis (Insight/OneClick LCA). 2. Embodied carbon breakdown. 3. Sustainability Dashboard.',
        type: 'dashboard',
      },
      {
        part: 'Reflection',
        prompt:
          'How do these artifacts help improve project sustainability metrics?',
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
        prompt: 'Who are the stakeholders involved in ensuring safety?',
      },
      {
        part: 'Artifact',
        prompt:
          '1. Virtual Safety Walkthrough. 2. Identification of safety issues. 3. Before/After resolution comparison.',
        type: 'images',
      },
      {
        part: 'Reflection',
        prompt:
          'How does the safety walk help a project manager? Challenges in developing the artifact?',
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
      },
      {
        part: 'Artifact',
        prompt:
          '1. Connect building asset to virtual sensor stream (IoT). 2. Show sensor data on dashboard.',
        type: 'tech',
      },
      {
        part: 'Reflection',
        prompt:
          'If you had more time, how would you further improve these artifacts?',
      },
    ],
  },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, subLabel, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
    }`}
  >
    <Icon
      size={20}
      className={
        isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'
      }
    />
    <div className="text-left overflow-hidden">
      <div className="font-medium text-sm truncate">{label}</div>
      {subLabel && (
        <div
          className={`text-xs truncate ${
            isActive ? 'text-blue-100' : 'text-slate-400'
          }`}
        >
          {subLabel}
        </div>
      )}
    </div>
    {isActive && <ChevronRight size={16} className="ml-auto flex-shrink-0" />}
  </button>
);

const SectionCard = ({ title, children, className = '' }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}
  >
    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
        {title}
      </h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const PlaceholderBox = ({ type, text }) => {
  const getIcon = () => {
    switch (type) {
      case 'video':
        return <Radio size={40} />;
      case 'dashboard':
        return <Box size={40} />;
      case 'model':
        return <Box size={40} />;
      case 'document':
        return <FileText size={40} />;
      default:
        return <FileText size={40} />;
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 p-8 flex flex-col items-center justify-center text-slate-400 transition-colors hover:border-blue-300 hover:bg-blue-50 group cursor-pointer">
      <div className="mb-3 text-slate-300 group-hover:text-blue-400 transition-colors">
        {getIcon()}
      </div>
      <p className="font-medium text-slate-500 group-hover:text-blue-600">
        {text || 'Upload Content Here'}
      </p>
      <p className="text-xs mt-2 text-slate-400 max-w-xs text-center">
        (Click to simulate upload or replace this component with your actual
        content)
      </p>
    </div>
  );
};

const HomePage = ({ navigateToFirst }) => (
  <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in duration-500">
    <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
        <Building size={16} />
        CME4121 · 2025-2026
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Open Design Learning Response
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
        Information Systems for the Construction Industry. A comprehensive
        portfolio of our digital transformation journey.
      </p>
      <button
        onClick={navigateToFirst}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
      >
        Start Exploring Week 1
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <SectionCard title="Project of Interest (PoI)">
        <div className="space-y-6">
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden group">
            {/* Image with fallback */}
            <img
              src="Screenshot 2026-01-07 at 12.47.13.jpg"
              alt="Snowdon Towers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 items-center justify-center w-full h-full">
              <Building size={48} className="text-slate-300" />
            </div>
            <span className="absolute bottom-4 right-4 z-10 text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              Snowdon Towers Render
            </span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              Snowdon Towers Revit Sample Project
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Our team has selected the Snowdon Towers Revit sample project as
              our learning vehicle. This multi-disciplinary model allows us to
              explore complex BIM interactions, clash detection, and asset
              management workflows within a standardized educational context.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="The Team">
        <div className="space-y-6">
          <p className="text-slate-600">
            We are a multidisciplinary team exploring the integration of BIM and
            Information Systems.
          </p>
          <div className="space-y-4">
            {[
              { name: 'Koen Hammink', role: 'Student' },
              { name: 'Thomas Rivas Smits', role: 'Student' },
              { name: 'Puck Winters', role: 'Student' },
            ].map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Users size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">
                    {member.name}
                  </div>
                  <div className="text-xs text-slate-500">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  </div>
);

const ConceptPage = ({ concept }) => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Header */}
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <concept.icon size={120} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-blue-600 font-bold mb-3">
          <span className="bg-blue-50 px-3 py-1 rounded-md text-xs uppercase tracking-wider border border-blue-100">
            {concept.week}
          </span>
          <span>Concept {concept.id}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {concept.title}
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
          {concept.description}
        </p>
      </div>
    </div>

    {/* Content Parts */}
    {concept.deliverables.map((item, index) => (
      <SectionCard
        key={index}
        title={
          <div className="flex items-center justify-between w-full">
            <span>
              Part {index + 1}: {item.part}
            </span>
          </div>
        }
        className="transition-all hover:shadow-md"
      >
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start">
          <Info className="text-amber-600 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
              Guide Prompt
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              {item.prompt}
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600">
          {item.content ? (
            <div className="bg-white rounded border border-slate-200 p-6 text-sm">
              {item.content}
            </div>
          ) : item.part === 'Artifact' ? (
            <PlaceholderBox
              type={item.type}
              text={`Upload ${item.prompt.split('.')[0]}`}
            />
          ) : (
            <div className="min-h-[120px] p-4 bg-white rounded border border-slate-200 text-slate-400 italic">
              Write your {item.part.toLowerCase()} here...
            </div>
          )}
        </div>
      </SectionCard>
    ))}

    {/* Footer Navigation for Concept */}
    <div className="flex justify-between pt-8 border-t border-slate-200">
      <div className="text-xs text-slate-400">CME4121 ODL Response</div>
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
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
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Navigation */}
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
        {/* Mobile Header */}
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

