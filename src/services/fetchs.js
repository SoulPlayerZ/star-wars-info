const getChars = async () => {
  const people = await fetch('https://swapi.dev/api/people/');
  const { results, next, previous } = await people.json();

  return { results, next, previous };
}

export default getChars;