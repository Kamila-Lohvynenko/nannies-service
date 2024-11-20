export function arrayToCapitalizedString(array: string[]): string {
  return array
    .map(
      (arrayItem) =>
        arrayItem.charAt(0).toUpperCase() + arrayItem.slice(1).toLowerCase(),
    )
    .join(', ');
}
