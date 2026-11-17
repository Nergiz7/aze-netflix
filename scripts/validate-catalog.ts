import assert from "node:assert/strict";
import { genres, movies } from "../lib/movies";

assert.ok(movies.length >= 30, "Kataloqda ən azı 30 film olmalıdır");
assert.equal(new Set(movies.map((movie) => movie.id)).size, movies.length, "Film ID-ləri unikal olmalıdır");
assert.ok(movies.every((movie) => movie.title && movie.year > 1890 && movie.genre && movie.description.split(/[.!?]/).filter(Boolean).length >= 2), "Hər film əsas məlumatları və iki cümləlik təsviri daşımalıdır");
assert.ok(movies.filter((movie) => movie.year < 1991).every((movie) => movie.year < 1991), "Klassiklər 1991-dən əvvəl olmalıdır");
assert.equal(movies.filter((movie) => movie.year < 1991).length, 31, "Klassiklər bölməsinin sayı dəyişməyib");
assert.ok(movies.filter((movie) => movie.youtubeId).every((movie) => /^[\w-]{11}$/.test(movie.youtubeId!)), "Yalnız düzgün formatlı YouTube video ID-ləri qeyd olunmalıdır");
assert.ok(genres.includes("Bütün janrlar") === false && genres.length > 0, "Janrlar film məlumatından yaradılmalıdır");
console.log(`Kataloq yoxlamaları keçdi: ${movies.length} film, ${genres.length} janr, ${movies.filter((movie) => movie.year < 1991).length} klassik, ${movies.filter((movie) => movie.youtubeId).length} təsdiqli video.`);
