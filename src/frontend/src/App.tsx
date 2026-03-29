import { motion } from "motion/react";

// ── Atom SVG decorative element ──────────────────────────────────────────────
function AtomDecoration({
  size = 200,
  opacity = 0.12,
}: { size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Nucleus */}
      <circle cx="100" cy="100" r="8" fill="currentColor" />
      {/* Orbit 1 */}
      <g className="atom-orbit">
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="180" cy="100" r="5" fill="currentColor" />
      </g>
      {/* Orbit 2 – rotated 60° */}
      <g
        className="atom-orbit-2"
        style={{ transform: "rotate(60deg)", transformOrigin: "100px 100px" }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="180" cy="100" r="5" fill="currentColor" />
      </g>
      {/* Orbit 3 – rotated 120° */}
      <g
        className="atom-orbit"
        style={{ transform: "rotate(120deg)", transformOrigin: "100px 100px" }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="30"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="180" cy="100" r="5" fill="currentColor" />
      </g>
    </svg>
  );
}

// ── Achievement list item ─────────────────────────────────────────────────────
function AchievementItem({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="achievement-badge">
      <span className="badge-icon" aria-hidden="true">
        <span style={{ fontSize: "15px" }}>{icon}</span>
      </span>
      <span
        style={{
          color: "oklch(0.33 0.01 240)",
          lineHeight: 1.6,
          fontSize: "0.9375rem",
        }}
      >
        {text}
      </span>
    </li>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Biography", href: "#biography" },
    { label: "Achievements", href: "#achievements" },
    { label: "Timeline", href: "#timeline" },
    { label: "Legacy", href: "#legacy" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <div
      className="grain-bg"
      style={{ backgroundColor: "oklch(0.95 0.01 85)", minHeight: "100vh" }}
    >
      {/* ── HEADER / NAV ────────────────────────────────────────────────── */}
      <header style={{ backgroundColor: "oklch(0.19 0.05 240)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Brand lockup */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{ color: "oklch(0.87 0.00 0)", display: "flex" }}
              aria-hidden="true"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="10" fill="currentColor" />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  transform="rotate(60 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="28"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  transform="rotate(120 100 100)"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "oklch(0.87 0.00 0)",
              }}
            >
              Marie Curie Tribute
            </span>
          </div>

          {/* Nav */}
          <nav aria-label="Main navigation">
            <ul
              style={{
                display: "flex",
                gap: "clamp(1rem, 2vw, 2rem)",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link"
                    data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <main id="main-content">
        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="hero-heading"
          style={{
            backgroundColor: "oklch(0.95 0.01 85)",
            padding: "80px 2rem 72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative atoms */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              color: "oklch(0.19 0.05 240)",
            }}
          >
            <AtomDecoration size={280} opacity={0.09} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              color: "oklch(0.19 0.05 240)",
            }}
          >
            <AtomDecoration size={220} opacity={0.07} />
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(2rem, 6vw, 5rem)",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="portrait-ring">
                <img
                  src="/assets/generated/marie-curie-portrait.dim_600x700.jpg"
                  alt="Marie Curie, pioneering physicist and chemist"
                  width={280}
                  height={280}
                  style={{ width: "280px", height: "280px" }}
                />
              </div>
            </motion.div>

            {/* Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.56 0.02 75)",
                  marginBottom: "12px",
                }}
              >
                1867 – 1934 · Poland / France
              </p>
              <h1
                id="hero-heading"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "oklch(0.22 0.04 240)",
                  lineHeight: 1.05,
                  marginBottom: "20px",
                }}
              >
                Marie
                <br />
                Curie
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "oklch(0.33 0.01 240)",
                  maxWidth: "420px",
                  marginBottom: "32px",
                }}
              >
                Physicist, chemist, and the first person to win two Nobel
                Prizes. Her groundbreaking research on radioactivity transformed
                science and opened doors for generations of women in STEM.
              </p>
              <a
                href="#biography"
                data-ocid="hero.primary_button"
                style={{
                  display: "inline-block",
                  backgroundColor: "oklch(0.56 0.02 75)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  transition: "background-color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.48 0.03 75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.56 0.02 75)";
                }}
              >
                Explore Her Life
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── BIOGRAPHY / INSPIRING JOURNEY ─────────────────────────────── */}
        <section
          id="biography"
          aria-labelledby="journey-heading"
          style={{
            backgroundColor: "oklch(0.88 0.03 75)",
            padding: "72px 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.56 0.02 75)",
                  marginBottom: "10px",
                }}
              >
                Biography
              </p>
              <h2
                id="journey-heading"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "oklch(0.22 0.04 240)",
                  marginBottom: "16px",
                }}
              >
                Her Inspiring Journey
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "oklch(0.33 0.01 240)",
                  maxWidth: "720px",
                  marginBottom: "48px",
                }}
              >
                Marie Skłodowska Curie's life was defined by relentless
                curiosity, extraordinary resilience, and a passion for
                scientific truth. Born in Warsaw under Russian imperial rule,
                she defied societal barriers at every turn — secretly attending
                the clandestine "Flying University" in Poland before crossing
                Europe to pursue her dreams in Paris.
              </p>
            </motion.div>

            {/* 3-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "28px",
              }}
            >
              {[
                {
                  title: "Early Life",
                  subtitle: "Warsaw, Poland · 1867",
                  body: "Maria Salomea Skłodowska was born on 7 November 1867 in Warsaw. Showing exceptional academic talent from childhood, she excelled in all subjects despite being barred from higher education in her homeland. She supported her sister's medical studies in Paris by working as a governess, dreaming of her own turn to study.",
                },
                {
                  title: "Education in Paris",
                  subtitle: "Université de Paris · 1891",
                  body: "In 1891, Marie enrolled at the Sorbonne — one of only a handful of women admitted at the time. She studied physics and mathematics with fierce dedication, often surviving on little food and heat in her small Paris apartment. In 1893 she became the first woman to earn a degree in physics from the Sorbonne, followed by a mathematics degree in 1894.",
                },
                {
                  title: "Discovery of Radium",
                  subtitle: "Paris · 1898",
                  body: "Working alongside her husband Pierre Curie in a leaky shed, Marie tirelessly processed tonnes of pitchblende ore. In 1898 the couple announced the discovery of two new elements: polonium (named for her homeland) and radium. The discovery earned Marie the first of her two Nobel Prizes — and coined the term 'radioactivity'.",
                },
              ].map((card, i) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{
                    backgroundColor: "oklch(0.95 0.01 85)",
                    borderRadius: "4px",
                    padding: "32px 28px",
                    borderTop: "3px solid oklch(0.19 0.05 240)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "oklch(0.56 0.02 75)",
                      marginBottom: "6px",
                    }}
                  >
                    {card.subtitle}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "oklch(0.22 0.04 240)",
                      marginBottom: "14px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "oklch(0.33 0.01 240)",
                    }}
                  >
                    {card.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS & TIMELINE ────────────────────────────────────── */}
        <section
          id="achievements"
          aria-labelledby="achievements-heading"
          style={{
            backgroundColor: "oklch(0.95 0.01 85)",
            padding: "72px 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Achievements card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  backgroundColor: "oklch(0.88 0.03 75)",
                  borderRadius: "8px",
                  padding: "40px 36px",
                }}
              >
                <h2
                  id="achievements-heading"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "oklch(0.22 0.04 240)",
                    marginBottom: "28px",
                  }}
                >
                  Achievements &amp; Awards
                </h2>
                <ul
                  style={{ listStyle: "none", margin: 0, padding: 0 }}
                  data-ocid="achievements.list"
                >
                  <AchievementItem
                    icon="🏆"
                    text="Nobel Prize in Physics (1903) — shared with Pierre Curie and Henri Becquerel for research on radiation"
                  />
                  <AchievementItem
                    icon="🏆"
                    text="Nobel Prize in Chemistry (1911) — awarded solely to Marie for the discovery and isolation of radium and polonium"
                  />
                  <AchievementItem
                    icon="⚛️"
                    text="First person — and only woman to date — to win two Nobel Prizes in two different sciences"
                  />
                  <AchievementItem
                    icon="🔬"
                    text="Co-discovered two new elements: Polonium (Po, named for Poland) and Radium (Ra) in 1898"
                  />
                  <AchievementItem
                    icon="👩‍🎓"
                    text="First woman to earn a PhD in Physics from the Sorbonne, and first female professor at the Université de Paris"
                  />
                  <AchievementItem
                    icon="🏥"
                    text="Founded mobile X-ray units (petites Curies) during WWI, directly supporting over one million wounded soldiers"
                  />
                  <AchievementItem
                    icon="🌍"
                    text="Founded the Radium Institute (now Institut Curie) in Paris in 1914, still a world-leading cancer research centre"
                  />
                </ul>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              id="timeline"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "oklch(0.22 0.04 240)",
                  marginBottom: "28px",
                }}
              >
                Timeline
              </h2>
              <ol
                style={{ listStyle: "none", margin: 0, padding: 0 }}
                data-ocid="timeline.list"
              >
                {[
                  {
                    years: "1867",
                    event:
                      "Born Maria Salomea Skłodowska in Warsaw, Kingdom of Poland",
                  },
                  {
                    years: "1891–1893",
                    event:
                      "Enrolled at the Sorbonne; earned degree in physics — first woman to do so",
                  },
                  {
                    years: "1894–1895",
                    event:
                      "Met Pierre Curie; married in July 1895, becoming a scientific and life partner",
                  },
                  {
                    years: "1897",
                    event:
                      "Birth of daughter Irène; Marie begins systematic study of uranium rays",
                  },
                  {
                    years: "1898",
                    event:
                      "Announced discovery of polonium in July and radium in December",
                  },
                  {
                    years: "1903",
                    event:
                      "Awarded Nobel Prize in Physics; first woman to receive a Nobel Prize",
                  },
                  {
                    years: "1906",
                    event:
                      "Pierre Curie dies in a street accident; Marie takes over his professorship at Sorbonne",
                  },
                  {
                    years: "1911",
                    event:
                      "Awarded Nobel Prize in Chemistry — unique double Nobel achievement",
                  },
                  {
                    years: "1914–1918",
                    event:
                      "Develops battlefield X-ray units; trained 150 female radiologists for WWI",
                  },
                  {
                    years: "1921",
                    event:
                      "Toured the United States; received one gram of radium from President Harding",
                  },
                  {
                    years: "1934",
                    event:
                      "Died on 4 July 1934 from aplastic anaemia, caused by decades of radiation exposure",
                  },
                ].map((item, idx) => (
                  <li
                    key={item.years}
                    data-ocid={`timeline.item.${idx + 1}`}
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginBottom: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        minWidth: "82px",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "oklch(0.19 0.05 240)",
                        letterSpacing: "0.04em",
                        paddingTop: "2px",
                      }}
                    >
                      {item.years}
                    </div>
                    <div
                      style={{
                        borderLeft: "2px solid oklch(0.80 0.02 75)",
                        paddingLeft: "18px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "oklch(0.33 0.01 240)",
                      }}
                    >
                      {item.event}
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        {/* ── LEGACY ────────────────────────────────────────────────────── */}
        <section
          id="legacy"
          aria-labelledby="legacy-heading"
          style={{
            backgroundColor: "oklch(0.88 0.03 75)",
            padding: "72px 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.56 0.02 75)",
                  marginBottom: "10px",
                }}
              >
                Enduring Impact
              </p>
              <h2
                id="legacy-heading"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "oklch(0.22 0.04 240)",
                  marginBottom: "36px",
                }}
              >
                Continuing Her Legacy
              </h2>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.33 0.01 240)",
                }}
              >
                Marie Curie's scientific legacy is immeasurable. The elements
                she discovered — polonium and radium — unlocked entirely new
                branches of chemistry and physics. Radioactivity, the term she
                coined, became the cornerstone of nuclear science, medical
                imaging, and cancer radiotherapy that saves millions of lives
                each year. The Institut Curie in Paris, which she founded,
                remains one of Europe's foremost cancer research and treatment
                centers, continuing her mission more than ninety years after her
                death.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.15 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "oklch(0.33 0.01 240)",
                }}
              >
                Beyond the laboratory, Marie Curie stands as an enduring symbol
                of what determination and intellectual courage can achieve
                against formidable odds. She broke gender barriers at the
                highest levels of academia at a time when women were rarely
                permitted entry. Her daughter Irène Joliot-Curie carried on the
                tradition, earning her own Nobel Prize in Chemistry in 1935.
                Today, the Marie Curie charity provides vital care for
                terminally ill people across the UK and Ireland — a fitting
                continuation of her life's work in the service of humanity.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── RESOURCES ─────────────────────────────────────────────────── */}
        <section
          id="resources"
          aria-labelledby="resources-heading"
          style={{
            backgroundColor: "oklch(0.95 0.01 85)",
            padding: "72px 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.56 0.02 75)",
                  marginBottom: "10px",
                }}
              >
                Further Reading
              </p>
              <h2
                id="resources-heading"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "oklch(0.22 0.04 240)",
                  marginBottom: "36px",
                }}
              >
                Learn More
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "24px",
                }}
              >
                {[
                  {
                    title: "Wikipedia",
                    desc: "Comprehensive encyclopedic article covering her life, work, and legacy in detail.",
                    href: "https://en.wikipedia.org/wiki/Marie_Curie",
                    label: "Read on Wikipedia →",
                    ocid: "resources.wikipedia.link",
                  },
                  {
                    title: "Nobel Prize Official",
                    desc: "Original Nobel committee documentation, prize lectures, and biographical material.",
                    href: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/",
                    label: "NobelPrize.org →",
                    ocid: "resources.nobel.link",
                  },
                  {
                    title: "Marie Curie Charity",
                    desc: "The UK charity in her name providing end-of-life nursing care and research funding.",
                    href: "https://www.mariecurie.org.uk",
                    label: "mariecurie.org.uk →",
                    ocid: "resources.charity.link",
                  },
                ].map((res) => (
                  <motion.a
                    key={res.ocid}
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={res.ocid}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    style={{
                      display: "block",
                      backgroundColor: "oklch(0.88 0.03 75)",
                      borderRadius: "4px",
                      padding: "28px 28px 24px",
                      textDecoration: "none",
                      borderBottom: "3px solid transparent",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderBottomColor = "oklch(0.19 0.05 240)";
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderBottomColor = "transparent";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "oklch(0.22 0.04 240)",
                        marginBottom: "10px",
                      }}
                    >
                      {res.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "oklch(0.33 0.01 240)",
                        marginBottom: "16px",
                      }}
                    >
                      {res.desc}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "oklch(0.19 0.05 240)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {res.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "oklch(0.28 0.00 0)",
          padding: "48px 2rem 32px",
          color: "oklch(0.87 0.00 0)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "36px",
            }}
          >
            {/* Brand */}
            <div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "oklch(0.87 0.00 0)",
                  marginBottom: "8px",
                }}
              >
                Marie Curie Tribute
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "oklch(0.65 0.00 0)",
                  maxWidth: "280px",
                  lineHeight: 1.6,
                }}
              >
                Honoring the life, work, and enduring legacy of one of history's
                greatest scientists.
              </p>
            </div>

            {/* Footer nav */}
            <nav aria-label="Footer navigation">
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 24px",
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={`footer.${link.label.toLowerCase()}.link`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "oklch(0.65 0.00 0)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.87 0.00 0)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.65 0.00 0)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid oklch(0.40 0.00 0)",
              paddingTop: "24px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "oklch(0.55 0.00 0)",
              }}
            >
              © {currentYear} Marie Curie Tribute. Educational tribute page.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "oklch(0.55 0.00 0)",
              }}
            >
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "oklch(0.70 0.00 0)",
                  textDecoration: "underline",
                  transition: "color 0.2s",
                }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
