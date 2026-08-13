import { arbitrum, arbitrumSepolia, base, baseSepolia } from "viem/chains";
import type { Chain } from "viem";

export const monadTestnet = {
    id: 10143,
    name: "Monad Testnet",
    nativeCurrency: {
        name: "MON",
        symbol: "MON",
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ["https://testnet-rpc.monad.xyz"],
        },
    },
    blockExplorers: {
        default: {
            name: "Monad Explorer",
            url: "https://testnet.monadexplorer.com",
        },
    },
    testnet: true,
} as const satisfies Chain;

export const networks: [Chain, ...Chain[]] = [
    arbitrum,
    arbitrumSepolia,
    base,
    baseSepolia,
    monadTestnet,
];

export { arbitrum, arbitrumSepolia, base, baseSepolia };
