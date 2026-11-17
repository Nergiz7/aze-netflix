export type VideoType = "full" | "trailer" | "clip";
export type MovieVideo = {
  youtubeId: string;
  videoUrl: string;
  videoType: VideoType;
  videoVerificationStatus: "matched";
  uploader: string;
  rightsStatus: "official-channel-upload; legal grant not independently verified";
  embeddingStatus: "not-tested";
  thumbnailUrl: string;
  thumbnailSource: "youtube-thumbnail";
  thumbnailRightsStatus: "remote-platform-thumbnail";
};
export type VideoCandidate = {
  youtubeId: string;
  videoUrl: string;
  claimedType: VideoType | "unknown";
  uploader: string;
  rightsStatus: string;
  videoVerificationStatus: "candidate";
};
export type Movie = { id: string; title: string; year: number; genre: string; description: string; poster: string; sourceUrl: string; video?: MovieVideo; videoCandidate?: VideoCandidate };
const classicSource = "https://kinobox.az/az/browse";
const cinema = "https://kinobiz.az/az/cinema/";
// Original CSS title artwork is generated locally for each title; no film-poster images are copied.
const make = (id: string, title: string, year: number, genre: string, description: string, slug = "") : Movie => ({ id, title, year, genre, description, poster: `local-artwork:${id}`, sourceUrl: slug === "buta-ii" || slug === "nar-bagi" ? `${cinema}${slug}` : classicSource });
export const movies: Movie[] = [
  make("m01","Arşın mal alan",1966,"Musiqili komediya","Gənc tacir Əsgər evlənməzdən əvvəl gələcək həyat yoldaşını görmək istəyir. Dostu Süleyman ona bu arzunu həyata keçirmək üçün qeyri-adi bir plan qurmağa kömək edir.","arsin-mal-alan"),
  make("m02","O olmasın, bu olsun",1956,"Musiqili komediya","Üzeyir Hacıbəylinin operettası əsasında çəkilən film köhnə Bakı həyatını yumorla canlandırır. Məşədi İbadın evlənmək arzusu hadisələri və gülməli anlaşılmazlıqları hərəkətə gətirir.","o-olmasin-bu-olsun"),
  make("m03","Uzaq sahillərdə",1958,"Döyüş dramı","Film İkinci Dünya müharibəsi dövründə partizan Mehdi Hüseynzadənin fəaliyyətindən bəhs edir. O, düşmən arxasında təhlükəli tapşırıqları yerinə yetirərək cəsarəti ilə seçilir.","uzaq-sahillerde"),
  make("m04","Ögey ana",1958,"Dram","İsmayıl yeni ailə qurmuş atasının həyat yoldaşı Dilarəni qəbul etməkdə çətinlik çəkir. Dilarənin qayğısı və səbrli münasibəti ailə üzvləri arasında yaxınlıq yaradır.","ogey-ana"),
  make("m05","Qızmar günəş altında",1957,"Dram","Film kolxoz həyatında zəhmət, məsuliyyət və insan münasibətlərini izləyir. Günəşli kənd mühitində qəhrəmanlar gündəlik çətinlikləri birlikdə aşmağa çalışırlar.","qizmar-gunes-altinda"),
  make("m06","Böyük dayaq",1962,"Dram","Rüstəm kişi kolxoz sədri kimi nüfuzunu və qurduğu qaydaları qorumağa çalışır. Ailə və iş mühitində baş verən hadisələr onun qərarlarını yenidən düşünməsinə səbəb olur.","boyuk-dayaq"),
  make("m07","Telefonçu qız",1962,"Komediya","Gənc telefonçu qızın iş və şəxsi həyatındakı hadisələr filmin komik süjetini yaradır. Bakı şəhərinin gündəlik ritmi hekayənin canlı fonuna çevrilir.","telefoncu-qiz"),
  make("m08","Əhməd haradadır?",1963,"Komediya","Əhmədin şəhərdəki macəraları ailə üzvlərini və dostlarını axtarışa çıxarır. Film şəhər həyatı, ailə münasibətləri və yumor üzərində qurulub.","ehmed-haradadir"),
  make("m09","Ulduz",1964,"Musiqili komediya","Kənddə elmi iş aparan Ulduzun ətrafında sevgi və məişət hadisələri cərəyan edir. Musiqili səhnələr və komik personajlar hekayəyə yüngül ovqat qatır.","ulduz"),
  make("m10","Sən niyə susursan?",1966,"Dram","Film şəhər mühitində gənclərin seçimlərini və bir-biri ilə münasibətlərini araşdırır. Qəhrəmanlar qarşılaşdıqları hadisələr fonunda öz mövqelərini müəyyənləşdirirlər.","sen-niye-susursan"),
  make("m11","Yeddi oğul istərəm",1970,"Tarixi dram","Azərbaycanın inqilabdan sonrakı dövründə bir dəstənin taleyi və qarşıdurmaları təsvir olunur. Film fədakarlıq, sədaqət və mürəkkəb seçimlər ətrafında inkişaf edir.","yeddi-ogul-isterem"),
  make("m12","Dəli Kür",1969,"Dram","İsmayıl bəyin ailəsində və yaşadığı mühitdə dəyişən münasibətlər hekayənin mərkəzindədir. Film XIX əsrin sonlarında kənd həyatını və köhnə qaydalarla yenilik arasındakı gərginliyi göstərir.","deli-kur"),
  make("m13","Şərikli çörək",1969,"Dram","Müharibədən sonrakı Bakıda uşaqların gündəlik həyatı və çörək axtarışı təsvir edilir. Balaca Vaqifin gözü ilə çətin illərin məhəllə həyatı göstərilir.","serikli-corek"),
  make("m14","Bizim Cəbiş müəllim",1969,"Dram","Müharibə illərində Bakı məktəbində çalışan Cəbiş müəllim ailəsini dolandırmaq üçün çətinliklərlə üzləşir. Film müəllimin və ətrafındakı insanların gündəlik mübarizəsini humanist tonda təqdim edir.","bizim-cebis-muellim"),
  make("m15","Gün keçdi",1971,"Dram","Bakıda yaşayan Oqtay köhnə İçərişəhər küçələrinə qayıdaraq keçmişi ilə üzləşir. Film xatirələr, sevgi və zamanın insan həyatına təsiri haqqında düşünür.","gun-kecdi"),
  make("m16","Nəsimi",1973,"Tarixi dram","XIV əsr Azərbaycan şairi və mütəfəkkiri İmadəddin Nəsiminin həyatı ekranlaşdırılır. Onun fikirləri və əqidəsi dövrün hakimiyyət münasibətləri ilə toqquşur.","nesimi"),
  make("m17","Tütək səsi",1975,"Dram","İkinci Dünya müharibəsi illərində kənddə qalan insanların həyatı və gözləntiləri təsvir olunur. Film müharibənin uzaqda olmasına baxmayaraq gündəlik həyata təsirini göstərir.","tutek-sesi"),
  make("m18","Dədə Qorqud",1975,"Macəra","Oğuz elinin dastan qəhrəmanları və Dədə Qorqudun müdrikliyi filmə əsas verir. Epik hekayələr cəsarət, el birliyi və sədaqət mövzularını birləşdirir.","dede-qorqud"),
  make("m19","Ad günü",1977,"Dram","Bir ad günü görüşü müxtəlif insanların həyatına və münasibətlərinə nəzər salmağa imkan verir. Film şəhər ziyalılarının gündəlik qayğılarını və daxili dünyasını açır.","ad-gunu"),
  make("m20","Axırıncı aşırım",1971,"Tarixi dram","Kənddə yeni hakimiyyətin qurulması köhnə el qaydaları və yerli nüfuz sahibləri ilə qarşıdurma yaradır. Film dağ kəndində dəyişən dövrün gərginliyini və insan talelərini izləyir."),
  make("m21","Qorxma, mən səninləyəm!",1981,"Macəra komediyası","XX əsrin əvvəllərində sirk artistləri Qafqazda sərgüzəştlərə düşürlər. Döyüş səhnələri, musiqi və yumor birləşərək macəralı hekayə yaradır.","qorxma-men-seninleyem"),
  make("m22","Yol əhvalatı",1980,"Komediya","Yolda qarşılaşan insanların söhbətləri və anlaşılmazlıqları filmin komik hadisələrini doğurur. Səyahət hekayəsi müxtəlif xarakterləri bir araya gətirir.","yol-ehvalati"),
  make("m23","Babək",1979,"Tarixi dram","Film IX əsrdə Xürrəmilər hərəkatına başçılıq etmiş Babəkin mübarizəsini təsvir edir. Tarixi hadisələr azadlıq və müqavimət mövzuları ilə təqdim olunur.","babek"),
  make("m24","Gümüşü furqon",1982,"Dram","Kənd həyatında baş verən hadisələr müxtəlif nəsillərin baxışlarını üz-üzə gətirir. Hekayə insan münasibətlərinə və dəyişən zamanın təsirinə diqqət yetirir.","gumusu-furqon"),
  make("m25","Evlənmək istəyirəm",1983,"Komediya","Evlənmək arzusu ilə yola çıxan qəhrəman gözlənilməz tanışlıqlarla qarşılaşır. Səyahət boyunca baş verən hadisələr məişət komediyası yaradır.","evlenmek-isteyirem"),
  make("m26","Tənha narın nağılı",1984,"Dram","Film kənd həyatında insanın tənhalığına və yaxınlıq ehtiyacına toxunur. Hekayə sadə gündəlik hadisələr üzərindən münasibətləri araşdırır.","tenha-narin-nagili"),
  make("m27","Qaladan tapılan mücrü",1982,"Macəra","Qədim qalada tapılan mücrü macəra dolu axtarışın başlanğıcına çevrilir. Qəhrəmanlar sirri açmaq üçün izləri izləyirlər.","qaladan-tapilan-mucru"),
  make("m28","Yay günlərində xəzan yarpaqları",1986,"Dram","Hadisələr ucqar dağ kəndində baş verir. Film yaşlılarla yeniyetmələr arasındakı münasibətlərə və böyümə prosesinə toxunur.","yay-gunlerinin-xezen-yarpaqlari"),
  make("m29","Alman klinikasına şəxsi səfər",1988,"Dram","Şəxsi məqsədlə Almaniyaya gedən qəhrəman səfər zamanı yeni insanlarla və çətin seçimlərlə qarşılaşır. Film yol, münasibətlər və insanın özünü dərk etməsi mövzularını birləşdirir.","alman-klinikasina-sexsi-sefer"),
  make("m30","Tələ",1990,"Detektiv","Bir cinayət hadisəsi ətrafında şübhələr və araşdırma inkişaf edir. Qəhrəmanlar həqiqətə çatmaq üçün hadisələrin gizli tərəflərini açmağa çalışırlar.","tele"),
  make("m31","Qətl günü",1990,"Psixoloji dram","Film yazıçı Mövludun xəstəxanada keçirdiyi günlər və daxili düşüncələri ətrafında qurulur. Müxtəlif zaman qatları və simvolik obrazlar hekayədə birləşir.","qetl-gunu"),
  make("m32","Buta",2011,"Dram","Dağ kəndində yaşayan Buta öz adını daşıyan naxışı yaratmaq arzusundadır. Müdrik sabunçu ona kömək edir, kənd uşaqlarının maneələri isə hekayəyə qarşıdurma qatır.","buta-ii"),
  make("m33","Nar bağı",2017,"Dram","Kəndli Şamil illərlə becərdiyi nar bağını satmaq istəmir. Oğlu Qabil qayıdanda ailənin gələcəyi və bağın taleyi ilə bağlı gərgin seçim yaranır.","nar-bagi"),
  make("m34","Suğra və oğulları",2021,"Dram","Dağ kəndində Suğra və oğullarının həyatını müharibənin yaratdığı şərait formalaşdırır. Ailə bağları və gündəlik mübarizə hekayənin mərkəzindədir."),
  make("m35","Xoxanlar",2020,"Komediya","Müasir Azərbaycan komediyası gözlənilməz vəziyyətlərə düşən personajların ətrafında qurulur. Qarışıq hadisələr yumor və məişət münasibətlərini önə çıxarır.","xoxanlar"),
  make("m36","İçəri şəhər",2016,"Dram","Filmin hadisələri Bakının İçərişəhər mühitində cərəyan edir. Şəxsi münasibətlər və şəhər həyatının ritmi qəhrəmanların hekayəsində kəsişir.","iceri-seher")
];
// These candidates match videos published by the film studio's own YouTube channel.
// Embedding is checked at runtime by YouTube; it has not been manually tested for every ID.
const officialUploads: Record<string, { youtubeId: string; videoType?: VideoType }> = {
  m01: { youtubeId: "HRrs3pW_1ok" }, m02: { youtubeId: "mZTbGUGk7Rc" }, m03: { youtubeId: "yOIpgYGqa7g" },
  m04: { youtubeId: "Js9RX9k5VnI" }, m05: { youtubeId: "qnILHJ2NsPY" }, m06: { youtubeId: "M06c43Bc2-k" },
  m08: { youtubeId: "-Y1JmAZeUMA" }, m10: { youtubeId: "phEjrY4czs4" }, m11: { youtubeId: "NI9D6hvuOGE" },
  m12: { youtubeId: "yt-1zuQJ3nA" }, m14: { youtubeId: "br9zD5f-c4A" }, m15: { youtubeId: "596lOCYdiaA" },
  m17: { youtubeId: "bPjf942ZYmc" }, m18: { youtubeId: "x7GxpWC20Cc" }, m19: { youtubeId: "g7apfwPQ_70" },
  m20: { youtubeId: "2ZX5ssKQwqw" }, m21: { youtubeId: "TTJEJKzXFrQ" }, m22: { youtubeId: "QJWHSuzBa6Q" },
  m25: { youtubeId: "EntBRbGwC4E" }, m26: { youtubeId: "hur6KHLCTLY" }, m28: { youtubeId: "VZf66_n1kxk" },
  m29: { youtubeId: "EZXSQhhlBIc" }, m30: { youtubeId: "6IL9m97l8WQ" },
  m35: { youtubeId: "Jo_dRFUuUag", videoType: "trailer" },
};
for (const movie of movies) {
  const upload = officialUploads[movie.id];
  if (upload) movie.video = {
    youtubeId: upload.youtubeId,
    videoUrl: `https://www.youtube.com/watch?v=${upload.youtubeId}`,
    videoType: upload.videoType || "full",
    videoVerificationStatus: "matched",
    uploader: movie.id === "m35" ? "Xəzər Film (verified channel)" : "Azərbaycanfilm",
    rightsStatus: "official-channel-upload; legal grant not independently verified",
    embeddingStatus: "not-tested",
    thumbnailUrl: `https://i.ytimg.com/vi/${upload.youtubeId}/hqdefault.jpg`,
    thumbnailSource: "youtube-thumbnail",
    thumbnailRightsStatus: "remote-platform-thumbnail",
  };
}
const candidateUploads: Record<string, { youtubeId: string; claimedType?: VideoCandidate["claimedType"]; uploader?: string; rights?: string }> = {
  m07: { youtubeId: "FQrNIcWhCo0" }, m09: { youtubeId: "5Ey7IYtSoCM", claimedType: "unknown", rights: "Axtarış nəticəsi yalnız filmdən bir epizoda işarə edir; tam video kimi təsdiqlənməyib." },
  m13: { youtubeId: "88uxFYb1354" }, m16: { youtubeId: "U1csklsXuAs" }, m23: { youtubeId: "Q_pw4eOm3wI" },
  m24: { youtubeId: "OGslWWHZoEs", claimedType: "clip", rights: "Fraqment namizədi; hüquq sahibi və yerləşdirmə icazəsi təsdiqlənməyib." },
  m27: { youtubeId: "qz-jG6gVDR4" }, m31: { youtubeId: "TRZ53mEqxAM" }, m32: { youtubeId: "FCSuwBCktks" },
  m33: { youtubeId: "h488X2UclrE" }, m34: { youtubeId: "zlSP9kZWyb0", rights: "Təsvirində lisenziya razılaşması olduğu istifadəçi tərəfindən bildirilib; təsvir və müqavilə bu araşdırmada müstəqil yoxlanmayıb." },
  m36: { youtubeId: "SRtXm0Cz4os", claimedType: "trailer", uploader: "İlqar Safat (istifadəçi məlumatı; müstəqil təsdiqlənməyib)", rights: "Rejissor yükləməsi olduğu iddia edilir; müstəqil yoxlanmayıb." },
};
for (const movie of movies) {
  const candidate = candidateUploads[movie.id];
  if (candidate) movie.videoCandidate = {
    youtubeId: candidate.youtubeId,
    videoUrl: `https://www.youtube.com/watch?v=${candidate.youtubeId}`,
    claimedType: candidate.claimedType || "full",
    uploader: candidate.uploader || "Təsdiqlənməyib",
    rightsStatus: candidate.rights || "Yükləyici və istifadə hüququ müstəqil təsdiqlənməyib.",
    videoVerificationStatus: "candidate",
  };
}
movies[0].sourceUrl = "https://www.youtube.com/watch?v=HRrs3pW_1ok";
movies[33].sourceUrl = "https://kinobiz.az/az/organizations/azerbaycanfilm-kinostudiyasi?page=2";
export const genres = [...new Set(movies.map((movie) => movie.genre))].sort((a,b) => a.localeCompare(b, "az"));
