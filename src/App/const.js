export const gameSessionOptions = [
  "Case File: Liminal Breach",
  "DEVELOPMENT",
];

export const gameSessionGroups = {
  liminalBreach: [
    "Case File: Liminal Breach",
  ],
  development: ["DEVELOPMENT"],
};

export const DISCORD_WEBHOOKS = {
  "Case File: Liminal Breach": process.env.REACT_APP_DISCORD_WEBHOOK_LIMINAL_BREACH,
  DEVELOPMENT: process.env.REACT_APP_DISCORD_WEBHOOK_DEVELOPMENT,
  FALLBACK: process.env.REACT_APP_DISCORD_WEBHOOK_FALLBACK,
};

export const getDiscordWebhook = (gameSession) =>
  gameSession
    ? DISCORD_WEBHOOKS[gameSession] ?? DISCORD_WEBHOOKS.FALLBACK
    : DISCORD_WEBHOOKS.FALLBACK;

export const LOCAL_HOST = "http://localhost:3000";
export const WEBSITE = "https://witchesandsnitches.com";

export const RULE_BOOK_URL =
  "https://docs.google.com/document/d/1BY7U9mYLQD_p9O9e42AYLHG2Xr6ZCsR8Ye07MaGXfVw/edit?tab=t.0#heading=h.frfwms2htyde";
