const [diagnostics, emit] = await Deno.bundle(
    "https://deno.land/std/http/server.ts",
);

console.log(diagnostics);
console.log(emit);
