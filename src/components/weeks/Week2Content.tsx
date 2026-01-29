import { Users, Database, Box, FileText, AlertCircle } from 'lucide-react';
import { DownloadButton } from '../SharedUI';

export const Week2Background = () => (
  <div className="space-y-8">
    {/* Stakeholders Section */}
    <div>
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Stakeholders in BIM Model Development
      </h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-4 w-1/3">Stakeholder Group</th>
              <th className="p-4">Typical Role in Model Development</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Client / Owner / Asset Manager
              </td>
              <td className="p-4 text-slate-600">
                Defines information needs over the life cycle and high-level
                requirements (e.g. for operation, maintenance).
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Architect & Engineers
              </td>
              <td className="p-4 text-slate-600">
                Author the discipline models in Revit (architecture, structure,
                MEP) and coordinate them into a federated BIM.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Contractor / Subcontractors
              </td>
              <td className="p-4 text-slate-600">
                Use and enrich models for constructability, prefabrication,
                4D/5D simulations, and clash detection.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                BIM Manager / Coordinator
              </td>
              <td className="p-4 text-slate-600">
                Sets up modelling rules, LOD, parameters, naming and coordinates
                interoperability (IFC, Navisworks, Tandem).
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                FM / Operations Reps
              </td>
              <td className="p-4 text-slate-600">
                Indicate which asset data and documents (manuals, parameters)
                must be embedded or linked for digital twin use.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Datasets Section */}
    <div>
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Database className="text-blue-600" size={20} />
        Required Datasets
      </h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-4 w-1/3">Dataset Type</th>
              <th className="p-4">Concrete Datasets for BIM Modelling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Spatial & Geometric
              </td>
              <td className="p-4 text-slate-600">
                Site/location, levels, grids, massing (LOD100) and detailed 3D
                geometry for architectural/structural/MEP systems.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Object Libraries
              </td>
              <td className="p-4 text-slate-600">
                Revit family libraries (doors, windows, beams, ducts) and custom
                families needed for the PoI.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Semantic / Properties
              </td>
              <td className="p-4 text-slate-600">
                Element parameters (materials, dimensions, fire rating, thermal
                properties) and non-geometric attributes.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Systems Breakdown (SBS)
              </td>
              <td className="p-4 text-slate-600">
                SBS for the PoI, including IDs for systems, subsystems and
                components used as parameters.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Coding & Linking
              </td>
              <td className="p-4 text-slate-600">
                Shared parameters (e.g. SBS-code) and matching MS Project codes
                (Element, Task Type) for 4D.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Reference & Requirements
              </td>
              <td className="p-4 text-slate-600">
                Project requirements, spatial program, design criteria, and
                existing drawings/models.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Exchange / Interoperability
              </td>
              <td className="p-4 text-slate-600">
                IFC/NWC exports and CSV schedule exports from MS Project for
                clash detection and simulation.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900">
                Lifecycle / Operations
              </td>
              <td className="p-4 text-slate-600">
                Asset structure/maintenance parameters (Tandem), linked O&M
                documents and embedded data.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Week2Artifact = () => (
  <div className="space-y-10">
    {/* 1. SBS */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        1. Systems Breakdown Structure (SBS)
      </h4>
      
      <p className="text-slate-600 mb-4">
        We organized the building into 4 main systems: Site, Framing & Construction, 
        Roof, and Furniture.
      </p>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="/organigram.jpg"
          alt="Systems Breakdown Structure Organigram"
          className="w-full h-auto object-contain max-h-[600px] mx-auto"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
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
      
      <p className="text-slate-600 mb-4">
        This model combines the Structural Revit file with the MEP and Architectural file. 
        We used shared coordinates to ensure they aligned perfectly.
      </p>

      <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col items-center sm:items-start">
        <div className="flex items-center gap-3 mb-4 text-slate-700">
          <Box className="text-blue-600" size={24} />
          <span className="font-semibold">Navisworks Coordination Model</span>
        </div>
        <DownloadButton
          label="Download Integrated Model (.nwd)"
          href="Concept2Art2BIM.nwd"
          subtext="If the button doesn't work, the file has been uploaded on Brightspace."
        />
      </div>
    </div>

    {/* 3. Custom Modeled Component */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        3. Custom-modeled Component
      </h4>
      
      <p className="text-slate-600 mb-4">
        The custom-modeled component developed by the team, in addition to working with the existing model is the addition of a new room on level 2.
      </p>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="Concept2Art3Room.png"
          alt="Custom Modeled Room on Level 2"
          className="w-full h-auto object-cover max-h-[500px]"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
          }}
        />
        <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
          <FileText size={48} className="mb-2 opacity-50" />
          <span>Image not found: Concept2Art3Room.png</span>
        </div>
      </div>
    </div>

    {/* 4. Enriched Model (SBS ID) */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        4. Enriched BIM Model (SBS ID)
      </h4>
      
      <p className="text-slate-600 mb-4">
        The Revit model was enriched by adding a custom Shared Parameter "SBS_ID".
        This allows us to track components by their system code throughout the lifecycle.
      </p>

      {/* Large File Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 flex items-start gap-3">
         <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
         <div>
             <h5 className="text-amber-900 font-semibold text-sm mb-1">File Size Limit Exceeded ({'>'}100MB)</h5>
             <p className="text-sm text-amber-800">
                 The enriched model file (<strong>Concept2Art4SBS.rvt</strong>) is too large for web hosting. 
                 Please download the file directly from <strong>Brightspace</strong> for evaluation.
             </p>
         </div>
      </div>
    </div>
  </div>
);

// --- NEW REFLECTION COMPONENT ---
export const Week2Reflection = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        1. Challenges in working with BIM models, interoperability issues & model size impact
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Working with the BIM models was challenging mainly because the software environment never felt stable: installing the newest Revit version took very long, caused frequent crashes, and made it impossible to run other programs like Navisworks and MS Project in parallel, which already delayed us heavily in the first weeks when only one teammate even had a compatible Windows laptop.
        </p>
        <p>
          Once our laptops finally worked, we still ran into many small but time‑consuming interoperability issues, MS Project in Dutch causing wrong CSV headers, comma/semicolon mismatches during imports, Autodesk Insight repeatedly failing for carbon analysis, and unclear steps for the virtual walkthrough, so we spent more time debugging file formats and tool settings than actually using the model.
        </p>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        2. What decisions can be improved using the developed artifact (BIM model & SBS)?
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm">
        <p>
          Using the combined BIM model and SBS codes, decisions about construction planning, sequencing, and site logistics can be improved because the model can be linked to a 4D schedule that visually shows how Snowdon Towers is built over time, making bottlenecks, overlapping work areas, and unsafe situations easier to spot and adjust before execution. This also supports better communication with stakeholders who may not read Gantt charts easily, because they can see directly which elements are built when, where trades might conflict, and how changes in the schedule affect the building systems and overall progress.
        </p>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        3. Improving artifacts and integration with more time and resources
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm">
        <p>
          If we had more time and resources, we would first stabilize the technical environment by aligning Revit, Navisworks, and MS Project versions across the team and testing them on reliable hardware, so that crashes and performance issues no longer dominate the workflow. We would then redesign the SBS from the start with the 4D use in mind, defining categories and numbering together as a team and documenting the structure, so that Excel lists, Revit parameters, and MS Project tasks all stay consistent and do not break at the CSV‑import stage.
        </p>
      </div>
    </div>
  </div>
);
