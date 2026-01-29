// src/components/SharedUI.tsx
import { Download, Info } from 'lucide-react';

export const DescriptionTextArea = ({ placeholder }: { placeholder?: string }) => (
  <textarea
    className="w-full p-3 border border-slate-200 rounded-lg text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px] mb-4 bg-white"
    placeholder={placeholder || 'Add a description for this artifact...'}
  />
);

export const DownloadButton = ({
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