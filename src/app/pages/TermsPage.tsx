import { motion } from "motion/react";
import { ShieldCheck, XCircle, DollarSign, RefreshCw, Lock, FileCheck } from "lucide-react";

export function TermsPage() {
  const terms = [
    {
      icon: XCircle,
      title: "No Double Resale",
      description:
        "Once a ticket is listed on SafarSwap, it cannot be sold on any other platform or resold after purchase.",
      color: "red",
    },
    {
      icon: DollarSign,
      title: "Price Limitation",
      description:
        "Resale price must be equal to or less than the original ticket price. No inflated pricing allowed.",
      color: "yellow",
    },
    {
      icon: RefreshCw,
      title: "Operator Approval",
      description:
        "Bus operator must allow ticket name transfer. Verify this before listing your ticket.",
      color: "blue",
    },
    {
      icon: FileCheck,
      title: "Ticket Transfer",
      description:
        "Ticket ownership transfers from seller to buyer upon successful payment and verification.",
      color: "green",
    },
    {
      icon: Lock,
      title: "In-App Payments Only",
      description:
        "All transactions must be completed through SafarSwap. External payments are prohibited and not protected.",
      color: "purple",
    },
    {
      icon: ShieldCheck,
      title: "Verified Tickets Only",
      description:
        "Only genuine, verified bus tickets can be listed. Fake tickets will result in account suspension.",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: "from-red-500/10 to-red-500/5 border-red-500/30",
      yellow: "from-yellow-500/10 to-yellow-500/5 border-yellow-500/30",
      blue: "from-blue-500/10 to-blue-500/5 border-blue-500/30",
      green: "from-green-500/10 to-green-500/5 border-green-500/30",
      purple: "from-purple-500/10 to-purple-500/5 border-purple-500/30",
    };
    return colors[color] || colors.green;
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      red: "text-red-400",
      yellow: "text-yellow-400",
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms & <span className="text-[#FFD600]">Conditions</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Please read these terms carefully to ensure a safe and fair ticket
            resale experience for everyone
          </p>
        </motion.div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {terms.map((term, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${getColorClasses(
                term.color
              )} backdrop-blur-xl border rounded-2xl p-6`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <term.icon className={`w-6 h-6 ${getIconColor(term.color)}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {term.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {term.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Important Guidelines</h2>
          <div className="space-y-4 text-white/70">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Payment Security:</strong> All
                payments are held securely by SafarSwap and released to sellers only
                after successful journey completion.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Gender Safety:</strong> Adjacent seat
                matching follows gender preferences to ensure comfortable and safe
                travel for all users.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Cancellation Policy:</strong> Tickets
                cannot be cancelled once sold. Buyers receive full refund if seller
                fails to transfer the ticket.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Verification Required:</strong> All
                tickets must be verified through official booking confirmations or
                screenshots before listing.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Account Suspension:</strong> Violation
                of any terms may result in immediate account suspension and forfeiture
                of active transactions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 flex-shrink-0" />
              <p>
                <strong className="text-white">Dispute Resolution:</strong> All
                disputes will be handled by SafarSwap's support team with final
                decisions based on evidence provided.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Acceptance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-white/60 text-sm mb-6">
            By using SafarSwap, you agree to these terms and conditions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-[#FFD600] text-black font-bold rounded-xl hover:bg-[#FFD600]/90 transition-all">
              I Accept
            </button>
            <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
