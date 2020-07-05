import { Untar } from "https://deno.land/std/archive/tar.ts";
import { ensureFile } from "https://deno.land/std/fs/ensure_file.ts";
import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";

const reader = await Deno.open("./out.tar", { read: true });
const untar = new Untar(reader);

for await (const entry of untar) {
  console.log(entry); // metadata
  /*
    TarEntry {
      fileName: "deno.txt",
      fileMode: 511,
      mtime: 1593911999,
      uid: 0,
      gid: 0,
      type: "file",
      fileSize: 9
    }
  */

  if (entry.type === "directory") {
    await ensureDir(entry.fileName);
    continue;
  }

  await ensureFile(entry.fileName);
  const file = await Deno.open(entry.fileName, { write: true });
  // <entry> is a reader
  await Deno.copy(entry, file);
}
reader.close();
