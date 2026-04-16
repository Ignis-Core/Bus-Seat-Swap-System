import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Clock, Bus, DollarSign, Upload, AlertCircle, CheckCircle2, X } from "lucide-react";

export function SellTicketPage() {
  const [ticketData, setTicketData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    operator: "",
    seatNumber: "",
    price: "",
    originalPrice: "1200",
  });
  const [ticketFile, setTicketFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const priceError = Number(ticketData.price) > Number(ticketData.originalPrice);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTicketFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setTicketFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Sell Your <span className="text-[#FFD600]">Ticket</span>
          </h1>
          <p className="text-white/60">
            Fill in your ticket details and upload verification
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
        >
          <form className="space-y-6">
            {/* Route */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Source City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    value={ticketData.source}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, source: e.target.value })
                    }
                    placeholder="Mumbai"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Destination City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FFD600]" />
                  <input
                    type="text"
                    value={ticketData.destination}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, destination: e.target.value })
                    }
                    placeholder="Pune"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="date"
                    value={ticketData.date}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, date: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Departure Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="time"
                    value={ticketData.time}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, time: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Operator & Seat */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Bus Operator
                </label>
                <div className="relative">
                  <Bus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    value={ticketData.operator}
                    onChange={(e) =>
                      setTicketData({ ...ticketData, operator: e.target.value })
                    }
                    placeholder="e.g., RedBus, VRL Travels"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  Seat Number
                </label>
                <input
                  type="text"
                  value={ticketData.seatNumber}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, seatNumber: e.target.value })
                  }
                  placeholder="A12"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-white/80 mb-2 text-sm font-semibold">
                Resale Price (₹)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="number"
                  value={ticketData.price}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, price: e.target.value })
                  }
                  placeholder="1000"
                  className={`w-full bg-white/10 border rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none transition-all ${
                    priceError
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/20 focus:border-[#FFD600]"
                  }`}
                />
              </div>
              <div className="mt-2 text-sm text-white/60">
                Original Price: ₹{ticketData.originalPrice}
              </div>
              {priceError && (
                <div className="mt-2 flex items-start gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    Resale price cannot exceed original price. Maximum allowed:
                    ₹{ticketData.originalPrice}
                  </span>
                </div>
              )}
            </div>

            {/* Operator Approval Warning */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-yellow-500 font-semibold mb-1">
                  Operator Approval Required
                </p>
                <p className="text-yellow-200/80">
                  Ensure your bus operator allows ticket name transfer before
                  listing.
                </p>
              </div>
            </div>

            {/* Upload Ticket */}
            <div>
              <label className="block text-white/80 mb-3 text-sm font-semibold">
                Upload Ticket
              </label>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
                  dragActive
                    ? "border-[#FFD600] bg-[#FFD600]/10"
                    : "border-white/30 hover:border-white/50"
                }`}
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,.pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {ticketFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                    <div className="text-left">
                      <p className="text-white font-semibold">{ticketFile.name}</p>
                      <p className="text-white/60 text-sm">
                        {(ticketFile.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setTicketFile(null);
                      }}
                      className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-white/60" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-white/40 mx-auto mb-3" />
                    <p className="text-white mb-1">
                      Drag & drop your ticket here
                    </p>
                    <p className="text-white/60 text-sm">
                      or click to browse (PDF, JPG, PNG)
                    </p>
                  </div>
                )}
              </div>
              {ticketFile && (
                <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Ticket</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={priceError}
              className="w-full bg-[#FFD600] text-black py-4 rounded-xl font-bold hover:bg-[#FFD600]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              List Ticket for Sale
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
