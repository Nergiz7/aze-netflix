# KADR — Azərbaycan kinosu

Azərbaycan kinosunun klassik və müasir filmlərini kəşf etmək üçün hazırlanmış müstəqil təhsil layihəsi. Layihə Netflix ilə əlaqəli deyil və onun tərəfindən dəstəklənmir.

## İmkanlar

- 36 Azərbaycan filmi, janr və il üzrə kataloq
- Başlıq üzrə anlıq axtarış və janr filtri
- 1991-dən əvvəl çəkilmiş filmlər üçün klassiklər bölməsi
- LocalStorage ilə yadda saxlanan şəxsi Siyahım
- Janr seçiminə uyğun təsadüfi film tövsiyəsi
- Film məlumatları üçün modal pəncərə
- 23 tam film və 1 treyler üçün böyük, sayt daxilində YouTube pleyeri; oynadıla bilən film kartına toxunmaq dərhal pleyeri açır
- Kartda ayrıca “Ətraflı” düyməsi və video növünə görə izləmə bölməsi
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

Oynadıla bilən kartın əsas sahəsinə klik böyük embed pleyeri dərhal açır və autoplay sorğusu göndərir. “Ətraflı” ayrıca düymədir. Təsdiqlənmiş video mənbələrinə 23 tam film və 1 treyler daxildir; 12 namizəd ID-si ayrıca auditdə saxlanılıb və hüquq/yükləyici təsdiqlənməyənədək pleyerdə aktiv deyil. Rəsmi YouTube iframe-i bəzi videolarda yükləyici ayarlarına görə bloklana bilər; belə halda pleyerdə YouTube səhifəsinə keçid görünür. Filmə uyğun video mənbəyinin yoxlanması iframe-in hər cihazda oynayacağını təsdiqləmir.

Tam audit üçün [`docs/MEDIA_VERIFICATION.md`](docs/MEDIA_VERIFICATION.md) və istifadə olunan mənbələr üçün [`docs/SOURCES.md`](docs/SOURCES.md) baxın.

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
