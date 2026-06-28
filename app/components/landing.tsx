import { Link } from "react-router";

export function Landing() {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			{/* Navigation */}
			<nav className="border-b border-slate-800 backdrop-blur sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
					<div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						ChainLinkOS
					</div>
					<div className="flex gap-8 items-center">
						<a href="#features" className="hover:text-cyan-400 transition">Features</a>
						<a href="#how-it-works" className="hover:text-cyan-400 transition">How it Works</a>
						<button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition">
							Get Started
						</button>
					</div>
				</div>
			</nav>

			{/* Hero */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
				<div className="text-center">
					<h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
						Blockchain-Powered Supply Chain
					</h1>
					<p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
						ChainLinkOS combines distributed ledger technology with logistics infrastructure for transparent, immutable shipment tracking and supply chain management.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">
							Start Your Journey
						</button>
						<button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition">
							View Demo
						</button>
					</div>
				</div>

				{/* Hero visual */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition">
						<div className="text-4xl mb-4">⛓️</div>
						<h3 className="text-xl font-semibold mb-2">Immutable Records</h3>
						<p className="text-slate-400">Every shipment logged on distributed ledger — tamper-proof history from origin to destination.</p>
					</div>
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition">
						<div className="text-4xl mb-4">🔐</div>
						<h3 className="text-xl font-semibold mb-2">Zero Trust Security</h3>
						<p className="text-slate-400">Cryptographically verified transactions. No single point of failure, end-to-end encryption.</p>
					</div>
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition">
						<div className="text-4xl mb-4">⚡</div>
						<h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
						<p className="text-slate-400">Live shipment status, predictive delivery, and instant notifications across the entire supply chain.</p>
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="bg-slate-900 border-t border-slate-800 py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold mb-16 text-center">Powered by Enterprise Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">Multi-Carrier Integration</h3>
									<p className="text-slate-400 text-sm">Connect with any logistics provider via standardized APIs.</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">Smart Contracts</h3>
									<p className="text-slate-400 text-sm">Automate shipment verification, payments, and compliance.</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">Custom Audit Trails</h3>
									<p className="text-slate-400 text-sm">Full compliance reporting for regulatory requirements.</p>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">Advanced Analytics</h3>
									<p className="text-slate-400 text-sm">Shipment insights, bottleneck detection, and cost optimization.</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">Global Scale</h3>
									<p className="text-slate-400 text-sm">Handle millions of transactions across borders and time zones.</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold">✓</div>
								<div>
									<h3 className="font-semibold text-lg">API-First Design</h3>
									<p className="text-slate-400 text-sm">Build custom integrations and extend ChainLinkOS to your needs.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section id="how-it-works" className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-lg">1</div>
							</div>
							<h3 className="font-semibold mb-2">Register Shipment</h3>
							<p className="text-slate-400 text-sm">Add shipment details and parties involved to the network.</p>
						</div>
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-400 font-bold text-lg">2</div>
							</div>
							<h3 className="font-semibold mb-2">Lock & Verify</h3>
							<p className="text-slate-400 text-sm">Cryptographic verification across distributed nodes.</p>
						</div>
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold text-lg">3</div>
							</div>
							<h3 className="font-semibold mb-2">Track in Real-Time</h3>
							<p className="text-slate-400 text-sm">Live updates from every touchpoint, immutable record.</p>
						</div>
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-400 font-bold text-lg">4</div>
							</div>
							<h3 className="font-semibold mb-2">Settle & Archive</h3>
							<p className="text-slate-400 text-sm">Smart contract execution and permanent settlement.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-slate-800 py-24">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
					<p className="text-xl text-slate-300 mb-8">Join enterprise logistics companies trusting blockchain-backed transparency.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">
							Start Free Trial
						</button>
						<button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition">
							Book a Demo
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-slate-800 py-12 bg-slate-950/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
						<div>
							<div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
								ChainLinkOS
							</div>
							<p className="text-slate-400 text-sm">Blockchain meets logistics.</p>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">API Docs</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Legal</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
								<li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-slate-800 pt-8 flex justify-between items-center text-sm text-slate-400">
						<p>&copy; 2026 ChainLinkOS. All rights reserved.</p>
						<div className="flex gap-4">
							<a href="#" className="hover:text-cyan-400 transition">Twitter</a>
							<a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
							<a href="#" className="hover:text-cyan-400 transition">GitHub</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
