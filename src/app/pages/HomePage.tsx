import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Upload, Search, ShieldCheck, ArrowRight } from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Upload,
      title: "List Ticket",
      description: "Upload your bus ticket with verified details",
    },
    {
      icon: Search,
      title: "Find Buyer",
      description: "Connect with verified buyers instantly",
    },
    {
      icon: ShieldCheck,
      title: "Travel Safely",
      description: "Secure payment & gender-safe matching",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1772065673599-beba8e00db4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920")',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-[#FFD600]/20 border border-[#FFD600]/30 rounded-full mb-6"
            >
              <span className="text-[#FFD600] text-sm font-semibold">
                India's First Safe Ticket Resale Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl font-black text-white leading-tight mb-6"
            >
              Smart & Safe
              <br />
              <span className="text-[#FFD600]">Bus Ticket Resale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/70 mb-10 max-w-xl"
            >
              Avoid cancellation loss. Travel smarter. Connect with verified buyers
              and sellers in a secure, gender-safe environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/home/sell")}
                className="group px-8 py-4 bg-[#FFD600] text-black font-bold rounded-xl hover:bg-[#FFD600]/90 transition-all flex items-center gap-2"
              >
                Sell Ticket
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/home/buy")}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Buy Ticket
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/60 text-lg">
              Three simple steps to safe ticket resale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full hover:border-[#FFD600]/50 transition-all">
                  <div className="w-16 h-16 bg-[#FFD600] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute top-8 right-8 text-6xl font-black text-white/5">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Feature Section */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-6">
                <span className="text-pink-400 text-sm font-semibold">
                  💗 Safe for Female Travelers
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Gender-Safe
                <br />
                <span className="text-[#FFD600]">Seat Matching</span>
              </h2>
              <p className="text-white/70 text-lg mb-6">
                Your safety is our priority. Our smart matching system ensures
                adjacent seats follow gender preferences for comfortable travel.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Male → Male Adjacent</p>
                    <p className="text-white/60 text-sm">
                      Male tickets matched with male buyers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Female → Female Preference</p>
                    <p className="text-white/60 text-sm">
                      Female tickets prioritized for female buyers
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1775611718566-c5a1d4e256b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Bus interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FFD600] to-yellow-600 rounded-2xl p-6 shadow-2xl">
                <p className="text-black font-black text-3xl">100%</p>
                <p className="text-black/70 font-semibold">Verified</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join thousands of travelers who trust SafarSwap for secure ticket resale
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/home/sell")}
              className="px-8 py-4 bg-[#FFD600] text-black font-bold rounded-xl hover:bg-[#FFD600]/90 transition-all"
            >
              List Your Ticket
            </button>
            <button
              onClick={() => navigate("/home/about")}
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
