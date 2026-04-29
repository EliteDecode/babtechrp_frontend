import DataTable, { Column } from "@/components/ui/DataTable";
import { IReferralTable } from "@/types/referral.types";
import { CheckCircle2, Clock, Eye } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Badge = ({
  variant,
  children,
}: {
  variant: "success" | "warning" | "info" | "purple";
  children: React.ReactNode;
}) => {
  const styles = {
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-orange-50 text-orange-600 border-orange-100",
    info: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${styles[variant]}`}>
      {children}
    </span>
  );
};

const AllReferralsTables = () => {
  const { referrals } = useSelector((state: any) => state.referral);

  const columns: Column<IReferralTable>[] = [
    {
      key: "fullname",
      title: "Name",
      dataIndex: "fullname",
      searchable: true,
      render: (val) => (
        <span className="text-xs font-medium text-gray-800">{val}</span>
      ),
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
      searchable: true,
      render: (val) => (
        <span className="text-xs text-gray-500">{val}</span>
      ),
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
      searchable: true,
      render: (val) => (
        <span className="text-xs text-gray-500 font-mono">{val}</span>
      ),
    },
    {
      key: "course",
      title: "Course",
      dataIndex: "course",
      searchable: true,
      render: (val) => (
        <span className="text-xs text-gray-700">{val}</span>
      ),
    },
    {
      key: "status",
      title: "Status",
      align: "center",
      render: (_, record) =>
        record.isMatched ? (
          <Badge variant="success">
            <CheckCircle2 size={10} />
            Matched
          </Badge>
        ) : (
          <Badge variant="warning">
            <Clock size={10} />
            Pending
          </Badge>
        ),
    },
    {
      key: "createdAt",
      title: "Date",
      align: "center",
      render: (_, record) => (
        <Badge variant="purple">
          {new Date(record.createdAt).toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Badge>
      ),
    },
    {
      key: "action",
      title: "Action",
      align: "center",
      render: (_, record) => (
        <Link to={`/dashboard/view-referral/${record._id}`}>
          <button className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
            <Eye size={11} />
            View
          </button>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={referrals ?? []}
      rowKey="_id"
      searchPlaceholder="Search by name, email or phone..."
      pageSize={10}
    />
  );
};

export default AllReferralsTables;
