import { motion } from "motion/react";
import { Calendar, Clock, MapPin, CheckCircle2, Loader, XCircle } from "lucide-react";

type Activity = {
  id: string;
  type: "sold" | "bought" | "pending";
  route: string;
  date: string;
  time: string;
  seat: string;
  price: number;
  operator: string;
  status: "completed" | "pending" | "cancelled";
  transactionDate: string;
};

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "sold",
    route: "Mumbai → Pune",
    date: "2026-04-15",
    time: "08:30 AM",
    seat: "A12",
    price: 950,
    operator: "VRL Travels",
    status: "completed",
    transactionDate: "2026-04-10",
  },
  {
    id: "2",
    type: "bought",
    route: "Delhi → Jaipur",
    date: "2026-04-20",
    time: "10:00 AM",
    seat: "B5",
    price: 800,
    operator: "RedBus Express",
    status: "pending",
    transactionDate: "2026-04-12",
  },
  {
    id: "3",
    type: "pending",
    route: "Bangalore → Chennai",
    date: "2026-04-25",
    time: "11:30 PM",
    seat: "C8",
    price: 1100,
    operator: "SRS Travels",
    status: "pending",
    transactionDate: "2026-04-13",
  },
  {
    id: "4",
    type: "sold",
    route: "Hyderabad → Vijayawada",
    date: "2026-03-28",
    time: "06:00 AM",
    seat: "D3",
    price: 650,
    operator: "Orange Travels",
    status: "completed",
    transactionDate: "2026-03-20",
  },
];

export function MyActivityPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Loader className="w-5 h-5 text-yellow-400 animate-spin" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "pending":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";
      case "cancelled":
        return "bg-red-500/10 border-red-500/30 text-red-400";
      default:
        return "";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "sold":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      case "bought":
        return "bg-purple-500/10 border-purple-500/30 text-purple-400";
      case "pending":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            My <span className="text-[#FFD600]">Activity</span>
          </h1>
          <p className="text-white/60">
            Track all your ticket transactions and status
          </p>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6"
          >
            <p className="text-blue-400 mb-2">Total Sold</p>
            <p className="text-4xl font-black text-white">
              {mockActivities.filter((a) => a.type === "sold").length}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6"
          >
            <p className="text-purple-400 mb-2">Total Bought</p>
            <p className="text-4xl font-black text-white">
              {mockActivities.filter((a) => a.type === "bought").length}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-2xl p-6"
          >
            <p className="text-yellow-400 mb-2">Pending</p>
            <p className="text-4xl font-black text-white">
              {mockActivities.filter((a) => a.status === "pending").length}
            </p>
          </motion.div>
        </div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {mockActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-[#FFD600]/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 border rounded-lg text-xs font-bold uppercase ${getTypeColor(
                        activity.type
                      )}`}
                    >
                      {activity.type}
                    </span>
                    <span
                      className={`px-3 py-1 border rounded-lg text-xs font-bold uppercase flex items-center gap-1.5 ${getStatusColor(
                        activity.status
                      )}`}
                    >
                      {getStatusIcon(activity.status)}
                      {activity.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {activity.route}
                  </h3>
                  <p className="text-white/60 text-sm mb-3">{activity.operator}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/50" />
                      <span className="text-white/80">
                        {new Date(activity.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-white/50" />
                      <span className="text-white/80">{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-white/50" />
                      <span className="text-white/80">Seat {activity.seat}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Transaction: </span>
                      <span className="text-white/80">
                        {new Date(activity.transactionDate).toLocaleDateString(
                          "en-IN",
                          { day: "numeric", month: "short" }
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Price & Actions */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                  <div className="text-right">
                    <p className="text-white/60 text-sm">
                      {activity.type === "sold" ? "Earned" : "Paid"}
                    </p>
                    <p className="text-2xl font-black text-[#FFD600]">
                      ₹{activity.price}
                    </p>
                  </div>
                  {activity.status === "pending" && (
                    <button className="px-5 py-2 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
