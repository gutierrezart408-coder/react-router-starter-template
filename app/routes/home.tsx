import type { Route } from "./+types/home";
import { Landing } from "../components/landing";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "ChainLinkOS - Blockchain-Powered Supply Chain" },
		{ name: "description", content: "Enterprise supply chain platform combining blockchain and logistics for transparent, immutable shipment tracking." },
	];
}

export default function Home() {
	return <Landing />;
}
