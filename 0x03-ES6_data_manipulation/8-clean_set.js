export default function cleanSet(set, startString) {
  const matchingElements = [];
  if (!(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element[0] === startString[0] && element.startsWith(startString)) {
      matchingElements.push(element.substring(startString.length));
    }
  });
  return matchingElements.join('-');
}
