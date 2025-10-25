export const gameSessionOptions = ["Case File: Liminal Breach", "DEVELOPMENT"];

export const gameSessionGroups = {
  liminalBreach: ["Case File: Liminal Breach"],
  development: ["DEVELOPMENT"],
};

export const DISCORD_WEBHOOKS = {
  "Case File: Liminal Breach":
    process.env.REACT_APP_DISCORD_WEBHOOK_LIMINAL_BREACH,
  DEVELOPMENT: process.env.REACT_APP_DISCORD_WEBHOOK_DEVELOPMENT,
  FALLBACK: process.env.REACT_APP_DISCORD_WEBHOOK_FALLBACK,
};

export const getDiscordWebhook = (gameSession) =>
  gameSession
    ? DISCORD_WEBHOOKS[gameSession] ?? DISCORD_WEBHOOKS.FALLBACK
    : DISCORD_WEBHOOKS.FALLBACK;

export const LOCAL_HOST = "http://localhost:3000";
export const WEBSITE = "https://TheAurorFiles.com";
