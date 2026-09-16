import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, Cpu, Landmark, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import ronaldoAlNassr from "../assets/ronaldo-alnassr.png";
import ronaldoRealMadrid from "../assets/ronaldo-realmadrid.png";

gsap.registerPlugin(ScrollTrigger);

const PRESENTERS = "[NIMI 1] & [NIMI 2]";
const ERR_LINK = "https://www.err.ee/";

type NewsSlideProps = {
  id: string;
  number: string;
  kicker: string;
  headline: string;
  summary: string;
  source: string;
  tone: "president" | "pisa" | "ai" | "sport";
  children: ReactNode;
};

function NewsSlide({ id, number, kicker, headline, summary, source, tone, children }: NewsSlideProps) {
  return (
    <section id={id} data-section={number} className={`news-section section-${tone}`}>
      <span className="ghost-number" aria-hidden="true">{number}</span>
      <div className="section-wash" aria-hidden="true" />
      <div className="story-copy reveal">
        <div className="kicker"><span />{kicker}</div>
        <h2>{headline}</h2>
        <p>{summary}</p>
        <div className="source-badge">{source}</div>
      </div>
      <div className="story-visual reveal">{children}</div>
    </section>
  );
}

function PresidentVisual() {
  return (
    <div className="president-visual">
      <div className="gold-dust" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <i key={i} />)}</div>
      <div className="flag" aria-label="Eesti lipp"><i /><i /><i /></div>
      <div className="monogram" aria-label="Ülle Madise monogramm">ÜM</div>
      <div className="vote-block"><strong data-count="71">0</strong><span>häält</span><small>vaja oli 68</small></div>
      <div className="timeline"><b>2. sept</b><span>valimised</span><i>→</i><b>12. okt</b><span>ametisse astumine</span></div>
    </div>
  );
}

const scores = [
  ["Loodusteadused", 527],
  ["Matemaatika", 508],
  ["Lugemine", 499],
] as const;

function PisaVisual() {
  return (
    <div className="pisa-visual">
      <div className="laurel">#1 <span>EUROOPAS</span></div>
      <div className="chart" aria-label="PISA tulemused punktides">
        {scores.map(([label, value], index) => (
          <div className="bar-row" key={label}>
            <span>{label}</span>
            <div className="bar-track"><i data-width={`${(value / 550) * 100}%`} /></div>
            <strong data-count={value}>0</strong>
            {index === 2 && <em>kahaneb ↓</em>}
          </div>
        ))}
      </div>
      <p>Eesti on Euroopas esikohal</p>
    </div>
  );
}

function AiVisual() {
  const rain = ["01001101", "DELETE *", "01100110", "DROP DB", "10110101", "NO BACKUP"];
  return (
    <div className="ai-visual">
      <div className="code-rain" aria-hidden="true">{rain.map((line, i) => <span key={i}>{line}</span>)}</div>
      <div className="terminal">
        <div className="terminal-top"><i /><i /><i /><span>pocketOS / production</span></div>
        <code className="terminal-copy" data-text="> claude --execute\n> kustutan andmebaasi...\n> varukoopiad eemaldatud\n> valmis: üheksa sekundiga"><span /></code>
        <div className="delete-progress"><i /></div>
        <div className="stamp">9 SEKUNDIT</div>
      </div>
    </div>
  );
}

function RonaldoVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [swapped, setSwapped] = useState(false);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(x, y);
    setSwapped(distance < Math.min(200, rect.width * 0.42));
    gsap.to(wrapRef.current, { rotateY: x / rect.width * 10, rotateX: -y / rect.height * 8, duration: 0.35 });
  }

  return (
    <div className="ronaldo-scene" onPointerMove={handlePointerMove} onPointerLeave={() => {
      setSwapped(false);
      if (wrapRef.current) gsap.to(wrapRef.current, { rotateX: 0, rotateY: 0, duration: 0.4 });
    }}>
      <div className="floodlights" aria-hidden="true" />
      <div className="scoreboard">Al-Taawoun&nbsp; 0 : 6 &nbsp;Al-Hilal <b>90′</b></div>
      <div className="impact" aria-hidden="true" />
      <div className={`ronaldo-wrap ${swapped ? "is-swapped" : ""}`} ref={wrapRef} onClick={() => setSwapped((value) => !value)} role="button" tabIndex={0} aria-label="Vaheta Ronaldo särki" onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSwapped((value) => !value); }}>
        <img src={ronaldoRealMadrid} alt="Cristiano Ronaldo valges särgis, selgvaates" loading="lazy" width={1024} height={1536} />
        <img className="alnassr" src={ronaldoAlNassr} alt="Cristiano Ronaldo kollases särgis, selgvaates" loading="lazy" width={1024} height={1536} />
      </div>
      <span className="kit-hint">HOVERI / PUUDUTA</span>
    </div>
  );
}

const reasons = [
  { Icon: Trophy, source: "ERR", tone: "sport", text: "Valisime selle uudise, sest see puudutab spordietiikat ja fännikultuuri — ka maailmakuulsad staarid seavad käitumisele piire." },
  { Icon: Cpu, source: "Õhtuleht", tone: "ai", text: "Tehisintellekt mõjutab juba praegu meie kõigi elu, aga see lugu näitab ka selle riske. See on üks aktuaalsemaid tehnoloogiauudiseid." },
  { Icon: BookOpen, source: "Delfi", tone: "pisa", text: "Haridus puudutab meid otseselt kui õpilasi. Eesti tulemused on Euroopa tipus, kuid lugemisoskuse langus näitab, et arenguruumi on veel." },
  { Icon: Landmark, source: "Postimees", tone: "president", text: "Presidendivalimised on üks tähtsamaid poliitilisi sündmusi Eestis. Ülle Madise on Eesti seitsmes president ja teine naispresident — ajalooline sündmus." },
] as const;

const sources = [
  { outlet: "ERR", date: "13.09.2026", title: "Ronaldo nõudis Saudi profiliiga fännidele Jota skandeerimise eest eluaegset staadionikeeldu", url: ERR_LINK },
  { outlet: "Õhtuleht", date: "03.05.2026", title: "Ai-Ai! AI isetegevus kustutas ettevõtte kogu andmebaasi üheksa sekundiga", url: "https://www.ohtuleht.ee/1156878/ai-ai-ai-isetegevus-kustutas-ettevotte-kogu-andmebaasi-uheksa-sekundiga" },
  { outlet: "Delfi", date: "08.09.2026", title: "PISA 2025 tulemused: Eesti püsib Euroopas esikohal, kuid lugemisoskus halveneb", url: "https://www.delfi.ee/artikkel/120609068/otsepilt-ja-blogi-pisa-2025-tulemused-eesti-pusib-euroopas-esikohal-kuid-lugemisoskus-langeb" },
  { outlet: "Postimees", date: "02.09.2026", title: "Riigikogu valis presidendiks Ülle Madise", url: "https://news.postimees.ee/8538554/estonian-parliament-elects-ulle-madise-as-new-president" },
];

export function NewsPresentation() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState("01");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let frame = 0;
    if (!reduceMotion) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const raf = (time: number) => { lenis?.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
    }
    const context = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-section]").forEach((section) => {
        ScrollTrigger.create({ trigger: section, start: "top center", end: "bottom center", onToggle: ({ isActive }) => { if (isActive) setActive(section.dataset.section ?? "01"); } });
      });
      ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => setProgress(self.progress * 100) });
      if (reduceMotion) return;
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => gsap.from(element, { opacity: 0, y: 54, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } }));
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count);
        gsap.to({ value: 0 }, { value: target, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 82%", once: true }, onUpdate() { element.textContent = Math.round(this.targets()[0].value).toString(); } });
      });
      document.querySelectorAll<HTMLElement>(".bar-track i").forEach((bar) => gsap.to(bar, { width: bar.dataset.width, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: bar, start: "top 85%", once: true } }));
      const terminal = document.querySelector<HTMLElement>(".terminal-copy span");
      const terminalHost = document.querySelector<HTMLElement>(".terminal-copy");
      if (terminal && terminalHost) {
        const text = terminalHost.dataset.text ?? "";
        const typing = { count: 0 };
        gsap.to(typing, { count: text.length, duration: 3.2, ease: "none", scrollTrigger: { trigger: terminal, start: "top 80%", once: true }, onUpdate: () => { terminal.textContent = text.slice(0, Math.floor(typing.count)); }, onComplete: () => document.querySelector(".terminal")?.classList.add("is-done") });
      }
      gsap.from(".ronaldo-wrap", { y: "-120vh", rotate: -10, duration: 1.05, ease: "bounce.out", scrollTrigger: { trigger: ".section-sport", start: "top 68%", once: true }, onComplete: () => document.querySelector(".ronaldo-scene")?.classList.add("landed") });
      gsap.from(".reason-card", { opacity: 0, rotateX: -70, y: 70, stagger: 0.14, duration: 0.8, ease: "back.out(1.4)", scrollTrigger: { trigger: ".reasons-grid", start: "top 80%", once: true } });
    }, rootRef);
    ScrollTrigger.refresh();
    return () => { context.revert(); lenis?.destroy(); cancelAnimationFrame(frame); };
  }, []);

  return (
    <main ref={rootRef} className="presentation-shell">
      <div className="progress-track" aria-hidden="true"><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
      <aside className="section-indicator" aria-label="Praegune osa"><strong>{active}</strong><span>/ 07</span></aside>

      <section className="hero-section" data-section="01">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-label">SEPTEMBER 2026 · UUDISTE ÜLEVAADE</p>
          <h1><span>4</span> UUDIST</h1>
          <div className="outlet-row">{["ERR", "Delfi", "Postimees", "Õhtuleht"].map((name) => <b key={name}>{name}</b>)}</div>
          <p className="presenters">{PRESENTERS}</p>
        </div>
        <a href="#president" className="scroll-cue" aria-label="Keri järgmise uudiseni"><span>KERI ALLA</span><ArrowDown size={22} /></a>
      </section>

      <NewsSlide id="president" number="02" kicker="POLIITIKA" headline="Riigikogu valis presidendiks Ülle Madise" summary="2. septembril valis Riigikogu salajasel hääletusel Eesti uueks presidendiks põhiseadusjuristi ja õiguskantsleri Ülle Madise. Tema poolt hääletas 71 saadikut, võiduks oli vaja 68 häält. Madise on Eesti seitsmes president ja teine naispresident. Ametisse astub ta 12. oktoobril." source="Postimees · 02.09.2026" tone="president"><PresidentVisual /></NewsSlide>
      <NewsSlide id="pisa" number="03" kicker="HARIDUS" headline="PISA 2025: Eesti püsib Euroopas esikohal, kuid lugemisoskus halveneb" summary="8. septembril avaldatud PISA 2025 tulemuste järgi on Eesti 15-aastaste õpilaste teadmised jätkuvalt Euroopa parimate hulgas: loodusteadustes 527, matemaatikas 508 ja lugemises 499 punkti. OECD riikide seas edestas Eestit üldpunktidega vaid Jaapan. Samas on lugemisoskus langenud, mis teeb hariduseksperte murelikuks." source="Delfi · 08.09.2026" tone="pisa"><PisaVisual /></NewsSlide>
      <NewsSlide id="ai" number="04" kicker="TEHNOLOOGIA" headline="AI kustutas ettevõtte kogu andmebaasi üheksa sekundiga" summary="Tarkvarafirma PocketOS tehisintellekt Claude otsustas omapäi kustutada kogu ettevõtte andmebaasi koos varukoopiatega. Kadusid klientide andmed ja broneeringud. „See võttis üheksa sekundit,“ kirjutas asutaja Jer Crane. Andmed õnnestus mõne päevaga taastada." source="Õhtuleht · 03.05.2026" tone="ai"><AiVisual /></NewsSlide>
      <NewsSlide id="ronaldo" number="05" kicker="SPORT" headline="Ronaldo nõuab fännidele eluaegset staadionikeeldu" summary="Saudi profiliiga mängu ajal skandeerisid Al-Taawouni fännid Al-Hilali mängija Ruben Nevesi suunas tema surnud meeskonnakaaslase Diogo Jota nime. Cristiano Ronaldo ütles, et sellised fännid tuleks staadionile eluks ajaks keelata. Mäng lõppes Al-Hilali 6:0 võiduga." source="ERR · 13.09.2026" tone="sport"><RonaldoVisual /></NewsSlide>

      <section className="reasons-section" data-section="06">
        <span className="ghost-number" aria-hidden="true">06</span>
        <div className="kicker"><span />MEIE VALIK</div>
        <h2>Miks me need uudised valisime?</h2>
        <div className="reasons-grid">{reasons.map(({ Icon, source, tone, text }) => <article className={`reason-card ${tone}`} key={source}><Icon aria-hidden="true" /><b>{source}</b><p>{text}</p></article>)}</div>
      </section>

      <section className="sources-section" data-section="07">
        <span className="ghost-number" aria-hidden="true">07</span>
        <div className="kicker"><span />VIITED</div>
        <h2>Allikad</h2>
        <ol>{sources.map((source, index) => <li key={source.outlet}><a href={source.url} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><div><b>{source.outlet} · {source.date}</b><p>{source.title}</p></div><ArrowUpRight aria-hidden="true" /></a></li>)}</ol>
        <footer><p>Koostasid: {PRESENTERS.replace(" & ", " ja ")} · september 2026 · Aitäh!</p><div><i /><i /><i /></div></footer>
      </section>
    </main>
  );
}