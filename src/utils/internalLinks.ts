export const internalLinks = [
  "design",
  "prep",
  "blueprint",
  "convert",
  "export",
  "other",
  "test",
] as const;
export type InternalLinks = typeof internalLinks[number];

export const internalLinkContents: {
  [key in InternalLinks]: {
    title: string;
  };
} = {
  design: {
    title: "Design",
  },
  prep: {
    title: "Preparation",
  },
  blueprint: {
    title: "Blueprint",
  },
  convert: {
    title: "Convert",
  },
  export: {
    title: "Export",
  },
  other: {
    title: "Other",
  },
  test: {
    title: "Test",
  },
};
