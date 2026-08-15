import React from "react";
import { EmcodeLogo } from "./EmcodeLogo";

interface Props {
  category: string;
  topic: string;
  badgeText?: string;
}

export const CorporateHeader: React.FC<Props> = ({
  category,
  topic,
  badgeText = "PRODUCTION READY",
}) => {
  return (
    <div className="w-full flex items-center justify-between p-6 bg-[#0F172A] border-b border-slate-800">
      <EmcodeLogo size={44} showText={true} />
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 uppercase">
          {category}
        </span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/60 uppercase font-semibold">
          {badgeText}
        </span>
      </div>
    </div>
  );
};
