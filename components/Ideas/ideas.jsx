const Ide = () => {
    
  return (
    <>
      {" "}
      <div className="p-6">
        {/* Responsive Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* Top Row: Meta and Icon Placeholder */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 tracking-tight">
                  {stat.title}
                </span>
                <MockIcon />
              </div>

              {/* Bottom Row: Metrics Display */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {/* Table Header Area */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
                Recent Transactions
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Real-time feed of multi-service outlet activity logs.
              </p>
            </div>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
              View All Logs
            </button>
          </div>

          {/* Semantic Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  <th className="px-6 py-3">Transaction ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Service Type</th>
                  <th className="px-6 py-3">Log Details</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Timestamp</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                {recentLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50/70 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono font-medium text-gray-900">
                      {log.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {log.customer}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          log.serviceType === "Courier Logistics"
                            ? "bg-purple-50 text-purple-700 border border-purple-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        }`}
                      >
                        {log.serviceType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                      {log.details}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {log.amount}
                    </td>
                    <td className="px-6 py-4 text-gray-400">{log.time}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          log.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : log.status === "Dispatched"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ide;
