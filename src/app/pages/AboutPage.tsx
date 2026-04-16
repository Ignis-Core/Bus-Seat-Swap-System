import { motion } from "motion/react";
import { TrendingDown, TrendingUp, ShieldCheck, Users, Target, Zap } from "lucide-react";

export function AboutPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Secure",
      description: "Bank-level encryption and verified transactions",
    },
    {
      icon: Users,
      title: "Gender-Safe",
      description: "Smart matching for comfortable travel",
    },
    {
      icon: Zap,
      title: "Instant Connect",
      description: "Find buyers in seconds, not hours",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1578512083405-f08402e7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-[#FFD600]/20 border border-[#FFD600]/30 rounded-full mb-6"
            >
              <span className="text-[#FFD600] text-sm font-semibold">About SafarSwap</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
            >
              Revolutionizing
              <br />
              <span className="text-[#FFD600]">Bus Ticket Resale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              We're solving a real problem: travelers lose money on cancellations
              while bus operators profit. SafarSwap creates a fair marketplace for
              safe, verified ticket resale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">The Problem</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                When travelers cancel bus tickets, they lose 20-40% in cancellation
                fees. Meanwhile, bus operators resell the same seat at full price,
                essentially earning double profit from a single seat.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    Users lose hundreds of rupees in cancellation charges
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    No safe platform to resell unwanted tickets
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    Operators profit while customers bear the loss
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Our Solution</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                SafarSwap enables safe, fair, and secure ticket resale. Sell your
                unwanted tickets to verified buyers and recover your money instead of
                losing it to cancellation fees.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    Recover up to 100% of your ticket value
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    Verified buyers and sellers with ratings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white/60">
                    Secure payments released after journey completion
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose SafarSwap?
            </h2>
            <p className="text-white/60 text-lg">Built with safety and trust at the core</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#FFD600] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFD600]/10 to-[#FFD600]/5 border border-[#FFD600]/30 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-[#FFD600] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Our Mission</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              To create India's most trusted bus ticket resale platform where
              travelers can confidently buy and sell tickets without losing money,
              while ensuring safety, security, and fairness for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Be part of India's smartest travel community
          </p>
          <button className="px-8 py-4 bg-[#FFD600] text-black font-bold rounded-xl hover:bg-[#FFD600]/90 transition-all">
            Get Started Today
          </button>
        </motion.div>
      </section>
    </div>
  );
}
