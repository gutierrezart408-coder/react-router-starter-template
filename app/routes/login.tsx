import { useState } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/login";
import { getSupabaseClient } from "../lib/supabase";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Sign In - ChainLinkOS" }];
}

export function loader({ context }: Route.LoaderArgs) {
	return {
		supabaseUrl: context.cloudflare.env.SUPABASE_URL,
		supabaseAnonKey: context.cloudflare.env.SUPABASE_ANON_KEY,
	};
}

export default function Login({ loaderData }: Route.ComponentProps) {
	const { supabaseUrl, supabaseAnonKey } = loaderData;
	const navigate = useNavigate();
	const [mode, setMode] = useState<"signin" | "signup">("signin");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		setMessage(null);
		setLoading(true);

		const supabase = getSupabaseClient(supabaseUrl, supabaseAnonKey);

		if (mode === "signin") {
			const { error } = await supabase.auth.signInWithPassword({ email, password });
			if (error) {
				setError(error.message);
			} else {
				navigate("/dashboard");
			}
		} else {
			const { error } = await supabase.auth.signUp({ email, password });
			if (error) {
				setError(error.message);
			} else {
				setMessage("Check your email to confirm your account.");
			}
		}

		setLoading(false);
	}

	return (
		<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
						ChainLinkOS
					</div>
				</div>

				<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
					<h1 className="text-2xl font-semibold mb-6 text-center">
						{mode === "signin" ? "Sign In" : "Create Account"}
					</h1>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="email" className="block text-sm text-slate-400 mb-1">
								Email
							</label>
							<input
								id="email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-300 transition"
								placeholder="you@company.com"
							/>
						</div>
						<div>
							<label htmlFor="password" className="block text-sm text-slate-400 mb-1">
								Password
							</label>
							<input
								id="password"
								type="password"
								required
								minLength={6}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-300 transition"
								placeholder="••••••••"
							/>
						</div>

						{error && (
							<p className="text-red-400 text-sm">{error}</p>
						)}
						{message && (
							<p className="text-cyan-300 text-sm">{message}</p>
						)}

						<button
							type="submit"
							disabled={loading}
							className="w-full bg-gradient-to-r from-cyan-300 to-cyan-400 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-300/50 transition disabled:opacity-50"
						>
							{loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Sign Up"}
						</button>
					</form>

					<p className="text-center text-sm text-slate-400 mt-6">
						{mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
						<button
							onClick={() => {
								setMode(mode === "signin" ? "signup" : "signin");
								setError(null);
								setMessage(null);
							}}
							className="text-cyan-300 hover:text-cyan-200 transition"
						>
							{mode === "signin" ? "Sign up" : "Sign in"}
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}
