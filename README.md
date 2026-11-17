# KADR — Azərbaycan kinosu

Azərbaycan kinosunun klassik və müasir filmlərini kəşf etmək üçün hazırlanmış müstəqil təhsil layihəsi. Layihə Netflix ilə əlaqəli deyil və onun tərəfindən dəstəklənmir.

## İmkanlar

- 36 Azərbaycan filmi, janr və il üzrə kataloq
- Başlıq üzrə anlıq axtarış və janr filtri
- 1991-dən əvvəl çəkilmiş filmlər üçün klassiklər bölməsi
- LocalStorage ilə yadda saxlanan şəxsi Siyahım
- Janr seçiminə uyğun təsadüfi film tövsiyəsi
- Film məlumatları üçün modal pəncərə
- Doğrulanmış video üçün sayt daxilində YouTube pleyeri
- Mobil cihazlara uyğun tərtibat və klaviatura ilə Escape bağlanması

## Texnologiyalar

Next.js App Router, TypeScript, React Hooks, Tailwind CSS və Lucide React.

## Quraşdırma

Node.js 20 və ya daha yeni versiya tələb olunur.

```bash
npm install
npm run dev
```

İstehsal yığımı və yoxlamalar:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

## YouTube inteqrasiyası

Pleyer yalnız mənbə və film uyğunluğu bu layihə üçün axtarış zamanı yoxlanmış rəsmi Azərbaycanfilm kanalındakı “Arşın mal alan” videosu üçün aktivdir. Video saytın daxilində YouTube-un rəsmi iframe pleyeri ilə göstərilir. Video mövcud olmadıqda və ya yerləşdirmə bağlı olduqda YouTube səhifəsinə keçid təqdim edilir. Qalan filmlərə uyğun rəsmi video və ya treyler bu iş zamanı təsdiqlənmədiyi üçün uydurma video ID-ləri əlavə edilməyib.

## Mənbələr və vizual materiallar

- Film adları və illər üçün [Kinobox kataloqu](https://kinobox.az/az/browse) və [Kinobiz Azərbaycan kino bazası](https://kinobiz.az/en/about) əsas istinad kimi istifadə edilib.
- “Buta” üçün [Kinobiz film səhifəsi](https://kinobiz.az/az/cinema/buta-ii), “Nar bağı” üçün [Kinobiz film səhifəsi](https://kinobiz.az/az/cinema/nar-bagi), “Suğra və oğulları” üçün studiyanın filmografiyası göstərilir. Digər filmlər ümumi Kinobox kataloquna bağlanır; bu icrada hər film üçün ayrıca səhifə yoxlanmayıb.
- “Arşın mal alan” məlumatı və video Azərbaycanfilm-in [rəsmi YouTube kanalındakı yükləmədən](https://www.youtube.com/watch?v=HRrs3pW_1ok) yoxlanılıb.
- Poster əvəzinə başlıq, il və janrla yerli CSS vasitəsilə hazırlanmış orijinal dekorativ kartlar istifadə olunur. Filmlərin real posterləri endirilməyib və ya yenidən paylanmayıb.
- Kataloqlardakı məlumatlar film təsvirlərinin hamısını tam təsdiqləmir. Qısa süjet mətnləri redaksiya xülasələridir və bütün filmlər üzrə ilkin mənbə ilə ayrıca yoxlanmayıb. Mənbə qeydlərində bu məhdudiyyət açıq saxlanılıb.

## Vercel-ə yerləşdirmə

1. Layihəni GitHub-a push edin.
2. Vercel-də **Add New → Project** seçin və GitHub repozitoriyasını import edin.
3. Framework kimi Next.js saxlayın; xüsusi environment dəyişənləri tələb olunmur.
4. Deploy edin. Eyni nəticə lokalda `npm run build` ilə yoxlanıla bilər.

## Təhsil layihəsi barədə

KADR müstəqil universitet layihəsidir. Netflix və ya Azərbaycanfilm tərəfindən rəsmi məhsul kimi təqdim edilmir. YouTube videosu öz platformasında saxlanılır və iframe vasitəsilə göstərilir.
