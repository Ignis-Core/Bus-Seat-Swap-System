import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Building2, Wallet, ShieldCheck, Lock } from "lucide-react";

export function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "wallet">("card");

  const paymentMethods = [
    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", label: "UPI", icon: Building2 },
    { id: "wallet", label: "Wallet", icon: Wallet },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Secure <span className="text-[#FFD600]">Payment</span>
          </h1>
          <p className="text-white/60">Complete your ticket purchase safely</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            {/* Payment Method Selection */}
            <div className="mb-8">
              <h3 className="text-white font-bold mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-3 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id as typeof paymentMethod)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === method.id
                        ? "border-[#FFD600] bg-[#FFD600]/10"
                        : "border-white/20 bg-white/5 hover:border-white/40"
                    }`}
                  >
                    <method.icon
                      className={`w-6 h-6 mx-auto mb-2 ${
                        paymentMethod === method.id ? "text-[#FFD600]" : "text-white/60"
                      }`}
                    />
                    <p
                      className={`text-xs ${
                        paymentMethod === method.id ? "text-white" : "text-white/60"
                      }`}
                    >
                      {method.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-semibold">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-semibold">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
              </motion.div>
            )}

            {/* UPI Payment */}
            {paymentMethod === "upi" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-semibold">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-all"
                  />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-sm text-center">
                    Or scan QR code with your UPI app
                  </p>
                  <div className="w-40 h-40 bg-white mx-auto mt-4 rounded-xl flex items-center justify-center">
                    <p className="text-black text-xs">QR Code</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Wallet Payment */}
            {paymentMethod === "wallet" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-6 h-6 text-[#FFD600]" />
                    <div>
                      <p className="text-white font-semibold">Paytm</p>
                      <p className="text-white/60 text-sm">Balance: ₹2,450</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-all">
                    Select
                  </button>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-6 h-6 text-[#FFD600]" />
                    <div>
                      <p className="text-white font-semibold">PhonePe</p>
                      <p className="text-white/60 text-sm">Balance: ₹1,820</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-all">
                    Select
                  </button>
                </div>
              </motion.div>
            )}

            {/* Pay Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FFD600] text-black py-4 rounded-xl font-bold mt-8 hover:bg-[#FFD600]/90 transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Pay ₹950
            </motion.button>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 space-y-6"
          >
            {/* Summary Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h3 className="text-white font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-white/60 text-sm">Route</p>
                  <p className="text-white font-semibold">Mumbai → Pune</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Date & Time</p>
                  <p className="text-white font-semibold">15 Apr • 08:30 AM</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Seat</p>
                  <p className="text-white font-semibold">A12</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Operator</p>
                  <p className="text-white font-semibold">VRL Travels</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Ticket Price</span>
                  <span className="text-white">₹950</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Platform Fee</span>
                  <span className="text-white">₹0</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-[#FFD600] font-black text-xl">₹950</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-2">सुरक्षित Payment</h4>
                  <p className="text-white/60 text-sm mb-3">
                    Your money will be released to the seller only after journey
                    completion
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-xs">
                    <Lock className="w-3 h-3" />
                    <span>256-bit SSL Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
