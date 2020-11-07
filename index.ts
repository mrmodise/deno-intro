console.log("Hello World");

// Simple HTTP GET request
const res = await fetch(Deno.args[0])
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

console.log("\n");
// Simple HTTP server
const hostname = "0.0.0.0";
const port = 3000;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
    Deno.copy(conn, conn);
}
