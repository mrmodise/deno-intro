import {getPeople} from './people.ts';

console.log(await getPeople("https://swapi.dev/api/people/1/"));
