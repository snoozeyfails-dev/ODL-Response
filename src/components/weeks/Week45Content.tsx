import { Users, Database, Wrench, BarChart, Settings, AlertTriangle, LayoutDashboard, FileText, Box, Activity } from 'lucide-react';

export const Week45Background = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Stakeholders Ensuring Maintainability
      </h3>
      <p className="text-slate-600">
        For maintainability of Snowdon Towers, the key stakeholders interact with asset data to define goals, execute work, and ensure long-term performance.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Strategic Level */}
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
          <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
            <BarChart size={18} /> Strategic Level
          </h4>
          <p className="text-sm text-indigo-900/80 leading-relaxed">
            The <strong>Client/Owner</strong> defines long‑term performance and service level goals. The <strong>Facility/Asset Manager</strong> translates these goals into maintenance plans, budgets, and KPIs.
          </p>
        </div>

        {/* Operational Level */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
            <Wrench size={18} /> Operational Level
          </h4>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            <strong>Engineers & Technicians</strong> use BIM/Tandem info to diagnose issues. <strong>Service Providers & FM Contractors</strong> deliver day‑to‑day maintenance under contract.
          </p>
        </div>

        {/* Feedback Level */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
          <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <Users size={18} /> Feedback Level
          </h4>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            <strong>Building Users</strong> act as an important feedback source by reporting defects and comfort problems that influence maintenance priorities.
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
              <th className="p-4 w-1/3">Dataset Source</th>
              <th className="p-4">Integration Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Box size={16} className="text-slate-400" /> Revit BIM Models
              </td>
              <td className="p-4 text-slate-600">
                Core geometric and asset structure data (architectural, structural, MEP) defining spaces, systems, and equipment as maintainable objects.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <FileText size={16} className="text-slate-400" /> Maintenance Records
              </td>
              <td className="p-4 text-slate-600">
                Asset registers, O&M manuals, and planned maintenance schedules inside <strong>Autodesk Tandem</strong>, linked to corresponding BIM elements.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Activity size={16} className="text-slate-400" /> Sensor/IoT Data
              </td>
              <td className="p-4 text-slate-600">
                Condition or performance data (e.g., temperature, humidity, runtime hours) integrated to provide a centralized view of current and future maintenance needs.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Week45Artifact = () => (
  <div className="space-y-8">
    {/* Maintenance Dashboard */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <LayoutDashboard className="text-blue-600" size={24} />
        Maintenance Digital Twin Dashboard
      </h4>
      
      <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-6">
        <p>
          The Multipurpose Digital Twin dashboard in Autodesk Tandem presents an interactive 3D view of the building alongside a series of linked data panels that summarize asset information, parameters, and classification status. On the left, parameter‑completeness widgets list key maintenance fields such as manuals and maintenance dates, and show for how many tagged assets these fields are already filled, giving a quick overview of data quality and gaps.
        </p>
        <p>
          The central 3D model is fully navigable and labeled by levels and blocks, so users can visually locate assets and spaces while the surrounding charts filter dynamically based on the current selection. At the bottom, classification charts (for example by Revit category or Tandem category) display how many elements are correctly classified versus unclassified, helping asset managers monitor how well the imported Revit model has been enriched with asset and maintenance information. Together, these components turn the BIM model into a dashboarded digital twin that supports maintainability decisions by combining geometry, asset metadata, and maintenance parameters in one place.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="dashboardSNOWDON.jpeg"
          alt="Autodesk Tandem Maintenance Dashboard"
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
          }}
        />
        <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
          <LayoutDashboard size={48} className="mb-2 opacity-50" />
          <span>Image not found: dashboardSNOWDON.jpeg</span>
        </div>
      </div>
    </div>
  </div>
);

// --- NEW REFLECTION COMPONENT ---
export const Week45Reflection = () => (
  <div className="space-y-6">
    {/* Reflection 1 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Challenges in Developing Artifacts & Data Integration
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          For the Multipurpose Digital Twin dashboard, we integrate three main dataset types from different information systems into Autodesk Tandem. First, the geometric and asset structure data (spaces, levels, Revit categories, and individual components) is imported from the architectural, structural, and MEP Revit models, which provide the backbone of the 3D view and the classification charts.
        </p>
        <p>
          Second, maintenance‑oriented metadata such as construction manuals, dates of last and next maintenance, and maintenance frequency is added as custom parameters within Tandem, either entered manually or imported from supporting spreadsheets, and then linked to the corresponding BIM assets so completeness can be monitored on the dashboard.
        </p>
        <p>
          Third, where available, operational data such as sensor streams (for example temperature and humidity) or externally logged condition information can be connected from separate data sources into Tandem classifications, allowing these readings to be associated with specific assets and visualized alongside the model for better maintenance decision‑making.
        </p>
      </div>
    </div>

    {/* Reflection 2 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Wrench className="text-blue-600" size={20} />
        Impact on Asset Management Decisions
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          The digital twin dashboard helps as an Asset Manager because it brings location, documentation, and maintenance status together in one interactive view, so you can see immediately which systems are where and how complete their asset data is. The parameter‑completeness and classification widgets highlight missing manuals, dates, or classifications, which improves decisions about where to focus data‑cleaning efforts and which assets are ready for inclusion in formal maintenance plans.
        </p>
        <p>
          The navigable 3D model supports day‑to‑day choices such as planning access for interventions or grouping work orders by level or block, while the charts give a quick basis for higher‑level decisions on prioritising critical assets, scheduling inspections, and justifying maintenance budgets to other stakeholders.
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
          With more time and resources, we would first complete and standardize the asset data model behind the digital twin by expanding and cleaning key maintenance parameters (manuals, last/next maintenance dates, frequencies) for all critical systems and aligning these with a shared parameter library so imports from Revit remain consistent over time.
        </p>
        <p>
          Next, we would integrate Tandem with external systems such as a maintenance management system or ERP, so that work orders, costs, and spare‑parts data can be linked directly to assets and visualized on the same dashboard. We would also connect additional IoT streams (for example temperature, humidity, or equipment‑status sensors) and use Tandem’s streams and classification features to overlay live performance data on the 3D model, enabling condition‑based maintenance and early detection of anomalies.
        </p>
        <p>
          Finally, we would configure role‑specific dashboard views—for facility managers, financial controllers, and sustainability officers—so that each stakeholder sees tailored KPIs and can make better decisions using the same underlying digital twin, rather than working in separate, disconnected tools.
        </p>
      </div>
    </div>
  </div>
);