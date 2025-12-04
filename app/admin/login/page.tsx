'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setLoading(false);
            router.push('/admin');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md relative z-10 mx-4"
            >
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-16 h-16 bg-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-teal-500/30"
                    >
                        <Lock className="w-8 h-8 text-white" />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-white font-serif mb-2">Welcome Back</h1>
                    <p className="text-slate-300">Sign in to manage Bamboo Edge</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-900/40 border border-slate-600 focus:border-teal-500 text-white pl-12 pr-4 py-3.5 rounded-xl outline-none transition-all placeholder:text-slate-500 hover:bg-slate-900/60 focus:bg-slate-900/60"
                                placeholder="admin@bambooedge.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-900/40 border border-slate-600 focus:border-teal-500 text-white pl-12 pr-4 py-3.5 rounded-xl outline-none transition-all placeholder:text-slate-500 hover:bg-slate-900/60 focus:bg-slate-900/60"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                Sign In Dashboard
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Website
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
