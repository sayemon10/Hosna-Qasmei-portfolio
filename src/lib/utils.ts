import { CONFIG } from '@/config';

export function reformatDate(dateStr: string) {
  // Split the input date string to get year, month, and day
  const parts = dateStr.split('-').map((part) => parseInt(part, 10));

  // Create a new Date object using UTC values
  // Note: The month argument is 0-indexed (0 is January, 1 is February, etc.)
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));

  // Correctly typed options for toLocaleDateString
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Specify UTC as the timezone
  };

  return date.toLocaleDateString('en-US', options);
}

export function calculateReadingTime(mdxContent: any) {
  // Define the average reading speed (words per minute)
  const wordsPerMinute = 200;

  // Strip MDX/HTML tags and count the words
  const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, ''); // Basic stripping of HTML tags
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length;

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}

export function findMostRecentEntryByPlatform(platformName: string, data: any) {
  // Filter entries by platformName
  const filteredEntries = data.filter(
    (entry: any) => entry.platformName === platformName,
  );

  const getSocialData = CONFIG.socials.filter(
    (entry: any) => entry.platform === platformName,
  );

  // Sort by _creationTime in descending order (most recent first)
  const sortedEntries = filteredEntries.sort(
    (a: any, b: any) => b._creationTime - a._creationTime,
  );

  let temp = sortedEntries[0];
  temp['icon'] = getSocialData[0].icon;
  temp['link'] = getSocialData[0].link;

  // Return the most recent entry, or null if no entries are found
  return temp;
}
