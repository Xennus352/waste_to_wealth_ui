export const truncateToWords = (
  text: string | null | undefined,
  wordCount: number
) => {
  if (text) {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  }

  return;
};
