import type { TQuestion, TSex } from "./types";
import * as CharacterImages from "./images";
import MaleIcon from "@/public/m.svg";
import FemaleIcon from "@/public/f.svg";

export const QUESTION_LIST: Readonly<TQuestion[]> = Object.freeze([
  // Gender-specific question (optional for your logic)
  {
    question: "What would you rather be?",
    type: "multiple-choice",
    shouldRandomize: false,
    answers: [
      {
        content: (
          <div className="w-full justify-center items-center flex transition-all text-inherit ">
            <MaleIcon className="w-10 h-10" />
          </div>
        ),
        text: "",
        characters: [],
        weight: 0,
        value: "male",
      },
      {
        content: (
          <div className="w-full justify-center items-center flex transition-all text-inherit">
            <FemaleIcon className="w-10 h-10" />
          </div>
        ),
        text: "",
        characters: [],
        weight: 0,
        value: "female",
      },
    ],
  },

  // Conflict Handling
  {
    question: "How do you handle conflict?",
    type: "multiple-choice",
    answers: [
      {
        text: "I confront it directly and deal with the problem.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "I think through the situation carefully before acting.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "I prefer to avoid conflict and find a way around it.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "I mediate and help everyone find common ground.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "I plan ahead and work behind the scenes to resolve it.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "I confront it with both strategy and strength.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // Physical Challenges
  {
    question: "Do you enjoy physical challenges?",
    type: "yes-no-maybe",
    answers: [
      {
        text: "Yes, I love them.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "I prefer mental challenges.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "I enjoy a mix of physical and strategic challenges.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
      {
        text: "I avoid physical challenges.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "It depends on the situation.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
    ],
  },

  // Curiosity Level
  {
    question: "Rate your curiosity level on a scale of 1 to 5.",
    type: "rating",
    answers: [
      {
        text: "1",
        characters: ["Brave Knight"],
        weight: 2,
      },
      { text: "2", characters: ["Mysterious Rogue"], weight: 2 },
      { text: "3", characters: ["Compassionate Healer"], weight: 2 },
      { text: "4", characters: ["Adventurous Explorer"], weight: 2 },
      { text: "5", characters: ["Wise Wizard"], weight: 2 },
    ],
  },

  // Motivation
  {
    question: "What motivates you the most?",
    type: "multiple-choice",
    answers: [
      {
        text: "Responsibility and loyalty to others.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "Knowledge and understanding.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "Freedom and independence.",
        characters: ["Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "Ambition and power.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "Helping others and making a difference.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "Leading with bravery and strategy.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // Type of Challenge
  {
    question: "What type of challenge excites you?",
    type: "multiple-choice",
    answers: [
      {
        text: "Physical endurance.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "Mental puzzles.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "Finding creative solutions.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "Helping others overcome their struggles.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "Strategic thinking and mastering dangerous situations.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "Leading others through risky and difficult situations.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // Spotlight or Background
  {
    question: "Would you rather be in the background or the spotlight?",
    type: "yes-no-maybe",
    answers: [
      {
        text: "I prefer the spotlight.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "I thrive in the background, working from the shadows.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "I'm comfortable in either role, depending on what's needed.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
      {
        text: "I prefer to stay behind and advise.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
    ],
  },

  // Helping Others
  {
    question: "On a scale of 1 to 5, how much do you enjoy helping others?",
    type: "rating",
    answers: [
      { text: "1", characters: ["Dark Sorcerer"], weight: 2 },
      { text: "2", characters: ["Mysterious Rogue"], weight: 2 },
      { text: "3", characters: ["Adventurous Explorer"], weight: 2 },
      { text: "4", characters: ["Brave Knight"], weight: 2 },
      { text: "5", characters: ["Compassionate Healer"], weight: 2 },
    ],
  },

  // Spending Time
  {
    question: "What is your preferred way of spending time?",
    type: "multiple-choice",
    answers: [
      {
        text: "Exploring new places and adventures.",
        characters: ["Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "Studying and learning new things.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "Helping others in need.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "Planning my next move to gain more power.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "Training and preparing for future challenges.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "Leading others in dangerous quests.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // Response to Failure
  {
    question: "How do you respond to failure?",
    type: "multiple-choice",
    answers: [
      {
        text: "I try again with more determination.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "I reflect and learn from it.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "I find a different approach or path.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "I seek to help others who were affected.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "I use failure to fuel my ambition for greater power.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "I face it head-on with both bravery and strategy.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // Ambition
  {
    question: "Would you describe yourself as ambitious?",
    type: "yes-no-maybe",
    answers: [
      {
        text: "Yes, highly ambitious.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "I'm more focused on helping others.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "My ambition is to lead others through tough challenges.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
      {
        text: "I'm ambitious, but I prefer a balanced approach.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
    ],
  },

  // Leadership Style
  {
    question: "How do you prefer to lead?",
    type: "multiple-choice",
    answers: [
      {
        text: "By charging ahead with bravery.",
        characters: ["Brave Knight"],
        weight: 2,
      },
      {
        text: "By wisdom and counsel.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "By working from the shadows and influencing others.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "By helping others and guiding them gently.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "By leading with both strength and strategy.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
    ],
  },

  // High-risk Situations
  {
    question: "How do you handle high-risk situations?",
    type: "multiple-choice",
    answers: [
      {
        text: "I face it head-on with confidence.",
        characters: ["Dragon Rider"],
        weight: 2,
      },
      {
        text: "I analyze the risk and take careful steps.",
        characters: ["Wise Wizard"],
        weight: 2,
      },
      {
        text: "I find a way to navigate around the risk.",
        characters: ["Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "I focus on protecting others from the risk.",
        characters: ["Compassionate Healer"],
        weight: 2,
      },
      {
        text: "I use strategy to overcome high-risk situations.",
        characters: ["Dark Sorcerer"],
        weight: 2,
      },
    ],
  },
]);

export const CHARACTER_NAMES = Object.freeze({
  BRAVE_KNIGHT: "Brave Knight",
  WISE_WIZARD: "Wise Wizard",
  MYSTERIOUS_ROGUE: "Mysterious Rogue",
  COMPASSIONATE_HEALER: "Compassionate Healer",
  DARK_SORCERER: "Dark Sorcerer",
  ADVENTUROUS_EXPLORER: "Adventurous Explorer",
  NOBLE_ELF: "Noble Elf",
  DRAGON_RIDER: "Dragon Rider",
});

export const CHARACTER_IMAGES: Readonly<
  Record<(keyof typeof CHARACTER_NAMES)[number], Record<TSex, string[]>>
> = Object.freeze({
  [CHARACTER_NAMES.BRAVE_KNIGHT]: {
    male: [CharacterImages.BraveKnight, CharacterImages.BraveKnight2],
    female: [
      CharacterImages.BraveKnightFemale,
      CharacterImages.BraveKnightFemale2,
    ],
  },
  [CHARACTER_NAMES.WISE_WIZARD]: {
    male: [CharacterImages.WiseWizard],
    female: [CharacterImages.WiseWizardFemale],
  },
  [CHARACTER_NAMES.MYSTERIOUS_ROGUE]: {
    male: [CharacterImages.MysteriousRogue],
    female: [CharacterImages.MysteriousRogueFemale],
  },
  [CHARACTER_NAMES.COMPASSIONATE_HEALER]: {
    male: [
      CharacterImages.CompassionateHealer,
      CharacterImages.CompassionateHealer2,
    ],
    female: [CharacterImages.CompassionateHealerFemale],
  },
  [CHARACTER_NAMES.DARK_SORCERER]: {
    male: [CharacterImages.DarkSorcerer, CharacterImages.DarkSorcerer2],
    female: [
      CharacterImages.DarkSorcererFemale,
      CharacterImages.DarkSorcererFemale2,
    ],
  },
  [CHARACTER_NAMES.ADVENTUROUS_EXPLORER]: {
    male: [CharacterImages.AdventurousExplorer],
    female: [CharacterImages.AdventurousExplorerFemale],
  },
  [CHARACTER_NAMES.NOBLE_ELF]: {
    male: [CharacterImages.NobleElf, CharacterImages.NobleElf2],
    female: [CharacterImages.NobleElfFemale, CharacterImages.NobleElfFemale2],
  },
  [CHARACTER_NAMES.DRAGON_RIDER]: {
    male: [CharacterImages.DragonRider, CharacterImages.DragonRider2],
    female: [CharacterImages.DragonRiderFemale],
  },
});

export const CHARACTER_DESCRIPTIONS: Readonly<
  Record<
    (keyof typeof CHARACTER_NAMES)[number],
    {
      summary: string;
      keyTraits: string[];
      notes: string;
    }
  >
> = Object.freeze({
  [CHARACTER_NAMES.BRAVE_KNIGHT]: {
    summary:
      "You are strong, courageous, and always ready to take on any challenge that comes your way. You confront problems head-on, lead by example, and stand up for others. Loyalty and responsibility guide your actions, and you thrive in situations that demand physical and mental endurance. You may not shy away from conflict, but you always fight with honor and integrity.",
    keyTraits: [
      "Courageous",
      "Loyal and Responsible",
      "Action-Oriented Leader",
      "Faces challenges head-on",
    ],
    notes:
      "Your bravery is admirable, but be careful not to rush into conflicts without thinking them through. Sometimes the best solution isn't to fight but to strategize. Make sure you consider the long-term effects of your actions and remember that others may not share your resilience.",
  },
  [CHARACTER_NAMES.WISE_WIZARD]: {
    summary:
      "Your strength lies in your intellect and wisdom. You think carefully before making decisions and prefer to solve problems using your knowledge and logic. You value learning and personal growth, and others often seek your counsel. In leadership, you guide others with careful planning and insight, always taking the long-term view.",
    keyTraits: [
      "Intellectual and Strategic",
      "Patient and Thoughtful",
      "Loves knowledge and Wisdom",
      "A counselor and Advisor",
    ],
    notes:
      "Your wisdom is a powerful asset, but don’t become so lost in thought and planning that you miss the chance to act. Overthinking can sometimes paralyze progress, and not every situation requires a perfectly calculated response. Remember to balance knowledge with action.",
  },
  [CHARACTER_NAMES.MYSTERIOUS_ROGUE]: {
    summary:
      "You move through life with agility, preferring to stay in the background, influencing events from the shadows. Independence and freedom are your guiding principles. You are clever, quick-thinking, and find creative ways to solve problems. While you may avoid the spotlight, your cunning and adaptability allow you to navigate even the most complex situations with ease.",
    keyTraits: [
      "Independent and Freedom-loving",
      "Cunning and Adaptable",
      "Prefers stealth and strategy",
      "Creative problem-solver",
    ],
    notes:
      "Your independence and cleverness are impressive, but be cautious of becoming too detached or secretive. Others may struggle to trust you if they feel you're always working behind the scenes. Sometimes, sharing your plans or letting others in can strengthen relationships and make your path smoother.",
  },
  [CHARACTER_NAMES.COMPASSIONATE_HEALER]: {
    summary:
      "You are driven by your desire to help others. Your empathy and kindness make you a natural healer, and you often put others' needs before your own. You thrive in situations where you can provide support, guidance, and care. In leadership, you nurture and guide those around you, always seeking harmony and balance.",
    keyTraits: [
      "Empathetic and Kind",
      "Supportive and Nurturing",
      "Valus harmony and Healing",
      "Driven by a desire to help others",
    ],
    notes:
      "Your compassion is a beautiful gift, but make sure not to sacrifice too much of yourself in the process. It's important to set boundaries and take care of your own well-being. If you give too much, you may burn out and be unable to help anyone. Learn to balance helping others with self-care.",
  },
  [CHARACTER_NAMES.DARK_SORCERER]: {
    summary:
      "You are ambitious, powerful, and not afraid to seek what you want. You excel in using both strategy and cunning to achieve your goals. Though you may prefer to work behind the scenes, you are always plotting your next move. Challenges and setbacks only fuel your drive for greater power and success. You lead through careful planning, using your intellect and influence to shape the world around you.",
    keyTraits: [
      "Ambitious and strategic",
      "Prefers working behind the scenes",
      "Highly driven by power and influence",
      "Uses intellect to achieve goals",
    ],
    notes:
      "Your ambition is formidable, but be wary of letting the pursuit of power consume you. Sometimes, the desire to control outcomes can alienate others or lead to unhealthy manipulation. Remember that true leadership comes not just from power, but from integrity and the trust you build with those around you.",
  },
  [CHARACTER_NAMES.ADVENTUROUS_EXPLORER]: {
    summary:
      "You thrive in adventure and love the thrill of discovering new places and experiences. Your curiosity drives you to explore the world and push your limits. Independence and freedom are key to who you are, and you are always looking for the next challenge or journey. You lead with spontaneity and adaptability, ready to face whatever comes your way.",
    keyTraits: [
      "Adventurous and curious",
      "Independent and free-spirited",
      "Thrives on exploration and new experiences",
      "Adapts easily to new challenges",
    ],
    notes:
      "Your sense of adventure is inspiring, but be cautious of becoming too restless. Constantly seeking the next thrill can make it hard to settle down or commit to responsibilities. Make sure you find a balance between your desire for exploration and the need to establish roots or long-term goals.",
  },
  [CHARACTER_NAMES.DRAGON_RIDER]: {
    summary:
      "You are a natural leader, combining bravery and strategy to overcome challenges. You don’t shy away from danger, but face it head-on with confidence and poise. You are both a protector and a warrior, leading others through tough situations with strength and wisdom. Your loyalty and responsibility toward those you lead make you a strong and reliable figure.",
    keyTraits: [
      "Brave and strategic leader",
      "Confident in the face of danger",
      "Protective of others",
      "Combines strength and wisdom in leadership",
    ],
    notes:
      "Your leadership is powerful, but remember that true strength comes from collaboration, not just command. Be careful not to take on too much responsibility or become overbearing. Let others share the burden, and trust that your team can handle their part. Delegating will make your leadership even stronger.",
  },
});

export const INITIAL_VALUES = Object.freeze({
  [CHARACTER_NAMES.BRAVE_KNIGHT]: 0,
  [CHARACTER_NAMES.WISE_WIZARD]: 0,
  [CHARACTER_NAMES.MYSTERIOUS_ROGUE]: 0,
  [CHARACTER_NAMES.COMPASSIONATE_HEALER]: 0,
  [CHARACTER_NAMES.DARK_SORCERER]: 0,
  [CHARACTER_NAMES.ADVENTUROUS_EXPLORER]: 0,
  [CHARACTER_NAMES.NOBLE_ELF]: 0,
})