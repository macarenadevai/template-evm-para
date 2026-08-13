import { Environment } from "@getpara/react-sdk";
import { http } from "viem";
import {
    arbitrum,
    arbitrumSepolia,
    base,
    baseSepolia,
    monadTestnet,
    networks,
} from "@/config/chains";

export const apiKey = process.env.NEXT_PUBLIC_PARA_API_KEY || "";
export const reownProjectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "";

if (!apiKey) {
    console.warn("NEXT_PUBLIC_PARA_API_KEY is not set");
}

if (!reownProjectId) {
    console.warn("NEXT_PUBLIC_REOWN_PROJECT_ID is not set — external wallets via WalletConnect (QR) unavailable");
}

export const environment = Environment.BETA;

// Transports (viem) para las cadenas soportadas. Fallbacks a RPCs públicos;
// sobreescribe cada una con NEXT_PUBLIC_<CHAIN>_RPC_URL si quieres tu propio endpoint.
const transports = {
    [arbitrum.id]: http(
        process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL || "https://arb1.arbitrum.io/rpc",
    ),
    [arbitrumSepolia.id]: http(
        process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL || "https://sepolia-rollup.arbitrum.io/rpc",
    ),
    [base.id]: http(
        process.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org",
    ),
    [baseSepolia.id]: http(
        process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
    ),
    [monadTestnet.id]: http(
        process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC_URL || "https://testnet-rpc.monad.xyz",
    ),
};

// Conectar wallets externas (MetaMask, Coinbase, WalletConnect vía QR, etc.)
// además de la wallet embebida de Para.
export const externalWalletConfig = {
    evmConnector: {
        config: {
            chains: networks,
            transports,
        },
    },
    walletConnect: {
        projectId: reownProjectId,
    },
};

export const paraModalConfig: {
    authLayout: ("AUTH:FULL" | "AUTH:CONDENSED" | "EXTERNAL:FULL" | "EXTERNAL:CONDENSED")[];
    oAuthMethods: ("GOOGLE" | "DISCORD" | "TWITTER" | "TELEGRAM" | "FARCASTER" | "APPLE" | "FACEBOOK" | "CUSTOM_OIDC" | "CUSTOM_OAUTH")[];
    onRampTestMode: boolean;
    recoverySecretStepEnabled: boolean;
    twoFactorAuthEnabled: boolean;
    theme: {
        foregroundColor: string;
        backgroundColor: string;
        borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "full";
        font: string;
    };
} = {
    authLayout: ["AUTH:FULL", "EXTERNAL:FULL"],
    oAuthMethods: ["GOOGLE", "DISCORD"],
    onRampTestMode: true,
    recoverySecretStepEnabled: true,
    twoFactorAuthEnabled: false,
    theme: {
        foregroundColor: "#00FFAA",
        backgroundColor: "#0A0A0A",
        borderRadius: "md",
        font: "Inter",
    },
};
