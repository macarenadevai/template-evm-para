"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParaProvider } from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";
import {
    apiKey,
    environment,
    externalWalletConfig,
    paraModalConfig,
} from "@/config/para";

const queryClient = new QueryClient();

export function ParaAppProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ParaProvider
                paraClientConfig={{ apiKey, env: environment }}
                config={{ appName: "template-evm-para" }}
                externalWalletConfig={externalWalletConfig}
                paraModalConfig={paraModalConfig}
            >
                {children}
            </ParaProvider>
        </QueryClientProvider>
    );
}
