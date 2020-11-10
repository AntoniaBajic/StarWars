interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

interface People {
  name: string;
  height: string;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
const StartWarsApi = {
  getMovies: async (): Promise<Movie[]> => {
    try {
      const data = await fetch('https://swapi.dev/api/films/');
      if (data.ok) {
        const { results } = await data.json();
        return results;
      }
    } catch (err) {
      console.log('Error getting movies');
    }
    return [];
  },
  getPeople: async (): Promise<People[]> => {
    try {
      const data = await fetch('https://swapi.dev/api/people/');
      if (data.ok) {
        const { results } = await data.json();
        return results;
      }
    } catch (err) {
      console.log('Error getting people');
    }
    return [];
  },
};

export default StartWarsApi;
