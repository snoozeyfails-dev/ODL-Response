import { Leaf, Users, Database, BarChart, Settings, AlertTriangle, PieChart, Box, Globe } from 'lucide-react';


export const Week6Background = () => (
  <div className="space-y-8">
    {/* Stakeholders Section */}
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Stakeholders Ensuring Sustainability
      </h3>
      <p className="text-slate-600">
        Sustainability in Snowdon Towers involves a collaboration between strategic decision-makers, technical designers, and operational end-users.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Strategic Level */}
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
          <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
            <Globe size={18} /> Strategic & Regulatory
          </h4>
          <p className="text-sm text-indigo-900/80 leading-relaxed">
            The <strong>Client/Owner</strong> sets environmental ambitions and approves investments. <strong>Regulatory bodies</strong> enforce energy performance and emissions regulations.
          </p>
        </div>

        {/* Design & Analysis */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
            <Box size={18} /> Design & Analysis
          </h4>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            The <strong>Design Team</strong> (Architects, Engineers) translates goals into model elements. <strong>Sustainability Specialists</strong> use tools like Autodesk Insight to quantify carbon and propose optimizations.
          </p>
        </div>

        {/* Execution & Operation */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
          <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <Users size={18} /> Execution & Operation
          </h4>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            The <strong>Project Manager</strong> coordinates budget/time for feasibility. <strong>Facility Managers & Users</strong> influence sustainability through operational behavior and lifecycle feedback.
          </p>
        </div>
      </div>
    </div>

    {/* Datasets Section */}
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
              <th className="p-4">Integration Workflow</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Box size={16} className="text-slate-400" /> Revit BIM Files
              </td>
              <td className="p-4 text-slate-600">
                Geometric model and material assignments from architectural, structural, and MEP files, providing quantities and building elements.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <Globe size={16} className="text-slate-400" /> External Databases
              </td>
              <td className="p-4 text-slate-600">
                Material and carbon databases embedded in tools like <strong>Autodesk Insight</strong>, storing embodied carbon factors and lifecycle coefficients.
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="p-4 font-medium text-slate-900 flex items-center gap-2">
                <BarChart size={16} className="text-slate-400" /> Analysis Platform
              </td>
              <td className="p-4 text-slate-600">
                Processes combined data to output component-level carbon contributions and performance indicators supporting sustainable decisions.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const Week6Artifact = () => (
  <div className="space-y-8">
    {/* Sustainability Dashboard */}
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Leaf className="text-emerald-600" size={24} />
        Sustainability Analysis Dashboard
      </h4>
      
      <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-8">
        <p>
          The sustainability dashboard in Autodesk Insight links the Snowdon Towers BIM model to carbon and energy performance metrics, turning the 3D architecture into a quantitative overview of environmental impact. On the main screen, the left-hand 3D view highlights building elements by construction type, while adjacent tiles summarize key context such as building location, use type, floor area, and assumed lifespan, which define the basis for the calculations.
        </p>
        <p>
          Central metric cards display total carbon, embodied carbon, operational carbon, and annual energy use intensity (kWh/m²·yr), each visualized with bar charts so users can compare overall emissions and energy demand at a glance.
        </p>
      </div>

      {/* Image 1: Main Dashboard */}
      <div className="mb-8 border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="Concept5Art1.png"
          alt="Autodesk Insight Main Dashboard"
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
          }}
        />
        <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
          <BarChart size={48} className="mb-2 opacity-50" />
          <span>Image not found: Concept5Art1.png</span>
        </div>
        <p className="p-2 text-xs text-center text-slate-500 bg-slate-50 border-t">
          Figure 1: Main Insight Dashboard showing Carbon & Energy Metrics
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-8">
        <p>
          A second view drills down into embodied carbon by component: a 3D construction view, a pie chart splitting total embodied carbon across roofs, walls, floors, openings, and slabs, and a detailed table listing each construction assembly with its area, mass, thermal performance, and associated kgCO₂e. Together, these linked visuals allow designers and sustainability managers to trace where most carbon and energy use originates in Snowdon Towers and to quickly test which envelope or material changes would have the greatest effect on reducing the building’s footprint.
        </p>
      </div>

      {/* Image 2: Detailed Breakdown */}
      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="Concept5Art2.png"
          alt="Embodied Carbon Breakdown by Component"
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
          }}
        />
        <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
          <PieChart size={48} className="mb-2 opacity-50" />
          <span>Image not found: Concept5Art2.png</span>
        </div>
        <p className="p-2 text-xs text-center text-slate-500 bg-slate-50 border-t">
          Figure 2: Embodied Carbon Breakdown by Component
        </p>
      </div>
    </div>
  </div>
);

// --- NEW REFLECTION COMPONENT ---
export const Week6Reflection = () => (
  <div className="space-y-6">
    {/* Challenges */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Challenges in Developing Sustainability Artifacts
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Developing the sustainability dashboard for Snowdon Towers came with several challenges, starting with the need to heavily simplify the original BIM model before importing it into Autodesk Insight; the level of detail in the design files meant that many minor components had to be removed or aggregated to keep calculation times reasonable and avoid misleadingly fine‑grained results.
        </p>
        <p>
          Another key issue was harmonizing embodied‑carbon data, since coefficients originate from different databases and assumptions, so materials in the model had to be carefully mapped to the correct datasets to prevent inconsistent kgCO₂e values. Finally, getting meaningful breakdowns by component and construction type required strict parameter naming and classification in Revit and Insight; any missing or mis‑tagged assemblies would either be grouped as “other” or excluded from the charts, which made iterative checking and re‑exporting necessary before the dashboard reliably reflected Snowdon Towers’ true carbon and energy profile.
        </p>
      </div>
    </div>

    {/* PM Decision Making */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        Impact on Project Manager Decision-Making
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          The sustainability dashboards turn Snowdon Towers’ BIM model into a measurable carbon and energy baseline, so as a project manager I can compare design options using quantified indicators rather than qualitative impressions. The high‑level Insight view helps me decide on envelope strategies and building systems: by seeing total, embodied, and operational carbon alongside annual energy use intensity, I can prioritize whether to focus effort on material substitutions (embodied carbon) or on improving HVAC, glazing, and shading (operational carbon) to meet project targets.
        </p>
        <p>
          The detailed embodied‑carbon breakdown by construction type and assembly then guides more granular decisions, such as which wall, floor, or roof build‑ups to change, where low‑carbon alternatives give the biggest kgCO₂e reduction per square meter, and which design changes offer the best sustainability gain for the least cost or disruption.
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
          With more time and resources, we would first strengthen the data foundations of the Insight dashboards by standardizing material definitions in Revit and connecting them to a single, vetted embodied‑carbon database, ensuring that every assembly in Snowdon Towers uses consistent coefficients and that scenario updates propagate automatically.
        </p>
        <p>
          We would then integrate the Insight outputs with additional project information systems—for example, linking embodied‑carbon results to cost and planning data or to the Tandem digital twin—so that alternative design options can be evaluated simultaneously on kgCO₂e, payback time, construction impact, and operational performance. Finally, we would explore periodic or near real‑time data imports (such as metered energy use) to calibrate the operational‑carbon side of the dashboard and develop automated reports and stakeholder‑specific views, thereby embedding these sustainability insights directly into design reviews, value‑engineering workshops, and long‑term asset‑management decisions.
        </p>
      </div>
    </div>
  </div>
);