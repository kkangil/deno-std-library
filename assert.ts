import { assert, assertEquals, assertStrictEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";

// deno test assert.ts

// assert
Deno.test("Test Assert", () => {
    assert("Hello");
});

// assertEquals
Deno.test("example", function (): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
});


// assertStrictEquals
Deno.test("isStrictlyEqual", function (): void {
    const a = {};
    const b = a;
    assertStrictEquals(a, b);
});

// This test fails
Deno.test("isNotStrictlyEqual", function (): void {
    const a = {};
    const b = {};
    assertStrictEquals(a, b);
});
