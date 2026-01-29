// src/components/weeks/Week3Content.tsx
import { HardHat, ShieldAlert, Users, Layers, Database, Box, Clock, Settings, AlertTriangle } from 'lucide-react';
import { DownloadButton } from '../SharedUI';

export const Week3Background = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Stakeholders Ensuring Constructability
      </h3>
      <p className="text-slate-600">
        Ensuring constructability for our POI involves several groups of stakeholders who all interact with the BIM model, SBS, and construction planning information.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Design Disciplines */}
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
          <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
            <Layers size={18} /> Design Disciplines
          </h4>
          <p className="text-sm text-indigo-900/80 leading-relaxed">
            The <strong>architect, structural engineer, and MEP engineer</strong> develop models to create solutions compliant with requirements and buildable on site. They use clash detection in Navisworks to resolve conflicts between layouts, structure, and services early.
          </p>
        </div>

        {/* Construction Side */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
            <HardHat size={18} /> Construction Team
          </h4>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            The <strong>contractor and subcontractors</strong> interpret BIM/SBS to plan methods, access, and sequencing. The <strong>PM</strong> links the model to MS Project for 4D simulations to assess if the plan is realistic and manage constructability risks.
          </p>
        </div>

        {/* Client & External */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
          <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <Users size={18} /> Client & Regulators
          </h4>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            The <strong>client</strong> sets functional/budgetary constraints. <strong>Regulatory bodies</strong> enforce codes/permits. These conditions are checked against the coordinated BIM and planning info to ensure they are achievable in practice.
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Database className="text-blue-600" size={20} />
        Integrated Datasets & Information Systems
      </h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-4 w-1/3">Dataset Type</th>
              <th className="p-4">Integration Workflow</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Box size={16} className="text-slate-400" /> Geometry
              </td>
              <td className="p-4 text-slate-600">
                From architectural, structural, and MEP Revit models. Exported to <strong>Navisworks (.nwc)</strong> so they can be viewed together as one federated model for clash detection and coordination.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Settings size={16} className="text-slate-400" /> Systems Coding
              </td>
              <td className="p-4 text-slate-600">
                <strong>SBS codes</strong> implemented as shared parameters in Revit. Carried into Navisworks via the exported model and used as the key for automatic model–task linking in the TimeLiner.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Clock size={16} className="text-slate-400" /> Time & Planning
              </td>
              <td className="p-4 text-slate-600">
                Construction schedule from <strong>MS Project</strong> exported to CSV. Imported into Navisworks and matched with the SBS coded model to link tasks to 3D elements for <strong>4D simulation</strong>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Week3Artifact = () => (
  <div className="space-y-10">
    {/* 1. Clash Detection Report */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
          <ShieldAlert className="text-red-500" size={24} />
          1. Clash Detection Report
        </h4>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-8">
        {/* Overview */}
        <div>
          <p>
            In our clash detection analysis between the architectural and structural models, we identified over 8000+ clashes. Out of these, 3 significant clashes were found that required further attention. In this first image you can see there are 8884 clashes.
          </p>
          <div className="mt-4 border rounded-lg overflow-hidden bg-white shadow-sm">
            <img src="C3A1_BeginClashes.png" alt="Overview of 8884 clashes in Navisworks" className="w-full h-auto" />
            <p className="p-2 text-xs text-center text-slate-400 bg-slate-50 border-t">Initial Clash Count: 8884</p>
          </div>
        </div>

        {/* Clash 1 */}
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mb-2">Clash #372: Walls Crossing</h5>
          <p className="mb-4">
            The first clash, number 372, as can be seen in the images below is between two walls crossing each other. To solve this clash, the red wall was split into two.
          </p>
          <div className="flex flex-col gap-2">
             {/* Top Row: Render and Plan (Side by Side) */}
             <div className="grid grid-cols-2 gap-2">
                <div className="border rounded overflow-hidden">
                    <img src="C3A1_Clash1render.png" alt="Clash 372 Render" className="w-full h-full object-cover" />
                </div>
                <div className="border rounded overflow-hidden">
                    <img src="C3A1_Clash1plat.png" alt="Clash 372 Plan" className="w-full h-full object-cover" />
                </div>
             </div>
             {/* Bottom Row: Code (Full Width) */}
             <div className="border rounded overflow-hidden">
                <img src="C3A1_Clash1code.png" alt="Clash 372 Code" className="w-full h-auto object-contain" />
             </div>
          </div>
        </div>

        {/* Clash 2 */}
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mb-2">Clash #6856: Furniture Intersection</h5>
          <p className="mb-4">
            The second clash, 6856, involved a table that was intersecting with a wall. This table was removed.
          </p>
          <div className="flex flex-col gap-2">
             {/* Top Row: Render and Plan (Side by Side) */}
             <div className="grid grid-cols-2 gap-2">
                <div className="border rounded overflow-hidden">
                    <img src="C3A1_Clash2render.png" alt="Clash 6856 Render" className="w-full h-full object-cover" />
                </div>
                <div className="border rounded overflow-hidden">
                    <img src="C3A1_Clash2plat.png" alt="Clash 6856 Plan" className="w-full h-full object-cover" />
                </div>
             </div>
             {/* Bottom Row: Code (Full Width) */}
             <div className="border rounded overflow-hidden">
                <img src="C3A1_Clash2code.png" alt="Clash 6856 Code" className="w-full h-auto object-contain" />
             </div>
          </div>
        </div>

        {/* Clash 3 */}
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mb-2">Clash #1: Wall & Floor Intersection</h5>
          <p className="mb-4">
            The third clash, number 1, consisted of a wall and floor that were intersecting. To solve this clash, the wall was split into two parts, one ending below the floor, and the other starting above the floor.
          </p>
          <div className="flex flex-col gap-2">
             {/* Top Row: Render */}
             <div className="border rounded overflow-hidden">
                <img src="C3A1_Clash3render.png" alt="Clash 1 Render" className="w-full h-auto object-contain" />
             </div>
             {/* Bottom Row: Code */}
             <div className="border rounded overflow-hidden">
                <img src="C3A1_Clash3code.png" alt="Clash 1 Code" className="w-full h-auto object-contain" />
             </div>
          </div>
        </div>

        {/* Resolution */}
        <div>
          <p>
            In this last image we can see that the clash number has gone down to 8881 and thus they have been resolved.
          </p>
          <div className="mt-4 border rounded-lg overflow-hidden bg-white shadow-sm">
            <img src="C3A1_EindeClashes.png" alt="Final Clash Count" className="w-full h-auto" />
            <p className="p-2 text-xs text-center text-slate-400 bg-slate-50 border-t">Final Clash Count: 8881 (3 Resolved)</p>
          </div>
        </div>
      </div>
    </div>

    {/* 2. 4D BIM Animation */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Clock className="text-blue-600" size={24} />
        2. 4D BIM Animation & Planning
      </h4>
      
      <p className="text-slate-600 mb-6 text-sm">
        The animation illustrates a problem at the construction site and how it is identified early and removed using a 4D plan. Below you can view the simulation video and the supporting PDF planning document.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Video Player */}
        <div className="space-y-3">
            <h5 className="font-semibold text-slate-700">4D Simulation Video</h5>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md">
                <video 
                    controls 
                    className="w-full h-full" 
                    poster="C3A1_EindeClashes.png"
                >
                    <source src="Concept3Art2_4Dvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <DownloadButton 
                label="Download Video (.mp4)" 
                href="Concept3Art2_4Dvideo.mp4" 
            />
        </div>
        {/* PDF Preview & Downloads */}
        <div className="space-y-3">
            <h5 className="font-semibold text-slate-700">Construction Schedule (PDF & MPP)</h5>
            <div className="aspect-[3/4] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md">
                <iframe 
                    src="Concept3Art2_Planning.pdf" 
                    className="w-full h-full"
                    title="Construction Planning PDF"
                />
            </div>
            
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-3">
                <DownloadButton 
                    label="Download Schedule (.pdf)" 
                    href="Concept3Art2_Planning.pdf" 
                />
                <DownloadButton 
                    label="Download MS Project (.mpp)" 
                    href="Concept3Art2_Planning.mpp" 
                    subtext="Requires Microsoft Project"
                />
            </div>
        </div>
      </div>
    </div>
  </div>
);

export const Week3Reflection = () => (
  <div className="space-y-6">
    {/* Reflection 1 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Challenges in Developing Artifacts
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Developing the clash detection report and 4D BIM animation was difficult mainly because technical and data issues kept breaking the workflow at each step. Frequent Revit crashes, video‑driver errors, and running in software‑emulation mode made it hard to even open, clean, and export the integrated architectural, structural, and MEP models reliably for Navisworks.
        </p>
        <p>
          Once we moved into 4D, importing the MS Project schedule as CSV caused more delays: Dutch column names, comma/semicolon differences, missing Synchronization IDs, and invalid date formats all triggered Navisworks error messages and forced us to repeatedly adjust the mapping and dataset before tasks could link correctly to SBS‑coded elements. On top of that, some advanced steps such as the walkthrough and Autodesk Insight integration were poorly documented for our context, so we were often unsure how to set them up in a way that clearly visualised a construction problem and its resolution, which reduced our ability to create a smooth, illustrative 4D animation.
        </p>
      </div>
    </div>

    {/* Reflection 2 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <HardHat className="text-blue-600" size={20} />
        Impact on Construction Project Management
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          The clash detection report helps by revealing coordination problems between architectural, structural, and MEP elements early, so you can make design changes before construction rather than resolving clashes on site with expensive rework or delays.
        </p>
        <p>
          The 4D BIM animation then supports decisions about sequencing and site logistics by linking the schedule to the 3D model; it makes it easier to spot unrealistic task orders, overlaps in workspace, and critical path issues, so you can adjust durations, dependencies, and resource planning in MS Project to arrive at a more robust and constructible plan.
        </p>
      </div>
    </div>

    {/* Reflection 3 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Settings className="text-slate-600" size={20} />
        Future Improvements & Integration
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          With more time and resources, we would go beyond resolving only three clashes and systematically work through the remaining 8000+ clashes using a structured workflow, for example by grouping them by type and location and using semi‑automated rules or AI‑assisted tools to handle repetitive issues while keeping expert review for critical ones.
        </p>
        <p>
          We would also improve integration with other models and tools by tightening the link between our clash‑free federated model, the SBS codes, and the 4D planning in Navisworks, so that constructability issues detected in time (e.g. access, sequence conflicts) feed back directly into design changes and schedule adjustments. Finally, we would connect these improved artifacts to downstream systems such as cost and safety analysis tools, so that the same coordinated model underpins 5D cost estimates and virtual safety walks, giving decision‑makers a more consistent and reliable basis for evaluating design options, construction methods, and risk mitigations.
        </p>
      </div>
    </div>
  </div>
);