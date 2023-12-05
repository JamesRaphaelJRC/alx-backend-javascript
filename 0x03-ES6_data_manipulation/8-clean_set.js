export default function cleanSet(set, startString) {
  const matchingElements = [];
  set.forEach((element) => {
    if (startString !== '' && element.startsWith(startString)) {
      matchingElements.push(element.substring(startString.length));
    }
  });
  return matchingElements.join('-');
}
