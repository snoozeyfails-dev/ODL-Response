import { Radio, Cpu, Activity, Glasses, Brain, Settings, AlertTriangle } from 'lucide-react';

export const Week8Background = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <Radio className="text-blue-600" size={20} />
        Future Technologies & Digital Twins
      </h3>
      <p className="text-slate-600">
        The Snowdon Towers project can evolve from static BIM dashboards into a connected, intelligent ecosystem using emerging technologies.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Connected Digital Twin */}
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
          <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
            <Activity size={18} /> Connected Digital Twin
          </h4>
          <p className="text-sm text-indigo-900/80 leading-relaxed">
            Streaming <strong>virtual sensor data</strong> (and later real IoT) for temperature, occupancy, and equipment status allows for <strong>predictive maintenance</strong> and rapid anomaly detection, moving beyond periodic inspections.
          </p>
        </div>

        {/* Immersive Tech */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
            <Glasses size={18} /> Immersive Tech (VR/AR)
          </h4>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            <strong>VR and AR</strong> enable stakeholder walkthroughs of safety-critical or high-energy areas, improving communication and understanding of complex spatial data.
          </p>
        </div>

        {/* AI Analytics */}
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
          <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
            <Brain size={18} /> AI-Based Analytics
          </h4>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            Mining historical and live data to suggest <strong>optimized schedules</strong>, low-carbon variants, or risk hot spots, enhancing sustainability and safety outcomes with minimal manual effort.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Week8Artifact = () => (
  <div className="space-y-8">
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Cpu className="text-blue-600" size={24} />
        Virtual Sensor Stream Dashboard (IoT)
      </h4>

      <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-6">
        <p>
          The virtual sensor stream dashboard in Autodesk Tandem overlays live environmental data directly onto the Snowdon Towers digital twin, turning the 3D model into a monitoring interface for indoor comfort.
        </p>
        <p>
          On the left, the Connections panel lists available streams (humidity and temperature sensors), showing their connection status so facility managers can immediately verify that data feeds are online. In the main 3D view, rooms and levels are colored according to the selected variable using a gradient legend (e.g., 29.5 to 30.5 °C or %RH), allowing users to see hot spots or overly humid zones at a glance.
        </p>
        <p>
          At the bottom, the Streams grid summarizes the latest reading, configured thresholds, and threshold values per room, which makes it easy to compare current conditions against comfort criteria and to trigger follow-up actions like adjusting HVAC settings.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <img
          src="Concept7Art1.jpg"
          alt="Autodesk Tandem Virtual Sensor Stream Dashboard"
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const next = target.nextSibling as HTMLElement;
            if (next) next.style.display = 'flex';
          }}
        />
        <div className="hidden h-64 flex-col items-center justify-center text-slate-400">
          <Activity size={48} className="mb-2 opacity-50" />
          <span>Image not found: Concept7Art1.jpg</span>
        </div>
      </div>
    </div>
  </div>
);

export const Week8Reflection = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Challenges in Developing Virtual Streams
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Developing the virtual sensor stream dashboard involved several conceptual and technical challenges. Initially, distinguishing this artifact from earlier work in Tandem was not straightforward; because we had already imported the BIM and created dashboards for maintenance and sustainability, it took time to understand that this task specifically required simulating real‑time sensor behavior and thinking in terms of a digital‑twin workflow rather than static asset data.
        </p>
        <p>
          On the implementation side, configuring the virtual streams proved non‑trivial: we had to experiment with different connection methods, data formats, and update intervals before the humidity and temperature feeds were correctly bound to rooms in the model and visualized with meaningful thresholds and color scales on the dashboard.
        </p>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg flex items-center gap-2">
        <Settings className="text-slate-600" size={20} />
        Future Improvements & Integration
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          With more time and resources, we would first expand the virtual sensor network beyond temperature and humidity by adding energy meters, occupancy sensors, and possibly noise sensors, so that the dashboard reflects thermal comfort, indoor environmental quality, and actual space use in a single view.
        </p>
        <p>
          We would then integrate these live streams with other models and tools, for example linking energy meters to the Insight sustainability dashboard and to HVAC control logic, so that spikes in electricity use or overheating can automatically trigger targeted investigations, setpoint adjustments, or maintenance work orders rather than relying only on manual inspection of the Tandem interface.
        </p>
      </div>
    </div>
  </div>
);