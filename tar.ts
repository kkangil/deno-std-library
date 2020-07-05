import { Tar } from "https://deno.land/std/archive/tar.ts";

const tar = new Tar();
const content = new TextEncoder().encode("Deno.land");
await tar.append("deno.txt", {
  reader: new Deno.Buffer(content),
  contentSize: content.byteLength,
});

const writer = await Deno.open("./out.tar", { write: true, create: true });
await Deno.copy(tar.getReader(), writer);
writer.close();
