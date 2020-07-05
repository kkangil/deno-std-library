const encoder = new TextEncoder();
const text = encoder.encode("hello deno!");

await Deno.writeFile("hello.txt", text);
