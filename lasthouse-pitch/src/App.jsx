import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Leaf, Store, FlaskConical, Music, MapPin, Users, BarChart3, Mail, ArrowRight, Printer, ShieldCheck, ShoppingBag, HeartHandshake, CalendarDays } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

// ---
// LastHouse: By The Lake — Web Pitch Deck
// Single-file React component styled with TailwindCSS.
// Includes: animated hero, metrics, charts, roadmap, and an editable "Ask" toggle.
// Print-ready: use the "Print / Save PDF" button.
// ---

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-300/60 bg-white/70 backdrop-blur px-3 py-1 text-sm text-neutral-700 shadow-sm">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-6 ${className}`}>{children}</div>
);

const Stat = ({ label, value, sub }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm text-neutral-600 mt-1">{label}</div>
    {sub && <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>}
  </div>
);

const Badge = ({ children }) => (
  <span className="text-xs font-medium bg-neutral-900 text-white px-2.5 py-1 rounded-full">
    {children}
  </span>
);

export default function LastHousePitch() {
  const [mode, setMode] = useState("partners"); // partners | investors

  // --- Data (edit freely) ---
  const nowLabel = "As of Aug 18, 2025";
  const revenueGrowth = [
    { month: "Mar", revenue: 40 },
    { month: "Apr", revenue: 45 },
    { month: "May", revenue: 52 },
    { month: "Jun", revenue: 58 },
    { month: "Jul", revenue: 59 },
    { month: "Aug", revenue: 60 },
  ];

  const channelMix = [
    { name: "Cafe (F&B)", pct: 58 },
    { name: "Retail – The Pantry", pct: 18 },
    { name: "Events", pct: 9 },
    { name: "Wholesale (Green/Roasted)", pct: 10 },
    { name: "Subscriptions", pct: 5 },
  ];

  const roadmap = [
    { qtr: "Q3 2025", items: [
      "Seasonal robusta menu: Yuzu Mazagran, Marsala Mushroom specials",
      "Retail curation v2: House of Gaea, Saka Organics, Roda Kaco, Midori",
      "Community: workshops, run club, analog music nights",
    ]},
    { qtr: "Q4 2025", items: [
      "Robusta subscription pilot (roast & brew guides)",
      "Wholesale program: Sunrise Estate microlots",
      "Collabs with design & craft brands (ceramics by Kumar Gurram)",
    ]},
  ];

  const unitEconomics = [
    { metric: "Average Order Value (₹)", value: "450–550", note: "Cafe blended AOV" },
    { metric: "Food Cost (COGS)", value: "28–32%", note: "Menu engineered for margin" },
    { metric: "Beverage Gross Margin", value: "~70%", note: "Specialty coffee advantage" },
    { metric: "Retail Margin", value: "45–55%", note: "Curated brands + in-house" },
  ];

  const partnerAsk = [
    {
      title: "Brand & Retail Partners",
      bullets: [
        "Limited-run product drops at The Pantry",
        "Cross-promotions & in-cafe storytelling",
        "City-wide pop-ups and co-branded workshops",
      ],
      icon: <ShoppingBag className="w-5 h-5" />, 
    },
    {
      title: "Hospitality & Culture",
      bullets: [
        "Music residencies via Rams Musique",
        "Food magazine & zine features (e.g., Dhoop)",
        "Community programs: run club, tastings, talks",
      ],
      icon: <HeartHandshake className="w-5 h-5" />, 
    },
    {
      title: "Wholesale & Sourcing",
      bullets: [
        "Sunrise Estate robusta microlots",
        "Roaster partnerships & private labels",
        "Education: farm-to-cup immersions",
      ],
      icon: <Leaf className="w-5 h-5" />, 
    },
  ];

  const investorAsk = [
    {
      title: "Use of Funds",
      bullets: [
        "Scale cafe ops & training for consistency",
        "Expand retail footprint & subscriptions",
        "Working capital for green coffee procurement",
      ],
      icon: <BarChart3 className="w-5 h-5" />, 
    },
    {
      title: "Planned Outcomes",
      bullets: [
        "2–3x monthly revenue in 12–18 months",
        "Launch wholesale in 3 new Indian cities",
        "Profit discipline: maintain >65% blended GM",
      ],
      icon: <ShieldCheck className="w-5 h-5" />, 
    },
    {
      title: "Raise (Illustrative)",
      bullets: [
        "₹1.5–2.5 crore seed to accelerate growth",
        "Convertible or equity; strategic co-investors preferred",
        "Detailed model available upon request",
      ],
      icon: <Coffee className="w-5 h-5" />, 
    },
  ];

  const askList = mode === "partners" ? partnerAsk : investorAsk;

  const printDeck = () => {
    if (typeof window !== "undefined") window.print();
  };

  const gradient = "bg-[radial-gradient(1200px_600px_at_20%_-10%,#faf6f1,transparent),radial-gradient(800px_400px_at_120%_10%,#f0f7ff,transparent)]";

  return (
    <div className={`min-h-screen ${gradient} text-neutral-900`}> 
      {/* Nav */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white font-semibold">LH</span>
            <span className="font-semibold tracking-tight">LastHouse: By The Lake</span>
            <span className="ml-3 hidden sm:inline"><Badge>Robusta-First</Badge></span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#walkthrough" className="hidden md:inline text-sm px-3 py-1.5 rounded-full border bg-white hover:bg-neutral-100">Walkthrough</a>
            <button onClick={() => setMode("partners")} className={`px-3 py-1.5 rounded-full text-sm border ${mode==='partners' ? 'bg-neutral-900 text-white' : 'bg-white hover:bg-neutral-100'}`}>For Partners</button>
            <button onClick={() => setMode("investors")} className={`px-3 py-1.5 rounded-full text-sm border ${mode==='investors' ? 'bg-neutral-900 text-white' : 'bg-white hover:bg-neutral-100'}`}>For Investors</button>
            <button onClick={printDeck} className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border bg-white hover:bg-neutral-100"><Printer className="w-4 h-4"/> Print / Save PDF</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Section id="hero" className="pt-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center">
            <Pill>
              <MapPin className="w-4 h-4 mr-1"/>
              Hyderabad • Lakeside community café & cultural hub
            </Pill>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
              India’s first specialty coffeehouse championing high‑quality <span className="underline decoration-amber-500/60 decoration-4 underline-offset-4">robusta</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-3xl mx-auto">
              From our 400‑acre Sunrise Estate in the Western Ghats to a design‑forward café by the lake, we roast, brew, and tell the story of robusta—farm to cup to culture.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#why" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90">Explore the Deck <ArrowRight className="w-4 h-4"/></a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-neutral-100">Contact</a>
            </div>
            <div className="mt-6 text-xs text-neutral-500">{nowLabel}</div>
          </div>
        </motion.div>
      </Section>

      {/* Metrics */}
      <Section id="metrics" className="pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <Stat value="₹65L" label="Revenue growth in 6 months" sub="40L → 60L" />
          </Card>
          <Card>
            <Stat value="400 acres" label="Family estate (Western Ghats)" sub="Sunrise Estate"/>
          </Card>
          <Card>
            <Stat value=">5" label="Revenue streams" sub="Cafe, Retail, Events, Wholesale, Subscriptions"/>
          </Card>
          <Card>
            <Stat value="Community" label="Workshops • Runs • Music" sub="Cultural programming"/>
          </Card>
        </div>
      </Section>

      {/* Why Now / Problem-Solution */}
      <Section id="why">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="w-5 h-5"/>
              <h3 className="text-xl font-semibold">The Opportunity</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Global robusta demand is rising; India grows world‑class robusta but the narrative lags.</li>
              <li>Urban customers seek provenance, process, and purpose—not just caffeine.</li>
              <li>Hyderabad’s premium café market is growing, yet under‑served for truly origin‑led experiences.</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-3">
              <Coffee className="w-5 h-5"/>
              <h3 className="text-xl font-semibold">Our Answer</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Robusta‑first curation from farm to lab to cup—with transparent processing.</li>
              <li>Design‑led café + cultural hub that hosts tastings, talks, and music nights.</li>
              <li>Retail platform (The Pantry) featuring craft, care, and slow living.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Product Pillars */}
      <Section id="pillars" className="pt-0">
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <div className="flex items-center gap-3 mb-2"><Coffee className="w-5 h-5"/><h4 className="font-semibold">Café</h4></div>
            <p className="text-sm text-neutral-700">Robusta‑forward beverages, food engineered for margin and speed, lakeside ambience.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><FlaskConical className="w-5 h-5"/><h4 className="font-semibold">Coffee Lab</h4></div>
            <p className="text-sm text-neutral-700">Processing R&D, QC, and public cuppings that bring customers into the craft.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><Store className="w-5 h-5"/><h4 className="font-semibold">The Pantry</h4></div>
            <p className="text-sm text-neutral-700">Curated retail: House of Gaea, Saka Organics, Roda Kaco, Midori, ceramics by Kumar Gurram, and more.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-2"><Music className="w-5 h-5"/><h4 className="font-semibold">Culture</h4></div>
            <p className="text-sm text-neutral-700">Workshops, run club, analog music with Rams Musique, and indie magazine features (e.g., Dhoop).</p>
          </Card>
        </div>
      </Section>

      {/* Charts */}
      <Section id="charts">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Monthly Revenue (₹ Lakh)</h3>
              <Badge>Illustrative</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueGrowth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Channel Mix (%)</h3>
              <Badge>Blended</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelMix} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pct" name="% of revenue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </Section>

      {/* Unit Economics */}
      <Section id="unit-econ">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5"/>
            <h3 className="text-lg font-semibold">Unit Economics (targets / editable)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-neutral-500">
                  <th className="py-2">Metric</th>
                  <th className="py-2">Target / Range</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {unitEconomics.map((row) => (
                  <tr key={row.metric} className="border-t">
                    <td className="py-2 font-medium">{row.metric}</td>
                    <td className="py-2">{row.value}</td>
                    <td className="py-2 text-neutral-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Tune these to your current P&L. The charted revenue is illustrative and should be replaced with your latests.</p>
        </Card>
      </Section>

      {/* Go-To-Market & Moat */}
      <Section id="gtm" className="pt-0">
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center gap-2 mb-2"><Users className="w-5 h-5"/><h4 className="font-semibold">Go‑to‑Market</h4></div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Origin‑led storytelling across café, retail, and events</li>
              <li>Community flywheel: tastings → memberships → subscriptions</li>
              <li>PR & podcasts (earned media) highlighting The Robusta Renaissance</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5"/><h4 className="font-semibold">Moat</h4></div>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Direct link to Sunrise Estate (400 acres) for quality & provenance</li>
              <li>Process & menu IP: robusta‑first recipes, QC, and training</li>
              <li>Brand as a cultural platform, not just a café</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2"><CalendarDays className="w-5 h-5"/><h4 className="font-semibold">Roadmap</h4></div>
            <div className="space-y-2">
              {roadmap.map((r) => (
                <div key={r.qtr}>
                  <div className="text-sm font-semibold">{r.qtr}</div>
                  <ul className="list-disc pl-5 text-sm text-neutral-700">
                    {r.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Ask */}
      <Section id="ask">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{mode === 'partners' ? 'Partnerships We’re Seeking' : 'Investment Overview'}</h3>
          <div className="flex gap-2">
            <button onClick={() => setMode("partners")} className={`px-3 py-1.5 rounded-full text-sm border ${mode==='partners' ? 'bg-neutral-900 text-white' : 'bg-white hover:bg-neutral-100'}`}>Partners</button>
            <button onClick={() => setMode("investors")} className={`px-3 py-1.5 rounded-full text-sm border ${mode==='investors' ? 'bg-neutral-900 text-white' : 'bg-white hover:bg-neutral-100'}`}>Investors</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {askList.map((a) => (
            <Card key={a.title}>
              <div className="flex items-center gap-2 mb-2">{a.icon}<h4 className="font-semibold">{a.title}</h4></div>
              <ul className="list-disc pl-5 text-sm space-y-1 text-neutral-700">
                {a.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Walkthrough */}
      <Section id="walkthrough">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Design Walkthrough — how this pitch page is built</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700">
            <div>
              <h4 className="font-semibold mb-1">1) Hero & Value Prop</h4>
              <p>Big single line promise (“Robusta‑first”), subtext for provenance, and two primary CTAs. Animated fade‑in via Framer Motion. Keep it 1–2 sentences.</p>
              <h4 className="font-semibold mt-3 mb-1">2) Metrics</h4>
              <p>Four tiles with sharp numbers to earn attention fast. Swap values to your latest figures.</p>
              <h4 className="font-semibold mt-3 mb-1">3) Problem → Answer</h4>
              <p>Two‑card grid. Left: market/context. Right: your differentiated answer. Keep bullets crisp.</p>
              <h4 className="font-semibold mt-3 mb-1">4) Product Pillars</h4>
              <p>Café • Lab • Pantry • Culture — one paragraph each so partners grasp scope at a glance.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">5) Charts & Unit Economics</h4>
              <p>Illustrative charts (Recharts). Replace with fresh data for credibility. Unit‑econ table is meant to mirror your P&L targets.</p>
              <h4 className="font-semibold mt-3 mb-1">6) GTM, Moat & Roadmap</h4>
              <p>Three cards: how you grow, why you defend, what’s next. Avoid jargon.</p>
              <h4 className="font-semibold mt-3 mb-1">7) The Ask (Toggle)</h4>
              <p>Partners ⇄ Investors switch changes content blocks so one page serves both audiences.</p>
              <h4 className="font-semibold mt-3 mb-1">8) Contact</h4>
              <p>Direct email CTA + Print/Save PDF for sending a one‑pager instantly.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div>
              <h4 className="font-semibold mb-1">Design System</h4>
              <ul className="list-disc pl-5">
                <li>Type: geometric sans, varied sizes (xl for headlines, base for copy)</li>
                <li>Palette: Off‑white, Fog grey, Lake black, Robusta amber accents</li>
                <li>UI: rounded‑2xl cards, light borders, soft shadows</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Customize Fast</h4>
              <ul className="list-disc pl-5">
                <li>Edit <code>revenueGrowth</code>, <code>channelMix</code>, and <code>unitEconomics</code> arrays</li>
                <li>Replace partners/investors bullets to match your current plans</li>
                <li>Swap images or embed a map under “Visit us” (optional)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Print / PDF Tips</h4>
              <ul className="list-disc pl-5">
                <li>Use the top‑right “Print / Save PDF” button</li>
                <li>Set margins to “Default” and scale 90–95% if needed</li>
                <li>Share as a single‑page PDF one‑pager</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* Team */}
      <Section id="team">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Team</h3>
          <p className="text-sm text-neutral-700">Founders & Operators with deep specialty coffee and hospitality experience across sourcing, menu engineering, retail curation, and operations. Add bios, headshots, and advisory board here.</p>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-24">
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Let’s build the Robusta Renaissance</h3>
              <p className="text-sm text-neutral-700">Partnerships, media, wholesale, or investments — we’d love to chat.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@lasthouse.example" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90"><Mail className="w-4 h-4"/> hello@lasthouse.example</a>
              <button onClick={printDeck} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-neutral-100"><Printer className="w-4 h-4"/> Print / Save PDF</button>
            </div>
          </div>
        </Card>
        <p className="text-xs text-neutral-500 mt-3">© {new Date().getFullYear()} LastHouse. All rights reserved. Replace placeholders with your exact figures before sharing externally.</p>
      </Section>
    </div>
  );
}
