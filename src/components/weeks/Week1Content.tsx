// src/components/weeks/Week1Content.tsx
import { Users, Layers, HardHat, Database, Cpu, FileText } from 'lucide-react';
import { DownloadButton } from '../SharedUI';

export const Week1Background = () => (
  <div className="space-y-6">
    <p className="text-slate-600 mb-4">
      The Snowdon Towers project involves a complex network of
      stakeholders interacting across the asset lifecycle. Below is the
      breakdown of key groups and their information flows.
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {/* Client Group */}
      <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
        <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-3">
          <Users size={18} /> Client, Users & Operations
        </h4>
        <ul className="space-y-3 text-sm text-blue-900/80">
          <li className="leading-relaxed">
            <strong className="text-blue-900">Owner / Client:</strong> Sets
            project goals, budget, sustainability targets, and defines
            information requirements for Tandem and handover.
          </li>
          <li className="leading-relaxed">
            <strong className="text-blue-900">FM / Operations:</strong> Future
            operators relying on the digital twin for maintenance and asset
            tracking.
          </li>
          <li className="leading-relaxed">
            <strong className="text-blue-900">End Users:</strong> Their
            comfort and space needs drive requirements feeding into
            Revit design and Insight analysis.
          </li>
        </ul>
      </div>

      {/* Design Group */}
      <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 shadow-sm">
        <h4 className="font-bold text-indigo-800 flex items-center gap-2 mb-3">
          <Layers size={18} /> Design & Engineering
        </h4>
        <ul className="space-y-3 text-sm text-indigo-900/80">
          <li className="leading-relaxed">
            <strong className="text-indigo-900">Architect:</strong> Leads
            building layout in Revit, coordinates the BIM model, and uses
            Insight for performance iterations.
          </li>
          <li className="leading-relaxed">
            <strong className="text-indigo-900">Structural & MEP:</strong>{' '}
            Develop discipline models, ensure clash-free design via
            Navisworks, and supply data for Tandem.
          </li>
          <li className="leading-relaxed">
            <strong className="text-indigo-900">Sustainability Engineer:</strong>{' '}
            Interprets Insight outputs (energy, carbon) to advise on
            performance targets.
          </li>
        </ul>
      </div>

      {/* Construction Group */}
      <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
        <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
          <HardHat size={18} /> Construction & Delivery
        </h4>
        <ul className="space-y-3 text-sm text-amber-900/80">
          <li className="leading-relaxed">
            <strong className="text-amber-900">Main Contractor:</strong> Uses 4D
            BIM (Revit + MS Project + Navisworks) for phasing and site
            coordination.
          </li>
          <li className="leading-relaxed">
            <strong className="text-amber-900">Subcontractors:</strong> Use
            coordinated models for quantity take-off, prefabrication, and
            as-built data feedback.
          </li>
        </ul>
      </div>

      {/* IM Group */}
      <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
        <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-3">
          <Database size={18} /> Information Management
        </h4>
        <ul className="space-y-3 text-sm text-emerald-900/80">
          <li className="leading-relaxed">
            <strong className="text-emerald-900">BIM Manager:</strong> Manages
            standards, coordinates exchanges (IFC/NWC), and defines data flows.
          </li>
          <li className="leading-relaxed">
            <strong className="text-emerald-900">Project Manager:</strong>{' '}
            Oversees scope and time, ensuring BIM outputs support
            contractual deliverables.
          </li>
        </ul>
      </div>

      {/* Digital Twin Group */}
      <div className="md:col-span-2 bg-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
          <Cpu size={18} /> Digital Twin & Data Governance
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800 block mb-1">
              Asset Information Manager
            </strong>
            Responsible for structuring, validating, and maintaining the
            asset information model in Tandem for accuracy during
            operations.
          </div>
          <div className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800 block mb-1">
              IT / Data Governance
            </strong>
            Supports integration between BIM tools and organizational
            systems, ensuring data security and long-term availability.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Week1Artifact = () => (
  <div className="space-y-6">
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        BIM Execution Plan (BEP)
      </h4>
      
      <div className="prose prose-slate text-slate-600 mb-6 text-sm">
        <p>
          This BEP defines the goals for the Snowdon Towers project. 
          It establishes the LOD (Level of Development) for each phase 
          and ensures that the Main Contractor and Architect are using 
          compatible file formats (IFC 2x3).
        </p>
      </div>

      {/* PDF Preview Container */}
      <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-red-50 p-2 rounded-lg border border-red-100">
              <FileText className="text-red-600" size={20} />
            </div>
            <div>
               <span className="font-semibold text-slate-900 block text-sm">BEP_Group11.pdf</span>
               <span className="text-xs text-slate-500">Project Execution Plan Document</span>
            </div>
          </div>

          {/* The Preview Window */}
          <div className="aspect-[3/4] bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                  src="BEP_Group11.pdf" 
                  className="w-full h-full"
                  title="BIM Execution Plan PDF"
              />
          </div>

          {/* Download Button */}
          <DownloadButton 
              label="Download BEP (.pdf)" 
              href="BEP_Group11.pdf" 
              subtext="Opens the PDF file in a new tab"
          />
      </div>
    </div>
  </div>
);

export const Week1Reflection = () => (
  <div className="space-y-6">
    {/* Question 1 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        1. What are the challenges in developing a BIM Execution Plan?
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          For a first BEP on Snowdon Towers, the biggest difficulty was actually starting without a clear, agreed project scope. Without a real client or well‑defined information requirements, deciding what to include (how detailed the processes should be) felt quite arbitrary and made it hard to design a coherent structure for the ODL. Another major challenge was estimating workload and dividing tasks fairly within the group. As students, we had little experience with how long specific BIM tasks actually take. This imbalance only became visible once deadlines approached, which led to last‑minute reallocation of responsibilities.
        </p>
        <p>
          Planning and scheduling were also problematic because our BEP deadlines followed the course structure and not the reality of our personal schedules or other courses. We set ideal milestones for model exchanges, clash detection rounds, and BEP updates that looked neat on paper but did not align with other courses and deadlines, making the planning quite unrealistic in practice. As a result, some BEP commitments were skipped or compressed, and the plan became more of a theoretical document than a fully followed management tool.
        </p>
        <p>
          On top of that, working with standards and templates (ISO 19650 ideas, the BIM PxP template, and course guidelines) was conceptually helpful but also overwhelming for a first project. We struggled to translate formal concepts like information delivery milestones, roles, or naming conventions into something simple enough that our team would actually use, rather than copy‑pasting correct looking text. This tension between doing it by the book and keeping it workable for a student project was a recurring challenge.
        </p>
      </div>
    </div>

    {/* Question 2 */}
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-3 text-lg">
        2. What is the added value of a BIM Execution Plan for companies and organizations?
      </h4>
      <div className="text-slate-600 leading-relaxed text-sm space-y-4">
        <p>
          Working through a BEP for Snowdon Towers made its added value more tangible throughout the process, especially when we imagined scaling our experience up to (inter)company level. Even in a small student team, the BEP did help clarify who was responsible for which model, who coordinated clashes, and when model versions needed to be shared, which reduced confusion and duplicated work. For organizations with many parallel projects and larger teams, this would help standardize collaboration and make roles and expectations clear across disciplines.
        </p>
        <p>
          The BEP also forced us to think ahead about information needs instead of just modelling as we go. Defining basic BIM uses (coordination, simple 4D, some asset data) and related deliverables helped us prioritize effort and avoid spending time on tasks that did not support any agreed goal. In a company setting, this focus would translate into better use of resources, more targeted modelling, and fewer unnecessary details being produced simply because the software allows it.
        </p>
        <p>
          From a process perspective, documenting file‑naming rules, model‑exchange moments, and simple quality checks gave our team a more stable workflow. For organizations, having such BEP‑based routines would make onboarding new team members easier, support consistent quality across projects, and create a basis for continuous improvement of internal BIM standards. Over time, companies could refine their BEP templates based on experience, so each new project starts with a more realistic plan than our first attempt as students.
        </p>
      </div>
    </div>
  </div>
);