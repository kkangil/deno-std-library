const [diagnostics, emitMap] = await Deno.compile(
    "https://deno.land/std/examples/welcome.ts",
);

console.log(diagnostics);
console.log(emitMap);
