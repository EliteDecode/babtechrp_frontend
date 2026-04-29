import DataTable, { Column } from "@/components/ui/DataTable";
import { IWithdrawal } from "@/types/wallet.types";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { useSelector } from "react-redux";

const Badge = ({
  variant,
  children,
}: {
  variant: "success" | "warning" | "danger" | "purple";
  children: React.ReactNode;
}) => {
  const styles = {
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-orange-50 text-orange-600 border-orange-100",
    danger: "bg-red-50 text-red-600 border-red-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${styles[variant]}`}>
      {children}
    </span>
  );
};

const WithdrawalTable: React.FC = () => {
  const { withdrawals } = useSelector((state: any) => state.wallet);

  const columns: Column<IWithdrawal>[] = [
    {
      key: "amount",
      title: "Amount",
      dataIndex: "amount",
      render: (val) => (
        <span className="text-xs font-bold text-gray-900">
          ₦{Number(val).toLocaleString()}
        </span>
      ),
    },
    {
      key: "status",
      title: "Status",
      align: "center",
      render: (_, record) => {
        if (record.status === "approved")
          return (
            <Badge variant="success">
              <CheckCircle2 size={10} />
              Approved
            </Badge>
          );
        if (record.status === "pending")
          return (
            <Badge variant="warning">
              <Clock size={10} />
              Pending
            </Badge>
          );
        return (
          <Badge variant="danger">
            <XCircle size={10} />
            Declined
          </Badge>
        );
      },
    },
    {
      key: "date",
      title: "Date",
      align: "center",
      render: (_, record) => (
        <Badge variant="purple">
          {new Date(record.date).toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Badge>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={withdrawals ?? []}
      rowKey="_id"
      searchPlaceholder="Search withdrawals..."
      pageSize={10}
    />
  );
};

export default WithdrawalTable;
