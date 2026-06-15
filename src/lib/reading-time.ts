export function estimateReadingTime(content: string, wordsPerMinute = 200): string {
    const normalized = content
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const words = normalized.length === 0 ? 0 : normalized.split(' ').length;
    const minutes = Math.max(1, Math.round(words / wordsPerMinute));

    return `${minutes} min read`;
}
