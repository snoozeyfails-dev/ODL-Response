// src/components/Layout.tsx
import { ChevronRight, Radio, Box, FileText, Building, Users, Info} from 'lucide-react';

// --- Reusable UI Components ---

export const SidebarItem = ({
  icon: Icon,
  label,
  subLabel,
  isActive,
  onClick,
}: {
  icon: any;
  label: string;
  subLabel?: string;
  isActive: boolean;
  onClick: () => void;
}) => (
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

export const SectionCard = ({
  title,
  children,
  className = '',
}: {
  title: any;
  children: any;
  className?: string;
}) => (
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

export const PlaceholderBox = ({ type, text }: { type: string; text?: string }) => {
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

// --- Page Templates ---

export const HomePage = ({ navigateToFirst }: { navigateToFirst: () => void }) => (
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
            <img
              src="/Snowdon Towers Render.jpg" 
              alt="Snowdon Towers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const next = target.nextSibling as HTMLElement;
                if (next) next.style.display = 'flex';
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

export const ConceptPage = ({ concept }: { concept: any }) => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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

    {concept.deliverables.map((item: any, index: number) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md"
      >
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <div className="flex items-center justify-between w-full">
              <span>
                Part {index + 1}: {item.part}
              </span>
            </div>
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start">
            <div className="text-amber-600 shrink-0 mt-0.5">
   <Info size={18} />
</div>
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
            ) : (
              <div className="min-h-[120px] p-4 bg-white rounded border border-slate-200 text-slate-400 italic">
                Content coming soon...
              </div>
            )}
          </div>
        </div>
      </div>
    ))}

    <div className="flex justify-between pt-8 border-t border-slate-200">
      <div className="text-xs text-slate-400">CME4121 ODL Response</div>
    </div>
  </div>
);