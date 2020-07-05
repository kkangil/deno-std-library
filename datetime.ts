import {
  parseDate,
  parseDateTime,
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(parseDate("20-01-2019", "dd-mm-yyyy")); // output : new Date(2019, 0, 20)
console.log(parseDate("2019-01-20", "yyyy-mm-dd")); // output : new Date(2019, 0, 20)

console.log(parseDateTime("01-20-2019 16:34", "mm-dd-yyyy hh:mm")); // output : new Date(2019, 0, 20, 16, 34)
console.log(parseDateTime("16:34 01-20-2019", "hh:mm mm-dd-yyyy")); // output : new Date(2019, 0, 20, 16, 34)

console.log(dayOfYear(new Date("2020-05-05T10:24:00"))); // output: 126
console.log(currentDayOfYear()); // output: ** depends on when you run it :) **
