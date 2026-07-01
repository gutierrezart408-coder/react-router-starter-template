import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { User } from "@supabase/supabase-js";
import type { Route } from "./+types/dashboard";
import { getSupabaseClient } from "../lib/supabase";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Dashboard - ChainLinkOS" }];
}

export function loader({ context }: Route.LoaderArgs) {
	return {
		supabaseUrl: context.cloudflare.env.SUPABASE_URL,
		supabaseAnonKey: context.cloudflare.env.SUPABASE_ANON_KEY,
	};
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
	const { supabaseUrl, supabaseAnonKey } = loaderData;
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		const supabase = getSupabaseClient(supabaseUrl, supabaseAnonKey);

		supabase.auth.getSession().then(({ data: { session } }) => {
			if (!session) {
				navigate("/login");
			} else {
				setUser(session.user);
			}
			setChecking(false);
		});

		const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
			if (!session) {
				navigate("/login");
			} else {
				setUser(session.user);
			}
		});

		return () => listener.subscription.unsubscribe();
	}, [supabaseUrl, supabaseAnonKey, navigate]);

	async function handleSignOut() {
		const supabase = getSupabaseClient(supabaseUrl, supabaseAnonKey);
		await supabase.auth.signOut();
		navigate("/login");
	}

	if (checking) {
		return (
			<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
				<p className="text-slate-400">Loading...</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-slate-900 text-white">
			<nav className="border-b border-slate-800 sticky top-0 z-50 bg-slate-900/80 backdrop-blur">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
					<div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
						ChainLinkOS
					</div>
					<button
						onClick={handleSignOut}
						className="border border-slate-700 text-slate-300 px-4 py-2 rounded-lg hover:border-cyan-300/50 hover:text-cyan-300 transition"
					>
						Sign Out
					</button>
				</div>
			</nav>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-bold mb-2">Welcome back</h1>
				<p className="text-slate-400 mb-8">{user?.email}</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
						<h3 className="text-sm text-slate-400 mb-1">Active Shipments</h3>
						<p className="text-3xl font-bold text-cyan-300">0</p>
					</div>
					<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
						<h3 className="text-sm text-slate-400 mb-1">Verified Transactions</h3>
						<p className="text-3xl font-bold text-cyan-300">0</p>
					</div>
					<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
						<h3 className="text-sm text-slate-400 mb-1">Network Status</h3>
						<p className="text-3xl font-bold text-green-400">Online</p>
					</div>
				</div>

				<div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
					<p className="text-slate-400">
						Your dashboard is connected. Shipment tracking and chain data will appear here.
					</p>
				</div>
			</main>
		</div>
	);
}
