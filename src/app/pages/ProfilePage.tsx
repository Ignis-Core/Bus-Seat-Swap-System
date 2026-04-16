import { motion } from "motion/react";
import { User, Mail, Phone, MapPin, Star, ShieldCheck, Award } from "lucide-react";

export function ProfilePage() {
  const userStats = [
    { label: "Tickets Sold", value: "12", icon: Award },
    { label: "Tickets Bought", value: "8", icon: ShieldCheck },
    { label: "Rating", value: "4.8", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Your <span className="text-[#FFD600]">Profile</span>
          </h1>
          <p className="text-white/60">Manage your account and activity</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FFD600] to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-black" />
              </div>
              <h2 className="text-2xl font-black text-white mb-1">Rahul Sharma</h2>
              <p className="text-white/60 mb-4">Member since Jan 2026</p>

              {/* Trust Score */}
              <div className="bg-white/10 rounded-2xl p-4 mb-6">
                <p className="text-white/60 text-sm mb-2">Trust Score</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span className="text-3xl font-black text-white">92%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#FFD600] fill-[#FFD600]" />
                <span className="text-2xl font-black text-white">4.8</span>
              </div>
              <p className="text-white/60 text-sm">Based on 20 reviews</p>
            </div>
          </motion.div>

          {/* Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Personal Info */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FFD600]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-semibold">rahul.sharma@email.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#FFD600]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FFD600]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">City</p>
                    <p className="text-white font-semibold">Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-[#FFD600]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Gender</p>
                    <p className="text-white font-semibold">Male</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 px-6 py-2.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                Edit Profile
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {userStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#FFD600]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-[#FFD600]" />
                  </div>
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Verification Status */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Verified Account
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Your phone number and email are verified. Complete your profile
                    to increase trust score.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-semibold">
                      ✓ Phone Verified
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-semibold">
                      ✓ Email Verified
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-semibold">
                      ✓ ID Verified
                    </span>
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
