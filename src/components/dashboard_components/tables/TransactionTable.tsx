import DataTable, { Column } from "@/components/ui/DataTable";
import { TransactionProps } from "@/types/majorTypes";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useSelector } from "react-redux";

const Badge = ({
  variant,
  children,
}: {
  variant: "success" | "danger" | "purple";
  children: React.ReactNode;
}) => {
  const styles = {
    success: "bg-green-50 text-green-700 border-green-100",
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

const TransactionTable: React.FC = () => {
  const { wallets } = useSelector((state: any) => state.wallet);

  const columns: Column<TransactionProps>[] = [
    {
      key: "referralName",
      title: "Referral",
      dataIndex: "referralName",
      searchable: true,
      render: (val) => (
        <span className="text-xs font-medium text-gray-800">{val}</span>
      ),
    },
    {
      key: "referralPhone",
      title: "Phone",
      dataIndex: "referralPhone",
      searchable: true,
      render: (val) => (
        <span className="text-xs text-gray-500 font-mono">{val}</span>
      ),
    },
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
      key: "type",
      title: "Type",
      align: "center",
      render: (_, record) =>
        record.type === "credit" ? (
          <Badge variant="success">
            <ArrowUpRight size={10} />
            Credit
          </Badge>
        ) : (
          <Badge variant="danger">
            <ArrowDownLeft size={10} />
            Debit
          </Badge>
        ),
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
      data={wallets?.transactions ?? []}
      rowKey={(r) => `${r.referralName}-${r.date}`}
      searchPlaceholder="Search transactions..."
      pageSize={10}
    />
  );
};

export default TransactionTable;
