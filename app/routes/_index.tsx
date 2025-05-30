import { ConnectButton } from "@coinbase/onchainkit";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8 text-center">
      {/* NOVARIC® Logo */}
      <img
        src="/logo.png"
        alt="NOVARIC® Logo"
        className="w-28 mb-6"
      />

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-novaric-blue mb-4">
        Welcome to NOVARIC® - NVX Web3 Wallet
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Secure your learning journey with wallet login. Explore exclusive courses,
        certifications, and blockchain-powered credentials from NOVARIC® Academy.
      </p>

      {/* Wallet Connect Button */}
      <ConnectButton />
    </div>
  );
}
