import { Environment } from "@getpara/react-sdk";

export const apiKey = process.env.NEXT_PUBLIC_PARA_API_KEY || "";

if (!apiKey) {
    console.warn("NEXT_PUBLIC_PARA_API_KEY is not set");
}

export const environment = Environment.BETA;

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
