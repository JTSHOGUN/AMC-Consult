/**
 * Interaction palette: every hover/press surface gets its own light wash with a
 * matching deep tone for text. Full literal class names so Tailwind can see them.
 */

export type Palette = {
  wash: string; // background wash on hover/active
  washForce: string; // same wash that overrides component-layer hovers
  deep: string; // deep text/icon tone used with the wash
  chip: string; // solid chip fill (number badges, bars)
  edge: string; // border tone matching the wash
};

export const servicePalette: Record<string, Palette> = {
  "enterprise-economic-development": {
    wash: "hover:bg-hov-mint", washForce: "hover:!bg-hov-mint",
    deep: "text-deep-teal",
    chip: "bg-deep-teal", edge: "border-deep-teal",
  },
  "project-cycle-management": {
    wash: "hover:bg-hov-sky", washForce: "hover:!bg-hov-sky",
    deep: "text-deep-blue",
    chip: "bg-deep-blue", edge: "border-deep-blue",
  },
  "social-environmental-research": {
    wash: "hover:bg-hov-aqua", washForce: "hover:!bg-hov-aqua",
    deep: "text-deep-cyan",
    chip: "bg-deep-cyan", edge: "border-deep-cyan",
  },
  "organizational-development": {
    wash: "hover:bg-hov-lavender", washForce: "hover:!bg-hov-lavender",
    deep: "text-deep-plum",
    chip: "bg-deep-plum", edge: "border-deep-plum",
  },
  "vocational-skills-training": {
    wash: "hover:bg-hov-peach", washForce: "hover:!bg-hov-peach",
    deep: "text-deep-terra",
    chip: "bg-deep-terra", edge: "border-deep-terra",
  },
  recruitment: {
    wash: "hover:bg-hov-rose", washForce: "hover:!bg-hov-rose",
    deep: "text-deep-rose",
    chip: "bg-deep-rose", edge: "border-deep-rose",
  },
};

/** Static wash fill (for active/selected states) per service. */
export const serviceActiveFill: Record<string, string> = {
  "enterprise-economic-development": "bg-hov-mint",
  "project-cycle-management": "bg-hov-sky",
  "social-environmental-research": "bg-hov-aqua",
  "organizational-development": "bg-hov-lavender",
  "vocational-skills-training": "bg-hov-peach",
  recruitment: "bg-hov-rose",
};

/** Rotating washes for generic interactive lists (sectors, FAQs, nav, cards). */
export const hoverCycle: Palette[] = [
  { wash: "hover:bg-hov-mint", washForce: "hover:!bg-hov-mint", deep: "text-deep-teal", chip: "bg-deep-teal", edge: "border-deep-teal" },
  { wash: "hover:bg-hov-sky", washForce: "hover:!bg-hov-sky", deep: "text-deep-blue", chip: "bg-deep-blue", edge: "border-deep-blue" },
  { wash: "hover:bg-hov-aqua", washForce: "hover:!bg-hov-aqua", deep: "text-deep-cyan", chip: "bg-deep-cyan", edge: "border-deep-cyan" },
  { wash: "hover:bg-hov-lavender", washForce: "hover:!bg-hov-lavender", deep: "text-deep-plum", chip: "bg-deep-plum", edge: "border-deep-plum" },
  { wash: "hover:bg-hov-peach", washForce: "hover:!bg-hov-peach", deep: "text-deep-terra", chip: "bg-deep-terra", edge: "border-deep-terra" },
  { wash: "hover:bg-hov-rose", washForce: "hover:!bg-hov-rose", deep: "text-deep-rose", chip: "bg-deep-rose", edge: "border-deep-rose" },
  { wash: "hover:bg-hov-lemon", washForce: "hover:!bg-hov-lemon", deep: "text-deep-gold", chip: "bg-deep-gold", edge: "border-deep-gold" },
  { wash: "hover:bg-hov-sage", washForce: "hover:!bg-hov-sage", deep: "text-deep-olive", chip: "bg-deep-olive", edge: "border-deep-olive" },
  { wash: "hover:bg-hov-sand", washForce: "hover:!bg-hov-sand", deep: "text-deep-sand", chip: "bg-deep-sand", edge: "border-deep-sand" },
];

/** Border-colour rotation for cards on hover (Tailwind literal strings). */
export const hoverBorderCycle = [
  "hover:border-deep-teal/45",
  "hover:border-deep-blue/45",
  "hover:border-deep-cyan/45",
  "hover:border-deep-plum/45",
  "hover:border-deep-terra/45",
  "hover:border-deep-rose/45",
  "hover:border-deep-gold/45",
  "hover:border-deep-olive/45",
  "hover:border-deep-sand/45",
];

/** Static wash fills (no hover) for alternating content blocks. */
export const washFillCycle = [
  "bg-hov-mint",
  "bg-hov-sky",
  "bg-hov-aqua",
  "bg-hov-lavender",
  "bg-hov-peach",
  "bg-hov-rose",
  "bg-hov-lemon",
  "bg-hov-sage",
  "bg-hov-sand",
];

/** Literal hover text-tone cycles (for use with `group` on the parent link). */
export const groupDeepCycle = [
  "group-hover:text-deep-teal",
  "group-hover:text-deep-blue",
  "group-hover:text-deep-cyan",
  "group-hover:text-deep-plum",
  "group-hover:text-deep-terra",
  "group-hover:text-deep-rose",
  "group-hover:text-deep-gold",
  "group-hover:text-deep-olive",
  "group-hover:text-deep-sand",
];

export const hoverDeepCycle = [
  "hover:text-deep-teal",
  "hover:text-deep-blue",
  "hover:text-deep-cyan",
  "hover:text-deep-plum",
  "hover:text-deep-terra",
  "hover:text-deep-rose",
  "hover:text-deep-gold",
  "hover:text-deep-olive",
  "hover:text-deep-sand",
];
