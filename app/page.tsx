"use client";

import { useEffect, useMemo, useState } from "react";
import { Bookmark, Check, ChevronDown, Clapperboard, Film, Heart, Menu, Play, Search, Shuffle, X } from "lucide-react";
import { genres, movies, type Movie } from "@/lib/movies";

const normalize = (value: string) => value.toLocaleLowerCase("az").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function Poster({ movie, large = false }: { movie: Movie; large?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  const seed = Number(movie.id.slice(-2)) || 1;
  return <div className={`poster-art ${large ? "poster-large" : ""} ${movie.video && !imageFailed ? "has-thumbnail" : ""}`} style={{ "--seed": seed } as React.CSSProperties} aria-label={`${movie.title} üçün filmə aid təsvir`} role="img">
    {/* Remote YouTube thumbnail is intentionally unoptimized to avoid copying/transforming it. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {movie.video && !imageFailed && <img className="yt-thumbnail" src={movie.video.thumbnailUrl} alt="" loading={large ? "eager" : "lazy"} decoding="async" onError={() => setImageFailed(true)}/>}
    <div className="poster-grain"/><div className="poster-orb"/><div className="poster-copy"><span>AZƏRBAYCAN KİNOSU · {movie.year}</span><strong>{movie.title}</strong><i>{movie.genre}</i></div><span className="poster-mark">K</span>
  </div>;
}

function MovieCard({ movie, favorite, onFavorite, onDetails, onPlay }: { movie: Movie; favorite: boolean; onFavorite: (id: string) => void; onDetails: (movie: Movie) => void; onPlay: (movie: Movie) => void }) {
  const selectMovie = () => movie.video ? onPlay(movie) : onDetails(movie);
  return <article className="movie-card">
    <button className="movie-card-main" onClick={selectMovie} aria-label={movie.video ? `${movie.title} filmini indi izlə` : `${movie.title} haqqında məlumat`}><span className="poster-button"><Poster movie={movie}/><span className="poster-shade"/>{movie.video && <span className="card-play"><Play size={18} fill="currentColor"/></span>}</span><span className="movie-card-info"><span className="movie-title">{movie.title}</span><span className="movie-meta"><span>{movie.year}</span><span className="meta-dot"/><span>{movie.genre}</span></span></span></button>
    <button className={`favorite-toggle ${favorite ? "is-favorite" : ""}`} onClick={() => onFavorite(movie.id)} aria-label={favorite ? "Siyahımdan çıxar" : "Siyahıma əlavə et"}><Heart size={17} fill={favorite ? "currentColor" : "none"}/></button>
    <div className="card-actions"><button className="card-details" onClick={() => onDetails(movie)}>Ətraflı <span>↗</span></button>{movie.video ? <button className="card-watch" onClick={() => onPlay(movie)}><Play size={12} fill="currentColor"/> {movie.video.videoType === "trailer" ? "Treyler" : "İzlə"}</button> : <span className="card-media-status">{movie.videoCandidate ? "Mənbə yoxlanılır" : "Video yoxdur"}</span>}</div>
  </article>;
}

function MovieModal({ movie, favorite, onClose, onFavorite, onPlay }: { movie: Movie | null; favorite: boolean; onClose: () => void; onFavorite: (id: string) => void; onPlay: (movie: Movie) => void }) {
  useEffect(() => {
    if (!movie) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = old; window.removeEventListener("keydown", key); };
  }, [movie, onClose]);
  if (!movie) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><section className="details-modal" role="dialog" aria-modal="true" aria-label={`${movie.title} haqqında məlumat`}>
    <button className="modal-close" onClick={onClose} aria-label="Bağla"><X/></button><div className="details-poster"><Poster movie={movie} large/></div><div className="details-copy"><span className="eyebrow">KADR SEÇİMİ · {movie.year}</span><h2>{movie.title}</h2><div className="movie-meta"><span>{movie.year}</span><span className="meta-dot"/><span>{movie.genre}</span></div><p>{movie.description}</p><div className="modal-actions">{movie.video ? <button className="button-primary" onClick={() => onPlay(movie)}><Play size={17} fill="currentColor"/> {movie.video.videoType === "trailer" ? "Treylerə bax" : "Filmə bax"}</button> : <span className="unavailable">{movie.videoCandidate ? "Video namizədi var, amma mənbə/hüquq təsdiqlənməyib" : "Təsdiqlənmiş video yoxdur"}</span>}<button className="button-secondary" onClick={() => onFavorite(movie.id)}><Heart size={17} fill={favorite ? "currentColor" : "none"}/>{favorite ? "Siyahımdadır" : "Siyahıma əlavə et"}</button></div><a className="source-link" href={movie.sourceUrl} target="_blank" rel="noreferrer">Mənbəyə bax ↗</a></div>
  </section></div>;
}

function PlayerModal({ movie, onClose }: { movie: Movie | null; onClose: () => void }) {
  useEffect(() => {
    if (!movie) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = old; window.removeEventListener("keydown", key); };
  }, [movie, onClose]);
  if (!movie) return null;
  return <div className="modal-backdrop player-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><section className="player-modal" role="dialog" aria-modal="true" aria-label={`${movie.title} video pleyeri`}><header><div><span className="eyebrow">{movie.video?.videoType === "trailer" ? "TREYLER" : "TAM FİLM"} · YOUTUBE PLEYERİ</span><h2>{movie.title} <small>({movie.year})</small></h2></div><button className="modal-close" onClick={onClose} aria-label="Pleyeri bağla"><X/></button></header><div className="video-frame"><iframe key={movie.video?.youtubeId} src={`https://www.youtube-nocookie.com/embed/${movie.video?.youtubeId}?autoplay=1&rel=0`} title={`${movie.title} — YouTube pleyeri`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div><p className="player-note">Mənbə: {movie.video?.uploader}. Əgər yerləşdirmə bağlıdırsa və ya video mövcud deyilsə, <a href={movie.video?.videoUrl} target="_blank" rel="noreferrer">YouTube səhifəsində aç ↗</a>.</p></section></div>;
}

export default function Home() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("Bütün janrlar");
  const [section, setSection] = useState("catalog");
  const [watchType, setWatchType] = useState<"all" | "full" | "trailer" | "clip">("all");
  const [detail, setDetail] = useState<Movie | null>(null);
  const [player, setPlayer] = useState<Movie | null>(null);
  const [recommendation, setRecommendation] = useState<Movie | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { try { const value = localStorage.getItem("kadr-favorites"); if (value) setFavorites(JSON.parse(value)); } catch { setFavorites([]); } setHydrated(true); }, []);
  useEffect(() => { if (hydrated) localStorage.setItem("kadr-favorites", JSON.stringify([...new Set(favorites)])); }, [favorites, hydrated]);
  const toggleFavorite = (id: string) => setFavorites((old) => old.includes(id) ? old.filter((item) => item !== id) : [...new Set([...old, id])]);
  const matches = (movie: Movie) => (!query || normalize(movie.title).includes(normalize(query))) && (genre === "Bütün janrlar" || movie.genre === genre);
  const selectedMovies = useMemo(() => {
    const base = section === "classics" ? movies.filter((m) => m.year < 1991) : section === "favorites" ? movies.filter((m) => favorites.includes(m.id)) : movies;
    return base.filter(matches);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, favorites, query, genre]);
  const watchableMovies = useMemo(() => movies.filter((movie) => movie.video && (!query || normalize(movie.title).includes(normalize(query))) && (genre === "Bütün janrlar" || movie.genre === genre) && (watchType === "all" || movie.video.videoType === watchType)), [query, genre, watchType]);
  const chooseRandom = () => { const pool = movies.filter((m) => genre === "Bütün janrlar" || m.genre === genre); setRecommendation(pool.length ? pool[Math.floor(Math.random() * pool.length)] : null); };
  const jumpTo = (id: string) => { setSection(id); setMobileOpen(false); document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" }); };
  const featured = movies.find((m) => m.id === "m01")!;
  const featuredClose = () => setDetail(null);
  const playerClose = () => setPlayer(null);

  return <main>
    <header className="site-header"><a className="brand" href="#top" aria-label="Kadr ana səhifə"><span className="brand-icon"><Film size={19}/></span><span>KADR<span className="brand-dot">.</span></span></a><nav className={mobileOpen ? "nav-open" : ""} aria-label="Əsas naviqasiya"><button className={section === "catalog" ? "active" : ""} onClick={() => jumpTo("catalog")}>Ana səhifə</button><button onClick={() => jumpTo("catalog")}>Azərbaycan kinosu</button><button className={section === "classics" ? "active" : ""} onClick={() => jumpTo("classics")}>Klassiklər</button><button className={section === "favorites" ? "active" : ""} onClick={() => jumpTo("favorites")}>Siyahım <span className="nav-count">{favorites.length}</span></button></nav><div className="header-tools"><label className="search-box"><Search size={16}/><input placeholder="Film axtar..." value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Film axtar"/><kbd>⌘ K</kbd></label><button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menyunu aç"><Menu/></button></div></header>
    <section id="top" className="hero"><div className="hero-backdrop"/><div className="hero-film-grain"/><div className="hero-content"><div className="eyebrow"><span className="live-dot"/> KADR TƏQDİM EDİR <span className="eyebrow-line"/> AZƏRBAYCAN KİNOSU</div><h1>{featured.title}</h1><div className="hero-meta"><span className="hero-featured">RƏSMİ KANAL · TAM FİLM</span><span>{featured.year}</span><span className="meta-dot"/><span>{featured.genre}</span></div><p>{featured.description}</p><div className="hero-actions"><button className="button-primary" onClick={() => setPlayer(featured)}><Play size={17} fill="currentColor"/> İndi izlə</button><button className="button-secondary" onClick={() => setDetail(featured)}><Clapperboard size={17}/> Ətraflı</button><button className="button-secondary" onClick={() => toggleFavorite(featured.id)}>{favorites.includes(featured.id) ? <Check size={18}/> : <Bookmark size={18}/>} {favorites.includes(featured.id) ? "Siyahımdadır" : "Siyahıma əlavə et"}</button></div><div className="hero-index"><span>01</span><i/><span>03</span><span className="hero-index-label">KADR SEÇİMİ</span></div></div><button className="hero-poster" onClick={() => setPlayer(featured)} aria-label={`${featured.title} filmini indi izlə`}><Poster movie={featured}/><span className="poster-caption">İNDİ İZLƏ <b>↗</b></span></button><span className="hero-vertical">KİNO · MƏDƏNİYYƏT · YADDAŞ</span></section>
    <section className="discovery-strip"><div className="strip-label"><span className="strip-kicker">KADR BƏLƏDÇİSİ</span><h2>Bu axşam<br/>nəyə baxaq?</h2></div><div className="strip-description"><p>Janrını seç, təsadüfi tövsiyəni biz edək.</p><label className="genre-select"><span>JANR</span><select value={genre} onChange={(e) => setGenre(e.target.value)} aria-label="Janr seç"><option>Bütün janrlar</option>{genres.map((g) => <option key={g}>{g}</option>)}</select><ChevronDown size={15}/></label></div><div className="strip-action"><button className="random-button" onClick={chooseRandom}><Shuffle size={16}/> Mənə film seç <span>↗</span></button>{recommendation && <div className="recommendation"><span>TƏKLİFİMİZ</span><strong>{recommendation.title}</strong><button onClick={() => setDetail(recommendation)}>Ətraflı bax ↗</button></div>}</div><div className="strip-watermark">K</div></section>
    <section className="watch-section" id="watchable"><div className="section-top"><div><div className="eyebrow"><span className="section-square"/> YOUTUBE · RƏSMİ MƏNBƏLƏR</div><h2>İzləyə biləcəyiniz filmlər</h2><p className="section-subtitle">{watchableMovies.length} video mənbəyi uyğun gəldi · yerləşdirmə hər video üçün ayrıca məhdudlaşdırıla bilər</p></div><div className="watch-filters" role="group" aria-label="Video növü filtri"><button className={watchType === "all" ? "selected" : ""} onClick={() => setWatchType("all")}>Bütün filmlər</button><button className={watchType === "full" ? "selected" : ""} onClick={() => setWatchType("full")}>Tam filmlər</button><button className={watchType === "trailer" ? "selected" : ""} onClick={() => setWatchType("trailer")}>Treylerlər</button><button className={watchType === "clip" ? "selected" : ""} onClick={() => setWatchType("clip")}>Fraqmentlər</button></div></div>{watchableMovies.length ? <div className="movie-grid watch-grid">{watchableMovies.map((movie) => <MovieCard key={movie.id} movie={movie} favorite={favorites.includes(movie.id)} onFavorite={toggleFavorite} onDetails={setDetail} onPlay={setPlayer}/>)}</div> : <div className="empty-watch">Bu axtarış və janr üçün təsdiqlənmiş video mənbəyi tapılmadı.</div>}</section>
    <section className="catalog-section" id="catalog"><div className="section-top"><div><div className="eyebrow"><span className="section-square"/> KADR ARXİVİ · {movies.length} FİLM</div><h2>{section === "favorites" ? "Siyahım" : section === "classics" ? "Klassiklər" : "Azərbaycan kinosu"}</h2><p className="section-subtitle">{section === "classics" ? "1991-dən əvvəl çəkilmiş filmlər" : section === "favorites" ? "Sevdiyin filmlər bir yerdə" : "Keçmişdən bu günə — ekranda bizim hekayələrimiz"}</p></div><div className="catalog-controls"><label className="genre-select compact-select"><span>JANR</span><select value={genre} onChange={(e) => setGenre(e.target.value)} aria-label="Kataloqu janra görə süz"><option>Bütün janrlar</option>{genres.map((g) => <option key={g}>{g}</option>)}</select><ChevronDown size={15}/></label><span className="result-count">{selectedMovies.length} NƏTİCƏ</span></div></div><div className="catalog-tabs"><button className={section === "catalog" ? "selected" : ""} onClick={() => setSection("catalog")}>BÜTÜN FİLMLƏR <span>{movies.length}</span></button><button className={section === "classics" ? "selected" : ""} onClick={() => setSection("classics")}>KLASSİKLƏR <span>{movies.filter((m) => m.year < 1991).length}</span></button><button className={section === "favorites" ? "selected" : ""} onClick={() => setSection("favorites")}>SİYAHIM <span>{favorites.length}</span></button></div>
      {selectedMovies.length ? <div className="movie-grid">{selectedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} favorite={favorites.includes(movie.id)} onFavorite={toggleFavorite} onDetails={setDetail} onPlay={setPlayer}/>)}</div> : <div className="empty-state"><div className="empty-icon">{section === "favorites" && !favorites.length ? <Heart/> : <Search/>}</div><h3>{section === "favorites" && !favorites.length ? "Siyahın hələ boşdur" : "Uyğun film tapılmadı"}</h3><p>{section === "favorites" && !favorites.length ? "Filmlərdəki ürək işarəsinə toxun, seçdiklərin burada qalsın." : "Axtarışı və ya janr seçimini dəyişib yenidən yoxla."}</p><button className="text-button" onClick={() => { setQuery(""); setGenre("Bütün janrlar"); setSection("catalog"); }}>Filtrləri sıfırla ↗</button></div>}
    </section>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-icon"><Film size={16}/></span><span>KADR<span className="brand-dot">.</span></span></a><p>Azərbaycan kinosunun yaddaşına açılan pəncərə.</p><div className="footer-right"><span>MÜSTƏQİL TƏHSİL LAYİHƏSİ</span><small>Bu layihə Netflix ilə əlaqəli deyil və onun tərəfindən dəstəklənmir.</small></div><span className="footer-copy">© 2026 KADR · AZƏRBAYCAN</span></footer>
    <MovieModal movie={detail} favorite={detail ? favorites.includes(detail.id) : false} onClose={featuredClose} onFavorite={toggleFavorite} onPlay={(m) => { setDetail(null); setPlayer(m); }}/><PlayerModal movie={player} onClose={playerClose}/>
  </main>;
}
