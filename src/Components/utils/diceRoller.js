import React, { useState, createContext, useContext } from "react";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";
import { X, Dice6, Star, Skull } from "lucide-react";
import { getModifierInfo } from "../SpellBook/utils";
const discordWebhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

const RollModalContext = createContext();

export const RollResultModal = ({ rollResult, isOpen, onClose }) => {
  if (!isOpen || !rollResult) return null;

  const {
    title,
    rollValue,
    modifier,
    total,
    isCriticalSuccess,
    isCriticalFailure,
    description,
    type = "ability",
    diceType = 20,
    rollType = "normal",
  } = rollResult;

  const getTypeColor = () => {
    switch (type) {
      case "ability":
        return "#20b7b0";
      case "initiative":
        return "#107319";
      case "skill":
        return "#6600cc";
      case "spell":
        return "#3b82f6";
      case "hitdice":
        return "#9d4edd";
      case "damage":
        return "#ef4444";
      case "heal":
        return "#10b981";
      case "saving_throw":
        return "#8b5cf6";
      case "research":
        return "#10b981";
      case "flexible":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  const getDiceColor = () => {
    if (isCriticalSuccess) return "#f59e0b";
    if (isCriticalFailure) return "#ef4444";
    return getTypeColor();
  };

  const getRollTypeIndicator = () => {
    if (rollType === "advantage") return "🎯 ADV";
    if (rollType === "disadvantage") return "⚠️ DIS";
    return "";
  };

  const backgroundColor = isCriticalSuccess
    ? "#fef3c7"
    : isCriticalFailure
    ? "#fee2e2"
    : "#f8fafc";

  const borderColor = isCriticalSuccess
    ? "#f59e0b"
    : isCriticalFailure
    ? "#ef4444"
    : getTypeColor();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: backgroundColor,
          border: `3px solid ${borderColor}`,
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "400px",
          width: "90%",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "4px",
            color: "#6b7280",
          }}
        >
          <X size={20} />
        </button>

        {/* Critical Success/Failure Icons */}
        {(isCriticalSuccess || isCriticalFailure) && (
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            {isCriticalSuccess ? (
              <Star size={48} color="#f59e0b" fill="#f59e0b" />
            ) : (
              <Skull size={48} color="#ef4444" fill="#ef4444" />
            )}
          </div>
        )}

        {/* Title with Roll Type Indicator */}
        <h2
          style={{
            margin: "0 0 16px 0",
            fontSize: "20px",
            fontWeight: "600",
            color: "#1f2937",
            textAlign: "center",
            paddingRight: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {title}
          {rollType !== "normal" && (
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                padding: "4px 8px",
                borderRadius: "4px",
                backgroundColor:
                  rollType === "advantage" ? "#10b981" : "#ef4444",
                color: "white",
              }}
            >
              {getRollTypeIndicator()}
            </span>
          )}
        </h2>

        {/* Main Roll Display */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "12px",
            border: "2px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "8px",
            }}
          >
            <Dice6 size={28} color={getDiceColor()} />
            <span
              style={{
                color: isCriticalSuccess
                  ? "#f59e0b"
                  : isCriticalFailure
                  ? "#ef4444"
                  : "#1f2937",
              }}
            >
              {rollValue}
            </span>
            {modifier !== 0 && (
              <>
                <span style={{ color: "#6b7280" }}>
                  {modifier >= 0 ? "+" : ""}
                  {modifier}
                </span>
                <span style={{ color: "#6b7280" }}>=</span>
                <span
                  style={{
                    color: getTypeColor(),
                    fontSize: "28px",
                  }}
                >
                  {total}
                </span>
              </>
            )}
          </div>

          <div
            style={{
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            d{diceType} Roll{rollType !== "normal" ? ` (${rollType})` : ""}:{" "}
            {rollValue}
            {modifier !== 0 &&
              ` • Modifier: ${modifier >= 0 ? "+" : ""}${modifier}`}{" "}
            • Total: {total}
          </div>
        </div>

        {/* Critical Success Message */}
        {isCriticalSuccess && (
          <div
            style={{
              textAlign: "center",
              padding: "12px",
              backgroundColor: "#fef3c7",
              border: "2px solid #f59e0b",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#92400e",
                marginBottom: "4px",
              }}
            >
              ✨ CRITICAL SUCCESS! ✨
            </div>
            <div style={{ fontSize: "14px", color: "#92400e" }}>
              {diceType === 20
                ? "Exceptional success regardless of DC!"
                : `Maximum result on d${diceType}!`}
            </div>
          </div>
        )}

        {/* Critical Failure Message */}
        {isCriticalFailure && (
          <div
            style={{
              textAlign: "center",
              padding: "12px",
              backgroundColor: "#fee2e2",
              border: "2px solid #ef4444",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#991b1b",
                marginBottom: "4px",
              }}
            >
              💀 CRITICAL FAILURE! 💀
            </div>
            <div style={{ fontSize: "14px", color: "#991b1b" }}>
              {diceType === 20
                ? "Spectacular failure regardless of modifier!"
                : `Minimum result on d${diceType}!`}
            </div>
          </div>
        )}

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: "14px",
              color: "#4b5563",
              textAlign: "center",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            {description}
          </div>
        )}

        {/* Close Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 24px",
              backgroundColor: getTypeColor(),
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              minWidth: "100px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const rollCorruption = async ({
  character,
  pointsGained,
  pointsRedeemed,
  reason,
  pointsTotal,
  pointsRemaining,
  type = "gained",
  saveResult = null,
}) => {
  try {
    if (!discordWebhookUrl) {
      console.error("Discord webhook URL not configured");
      return;
    }

    const characterName = character?.name || "Unknown Character";
    const usedFor =
      reason?.trim() || (type === "gained" ? "Dark deed" : "Act of redemption");

    const getCorruptionTier = (points) => {
      if (points === 0)
        return {
          name: "Pure Hearted",
          range: "(0)",
          color: 0x10b981,
          saveDC: 10,
          boon: null,
          effect: null,
        };
      if (points <= 4)
        return {
          name: "Pragmatic",
          range: "(1-4)",
          color: 0xf59e0b,
          saveDC: 12,
          boon: "Empowered Darkness",
          effect: null,
        };
      if (points <= 7)
        return {
          name: "Devious",
          range: "(5-7)",
          color: 0xef4444,
          saveDC: 14,
          boon: null,
          effect: "Mild Effect",
        };
      if (points <= 11)
        return {
          name: "Vicious",
          range: "(8-11)",
          color: 0x7c2d12,
          saveDC: 16,
          boon: "Heightened Darkness",
          effect: "Severe Effect",
        };
      return {
        name: "Vile",
        range: "(12+)",
        color: 0x1f2937,
        saveDC: 18,
        boon: null,
        effect: "Severe Effect",
      };
    };

    const finalPoints = type === "gained" ? pointsTotal : pointsRemaining;
    const currentTier = getCorruptionTier(finalPoints);

    let corruptionLevel = `${currentTier.name} ${currentTier.range}`;

    if (finalPoints === 0) {
      corruptionLevel = "✨ **PURE HEARTED** - Soul cleansed of darkness";
    } else if (finalPoints <= 4) {
      corruptionLevel =
        "⚖️ **PRAGMATIC** - Willing to bend rules for the greater good";
    } else if (finalPoints <= 7) {
      corruptionLevel = "😈 **DEVIOUS** - Embracing darker methods";
    } else if (finalPoints <= 11) {
      corruptionLevel = "🔥 **VICIOUS** - Deep in corruption's grip";
    } else {
      corruptionLevel = "💀 **VILE** - Soul consumed by darkness";
    }

    let embed;

    if (type === "gained") {
      const wasFromSave = saveResult !== null;

      embed = {
        title: wasFromSave
          ? "💀 Corruption Save Failed"
          : "💀 Corruption Gained",
        description: wasFromSave
          ? `${characterName} failed to resist the corruption of their dark deed...`
          : `${characterName} has fallen deeper into darkness...`,
        color: currentTier.color,
        fields: [
          {
            name: "Character",
            value: characterName,
            inline: true,
          },
          {
            name: "Points Gained",
            value: pointsGained.toString(),
            inline: true,
          },
          {
            name: "Total Corruption",
            value: pointsTotal.toString(),
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: `Witches and Snitches - Corruption ${
            wasFromSave ? "Save" : "Gained"
          } • Next Wisdom Save DC: ${currentTier.saveDC}`,
        },
      };

      if (wasFromSave && saveResult) {
        embed.fields.push({
          name: "Corruption Save",
          value: `**${saveResult.rollValue}** ${
            saveResult.modifier >= 0 ? "+" : ""
          }${saveResult.modifier} = **${saveResult.total}** vs DC ${
            saveResult.dc
          }`,
          inline: false,
        });
      }

      embed.fields.push({
        name: wasFromSave ? "Dark Deed" : "Dark Deed",
        value: usedFor,
        inline: false,
      });

      embed.fields.push({
        name: "Corruption Tier",
        value: corruptionLevel,
        inline: false,
      });
    } else {
      embed = {
        title: "✨ Corruption Redeemed",
        description: `${characterName} has found redemption through remorse...`,
        color: finalPoints === 0 ? 0x10b981 : currentTier.color,
        fields: [
          {
            name: "Character",
            value: characterName,
            inline: true,
          },
          {
            name: "Points Redeemed",
            value: pointsRedeemed.toString(),
            inline: true,
          },
          {
            name: "Remaining Corruption",
            value: pointsRemaining.toString(),
            inline: true,
          },
          {
            name: "Act of Redemption",
            value: usedFor,
            inline: false,
          },
          {
            name: "Corruption Tier",
            value: corruptionLevel,
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: `Witches and Snitches - Corruption Redeemed • Wisdom Save DC: ${currentTier.saveDC}`,
        },
      };
    }

    if (currentTier.boon || currentTier.effect) {
      let tierInfo = "";
      if (currentTier.boon) tierInfo += `**Boon:** ${currentTier.boon}\n`;
      if (currentTier.effect) tierInfo += `**Effect:** ${currentTier.effect}`;

      embed.fields.push({
        name: "Tier Benefits/Effects",
        value: tierInfo,
        inline: false,
      });
    }

    if (type === "gained") {
      if (finalPoints >= 12) {
        embed.fields.push({
          name: "⚠️ Warning",
          value:
            "This character's soul is being consumed by darkness. Redemption grows ever more difficult...",
          inline: false,
        });
      } else if (finalPoints >= 8) {
        embed.fields.push({
          name: "⚠️ Caution",
          value:
            "Dark forces have a strong hold on this character. Future corruption saves are DC 16.",
          inline: false,
        });
      } else if (finalPoints >= 5) {
        embed.fields.push({
          name: "📋 Note",
          value:
            "Character must roll for a Mild Corruption Effect. Future corruption saves are DC 14.",
          inline: false,
        });
      }
    } else {
      if (finalPoints === 0) {
        embed.fields.push({
          name: "🎉 Redemption Complete",
          value:
            "This character has found complete redemption! Their soul is pure once more.",
          inline: false,
        });
      } else if (finalPoints <= 4) {
        embed.fields.push({
          name: "🌟 Progress",
          value:
            "Significant progress toward redemption. Keep seeking to make amends.",
          inline: false,
        });
      }
    }

    await fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });
  } catch (error) {
    console.error("Failed to send corruption Discord webhook:", error);
  }
};
export const RollModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rollResult, setRollResult] = useState(null);

  const showRollResult = (result) => {
    setRollResult(result);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setRollResult(null);
  };

  return (
    <RollModalContext.Provider value={{ showRollResult }}>
      {children}
      <RollResultModal
        rollResult={rollResult}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </RollModalContext.Provider>
  );
};

export const useRollModal = () => {
  const context = useContext(RollModalContext);
  if (!context) {
    return {
      showRollResult: (result) => {
        const criticalText = result.isCriticalSuccess
          ? " - CRITICAL SUCCESS!"
          : result.isCriticalFailure
          ? " - CRITICAL FAILURE!"
          : "";
        alert(
          `${result.title}: d20(${result.rollValue}) + ${result.modifier} = ${result.total}${criticalText}`
        );
      },
    };
  }
  return context;
};

export const calculateSkillBonus = ({ skillName, abilityMod, character }) => {
  if (!character) return 0;
  const skillLevel = character.skills?.[skillName] || 0;
  const profBonus = character.proficiencyBonus || 0;

  if (skillLevel === 0) return abilityMod;
  if (skillLevel === 1) return abilityMod + profBonus;
  if (skillLevel === 2) return abilityMod + 2 * profBonus;

  return abilityMod;
};

export const rollDice = () => {
  const roller = new DiceRoller();
  const roll = roller.roll("1d20");
  return {
    total: roll.total,
    notation: roll.notation,
    output: roll.output,
  };
};

export const rollAbility = async ({
  ability,
  isRolling,
  setIsRolling,
  characterModifiers,
  character,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const abilityMod = characterModifiers[ability.key];
    const total = d20Roll + abilityMod;

    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;

    if (showRollResult) {
      showRollResult({
        title: `${ability.name} Check`,
        rollValue: d20Roll,
        modifier: abilityMod,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "ability",
        description: `Rolling ${ability.name} check for ${character.name}`,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      alert(
        `${ability.name} Check: d20(${d20Roll}) + ${abilityMod} = ${total}${criticalText}`
      );
    }

    let embedColor = 0x20b7b0;
    let resultText = "";

    if (isCriticalSuccess) {
      embedColor = 0xffd700;
      resultText = " - **CRITICAL SUCCESS!** 🎉";
    } else if (isCriticalFailure) {
      embedColor = 0xff0000;
      resultText = " - **CRITICAL FAILURE!** 💥";
    }

    const message = {
      embeds: [
        {
          title: `${character.name} Rolled: ${ability.name} Check${resultText}`,
          description: `${
            isCriticalSuccess
              ? "Natural 20!"
              : isCriticalFailure
              ? "Natural 1!"
              : ""
          }`,
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                abilityMod >= 0 ? "+" : ""
              }${abilityMod} = **${total}**${
                isCriticalSuccess
                  ? "\n✨ **Exceptional success regardless of DC!**"
                  : isCriticalFailure
                  ? "\n💀 **Spectacular failure regardless of modifier!**"
                  : ""
              }`,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches- Ability Check • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const getMaxAchievableQuality = ({
  proficiencies,
  ingredientQuality,
}) => {
  const potionMakingLevel = proficiencies.potionMaking;
  const potioneerKit = proficiencies.potioneersKit;
  const herbologyKit = proficiencies.herbologyKit;

  const hasPotion = potionMakingLevel > 0;
  const hasExpertise = potionMakingLevel === 2;
  const kitCount = (potioneerKit ? 1 : 0) + (herbologyKit ? 1 : 0);
  const totalRegularProficiencies = (hasPotion ? 1 : 0) + kitCount;

  if (totalRegularProficiencies === 0) {
    switch (ingredientQuality) {
      case "poor":
        return "flawed";
      case "normal":
        return "flawed";
      case "exceptional":
        return "flawed";
      case "superior":
        return "normal";
      default:
        return "flawed";
    }
  } else if (totalRegularProficiencies === 1 && !hasExpertise) {
    switch (ingredientQuality) {
      case "poor":
        return "flawed";
      case "normal":
        return "normal";
      case "exceptional":
        return "normal";
      case "superior":
        return "normal";
      default:
        return "normal";
    }
  } else if (
    (totalRegularProficiencies === 2 && !hasExpertise) ||
    (hasExpertise && kitCount === 0)
  ) {
    switch (ingredientQuality) {
      case "poor":
        return "normal";
      case "normal":
        return "normal";
      case "exceptional":
        return "exceptional";
      case "superior":
        return "exceptional";
      default:
        return "normal";
    }
  } else if (hasExpertise && kitCount >= 1) {
    switch (ingredientQuality) {
      case "poor":
        return "normal";
      case "normal":
        return "exceptional";
      case "exceptional":
        return "exceptional";
      case "superior":
        return "exceptional";
      default:
        return "exceptional";
    }
  }

  return "normal";
};

export const getProficiencyAnalysis = (proficiencies, ingredientQuality) => {
  const potionMakingLevel = proficiencies.potionMaking;
  const hasPotion = potionMakingLevel > 0;
  const hasExpertise = potionMakingLevel === 2;
  const kitCount =
    (proficiencies.potioneersKit ? 1 : 0) +
    (proficiencies.herbologyKit ? 1 : 0);
  const totalRegularProficiencies = (hasPotion ? 1 : 0) + kitCount;

  let category = "";
  if (totalRegularProficiencies === 0) {
    category = "0 Proficiencies";
  } else if (totalRegularProficiencies === 1 && !hasExpertise) {
    category = "1 Proficiency";
  } else if (
    (totalRegularProficiencies === 2 && !hasExpertise) ||
    (hasExpertise && kitCount === 0)
  ) {
    category = "2 Proficiencies or 1 Expertise";
  } else if (hasExpertise && kitCount >= 1) {
    category = "1 Proficiency + 1 Expertise";
  }

  return `**Category:** ${category}\n**With ${ingredientQuality} ingredients:** Can achieve up to ${getMaxAchievableQuality(
    { proficiencies, ingredientQuality }
  )} quality`;
};

export const rollGenericD20 = async ({
  modifier = 0,
  title = "Generic Roll",
  description = "Rolling a d20 with modifier",
  character = null,
  isRolling,
  setIsRolling,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const mod = parseInt(modifier) || 0;
    const total = d20Roll + mod;

    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;

    if (showRollResult) {
      showRollResult({
        title: title,
        rollValue: d20Roll,
        modifier: mod,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "generic",
        description: description,
      });
    } else {
      alert(`${title}: d20(${d20Roll}) + ${mod} = ${total}`);
    }

    let embedColor = 0xff9e3d;
    let resultText = "";

    const rollTitle = character
      ? `${character.name}: ${title}${resultText}`
      : `${title}${resultText}`;

    const message = {
      embeds: [
        {
          title: rollTitle,
          description: "",
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                mod >= 0 ? "+" : ""
              }${mod} = **${total}**`,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches - Generic Roll • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const rollBrewPotion = async ({
  isRolling,
  setIsRolling,
  character,
  selectedPotion,
  proficiencies,
  ingredientQuality,
  qualityDCs,
  ingredientModifiers,
  characterModifier = 0,
  webhookUrl,
  showRollResult,
}) => {
  if (isRolling) return null;
  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const skillModifier = characterModifier || 0;
    const totalRoll = d20Roll + skillModifier;

    const getMaxAchievableQuality = ({ proficiencies, ingredientQuality }) => {
      const hasKit = proficiencies.potioneersKit || proficiencies.herbologyKit;
      if (!hasKit) return "Cannot brew without kit";

      const qualityHierarchy = ["flawed", "normal", "exceptional", "superior"];
      const preparedIndex = qualityHierarchy.indexOf(ingredientQuality);

      if (preparedIndex === -1) {
        console.error(
          "Invalid prepared ingredient quality:",
          ingredientQuality
        );
        return "flawed";
      }

      const maxIndex = Math.min(preparedIndex + 2, qualityHierarchy.length - 1);
      const maxQuality = qualityHierarchy[maxIndex];

      return maxQuality;
    };

    const maxQuality = getMaxAchievableQuality({
      proficiencies,
      ingredientQuality,
    });
    const baseDCs = qualityDCs[selectedPotion.rarity];
    const ingredientMod = ingredientModifiers[ingredientQuality] || 0;
    const adjustedDCs = Object.fromEntries(
      Object.entries(baseDCs).map(([quality, dc]) => [
        quality,
        dc + ingredientMod,
      ])
    );

    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;

    let achievedQuality;
    let targetDC;

    if (isCriticalSuccess) {
      achievedQuality =
        maxQuality === "Cannot brew without kit" ? "ruined" : maxQuality;
      targetDC = adjustedDCs[achievedQuality] || 0;
    } else if (isCriticalFailure) {
      achievedQuality = "ruined";
      targetDC = 0;
    } else {
      const sortedQualities = Object.entries(adjustedDCs)
        .sort(([, a], [, b]) => b - a)
        .map(([quality]) => quality);

      achievedQuality = "ruined";
      for (const quality of sortedQualities) {
        const dc = adjustedDCs[quality];
        if (totalRoll >= dc) {
          achievedQuality = quality;
          break;
        }
      }

      const qualityHierarchy = [
        "ruined",
        "flawed",
        "normal",
        "exceptional",
        "superior",
      ];
      const maxIndex = qualityHierarchy.indexOf(maxQuality);
      const achievedIndex = qualityHierarchy.indexOf(achievedQuality);

      if (maxIndex !== -1 && achievedIndex > maxIndex) {
        achievedQuality = maxQuality;
      }

      targetDC = adjustedDCs[achievedQuality] || 0;
    }

    const brewingResult = {
      achievedQuality,
      maxQuality,
      diceRoll: d20Roll,
      characterModifier: skillModifier,
      total: totalRoll,
      roll: totalRoll,
      targetDC,
      baseDCs,
      adjustedDCs,
      ingredientMod,
      potion: selectedPotion,
      ingredientQuality,
      proficiencies,
    };

    if (showRollResult) {
      showRollResult({
        title: `Potion Brewing: \n ${selectedPotion.name}`,
        rollValue: d20Roll,
        modifier: skillModifier,
        total: totalRoll,
        isCriticalSuccess,
        isCriticalFailure,
        type: "potion",
        description: `Quality Achieved: ${
          achievedQuality.charAt(0).toUpperCase() + achievedQuality.slice(1)
        }`,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      alert(
        `Potion Brewing: d20(${d20Roll}) + ${skillModifier} = ${totalRoll} - Quality: ${achievedQuality}${criticalText}`
      );
    }

    let embedColor = 0x6b46c1; // Default potion color
    let resultText = "";

    // Set colors based on quality
    switch (achievedQuality) {
      case "superior":
        embedColor = 0x8b5cf6;
        break;
      case "exceptional":
        embedColor = 0x3b82f6;
        break;
      case "normal":
        embedColor = 0x10b981;
        break;
      case "flawed":
        embedColor = 0xf59e0b;
        break;
      case "ruined":
        embedColor = 0xef4444;
        break;
      default:
        embedColor = 0x6b7280;
        break;
    }

    if (isCriticalSuccess) {
      embedColor = 0xffd700;
      resultText = " - **CRITICAL SUCCESS!** 🎉";
    } else if (isCriticalFailure) {
      embedColor = 0xff0000;
      resultText = " - **CRITICAL FAILURE!** 💥";
    }

    // Harry Potter ruined messages
    const ruinedMessages = [
      "You did your best!",
      "Maybe stick to Transfiguration?",
      "You’re just one cauldron explosion away from a breakthrough… or remedial lessons.",
      "Technically a potion. Emotionally? More of a strongly brewed cry for help.",
      "Some potions turn lead to gold. Yours might turn potential to detention.",
      "Don't worry, we've all melted a cauldron or two!",
      "Ah yes, the rare ‘liquid disappointment.’ Must be part of the intermediate curriculum.",
      "At least you didn't turn anyone into a ferret!",
    ];

    let description = "";
    if (isCriticalSuccess) {
      description = "Natural 20!";
    } else if (isCriticalFailure) {
      description = "Natural 1!";
    }

    // Add ruined message if quality is ruined
    if (achievedQuality === "ruined") {
      const randomMessage =
        ruinedMessages[Math.floor(Math.random() * ruinedMessages.length)];
      description += description
        ? `\n\n*${randomMessage}*`
        : `*${randomMessage}*`;
    }

    const message = {
      embeds: [
        {
          title: `${character?.name || "Unknown"} Brewed: ${
            selectedPotion.name
          }${resultText}`,
          description: description,
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                skillModifier >= 0 ? "+" : ""
              }${skillModifier} = **${totalRoll}**${
                isCriticalSuccess
                  ? "\n✨ **Achieved maximum possible quality!**"
                  : isCriticalFailure
                  ? "\n💀 **Spectacular brewing failure!**"
                  : ""
              }`,
              inline: false,
            },
            {
              name: "Quality Achieved",
              value: `${
                achievedQuality.charAt(0).toUpperCase() +
                achievedQuality.slice(1)
              }`,
              inline: true,
            },
            {
              name: "Potion Effect",
              value: selectedPotion.description,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches - Potion Brewing • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }

    return brewingResult;
  } catch (error) {
    console.error("Error brewing potion:", error);
    return null;
  } finally {
    setIsRolling(false);
  }
};

export const rollInitiative = async ({
  character,
  isRolling,
  setIsRolling,
  characterModifiers,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;

    const mod = character.initiativeModifier;
    const total = d20Roll + mod;

    if (showRollResult) {
      showRollResult({
        title: `Initiative Roll`,
        rollValue: d20Roll,
        modifier: mod,
        total: total,
        isCriticalSuccess: false,
        isCriticalFailure: false,
        type: "initiative",
        description: `Rolling initiative for ${character.name}`,
      });
    } else {
      alert(`Rolled Initiative: d20(${d20Roll}) + ${mod} = ${total}`);
    }

    let embedColor = 0x107319;

    const message = {
      embeds: [
        {
          title: `${character.name} Rolled Initiative`,
          description: "",
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                mod >= 0 ? "+" : ""
              }${mod} = **${total}**`,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches- Initiative • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const rollSkill = async ({
  skill,
  abilityMod,
  isRolling,
  setIsRolling,
  character,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const skillBonus = calculateSkillBonus({
      skillName: skill.name,
      abilityMod,
      character,
    });
    const total = d20Roll + skillBonus;
    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;

    if (showRollResult) {
      showRollResult({
        title: `${skill.displayName} Check`,
        rollValue: d20Roll,
        modifier: skillBonus,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "skill",
        description: `Rolling ${skill.displayName} check for ${character.name}`,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      alert(
        `${skill.displayName} Check: d20(${d20Roll}) + ${skillBonus} = ${total}${criticalText}`
      );
    }

    let embedColor = 0x6600cc;
    let resultText = "";

    if (isCriticalSuccess) {
      embedColor = 0xffd700;
      resultText = " - **CRITICAL SUCCESS!** 🎉";
    } else if (isCriticalFailure) {
      embedColor = 0xff0000;
      resultText = " - **CRITICAL FAILURE!** 💥";
    }

    const message = {
      embeds: [
        {
          title: `${character.name} Rolled: ${skill.displayName}${resultText}`,
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                skillBonus >= 0 ? "+" : ""
              }${skillBonus} = **${total}**${
                isCriticalSuccess
                  ? "\n✨ **Exceptional success!**"
                  : isCriticalFailure
                  ? "\n💀 **Spectacular failure regardless of modifier!**"
                  : ""
              }`,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches - Skill Check • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const attemptSpell = async ({
  spellName,
  subject,
  showRollResult,
  getSpellModifier,
  selectedCharacter,
  setSpellAttempts,
  discordUserId,
  setAttemptingSpells,
  setCriticalSuccesses,
  updateSpellProgressSummary,
}) => {
  if (!selectedCharacter || !discordUserId) {
    alert("Please select a character first!");
    return;
  }

  setAttemptingSpells((prev) => ({ ...prev, [spellName]: true }));

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const totalModifier = getSpellModifier(
      spellName,
      subject,
      selectedCharacter
    );
    const total = d20Roll + totalModifier;
    let goal = 11;
    if (
      [
        "ABSCONDI",
        "PELLUCIDI PELLIS",
        "SAGITTARIO",
        "CONFRINGO",
        "DEVICTO",
        "STUPEFY",
        "PETRIFICUS TOTALUS",
        "PROTEGO",
        "PROTEGO MAXIMA",
        "FINITE INCANTATEM",
        "CONFUNDO",
        "BOMBARDA",
        "EPISKY",
        "EXPELLIARMUS",
        "INCARCEROUS",
      ].includes(spellName.toUpperCase())
    ) {
      goal += 3;
    }
    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;
    const isSuccess =
      (total >= goal || isCriticalSuccess) && !isCriticalFailure;

    if (showRollResult) {
      showRollResult({
        title: `${spellName} Attempt`,
        rollValue: d20Roll,
        modifier: totalModifier,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "spell",
        description: `Attempting to cast ${spellName} for ${selectedCharacter.name}`,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      const resultText = isSuccess ? "SUCCESS" : "FAILED";
      alert(
        `${spellName} Attempt: d20(${d20Roll}) + ${totalModifier} = ${total} - ${resultText}${criticalText}`
      );
    }

    if (isCriticalSuccess) {
      setSpellAttempts((prev) => ({
        ...prev,
        [spellName]: { 1: true, 2: true },
      }));
      setCriticalSuccesses((prev) => ({ ...prev, [spellName]: true }));
    } else if (isSuccess) {
      setSpellAttempts((prev) => {
        const currentAttempts = prev[spellName] || {};
        const newAttempts = { ...currentAttempts };

        if (!newAttempts[1]) {
          newAttempts[1] = true;
        } else if (!newAttempts[2]) {
          newAttempts[2] = true;
        }

        return {
          ...prev,
          [spellName]: newAttempts,
        };
      });
    }

    if (!discordWebhookUrl) {
      console.error("Discord webhook URL not configured");
      return;
    }

    let title = `${
      selectedCharacter?.name || "Unknown"
    } Attempted: ${spellName}`;
    let resultText = `${isSuccess ? "✅ SUCCESS" : "❌ FAILED"}`;
    let embedColor = isSuccess ? 0x00ff00 : 0xff0000;

    if (isCriticalSuccess) {
      title = `⭐ ${
        selectedCharacter?.name || "Unknown"
      } Attempted: ${spellName}`;
      resultText = `**${d20Roll}** - ⭐ CRITICALLY MASTERED!`;
      embedColor = 0xffd700;
    } else if (isCriticalFailure) {
      title = `💥 ${
        selectedCharacter?.name || "Unknown"
      } Attempted: ${spellName}`;
      resultText = `**${d20Roll}** - 💥 CRITICAL FAILURE!`;
      embedColor = 0x8b0000;
    }

    let rollDescription = `**Roll:** ${d20Roll}`;
    if (totalModifier !== 0) {
      const modifierText =
        totalModifier >= 0 ? `+${totalModifier}` : `${totalModifier}`;
      rollDescription += ` ${modifierText} = **${total}**`;
    }

    const fields = [
      {
        name: "Result",
        value: resultText,
        inline: true,
      },
      {
        name: "Roll Details",
        value: rollDescription,
        inline: true,
      },
    ];

    if (totalModifier !== 0 && selectedCharacter) {
      const modifierInfo = getModifierInfo(
        spellName,
        subject,
        selectedCharacter
      );

      let modifierBreakdown = `${modifierInfo.abilityName}: ${
        modifierInfo.abilityModifier >= 0 ? "+" : ""
      }${modifierInfo.abilityModifier}`;
      if (modifierInfo.wandModifier !== 0) {
        modifierBreakdown += `\nWand (${modifierInfo.wandType}): ${
          modifierInfo.wandModifier >= 0 ? "+" : ""
        }${modifierInfo.wandModifier}`;
      }

      fields.push({
        name: "Modifier Breakdown",
        value: modifierBreakdown,
        inline: false,
      });
    }

    const embed = {
      title: title,
      description: "",
      color: embedColor,
      fields: fields,
      timestamp: new Date().toISOString(),
      footer: {
        text: "Witches And Snitches - Spellcasting",
      },
    };

    try {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });
    } catch (error) {
      console.error("Error sending to Discord:", error);
    }

    await updateSpellProgressSummary(spellName, isSuccess, isCriticalSuccess);
  } catch (error) {
    console.error("Error attempting spell:", error);
    alert("Error processing spell attempt. Please try again.");
  } finally {
    setAttemptingSpells((prev) => ({ ...prev, [spellName]: false }));
  }
};

export const rollAbilityStat = () => {
  const roller = new DiceRoller();
  const result = roller.roll("4d6kh3");
  return result.total;
};

export const rollSavingThrow = async ({
  ability,
  isRolling,
  setIsRolling,
  character,
  savingThrowModifier,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const modifier = savingThrowModifier;
    const total = d20Roll + modifier;

    const isCriticalSuccess = d20Roll === 20;
    const isCriticalFailure = d20Roll === 1;

    if (showRollResult) {
      showRollResult({
        title: `${ability.name} Saving Throw`,
        rollValue: d20Roll,
        modifier: modifier,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "saving_throw",
        description: `Rolling ${ability.name} saving throw for ${character.name}`,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      alert(
        `${ability.name} Saving Throw: d20(${d20Roll}) + ${modifier} = ${total}${criticalText}`
      );
    }

    let embedColor = 0x8b5cf6;
    let resultText = "";

    if (isCriticalSuccess) {
      embedColor = 0xffd700;
      resultText = " - **CRITICAL SUCCESS!** 🎉";
    } else if (isCriticalFailure) {
      embedColor = 0xff0000;
      resultText = " - **CRITICAL FAILURE!** 💥";
    }

    const message = {
      embeds: [
        {
          title: `${character.name} Rolled: ${ability.name} Saving Throw${resultText}`,
          description: `${
            isCriticalSuccess
              ? "Natural 20!"
              : isCriticalFailure
              ? "Natural 1!"
              : ""
          }`,
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `Roll: ${d20Roll} ${
                modifier >= 0 ? "+" : ""
              }${modifier} = **${total}**${
                isCriticalSuccess
                  ? "\n✨ **Exceptional success regardless of DC!**"
                  : isCriticalFailure
                  ? "\n💀 **Spectacular failure regardless of modifier!**"
                  : ""
              }`,
              inline: false,
            },
          ],
          footer: {
            text: `Witches and Snitches - Saving Throw • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const rollResearch = async ({
  spellName,
  subject,
  selectedCharacter,
  dc,
  playerYear,
  spellYear,
  getSpellModifier,
  getModifierInfo,
  showRollResult,
}) => {
  try {
    const modifier = getSpellModifier(spellName, subject, selectedCharacter);
    const diceResult = rollDice();
    const d20Roll = diceResult.total;
    const totalRoll = d20Roll + modifier;
    const isNaturalTwenty = d20Roll === 20;
    const isSuccess = totalRoll >= dc;

    const isCriticalSuccess = isNaturalTwenty;
    const isCriticalFailure = d20Roll === 1;

    if (showRollResult) {
      showRollResult({
        title: `Research: ${spellName}`,
        rollValue: d20Roll,
        modifier: modifier,
        total: totalRoll,
        isCriticalSuccess,
        isCriticalFailure,
        type: "research",
        description: `History of Magic check (DC ${dc}) for ${selectedCharacter.name}`,
      });
    }

    if (discordWebhookUrl) {
      let embedColor = isSuccess ? 0x10b981 : 0xef4444;
      let title = `${
        selectedCharacter?.name || "Unknown"
      } Researched: ${spellName}`;
      let resultText = "";

      if (isNaturalTwenty) {
        embedColor = 0xffd700;
        title = `⭐ ${
          selectedCharacter?.name || "Unknown"
        } Researched: ${spellName}`;
        resultText = "⭐ **EXCELLENT RESEARCH!** (Natural 20)";
      } else if (isSuccess) {
        resultText = "✅ **Research Successful!**";
      } else {
        resultText = "❌ **Research Failed**";
      }

      const fields = [
        {
          name: "Result",
          value: resultText,
          inline: true,
        },
        {
          name: "Roll Details",
          value: `**${d20Roll}** ${
            modifier >= 0 ? "+" : ""
          }${modifier} = **${totalRoll}** vs DC ${dc}`,
          inline: true,
        },
        {
          name: "Research Info",
          value: `Player Year: ${playerYear}\nSpell Year: ${spellYear}`,
          inline: true,
        },
      ];

      if (isSuccess) {
        if (isNaturalTwenty) {
          fields.push({
            name: "Special Benefit",
            value: "Gained deep understanding + 1 successful attempt!",
            inline: false,
          });
        } else {
          fields.push({
            name: "Benefit",
            value: "Spell marked as researched for future attempts",
            inline: false,
          });
        }
      } else {
        fields.push({
          name: "Outcome",
          value: `${spellName} proved too difficult to understand at this time`,
          inline: false,
        });
      }

      if (modifier !== 0) {
        const modifierInfo = getModifierInfo(
          spellName,
          subject,
          selectedCharacter
        );

        let modifierBreakdown = `${modifierInfo.abilityName}: ${
          modifierInfo.abilityModifier >= 0 ? "+" : ""
        }${modifierInfo.abilityModifier}`;

        if (modifierInfo.wandModifier !== 0) {
          modifierBreakdown += `\nWand (${modifierInfo.wandType}): ${
            modifierInfo.wandModifier >= 0 ? "+" : ""
          }${modifierInfo.wandModifier}`;
        }

        fields.push({
          name: "Modifier Breakdown",
          value: modifierBreakdown,
          inline: false,
        });
      }

      const embed = {
        title: title,
        description: "",
        color: embedColor,
        fields: fields,
        timestamp: new Date().toISOString(),
        footer: {
          text: "Witches And Snitches - Spell Research",
        },
      };

      try {
        await fetch(discordWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [embed],
          }),
        });
      } catch (discordError) {
        console.error("Error sending to Discord:", discordError);
      }
    }

    return {
      d20Roll,
      modifier,
      totalRoll,
      dc,
      isSuccess,
      isNaturalTwenty,
      rollMessage: `Research Check: ${d20Roll}${
        modifier >= 0 ? "+" : ""
      }${modifier} = ${totalRoll} vs DC ${dc}`,
    };
  } catch (error) {
    console.error("Error during research roll:", error);
    throw error;
  }
};

export const rollFlexibleDie = (diceType = 20, rollType = "normal") => {
  const roller = new DiceRoller();
  let notation;

  if (rollType === "advantage") {
    notation = `2d${diceType}kh1`;
  } else if (rollType === "disadvantage") {
    notation = `2d${diceType}kl1`;
  } else {
    notation = `1d${diceType}`;
  }

  const roll = roller.roll(notation);
  return {
    total: roll.total,
    notation: roll.notation,
    output: roll.output,
    diceType: diceType,
    rollType: rollType,
  };
};

export const rollFlexibleDice = async ({
  diceType = 20,
  rollType = "normal",
  modifier = 0,
  title = "Flexible Roll",
  description = "Rolling dice with modifier",
  character = null,
  isRolling,
  setIsRolling,
  showRollResult,
}) => {
  if (isRolling) return;

  setIsRolling(true);

  try {
    const diceResult = rollFlexibleDie(diceType, rollType);
    const diceRoll = diceResult.total;
    const mod = parseInt(modifier) || 0;
    const total = diceRoll + mod;

    const isCriticalSuccess = diceType === 20 && diceRoll === 20;
    const isCriticalFailure = diceType === 20 && diceRoll === 1;

    if (showRollResult) {
      showRollResult({
        title: title,
        rollValue: diceRoll,
        modifier: mod,
        total: total,
        isCriticalSuccess,
        isCriticalFailure,
        type: "flexible",
        description: description,
        diceType: diceType,
        rollType: rollType,
      });
    } else {
      const criticalText = isCriticalSuccess
        ? " - CRITICAL SUCCESS!"
        : isCriticalFailure
        ? " - CRITICAL FAILURE!"
        : "";
      const rollTypeText =
        rollType !== "normal" ? ` (${rollType.toUpperCase()})` : "";
      alert(
        `${title}: d${diceType}${rollTypeText}(${diceRoll}) + ${mod} = ${total}${criticalText}`
      );
    }

    let embedColor = 0xff9e3d;
    let resultText = "";

    if (isCriticalSuccess) {
      embedColor = 0xffd700;
      resultText = " - **CRITICAL SUCCESS!** 🎉";
    } else if (isCriticalFailure) {
      embedColor = 0xff0000;
      resultText = " - **CRITICAL FAILURE!** 💥";
    }

    const rollTitle = character
      ? `${character.name}: ${title}${resultText}`
      : `${title}${resultText}`;

    const rollTypeDescription =
      rollType !== "normal"
        ? ` (${rollType.charAt(0).toUpperCase() + rollType.slice(1)})`
        : "";

    const message = {
      embeds: [
        {
          title: rollTitle,
          description:
            rollType !== "normal"
              ? `${
                  rollType === "advantage" ? "🎯 Advantage" : "⚠️ Disadvantage"
                } Roll${rollType !== "normal" ? rollTypeDescription : ""}`
              : "",
          color: embedColor,
          fields: [
            {
              name: "Roll Details",
              value: `d${diceType}${rollTypeDescription}: ${diceRoll} ${
                mod >= 0 ? "+" : ""
              }${mod} = **${total}**${
                isCriticalSuccess
                  ? "\n✨ **Critical Success!**"
                  : isCriticalFailure
                  ? "\n💀 **Critical Failure!**"
                  : ""
              }`,
              inline: false,
            },
            {
              name: "Dice Formula",
              value: diceResult.notation,
              inline: true,
            },
          ],
          footer: {
            text: `Witches and Snitches - Flexible Roll • Today at ${new Date().toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}`,
          },
        },
      ],
    };

    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  } catch (error) {
    console.error("Error sending Discord message:", error);
    alert("Failed to send roll to Discord");
  } finally {
    setIsRolling(false);
  }
};

export const useRollFunctions = () => {
  const { showRollResult } = useRollModal();
  return {
    rollAbility: (params) => rollAbility({ ...params, showRollResult }),
    rollInitiative: (params) => rollInitiative({ ...params, showRollResult }),
    rollSkill: (params) => rollSkill({ ...params, showRollResult }),
    attemptSpell: (params) => attemptSpell({ ...params, showRollResult }),
    rollBrewPotion: (params) => rollBrewPotion({ ...params, showRollResult }),
    rollGenericD20: (params) => rollGenericD20({ ...params, showRollResult }),
    rollSavingThrow: (params) => rollSavingThrow({ ...params, showRollResult }),
    rollResearch: (params) => rollResearch({ ...params, showRollResult }),
    rollFlexibleDice: (params) =>
      rollFlexibleDice({ ...params, showRollResult }),
    rollCorruption: (params) => rollCorruption({ ...params, showRollResult }),
  };
};
