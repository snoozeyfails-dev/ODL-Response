import { ShieldAlert, Users, HardHat, Database, Box, Clock, Eye, CheckCircle, AlertTriangle, Settings, Download, Info } from 'lucide-react';
// import { DownloadButton } from '../SharedUI'; // <--- UNCOMMENT THIS IN YOUR LOCAL PROJECT

// --- LOCAL DEFINITION FOR PREVIEW ONLY (DELETE THIS IN LOCAL PROJECT) ---
const DownloadButton = ({
  label,
  subtext,
  href,
}: {
  label: string;
  subtext?: string;
  href?: string;
}) => (
  <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center"
      >
        <Download size={18} />
        <span className="font-medium">{label}</span>
      </a>
    ) : (
      <button className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center">
        <Download size={18} />
        <span className="font-medium">{label}</span>
      </button>
    )}
    {subtext && (
      <p className="text-xs text-slate-500 italic flex items-center gap-1">
        <Info size={12} />
        {subtext}
      </p>
    )}
  </div>
);
// -----------------------------------------------------------------------

export const Week7Background = () => (
  <div className="space-y-8">
    {/* Stakeholders Section */}
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Stakeholders Ensuring Safety
      </h3>
      <p className="text-slate-600">
        Construction safety involves a chain of responsibility from the initial design phase down to daily site operations and regulatory oversight.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Design Team */}
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
          <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
            <Box size={18} /> Design Team
          </h4>
          <p className="text-sm text-indigo-900/80 leading-relaxed">
            <strong>Architects & Structural Engineers</strong> must ensure permanent works meet safety requirements and are buildable. They enable safety by design before the project reaches the site.
          </p>
        </div>

        {/* Site & HSE */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
            <HardHat size={18} /> Site & HSE
          </h4>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            <strong>Managers, Subcontractors & HSE Officers</strong> manage safe methods, temporary works (scaffolding/cranes), and compliance (Arbowet). <strong>BIM Specialists</strong> support them by modelling hazards.
          </p>
        </div>

        {/* External */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
          <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <ShieldAlert size={18} /> External & Regulatory
          </h4>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            <strong>Clients, Regulators & Labor Reps</strong> set requirements, review permits, and ensure physical and social safety dimensions are addressed throughout the project.
          </p>
        </div>
      </div>
    </div>

    {/* Datasets Section */}
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Database className="text-blue-600" size={20} />
        Integrated Datasets for Safety Analysis
      </h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-4 w-1/3">Dataset Source</th>
              <th className="p-4">Integration Workflow</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Box size={16} className="text-slate-400" /> Revit 3D Model
              </td>
              <td className="p-4 text-slate-600">
                Core architectural/structural geometry enriched with <strong>temporary structures</strong> and <strong>safety elements</strong> (scaffolding, guard-rails) representing actual site conditions.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Clock size={16} className="text-slate-400" /> Construction Schedule
              </td>
              <td className="p-4 text-slate-600">
                Schedule from <strong>MS Project</strong> exported as CSV and combined in <strong>Navisworks TimeLiner</strong> to create a 4D dataset showing which areas are built/dismantled at any moment.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Eye size={16} className="text-slate-400" /> Navisworks Safety Data
              </td>
              <td className="p-4 text-slate-600">
                Derived walkthrough paths, viewpoints, and snapshots creating a time-dependent <strong>"virtual site"</strong> to inspect for open edges, missing access, or clashes.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Week7Artifact = () => (
  <div className="space-y-8">
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <ShieldAlert className="text-red-600" size={24} />
        Virtual Safety Walkthrough & Mitigation
      </h4>
      
      <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-8">
        <p>
          <strong>The Process:</strong> The safety walkthrough utilized the federated BIM model to simulate on-site conditions and pedestrian access before construction began. By navigating the digital twin, the team could identify hazards that might be overlooked in 2D drawings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
            <h5 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} /> Identified Issue (Before)
            </h5>
            <p className="text-sm text-red-900/80 leading-relaxed">
              During the virtual walk of the external landscaping area, a critical safety risk was identified near the seating area. The low height of the brick planter and bench provided insufficient protection along the perimeter, creating a significant risk of falling to the lower level for both construction workers and future building occupants.
            </p>
          </div>
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md relative group">
             <video 
                controls 
                className="w-full h-full object-cover"
             >
                <source src="Concept6Art1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
             </video>
          </div>
          <div className="text-center">
             <DownloadButton label="Download 'Before' Video" href="Concept6Art1.mp4" />
          </div>
        </div>

        {/* After */}
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
            <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
              <CheckCircle size={18} /> Resolution (After)
            </h5>
            <p className="text-sm text-emerald-900/80 leading-relaxed">
              To eliminate this fall hazard, a design modification was implemented directly in the BIM model. A structural concrete wall was constructed behind the existing planter. This raised the perimeter barrier to a compliant safety height, effectively shielding the drop-off and ensuring the safety of the area without altering the original landscaping layout.
            </p>
          </div>
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md relative group">
             <video 
                controls 
                className="w-full h-full object-cover"
             >
                <source src="Concept6Art2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
             </video>
          </div>
          <div className="text-center">
             <DownloadButton label="Download 'After' Video" href="Concept6Art2.mp4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- NEW REFLECTION COMPONENT ---
export const Week7Reflection = () => (
  <div className="space-y-6">
    {/* Challenges */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Challenges in Developing Safety Artifacts
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Creating the safety walkthrough artifacts presented both technical and content-related challenges. Generating smooth walkthroughs in Navisworks proved more time‑consuming than anticipated; configuring camera paths and timings for the external landscaping sequence required several iterations, and ultimately we relied on simple screen recordings rather than fully scripted animations, which limited visual quality but still conveyed the main hazards.
        </p>
        <p>
          On the modelling side, representing the mitigation realistically was not straightforward: suitable manufacturer-specific safety components or balustrade families were difficult to obtain without paid libraries, so we had to approximate the permanent solution by modelling a generic concrete wall behind the planter, carefully adjusting geometry and levels to reflect a compliant barrier while keeping the original landscape design intact.
        </p>
      </div>
    </div>

    {/* PM Decision Making */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <HardHat className="text-blue-600" size={20} />
        Impact on Project Manager Decision-Making
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          The two artifacts support project‑level safety decisions in complementary ways. The initial safety walkthrough of the federated BIM model lets us, as project managers, experience the external landscaping from a pedestrian perspective and clearly see the unacceptable fall risk at the planter edge, which provides concrete evidence to justify design changes, method statements, and temporary protection requirements before work starts on site.
        </p>
        <p>
          The updated model with the added concrete wall then functions as a validation and communication tool: by virtually revisiting the same route and demonstrating that the drop‑off is now fully screened, we can confirm that the chosen mitigation is effective, compare it with alternative design options, and communicate a clear, visual safety solution to designers, contractors, and regulators.
        </p>
      </div>
    </div>

    {/* Future Improvements */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Settings className="text-slate-600" size={20} />
        Future Improvements & Integration
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          With more time and resources, we would first extend the federated safety model beyond the perimeter wall and systematically model additional hazards, such as temporary scaffolding layouts, access routes, signage, and exclusion zones, so that the walkthrough covers a broader range of construction and use‑phase risks.
        </p>
        <p>
          We would also replace generic elements with high‑fidelity manufacturer Revit families for barriers and edge protection, link the model to a 4D schedule in Navisworks so that risk can be assessed per construction phase, and explore immersive VR walkthroughs that allow safety coordinators and workers to experience the site from first‑person perspective and feed their observations back into the design and method statements.
        </p>
      </div>
    </div>
  </div>
);