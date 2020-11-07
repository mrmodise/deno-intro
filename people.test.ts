import { assertEquals, assert } from "https://deno.land/std@0.76.0/testing/asserts.ts";
import {getPeople} from "./people.ts"

Deno.test("should return list of people from Swapi", async () => {
    const response = await getPeople("https://swapi.dev/api/people/1/");
    assertEquals(response?.name, "Luke Skywalker")
});

Deno.test("should add 2 numbers", () => {
    assertEquals(1+1, 2);
});

Deno.test("should verify array is array", () => {
    const nums = [1, 2, 3];
    assert(Array.isArray(nums));
});
