import {getPeople} from './people.ts';

console.log(await getPeople(Deno.args[0]));
