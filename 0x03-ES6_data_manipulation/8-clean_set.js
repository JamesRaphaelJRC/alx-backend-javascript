export default function cleanSet(set, startString) {
  const matchingElements = [];
  if (!(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      matchingElements.push(element.substring(startString.length));
    }
  });
  return matchingElements.join('-');
}
