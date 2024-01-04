export default function sortCharacters(characters) {
  return characters.sort(function (a, b) {
    return b.health - a.health ;
  });
}
