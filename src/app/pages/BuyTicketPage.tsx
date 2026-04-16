import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Filter, Star, ShieldCheck, Heart, User } from "lucide-react";

type Ticket = {
  id: string;
  route: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seat: string;
  price: number;
  originalPrice: number;
  operator: string;
  sellerRating: number;
  sellerGender: "male" | "female";
  verified: boolean;
  safeForFemale: boolean;
};

const mockTickets: Ticket[] = [
  {
    id: "1",
    from: "Mumbai",
    to: "Pune",
    route: "Mumbai → Pune",
    date: "2026-04-15",
    time: "08:30 AM",
    seat: "A12",
    price: 950,
    originalPrice: 1200,
    operator: "VRL Travels",
    sellerRating: 4.8,
    sellerGender: "female",
    verified: true,
    safeForFemale: true,
  },
  {
    id: "2",
    from: "Delhi",
    to: "Jaipur",
    route: "Delhi → Jaipur",
    date: "2026-04-16",
    time: "10:00 AM",
    seat: "B5",
    price: 800,
    originalPrice: 1000,
    operator: "RedBus Express",
    sellerRating: 4.5,
    sellerGender: "male",
    verified: true,
    safeForFemale: false,
  },
  {
    id: "3",
    from: "Bangalore",
    to: "Chennai",
    route: "Bangalore → Chennai",
    date: "2026-04-17",
    time: "11:30 PM",
    seat: "C8",
    price: 1100,
    originalPrice: 1400,
    operator: "SRS Travels",
    sellerRating: 4.9,
    sellerGender: "female",
    verified: true,
    safeForFemale: true,
  },
  {
    id: "4",
    from: "Hyderabad",
    to: "Vijayawada",
    route: "Hyderabad → Vijayawada",
    date: "2026-04-18",
    time: "06:00 AM",
    seat: "D3",
    price: 650,
    originalPrice: 850,
    operator: "Orange Travels",
    sellerRating: 4.6,
    sellerGender: "male",
    verified: true,
    safeForFemale: false,
  },
];

export function BuyTicketPage() {
  const [filters, setFilters] = useState({
    route: "",
    date: "",
    gender: "all",
  });

  const filteredTickets = mockTickets.filter((ticket) => {
    if (filters.route && !ticket.route.toLowerCase().includes(filters.route.toLowerCase())) {
      return false;
    }
    if (filters.date && ticket.date !== filters.date) {
      return false;
    }
    if (filters.gender === "female" && !ticket.safeForFemale) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Buy <span className="text-[#FFD600]">Tickets</span>
          </h1>
          <p className="text-white/60">
            Find verified tickets from trusted sellers
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#FFD600]" />
            <h3 className="text-white font-bold">Filters</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search route..."
                value={filters.route}
                onChange={(e) => setFilters({ ...filters, route: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#FFD600] transition-all"
              />
            </div>
            <select
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-xl py-2.5 px-4 text-white focus:outline-none focus:border-[#FFD600] transition-all"
            >
              <option value="all" className="bg-black">All Tickets</option>
              <option value="female" className="bg-black">Safe for Female</option>
            </select>
          </div>
        </motion.div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-[#FFD600]/50 transition-all cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {ticket.route}
                  </h3>
                  <p className="text-white/60 text-sm">{ticket.operator}</p>
                </div>
                {ticket.verified && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Date & Time</span>
                  <span className="text-white font-semibold">
                    {new Date(ticket.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    • {ticket.time}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Seat Number</span>
                  <span className="text-white font-semibold">{ticket.seat}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Seller Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#FFD600] fill-[#FFD600]" />
                    <span className="text-white font-semibold">
                      {ticket.sellerRating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Safety Badge */}
              {ticket.safeForFemale && (
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-3 mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                  <span className="text-pink-400 text-sm font-semibold">
                    Safe for Female
                  </span>
                </div>
              )}

              {/* Gender Badge */}
              <div className="flex items-center gap-2 mb-4">
                <User className="w-4 h-4 text-white/50" />
                <span className="text-white/60 text-sm">
                  Seller:{" "}
                  <span className="text-white capitalize">{ticket.sellerGender}</span>
                </span>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-white/60 text-sm line-through">
                    ₹{ticket.originalPrice}
                  </p>
                  <p className="text-2xl font-black text-[#FFD600]">
                    ₹{ticket.price}
                  </p>
                </div>
                <button className="px-6 py-2.5 bg-[#FFD600] text-black font-bold rounded-xl hover:bg-[#FFD600]/90 transition-all group-hover:scale-105">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTickets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/60 text-lg">
              No tickets found matching your filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
