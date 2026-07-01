import { useState } from "react";
import type { Route } from "./+types/docs";

export function meta({}: Route.MetaArgs) {
	return [{ title: "API Reference - ChainLinkOS" }];
}

const sections = [
	{ id: "overview", label: "Overview" },
	{ id: "authentication", label: "Authentication" },
	{ id: "shipments", label: "Shipments" },
	{ id: "verification", label: "Verification" },
	{ id: "transactions", label: "Transactions" },
	{ id: "analytics", label: "Analytics" },
	{ id: "webhooks", label: "Webhooks" },
	{ id: "errors", label: "Error Codes" },
];

export default function Docs() {
	const [activeSection, setActiveSection] = useState("overview");
	const [copiedCode, setCopiedCode] = useState<string | null>(null);

	const copyToClipboard = (code: string, id: string) => {
		navigator.clipboard.writeText(code);
		setCopiedCode(id);
		setTimeout(() => setCopiedCode(null), 2000);
	};

	const CodeBlock = ({ code, language = "bash", id }: { code: string; language?: string; id: string }) => (
		<div className="relative bg-slate-950 rounded-lg overflow-hidden border border-slate-800 mb-4">
			<div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
				<span className="text-xs text-slate-400 font-mono">{language}</span>
				<button
					onClick={() => copyToClipboard(code, id)}
					className="text-xs text-slate-400 hover:text-cyan-300 transition"
				>
					{copiedCode === id ? "Copied!" : "Copy"}
				</button>
			</div>
			<pre className="p-4 text-sm text-slate-300 overflow-x-auto">
				<code>{code}</code>
			</pre>
		</div>
	);

	const renderSection = () => {
		switch (activeSection) {
			case "overview":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">API Overview</h2>
						<p className="text-slate-300 text-lg">
							The ChainLinkOS API provides enterprise-grade access to blockchain-powered supply chain management. Build custom integrations, automate shipment tracking, and verify transactions on the distributed ledger.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
							<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
								<h3 className="font-semibold mb-2 text-cyan-300">Base URL</h3>
								<code className="text-sm text-slate-300">https://api.chainlinkos.com/v1</code>
							</div>
							<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
								<h3 className="font-semibold mb-2 text-cyan-300">Authentication</h3>
								<code className="text-sm text-slate-300">Bearer Token or API Key</code>
							</div>
							<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
								<h3 className="font-semibold mb-2 text-cyan-300">Response Format</h3>
								<code className="text-sm text-slate-300">JSON</code>
							</div>
							<div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
								<h3 className="font-semibold mb-2 text-cyan-300">Rate Limit</h3>
								<code className="text-sm text-slate-300">10,000 req/hour</code>
							</div>
						</div>

						<div className="mt-8 space-y-4">
							<h3 className="text-xl font-semibold">Quick Start</h3>
							<p className="text-slate-300">Get your API key from the Dashboard and authenticate all requests:</p>
							<CodeBlock
								code={`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.chainlinkos.com/v1/shipments`}
								language="bash"
								id="quick-start"
							/>
						</div>
					</div>
				);

			case "authentication":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Authentication</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">API Keys</h3>
							<p className="text-slate-300 mb-4">
								Generate API keys in your Dashboard under Settings → API Keys. Keep keys secure and rotate regularly.
							</p>
							<CodeBlock
								code={`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.chainlinkos.com/v1/shipments`}
								language="bash"
								id="api-key-auth"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">JWT Tokens</h3>
							<p className="text-slate-300 mb-4">
								For web applications, use JWT tokens obtained during login. Tokens expire after 24 hours.
							</p>
							<CodeBlock
								code={`const token = localStorage.getItem('chainlinkos_token');
const response = await fetch('https://api.chainlinkos.com/v1/shipments', {
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json'
  }
});`}
								language="javascript"
								id="jwt-auth"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">OAuth 2.0</h3>
							<p className="text-slate-300 mb-4">Enterprise customers can use OAuth 2.0 for delegated access.</p>
							<div className="space-y-2 text-sm text-slate-300">
								<p><strong>Authorization Endpoint:</strong> https://auth.chainlinkos.com/oauth/authorize</p>
								<p><strong>Token Endpoint:</strong> https://auth.chainlinkos.com/oauth/token</p>
								<p><strong>Supported Flows:</strong> Authorization Code, Client Credentials</p>
							</div>
						</div>

						<div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
							<p className="text-sm text-blue-200">
								<strong>Security:</strong> Always use HTTPS. Never commit API keys to version control. Use environment variables for sensitive credentials.
							</p>
						</div>
					</div>
				);

			case "shipments":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Shipments API</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">Create Shipment</h3>
							<p className="text-slate-300 mb-4">Register a new shipment on the blockchain.</p>
							<CodeBlock
								code={`POST /v1/shipments

{
  "origin": {
    "location": "Shanghai, China",
    "coordinates": { "lat": 31.2304, "lng": 121.4737 },
    "timestamp": "2026-07-01T10:30:00Z"
  },
  "destination": {
    "location": "Los Angeles, USA",
    "coordinates": { "lat": 34.0522, "lng": -118.2437 }
  },
  "cargo": {
    "description": "Electronic components",
    "weight_kg": 1500,
    "value_usd": 125000,
    "hs_code": "8542.31.00"
  },
  "carrier": "carrier_id_123",
  "metadata": {
    "customer_ref": "PO-2026-0001",
    "priority": "standard"
  }
}`}
								language="bash"
								id="create-shipment"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Shipment</h3>
							<p className="text-slate-300 mb-4">Retrieve shipment details and current status.</p>
							<CodeBlock
								code={`GET /v1/shipments/{shipment_id}

Response:
{
  "id": "ship_xyz123",
  "status": "in_transit",
  "origin": { ... },
  "destination": { ... },
  "current_location": {
    "location": "Los Angeles Port",
    "lat": 33.7362,
    "lng": -118.2437,
    "timestamp": "2026-07-15T14:20:00Z"
  },
  "events": [
    {
      "type": "picked_up",
      "timestamp": "2026-07-01T11:00:00Z",
      "location": "Shanghai Port"
    },
    {
      "type": "departed",
      "timestamp": "2026-07-02T08:30:00Z",
      "vessel": "MSC Gulsun"
    }
  ],
  "blockchain_hash": "0x7a3f...8d2e"
}`}
								language="bash"
								id="get-shipment"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">List Shipments</h3>
							<p className="text-slate-300 mb-4">Query shipments with filtering and pagination.</p>
							<CodeBlock
								code={`GET /v1/shipments?status=in_transit&limit=50&offset=0

Parameters:
- status: pending, in_transit, delivered, failed
- carrier_id: Filter by carrier
- created_after: ISO timestamp
- created_before: ISO timestamp
- limit: 1-100 (default 20)
- offset: Pagination offset`}
								language="bash"
								id="list-shipments"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Update Shipment Status</h3>
							<p className="text-slate-300 mb-4">Record status updates from IoT sensors or logistics partners.</p>
							<CodeBlock
								code={`PATCH /v1/shipments/{shipment_id}/status

{
  "status": "in_transit",
  "location": {
    "lat": 33.7362,
    "lng": -118.2437,
    "address": "Los Angeles Port Terminal 3"
  },
  "temperature": 22.5,
  "humidity": 45,
  "notes": "Scheduled delivery July 20"
}`}
								language="bash"
								id="update-shipment"
							/>
						</div>
					</div>
				);

			case "verification":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Verification & Blockchain API</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">Verify Shipment Hash</h3>
							<p className="text-slate-300 mb-4">Verify a shipment's immutable blockchain record.</p>
							<CodeBlock
								code={`GET /v1/shipments/{shipment_id}/verify

Response:
{
  "shipment_id": "ship_xyz123",
  "blockchain_hash": "0x7a3f...8d2e",
  "merkle_root": "0x2b1a...4e9f",
  "verified": true,
  "verification_timestamp": "2026-07-15T14:20:00Z",
  "block_number": 18924562,
  "confirmations": 127,
  "immutable": true
}`}
								language="bash"
								id="verify-hash"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Audit Trail</h3>
							<p className="text-slate-300 mb-4">Retrieve complete immutable record of all changes.</p>
							<CodeBlock
								code={`GET /v1/shipments/{shipment_id}/audit-trail

Response:
{
  "shipment_id": "ship_xyz123",
  "events": [
    {
      "timestamp": "2026-07-01T10:30:00Z",
      "action": "created",
      "actor": "user_abc123",
      "transaction_hash": "0xf4e2...",
      "data": { ... }
    },
    {
      "timestamp": "2026-07-02T08:30:00Z",
      "action": "status_updated",
      "actor": "carrier_api",
      "transaction_hash": "0x9d1a...",
      "data": { "status": "in_transit" }
    }
  ]
}`}
								language="bash"
								id="audit-trail"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Lock Shipment</h3>
							<p className="text-slate-300 mb-4">Cryptographically lock a shipment to prevent modifications.</p>
							<CodeBlock
								code={`POST /v1/shipments/{shipment_id}/lock

Response:
{
  "shipment_id": "ship_xyz123",
  "locked": true,
  "locked_at": "2026-07-20T10:00:00Z",
  "locked_by": "user_abc123",
  "lock_hash": "0x3c7e...",
  "signature": "0x8a2f..."
}`}
								language="bash"
								id="lock-shipment"
							/>
						</div>
					</div>
				);

			case "transactions":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Transactions API</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">Create Transaction</h3>
							<p className="text-slate-300 mb-4">Create a payment or settlement transaction on the blockchain.</p>
							<CodeBlock
								code={`POST /v1/transactions

{
  "shipment_id": "ship_xyz123",
  "type": "payment",
  "amount": 5000.00,
  "currency": "USD",
  "from_party": "merchant_123",
  "to_party": "carrier_456",
  "reference": "INV-2026-0042",
  "smart_contract": {
    "condition": "delivery_confirmed",
    "on_success": "release_payment",
    "on_failure": "return_to_sender"
  }
}`}
								language="bash"
								id="create-transaction"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Transaction</h3>
							<p className="text-slate-300 mb-4">Retrieve transaction details and settlement status.</p>
							<CodeBlock
								code={`GET /v1/transactions/{transaction_id}

Response:
{
  "id": "txn_abc123xyz",
  "shipment_id": "ship_xyz123",
  "status": "settled",
  "amount": 5000.00,
  "currency": "USD",
  "from_party": "merchant_123",
  "to_party": "carrier_456",
  "created_at": "2026-07-02T09:00:00Z",
  "settled_at": "2026-07-20T15:30:00Z",
  "blockchain_hash": "0x1e8f...",
  "confirmations": 256
}`}
								language="bash"
								id="get-transaction"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">List Transactions</h3>
							<p className="text-slate-300 mb-4">Query transactions with advanced filtering.</p>
							<CodeBlock
								code={`GET /v1/transactions?status=settled&from_party=merchant_123&limit=50

Parameters:
- status: pending, confirmed, settled, failed, reversed
- from_party: Sender identifier
- to_party: Recipient identifier
- shipment_id: Filter by shipment
- created_after: ISO timestamp
- created_before: ISO timestamp`}
								language="bash"
								id="list-transactions"
							/>
						</div>
					</div>
				);

			case "analytics":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Analytics API</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Shipment Analytics</h3>
							<p className="text-slate-300 mb-4">Retrieve aggregated metrics and insights.</p>
							<CodeBlock
								code={`GET /v1/analytics/shipments?period=month&carrier_id=carrier_123

Response:
{
  "period": "2026-06",
  "total_shipments": 1247,
  "total_value": 12450000,
  "avg_delivery_time_days": 18.3,
  "on_time_delivery_rate": 0.94,
  "by_status": {
    "delivered": 1189,
    "in_transit": 45,
    "delayed": 13
  },
  "by_origin": [
    {
      "origin": "Shanghai",
      "count": 456,
      "avg_time_days": 16.2
    }
  ],
  "cost_breakdown": {
    "shipping": 8900000,
    "insurance": 450000,
    "customs": 350000
  }
}`}
								language="bash"
								id="shipment-analytics"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Network Health</h3>
							<p className="text-slate-300 mb-4">Check blockchain network status and performance.</p>
							<CodeBlock
								code={`GET /v1/analytics/network-health

Response:
{
  "network_status": "healthy",
  "active_nodes": 127,
  "avg_block_time_seconds": 12.4,
  "pending_transactions": 342,
  "verification_success_rate": 0.9999,
  "uptime_percentage": 99.98,
  "last_block": {
    "number": 18924562,
    "hash": "0x7a3f...",
    "timestamp": "2026-07-15T14:20:00Z",
    "transactions": 1542
  }
}`}
								language="bash"
								id="network-health"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Get Cost Analysis</h3>
							<p className="text-slate-300 mb-4">Analyze costs and optimization opportunities.</p>
							<CodeBlock
								code={`GET /v1/analytics/costs?start_date=2026-06-01&end_date=2026-06-30

Includes:
- Shipping costs breakdown
- Insurance premiums
- Customs duties
- Route optimization suggestions
- Carrier performance vs cost
- Potential savings analysis`}
								language="bash"
								id="cost-analysis"
							/>
						</div>
					</div>
				);

			case "webhooks":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Webhooks</h2>

						<div>
							<h3 className="text-xl font-semibold mb-3">Register Webhook</h3>
							<p className="text-slate-300 mb-4">Subscribe to real-time events.</p>
							<CodeBlock
								code={`POST /v1/webhooks

{
  "url": "https://your-app.com/webhooks/chainlink",
  "events": [
    "shipment.created",
    "shipment.status_updated",
    "shipment.delivered",
    "transaction.settled",
    "shipment.locked"
  ],
  "retry_policy": "exponential",
  "timeout_seconds": 30
}`}
								language="bash"
								id="register-webhook"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Webhook Events</h3>
							<p className="text-slate-300 mb-4">All webhook payloads include signature verification.</p>
							<CodeBlock
								code={`Example Webhook Payload:
{
  "id": "evt_xyz123",
  "event": "shipment.status_updated",
  "timestamp": "2026-07-15T14:20:00Z",
  "data": {
    "shipment_id": "ship_xyz123",
    "status": "in_transit",
    "location": { "lat": 33.7362, "lng": -118.2437 },
    "timestamp": "2026-07-15T14:20:00Z"
  },
  "signature": "sha256=8f7e2b1c..."
}`}
								language="bash"
								id="webhook-payload"
							/>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-3">Verify Webhook Signature</h3>
							<p className="text-slate-300 mb-4">Validate webhook authenticity.</p>
							<CodeBlock
								code={`import crypto from 'crypto';

function verifyWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return hash === signature.replace('sha256=', '');
}

// In your webhook handler:
const signature = req.headers['x-chainlink-signature'];
if (verifyWebhook(req.body, signature, WEBHOOK_SECRET)) {
  // Process webhook
}`}
								language="javascript"
								id="verify-webhook"
							/>
						</div>
					</div>
				);

			case "errors":
				return (
					<div className="space-y-6">
						<h2 className="text-3xl font-bold">Error Codes</h2>

						<div className="space-y-3">
							{[
								{ code: 400, message: "Bad Request", description: "Invalid parameters or malformed request" },
								{ code: 401, message: "Unauthorized", description: "Invalid or missing authentication" },
								{ code: 403, message: "Forbidden", description: "Insufficient permissions for this resource" },
								{ code: 404, message: "Not Found", description: "Resource does not exist" },
								{ code: 409, message: "Conflict", description: "Shipment already locked or transaction already settled" },
								{ code: 422, message: "Unprocessable Entity", description: "Validation error in request data" },
								{ code: 429, message: "Too Many Requests", description: "Rate limit exceeded" },
								{ code: 500, message: "Internal Server Error", description: "Unexpected server error" },
								{ code: 502, message: "Bad Gateway", description: "Blockchain network unavailable" },
								{ code: 503, message: "Service Unavailable", description: "API temporarily down for maintenance" },
							].map((err) => (
								<div key={err.code} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
									<div className="flex items-baseline gap-4 mb-2">
										<code className="text-lg font-mono font-bold text-cyan-300">{err.code}</code>
										<h4 className="font-semibold">{err.message}</h4>
									</div>
									<p className="text-slate-400 text-sm">{err.description}</p>
								</div>
							))}
						</div>

						<div className="mt-8">
							<h3 className="text-xl font-semibold mb-3">Error Response Format</h3>
							<CodeBlock
								code={`{
  "error": {
    "code": "validation_error",
    "message": "Invalid shipment weight",
    "details": [
      {
        "field": "cargo.weight_kg",
        "message": "must be greater than 0"
      }
    ]
  }
}`}
								language="bash"
								id="error-format"
							/>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-slate-900 text-white">
			<nav className="border-b border-slate-800 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-8">
					<div className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
						ChainLinkOS
					</div>
					<div className="text-sm text-slate-400">API Reference</div>
				</div>
			</nav>

			<div className="flex min-h-[calc(100vh-73px)]">
				{/* Sidebar */}
				<aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
					<div className="space-y-2">
						{sections.map((section) => (
							<button
								key={section.id}
								onClick={() => setActiveSection(section.id)}
								className={`w-full text-left px-4 py-2 rounded-lg transition text-sm ${
									activeSection === section.id
										? "bg-cyan-300/20 text-cyan-300 border border-cyan-300/30"
										: "text-slate-300 hover:bg-slate-800/50"
								}`}
							>
								{section.label}
							</button>
						))}
					</div>
				</aside>

				{/* Main Content */}
				<main className="flex-1 p-8 max-w-4xl">
					{renderSection()}
				</main>
			</div>
		</div>
	);
}
