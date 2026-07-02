import DashboardTable from "@/app/(main)/dashboard/DashboardTable";

const AllTransaction = () => {
  return (
    <>
      <DashboardTable limit={0} btn={false} head="All Transactions" />
    </>
  );
};

export default AllTransaction;
