import { runBenchmarks, bench, BenchmarkRunResult } from "https://deno.land/std/testing/bench.ts";

bench(function forIncrementX1e9(b): void {
    b.start();
    for (let i = 0; i < 1e9; i++);
    b.stop();
});

runBenchmarks()
    .then((results: BenchmarkRunResult) => {
        console.log(results);
    })
    .catch((error: Error) => {
        // ... errors if benchmark was badly constructed
    });
