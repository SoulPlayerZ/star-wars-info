export default async function getAllChars () {
  const people = await fetch('https://swapi.dev/api/people/?page=1');
  const { results, next, previous } = await people.json();

  return { results, next, previous };
}

export const getAllPlanets = async () => {
  const planets = await fetch('https://swapi.dev/api/planets/?page=1');
  const { results, next, previous } = await planets.json();

  return { results, next, previous };
}

export const getAllMovies = async () => {
  const movies = await fetch('https://swapi.dev/api/films/?page=1');
  const { results, next, previous } = await movies.json();

  return { results, next, previous };
}
