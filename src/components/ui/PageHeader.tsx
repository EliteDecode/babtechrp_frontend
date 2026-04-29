import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  backHref?: string;
  backLabel?: string;
}

const PageHeader = ({
  title,
  subtitle,
  action,
  backHref,
  backLabel = "Back",
}: PageHeaderProps) => {
  return (
    <div className="mb-5">
      {backHref && (
        <Link
          to={backHref}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 mb-3 transition-colors group">
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          {backLabel}
        </Link>
      )}

      <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-sm">
        {/* Left: title + subtitle */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-1 self-stretch bg-primary rounded-full shrink-0" />
          <div className="min-w-0">
            <h1
              className="text-base font-bold text-gray-900 truncate"
              style={{ fontFamily: "eczar" }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-[11px] text-gray-400 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Right: action */}
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
