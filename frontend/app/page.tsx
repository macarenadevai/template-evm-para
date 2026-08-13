"use client";

import { useAccount, useModal } from "@getpara/react-sdk";

export default function Home() {
  const { openModal } = useModal();
  const { isConnected, embedded } = useAccount();
  const address = embedded?.isConnected ? embedded.wallets?.[0]?.address : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">template-evm-para</h1>
      <button
        onClick={() => openModal()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isConnected && address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}
      </button>
    </main>
  );
}
