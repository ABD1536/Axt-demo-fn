export interface ProjectMetric {
  value: string;
  label: string;
  subtext?: string;
}

export interface ProjectSnapshot {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryTag: string; // Used for filter matching
  year: string;
  tags: string[];
  image: string;
  timeline: string;
  client: string;
  scope: string;
  status: string;
  metrics: [ProjectMetric, ProjectMetric, ProjectMetric, ProjectMetric];
  challenge: {
    heading: string;
    description: string;
    bottlenecks: string[];
  };
  solution: {
    heading: string;
    description: string;
    highlights: string[];
  };
  flagshipSnapshot: {
    title: string;
    caption: string;
    image: string;
  };
  snapshots: ProjectSnapshot[];
  techStack: string[];
}

export const allProjectsData: Project[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. WEB DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: "web-1",
    slug: "mkt-auto",
    title: "MKT AUTO MARKETPLACE",
    tagline: "High-throughput automotive digital showroom with dynamic valuation engines.",
    category: "Automotive Marketplace",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Automotive", "Next.js"],
    image: "/images/stacked_service_1.jpg",
    timeline: "6 Weeks",
    client: "Tier-1 Auto Brokerage Network",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "0.48s", label: "Edge TTFB Latency", subtext: "Global Vercel Edge caching" },
      { value: "+310%", label: "Lead Capture Velocity", subtext: "Multi-step valuation funnel" },
      { value: "99.98%", label: "Platform Availability", subtext: "Resilient serverless compute" },
      { value: "14.2k", label: "Monthly Inventory Lookups", subtext: "Real-time pricing indexing" },
    ],
    challenge: {
      heading: "Legacy Inventory Stalls & Fragmented Buyer Journeys",
      description:
        "The client operated an automotive showroom with inventory scattered across multiple third-party dealer platforms. Buyers experienced 4+ second page load times, broken mobile filters, and disjointed trade-in estimation forms that caused an 82% abandonment rate before dealer contact.",
      bottlenecks: [
        "Unsynchronized inventory tables leading to ghost listings and frustrated buyers.",
        "Monolithic legacy architecture with excessive render blocking scripts (>3.8s LCP).",
        "Zero automated lead qualification before dispatching buyer inquiries to sales reps.",
      ],
    },
    solution: {
      heading: "Custom Headless Next.js Showroom with Instant Trade-In Pricing",
      description:
        "Axtrait engineered a ground-up headless marketplace powered by Next.js App Router, Tailwind CSS, and Redis edge caching. We designed custom interactive vehicle cards, 360-degree virtual vehicle inspection modules, and an instant 3-step VIN valuation calculator integrated directly into their CRM dispatch pipeline.",
      highlights: [
        "Sub-500ms global page loads via ISR (Incremental Static Regeneration).",
        "Algorithmic instant valuation calculator capturing verified buyer phone & WhatsApp.",
        "Automated CRM webhook synchronizing verified test-drive bookings within 15 seconds.",
      ],
    },
    flagshipSnapshot: {
      title: "Interactive Dealer Console & Multi-Filter Showroom",
      caption: "Real-time inventory lookup engine with instant vehicle specs, financing calculator, and dynamic reserve checkout.",
      image: "/images/stacked_service_1.jpg",
    },
    snapshots: [
      {
        title: "Automated Valuation & Lead Ingestion Pipeline",
        description: "Intelligent VIN decoding pipeline that checks vehicle history and yields instant trade-in appraisals, pre-qualifying leads before routing to sales agents.",
        image: "/images/stage_1.jpg",
        tag: "Core Workflow",
      },
      {
        title: "Mobile-First Virtual Showroom & Booking Flow",
        description: "Adaptive thumb-zone layout optimized for iOS and Android web browsers, featuring biometric WhatsApp verification and test-drive calendar sync.",
        image: "/images/stacked_service_2.jpg",
        tag: "Mobile UX",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Redis Edge", "PostgreSQL", "Framer Motion", "Twilio API"],
  },

  {
    id: "web-2",
    slug: "silver-arrow",
    title: "SILVER ARROW LUXURY",
    tagline: "Ultra-luxury vehicle rental platform with instant digital deposits & identity verification.",
    category: "Luxury Concierge & Rentals",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Car Rental", "Vercel"],
    image: "/images/stage_1.jpg",
    timeline: "5 Weeks",
    client: "VIP Chauffeur & Exotic Fleet Group",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "100%", label: "Digital Booking Automation", subtext: "Zero manual contract signing" },
      { value: "<1.1s", label: "Average Page Load", subtext: "Next-gen optimized media assets" },
      { value: "+280%", label: "High-Ticket Conversions", subtext: "Streamlined luxury reservation" },
      { value: "4.9/5", label: "Client Satisfaction Score", subtext: "Premium frictionless UX" },
    ],
    challenge: {
      heading: "Friction-Heavy Deposit Collection & Manual ID Verification",
      description:
        "High-net-worth clients demanding exotic vehicle rentals faced slow PDF contracts, manual driver license scans over WhatsApp, and cumbersome wire transfer verifications that delayed handoffs by up to 24 hours.",
      bottlenecks: [
        "Manual KYC checks causing high drop-off among high-ticket international travelers.",
        "Static image galleries failing to evoke the tactile luxury experience of high-end vehicles.",
        "Lack of real-time GPS fleet telemetry integration on scheduled reservations.",
      ],
    },
    solution: {
      heading: "Concierge-Grade Booking Engine with Instant Stripe Pre-Auth",
      description:
        "Axtrait developed an opulent dark-aesthetic digital storefront paired with automated Stripe identity verification. Clients select their bespoke supercar, verify credentials in 45 seconds, lock pre-authorized damage deposits, and receive instantaneous digital access codes directly to Apple Wallet.",
      highlights: [
        "Bespoke obsidian UI aesthetic crafted specifically for ultra-luxury clientele.",
        "Instant biometric ID verification and automated security deposit holds.",
        "Direct calendar synchronization with fleet dispatch and concierge delivery drivers.",
      ],
    },
    flagshipSnapshot: {
      title: "Exotic Fleet Concierge Interface",
      caption: "Minimalist dark-mode fleet catalog with instant date-range reservation and security deposit authorization.",
      image: "/images/stage_1.jpg",
    },
    snapshots: [
      {
        title: "Automated Biometric KYC & Escrow Lock",
        description: "Zero-friction client screening integrating international driver license parsing and cryptographic fraud protection.",
        image: "/images/stacked_service_3.jpg",
        tag: "Security Architecture",
      },
      {
        title: "Dynamic Fleet Availability Radar",
        description: "Real-time dispatch dashboard showing live GPS availability, maintenance schedules, and booked concierge delivery routes.",
        image: "/images/about_arch_main.jpg",
        tag: "Operations Hub",
      },
    ],
    techStack: ["React 19", "Next.js", "Stripe Connect", "TypeScript", "Mapbox GL", "Node.js", "Tailwind CSS"],
  },

  {
    id: "web-3",
    slug: "the-crazy-entrepreneur",
    title: "THE CRAZY ENTREPRENEUR",
    tagline: "High-traffic international media publication and global founder network.",
    category: "Digital Media & Publications",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Media Hub", "CMS"],
    image: "/images/about_arch_main.jpg",
    timeline: "7 Weeks",
    client: "Global Business Media Group",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "450k+", label: "Monthly Unique Readers", subtext: "Zero server downtime on surges" },
      { value: "0.32s", label: "Article Edge Render", subtext: "Optimized Vercel ISR" },
      { value: "+420%", label: "Newsletter Opt-Ins", subtext: "Contextual inline signup triggers" },
      { value: "98/100", label: "Google Lighthouse Score", subtext: "Flawless Core Web Vitals" },
    ],
    challenge: {
      heading: "Monolithic WordPress Crashes Under Viral Article Surges",
      description:
        "The publication's legacy WordPress infrastructure repeatedly timed out whenever articles were featured on Reddit or Forbes. Database queries locked up, ad impressions plummeted, and editorial staff struggled with bloated CMS publishing interfaces.",
      bottlenecks: [
        "Frequent database timeouts during viral traffic spikes exceeding 20k concurrent users.",
        "Cumbersome editorial workflows taking over 45 minutes to format and publish syndicated podcasts.",
        "High bounce rates (68%) caused by intrusive layout shifts and sluggish advertising scripts.",
      ],
    },
    solution: {
      heading: "Headless Content Mesh with Edge Caching & Automated Syndication",
      description:
        "We rebuilt the entire media hub using headless Sanity CMS and Next.js ISR on global edge nodes. Dynamic audio player components, sticky sponsor showcases, and ultra-fast newsletter capture bars delivered an editorial reading experience rivalling Bloomberg and Wired.",
      highlights: [
        "Global CDN caching delivering instantaneous page loads regardless of visitor geography.",
        "Modular block-based editor enabling journalists to compose interactive stories in under 10 minutes.",
        "Zero-layout-shift ad unit slots with lazy-hydrated sponsor analytics.",
      ],
    },
    flagshipSnapshot: {
      title: "Editorial Hub & Founder Spotlight Platform",
      caption: "Typography-focused editorial architecture with dark/light mode toggle and synchronized podcast audio playback.",
      image: "/images/about_arch_main.jpg",
    },
    snapshots: [
      {
        title: "Automated Multi-Channel Content Syndication",
        description: "Webhook pipeline automatically formatting and distributing published articles to Apple News, Substack, and LinkedIn newsletters.",
        image: "/images/about_team_collab.jpg",
        tag: "Distribution Engine",
      },
      {
        title: "Real-Time Editorial Metrics Dashboard",
        description: "Internal analytics panel monitoring live reader retention, scroll depth, and affiliate conversion rates without third-party tracking bloat.",
        image: "/images/stage_4.jpg",
        tag: "Analytics",
      },
    ],
    techStack: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS", "Vercel Edge", "Algolia", "Beehiiv API"],
  },

  {
    id: "web-4",
    slug: "apex-enterprise",
    title: "APEX ENTERPRISE PORTAL",
    tagline: "Institutional cloud interface for enterprise portfolio management and telemetry.",
    category: "Fintech & Cloud Portals",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Fintech", "React"],
    image: "/images/stage_2.jpg",
    timeline: "8 Weeks",
    client: "Tier-1 Asset Management Firm",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "sub-10ms", label: "WebSocket Ticker Latency", subtext: "Real-time liquidity pricing" },
      { value: "$1.4B+", label: "Assets Visualized", subtext: "Multi-currency portfolio views" },
      { value: "SOC-2", label: "Compliance Certified", subtext: "Hardware-token 2FA authentication" },
      { value: "100%", label: "Audit Log Fidelity", subtext: "Tamper-evident transaction records" },
    ],
    challenge: {
      heading: "Fragmented Financial Data Streams & Slow Latency Feeds",
      description:
        "Institutional portfolio managers were toggling between 6 separate internal tools to monitor risk exposure and asset allocation, resulting in execution delays and audit compliance headaches.",
      bottlenecks: [
        "Excessive DOM re-renders causing UI freezes when processing 500+ tick updates per second.",
        "Lack of unified role-based permissions between managing directors, auditors, and junior analysts.",
        "Security vulnerabilities identified in legacy REST endpoints handling sensitive ledger balances.",
      ],
    },
    solution: {
      heading: "Low-Latency React Architecture with Virtualized Data Grids",
      description:
        "Engineered an institutional-grade financial dashboard using React 19, WebGL canvas charting, and binary WebSocket protocols. The portal allows instant risk scenario simulation, CSV ledger reconciliation, and cryptographic session auditing.",
      highlights: [
        "Virtualized 100,000-row tabular feeds scrolling smoothly at 60 FPS without memory leaks.",
        "Granular role-based access control with hardware-backed security key verification.",
        "Automated end-of-day PDF compliance report generation dispatched to executive stakeholders.",
      ],
    },
    flagshipSnapshot: {
      title: "Real-Time Telemetry & Portfolio Command Deck",
      caption: "High-density data visualization console displaying real-time asset allocations, yield curves, and counterparty risk scores.",
      image: "/images/stage_2.jpg",
    },
    snapshots: [
      {
        title: "Binary WebSocket Stream Processor",
        description: "Optimized network layer aggregating distributed market feeds into a synchronized low-overhead client buffer.",
        image: "/images/about_ai_tech.jpg",
        tag: "Data Ingestion",
      },
      {
        title: "Automated Regulatory Audit Engine",
        description: "Zero-knowledge proof verification pipeline confirming trade settlements against SEC compliance frameworks.",
        image: "/images/card_3d_gem.jpg",
        tag: "Compliance",
      },
    ],
    techStack: ["React 19", "TypeScript", "WebSockets", "ECharts", "Tailwind CSS", "Docker", "Go", "PostgreSQL"],
  },

  {
    id: "web-5",
    slug: "omnichannel-ecommerce",
    title: "OMNICHANNEL COMMERCE",
    tagline: "Headless e-commerce architecture powering cross-border retail and localized storefronts.",
    category: "High-Volume E-Commerce",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Shopify", "Tailwind"],
    image: "/images/stacked_service_3.jpg",
    timeline: "6 Weeks",
    client: "Global DTC Lifestyle Conglomerate",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "+38.4%", label: "Average Checkout Value", subtext: "Dynamic 1-click upsell logic" },
      { value: "0.65s", label: "Mobile Checkout Speed", subtext: "Shopify Plus Headless Storefront API" },
      { value: "14", label: "Localized Currencies", subtext: "GeoIP auto-detection & duty calculation" },
      { value: "-45%", label: "Cart Drop-Off Rate", subtext: "Optimized single-screen checkout" },
    ],
    challenge: {
      heading: "Shopify Liquid Theme Bottlenecks & Multi-Currency Stalls",
      description:
        "The client’s standard Shopify Liquid storefront suffered from slow third-party app scripts, causing 5-second mobile load times in European and GCC markets, depressing international expansion efforts.",
      bottlenecks: [
        "App script bloat from 22 installed Shopify plugins degrading Core Web Vitals.",
        "Manual currency conversion causing unexpected conversion fees and cart abandonment.",
        "Inability to run server-side A/B tests on collection layout modules.",
      ],
    },
    solution: {
      heading: "Headless Next.js Storefront with Global Edge Caching",
      description:
        "Replaced all fragmented third-party Shopify apps with a streamlined Next.js frontend consuming Shopify's GraphQL Storefront API. Built native localized checkout routes, predictive search suggestions, and a lightning-fast cart slide-out with automated free-shipping threshold calculators.",
      highlights: [
        "Zero third-party script bloat via server-side pixel tracking and edge proxies.",
        "Automatic IP geo-detection with instant local currency and duty computation.",
        "Smart predictive search index delivering live product matches in under 30ms.",
      ],
    },
    flagshipSnapshot: {
      title: "Headless Catalog & Interactive Product Configurator",
      caption: "Fluid collection view featuring instant variant swatches, real-time local inventory indicators, and quick-add slideout.",
      image: "/images/stacked_service_3.jpg",
    },
    snapshots: [
      {
        title: "Predictive Cart Optimization Flow",
        description: "Contextual cross-sell algorithm calculating complementary accessory recommendations based on buyer cart weight and category.",
        image: "/images/card_3d_sphere.jpg",
        tag: "Conversion Engine",
      },
      {
        title: "Automated Global Fulfillment Sync",
        description: "Warehouse API integration synchronizing European and GCC distribution centers with real-time stock allocation alerts.",
        image: "/images/stage_3.jpg",
        tag: "Logistics",
      },
    ],
    techStack: ["Shopify Storefront API", "Next.js", "GraphQL", "Tailwind CSS", "Zustand", "Cloudflare Workers"],
  },

  {
    id: "web-6",
    slug: "prime-realty",
    title: "PRIME ESTATES SHOWCASE",
    tagline: "Architectural luxury real estate showcase with interactive masterplans and VIP tour booking.",
    category: "Real Estate Automation",
    categoryTag: "WEB DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Real Estate", "TypeScript"],
    image: "/images/stage_3.jpg",
    timeline: "7 Weeks",
    client: "Ultra-Luxury Property Developer",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "$85M+", label: "Pipeline Value Generated", subtext: "Off-market penthouses & villas" },
      { value: "<45s", label: "VIP Lead Response Time", subtext: "Automated broker WhatsApp alert" },
      { value: "+340%", label: "Brochure Download Rate", subtext: "Gated luxury investment deck" },
      { value: "100%", label: "CRM Deal Sync", subtext: "Zero lead leakage into broker pipeline" },
    ],
    challenge: {
      heading: "Static PDF Brochures Failing High-Net-Worth International Buyers",
      description:
        "International property investors from Dubai, London, and New York were bouncing from low-resolution property PDF links. The sales desk had zero visibility into which penthouse floorplans prospective buyers were viewing, losing deals to competitors.",
      bottlenecks: [
        "Heavy uncompressed property renders causing catastrophic mobile loading lag.",
        "Zero broker notifications when high-intent investors viewed multi-million-dollar listings.",
        "Manual lead entry into CRM causing 4-hour response delays when leads had gone cold.",
      ],
    },
    solution: {
      heading: "Interactive Masterplan Engine & Automated Concierge Routing",
      description:
        "Axtrait engineered a cinematic dark-mode property showcase featuring interactive 3D floor plan viewers, solar orientation simulators, and gated investor data rooms. When an investor unlocks a brochure, their intent data triggers an instant WhatsApp concierge intro to the lead listing agent.",
      highlights: [
        "Interactive SVG masterplan allowing buyers to click individual floors and explore units.",
        "Encrypted investor data room with watermarked financial projections and ROI calculators.",
        "Direct webhook routing qualified buyer inquiries to senior brokers within 45 seconds.",
      ],
    },
    flagshipSnapshot: {
      title: "Cinematic Luxury Property Showcase",
      caption: "High-resolution architectural visualizer featuring unit availability, sunset view simulations, and VIP private tour scheduling.",
      image: "/images/stage_3.jpg",
    },
    snapshots: [
      {
        title: "Interactive Masterplan & Unit Filter",
        description: "Vector-based floor selector calculating square footage, price per sq meter, and panoramic balcony views in real-time.",
        image: "/images/about_pill_portrait.jpg",
        tag: "Interactive 3D",
      },
      {
        title: "Instant WhatsApp Broker Dispatch",
        description: "Automated webhook trigger delivering rich lead dossiers (investor budget, preferred layout, residency status) to broker phones.",
        image: "/images/stacked_service_1.jpg",
        tag: "Automation",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "WhatsApp Business API", "Vercel"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. LEAD GENERATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "lead-1",
    slug: "b2b-outbound-engine",
    title: "B2B OUTBOUND ENGINE",
    tagline: "Autonomous B2B acquisition pipeline with verified intent data and multi-mailbox warmup.",
    category: "B2B Lead Acquisition",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["Apollo.io", "Cold Email"],
    image: "/images/stacked_service_2.jpg",
    timeline: "4 Weeks",
    client: "Enterprise SaaS Accelerator",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "62.4%", label: "Average Email Open Rate", subtext: "SPF/DKIM/DMARC inbox optimization" },
      { value: "14.8%", label: "Positive Response Rate", subtext: "Hyper-personalized AI icebreakers" },
      { value: "120+", label: "Sales Calls Booked / Mo", subtext: "Predictable pipeline generation" },
      { value: "0.1%", label: "Spam Complaint Rate", subtext: "Rotated domain infrastructure" },
    ],
    challenge: {
      heading: "Domain Burnout & Generic Unopened Outreach Messages",
      description:
        "The client’s in-house outbound sales reps were sending bulk cold emails from their primary company domain, resulting in Google spam blacklisting, tanking domain reputation, and achieving less than a 1% meeting booking rate.",
      bottlenecks: [
        "Primary corporate domain blacklisted by spam filters, jeopardizing internal company communications.",
        "Unverified lead lists containing 28% bounce rates and outdated LinkedIn roles.",
        "Manual rep prospecting limiting outbound volume to under 40 personalized emails per day.",
      ],
    },
    solution: {
      heading: "Decentralized Mailbox Infrastructure with Intent Scraping",
      description:
        "Engineered a fault-tolerant cold email network consisting of 40 secondary domain mailboxes across Google Workspace and Microsoft 365, warmed up via automated peer networks. Built real-time web scrapers identifying hiring signals and tech stack changes to craft contextual 1-to-1 outreach.",
      highlights: [
        "40+ secondary domain mailboxes configured with custom SPF, DKIM, and DMARC records.",
        "Automated Apollo and LinkedIn scraping verifying executive emails via zero-bounce MX checks.",
        "AI personalization engine referencing recent funding rounds and public job openings.",
      ],
    },
    flagshipSnapshot: {
      title: "Outbound Command Console & Health Monitor",
      caption: "Central dashboard monitoring deliverability scores, mailbox warmup cycles, and positive reply classification across 40 sender accounts.",
      image: "/images/stacked_service_2.jpg",
    },
    snapshots: [
      {
        title: "Intelligent Reply Sentiment Classifier",
        description: "NLP pipeline categorizing incoming prospect responses into 'Meeting Requested', 'Not Right Now', or 'Unsubscribe' with zero delay.",
        image: "/images/about_innovation_team.jpg",
        tag: "AI Classifier",
      },
      {
        title: "Automated Calendar Sync & CRM Deal Creation",
        description: "Instantly booking confirmed meetings on sales directors' calendars and generating deal stages in HubSpot.",
        image: "/images/stage_4.jpg",
        tag: "Pipeline CRM",
      },
    ],
    techStack: ["Smartlead", "Apollo API", "Node.js", "Python", "HubSpot CRM", "Google Workspace API", "OpenAI GPT-4o"],
  },

  {
    id: "lead-2",
    slug: "real-estate-pipeline",
    title: "HIGH-TICKET REAL ESTATE PIPELINE",
    tagline: "Precision Meta ad funnel with instant WhatsApp qualification for luxury property buyers.",
    category: "Real Estate Growth Funnels",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["Meta Ads", "Funnels"],
    image: "/images/about_pill_portrait.jpg",
    timeline: "5 Weeks",
    client: "Luxury Brokerage Firm",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "4.8x", label: "ROAS on Ad Spend", subtext: "Verified through closed commissions" },
      { value: "<30s", label: "Speed to Lead Contact", subtext: "Direct WhatsApp conversational bot" },
      { value: "$42", label: "Cost Per Qualified Buyer", subtext: "Targeting $2M+ liquid net worth" },
      { value: "84%", label: "Broker Show-Up Rate", subtext: "Automated SMS/WhatsApp reminders" },
    ],
    challenge: {
      heading: "Low-Quality Facebook Form Leads Wasting Agent Time",
      description:
        "The brokerage was spending $30,000/month on generic Meta lead ads, generating hundreds of junk submissions with invalid phone numbers, unqualified tire-kickers, and renters with zero purchase intent.",
      bottlenecks: [
        "Unfiltered native Facebook forms capturing fabricated phone numbers and burner emails.",
        "Average 6-hour delay before busy agents called back prospects, by which point intent vanished.",
        "Zero tracking connection between initial ad click and final closed notary contracts.",
      ],
    },
    solution: {
      heading: "Interactive Video Funnel with Automated WhatsApp Pre-Qualification",
      description:
        "Axtrait deployed high-conversion interactive video landing pages with two-factor phone number verification. Prospective buyers undergo a 4-question qualification funnel (budget, timeline, residency, mortgage/cash) before being greeted within 30 seconds by an automated WhatsApp concierge.",
      highlights: [
        "Two-factor OTP phone verification eradicating fake numbers entirely.",
        "Instant conversational WhatsApp bot qualifying buyers and scheduling private villa tours.",
        "Offline Conversion API (CAPI) feeding actual property sales back to Meta algorithms to optimize for wealth signals.",
      ],
    },
    flagshipSnapshot: {
      title: "Interactive Video Buyer Funnel",
      caption: "High-speed mobile funnel featuring video walk-throughs, OTP verification, and instant villa tour booking.",
      image: "/images/about_pill_portrait.jpg",
    },
    snapshots: [
      {
        title: "Automated WhatsApp Concierge Script",
        description: "Conversational qualification bot sending floor plans, answering amenity queries, and securing verified meeting times.",
        image: "/images/stage_1.jpg",
        tag: "Conversational AI",
      },
      {
        title: "Real-Time Broker Dispatch & Notification",
        description: "Instant push notification to agent mobile apps containing complete lead dossiers and pre-recorded audio intros.",
        image: "/images/card_cyborg_exact.png",
        tag: "Operations",
      },
    ],
    techStack: ["Next.js", "Meta Conversions API", "WhatsApp Cloud API", "GoHighLevel", "Stripe", "Tailwind CSS"],
  },

  {
    id: "lead-3",
    slug: "multichannel-prospecting",
    title: "MULTICHANNEL PROSPECTING",
    tagline: "Cross-platform LinkedIn, email, and intent-driven lead orchestration system.",
    category: "Omnichannel Acquisition",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["LinkedIn", "Automation"],
    image: "/images/about_team_collab.jpg",
    timeline: "4 Weeks",
    client: "Enterprise Consulting Agency",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "+380%", label: "Pipeline Velocity", subtext: "From initial touch to discovery call" },
      { value: "48%", label: "LinkedIn Connection Rate", subtext: "Contextual profile engagement" },
      { value: "85+", label: "Qualified Meetings / Mo", subtext: "Directly synced to Google Calendar" },
      { value: "0", label: "Account Bans", subtext: "Strict human-behavior algorithmic limits" },
    ],
    challenge: {
      heading: "Siloed Outreach Channels Producing Conflicting Touchpoints",
      description:
        "Sales reps were messaging prospects on LinkedIn while marketing sent cold emails at the same time with disconnected messaging, confusing enterprise prospects and damaging corporate credibility.",
      bottlenecks: [
        "Disconnected tracking between LinkedIn outreach, cold emails, and website visit intent.",
        "High risk of LinkedIn account suspensions from crude extension scrapers.",
        "Absence of reverse IP lookups to identify anonymous corporate website visitors.",
      ],
    },
    solution: {
      heading: "Unified Omnichannel Orchestration Engine",
      description:
        "We built a cloud-hosted choreography platform that synchronizes LinkedIn profile visits, soft endorsements, smart delays, and follow-up emails based on prospect interactions. When a prospect views a case study, their assigned rep receives an immediate priority alert.",
      highlights: [
        "Coordinated multi-touch sequence combining LinkedIn touchpoints with email drips.",
        "Reverse-IP deanonymization identifying corporate accounts exploring pricing pages.",
        "Humanized browser cloud infrastructure protecting executive LinkedIn credentials.",
      ],
    },
    flagshipSnapshot: {
      title: "Omnichannel Journey Orchestrator",
      caption: "Visual sequence builder coordinating automated touches across email, social, and phone tasks with smart conditional branching.",
      image: "/images/about_team_collab.jpg",
    },
    snapshots: [
      {
        title: "Reverse IP Corporate Visitor Deanonymizer",
        description: "Deanonymization service matching corporate IP addresses against LinkedIn employee rosters to surface warm buying committees.",
        image: "/images/about_future_city.png",
        tag: "Data Intelligence",
      },
      {
        title: "Unified Lead Interaction Timeline",
        description: "Comprehensive CRM activity feed aggregating clicks, replies, and LinkedIn direct messages into a single view.",
        image: "/images/stacked_service_4.jpg",
        tag: "CRM Sync",
      },
    ],
    techStack: ["Node.js", "TypeScript", "Clearbit API", "Heyreach", "HubSpot", "PostgreSQL", "Next.js"],
  },

  {
    id: "lead-4",
    slug: "lead-validator-enricher",
    title: "AUTOMATED LEAD ENRICHER",
    tagline: "Real-time B2B data cleaning, verification, and enrichment engine via modern APIs.",
    category: "Data Intelligence & Enrichment",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["Data Intel", "API"],
    image: "/images/stage_4.jpg",
    timeline: "3 Weeks",
    client: "Fintech Growth Platform",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "99.8%", label: "Email Deliverability", subtext: "Zero hard bounce risk" },
      { value: "1.2s", label: "Per-Lead Enrichment Speed", subtext: "Concurrent multi-API cascade" },
      { value: "45+", label: "Data Points Populated", subtext: "Revenue, headcount, tech stack" },
      { value: "-65%", label: "Manual Research Hours", subtext: "Reps focus 100% on selling" },
    ],
    challenge: {
      heading: "Dirty CRM Data & Hours Wasted on Manual LinkedIn Scraping",
      description:
        "Sales reps were manually searching LinkedIn, company filings, and news articles to verify whether incoming leads matched ideal customer profile (ICP) criteria, bottlenecking daily sales output.",
      bottlenecks: [
        "Over 30 hours per week spent by sales development reps on manual data entry.",
        "High proportion of disposable/burner email submissions contaminating the CRM.",
        "Inaccurate firmographic attributes resulting in misrouted enterprise accounts.",
      ],
    },
    solution: {
      heading: "Waterfall Data Enrichment API Cascade",
      description:
        "Engineered an automated serverless data waterfall that triggers upon form submission. The engine queries Clay, Apollo, Hunter, and Clearbit sequentially, appending revenue estimates, tech stack signatures, and verified mobile numbers before routing to account executives.",
      highlights: [
        "Multi-source API waterfall ensuring 95%+ data match rate across B2B records.",
        "Automated domain MX record verification discarding invalid and catch-all inboxes.",
        "Real-time lead scoring assigning tier rankings (Tier 1 Enterprise vs Tier 3 SMB).",
      ],
    },
    flagshipSnapshot: {
      title: "Data Enrichment & Verification Pipeline",
      caption: "Real-time lead processing dashboard displaying API cascade hit rates, data completion percentages, and automated scoring outputs.",
      image: "/images/stage_4.jpg",
    },
    snapshots: [
      {
        title: "API Waterfall Execution Flow",
        description: "Visual logic tree demonstrating fallback lookups across multiple providers to optimize cost and data completeness.",
        image: "/images/card_3d_gem.jpg",
        tag: "Data Flow",
      },
      {
        title: "Enriched Account Record Card",
        description: "Standardized account overview presenting firmographic, technographic, and intent metrics in a clean unified view.",
        image: "/images/stage_2.jpg",
        tag: "CRM View",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Clay API", "Apollo", "ZeroBounce", "Supabase", "Tailwind CSS"],
  },

  {
    id: "lead-5",
    slug: "cro-suite",
    title: "CONVERSION OPTIMIZATION SUITE",
    tagline: "Dynamic landing page generator with multivariate testing and biometric scroll tracking.",
    category: "Conversion Rate Optimization",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["Landing Pages", "CRO"],
    image: "/images/about_innovation_team.jpg",
    timeline: "5 Weeks",
    client: "Direct-to-Consumer Wellness Brand",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "+54.2%", label: "Conversion Lift", subtext: "Measured against baseline control page" },
      { value: "0.45s", label: "Static Edge Load", subtext: "Zero cumulative layout shift" },
      { value: "12", label: "Simultaneous A/B Tests", subtext: "Automated statistical significance" },
      { value: "+32%", label: "Mobile Checkout Velocity", subtext: "Optimized thumb-friendly layout" },
    ],
    challenge: {
      heading: "Skyrocketing Ad Costs Eroding Direct-To-Consumer Margins",
      description:
        "Rising Meta and Google CPCs squeezed the client's profit margins. Their single static landing page failed to address distinct customer personas (athletes vs busy professionals), leading to low conversion rates.",
      bottlenecks: [
        "One-size-fits-all landing page failing to resonate across diverse audience segments.",
        "Client-side testing scripts causing visible flicker and slowing mobile page loads.",
        "Lack of behavioral heatmaps showing where users abandoned checkout forms.",
      ],
    },
    solution: {
      heading: "Edge-Rendered Dynamic Personalization Engine",
      description:
        "Built a modular Next.js landing page framework that intercepts URL query parameters at edge middleware, instantly serving customized headlines, hero imagery, and social proof tailored to the specific ad creative clicked.",
      highlights: [
        "Edge-based variant delivery with zero layout flicker or latency penalties.",
        "Dynamic headline and social proof matching ad hooks seamlessly.",
        "Integrated heatmaps and scroll-depth telemetry recording drop-off friction points.",
      ],
    },
    flagshipSnapshot: {
      title: "Multivariate Experimentation Dashboard",
      caption: "Real-time analytics engine visualizing variant traffic splits, conversion funnels, and Bayesian statistical confidence.",
      image: "/images/about_innovation_team.jpg",
    },
    snapshots: [
      {
        title: "Dynamic Content Middleware",
        description: "Edge router mapping incoming campaign UTM parameters to targeted headline copy and testimonial carousels.",
        image: "/images/stage_1.jpg",
        tag: "Edge Architecture",
      },
      {
        title: "Session Replay & Friction Heatmaps",
        description: "Privacy-compliant user interaction maps highlighting form field drop-offs and rage-clicks.",
        image: "/images/card_3d_sphere.jpg",
        tag: "Analytics",
      },
    ],
    techStack: ["Next.js App Router", "Vercel Edge Middleware", "Tailwind CSS", "PostHog", "TypeScript"],
  },

  {
    id: "lead-6",
    slug: "inbound-growth-funnel",
    title: "ENTERPRISE INBOUND FUNNEL",
    tagline: "High-converting Google Ads search landing pages with automated calendar qualification.",
    category: "Inbound Search Acquisition",
    categoryTag: "LEAD GENERATION",
    year: "[ 2026 ]",
    tags: ["Google Ads", "Tracking"],
    image: "/images/card_3d_gem.jpg",
    timeline: "4 Weeks",
    client: "Corporate Restructuring Firm",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "10/10", label: "Google Ad Quality Score", subtext: "Maximized ad rank at minimal CPC" },
      { value: "-42%", label: "Customer Acquisition Cost", subtext: "Optimized intent matching" },
      { value: "68%", label: "Form-to-Meeting Rate", subtext: "Zero-friction scheduling widget" },
      { value: "3.2x", label: "Pipeline Return Ratio", subtext: "High-value corporate retainers" },
    ],
    challenge: {
      heading: "Expensive Search Clicks Wasted on Unfocused Pages",
      description:
        "The firm was paying over $80 per click for high-intent corporate restructuring keywords, but directing traffic to their corporate homepage where visitors had to dig through complex menus to find contact info.",
      bottlenecks: [
        "Poor Google Ads quality score resulting in inflated CPCs and low ad positioning.",
        "Complex 12-field contact form frightening away busy C-level executives.",
        "No automated calendar scheduling, resulting in a 48-hour email tag game to book consultations.",
      ],
    },
    solution: {
      heading: "Dedicated Keyword-Matched Funnels with Instant Scheduling",
      description:
        "Axtrait developed laser-focused, single-objective landing pages matching specific search queries. Replaced cumbersome contact forms with a frictionless 2-step qualification flow followed by direct calendar selection.",
      highlights: [
        "1:1 keyword-to-page alignment delivering perfect 10/10 Google Ad Quality Scores.",
        "Interactive consultation selector capturing essential case facts in 45 seconds.",
        "Automated calendar booking synced with partners' Outlook calendars and Zoom links.",
      ],
    },
    flagshipSnapshot: {
      title: "Inbound Conversion Hub",
      caption: "High-trust corporate landing page featuring credential badges, client testimonials, and embedded interactive calendar booking.",
      image: "/images/card_3d_gem.jpg",
    },
    snapshots: [
      {
        title: "Interactive Case Qualification Step-Form",
        description: "Progressive multi-step questionnaire collecting company revenue, debt brackets, and urgency without overwhelm.",
        image: "/images/about_arch_main.jpg",
        tag: "Frictionless UX",
      },
      {
        title: "Automated Partner Calendar Dispatch",
        description: "Instant calendar reservation generating unique secure conference rooms and automated calendar reminders.",
        image: "/images/stage_3.jpg",
        tag: "Scheduling",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Ads CAPI", "Calendly API", "HubSpot"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. CRM SOLUTIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "crm-1",
    slug: "custom-enterprise-crm",
    title: "CUSTOM ENTERPRISE CRM",
    tagline: "Tailored operations and client relationship system replacing fragmented legacy software.",
    category: "Enterprise CRM Systems",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Zoho Books", "API"],
    image: "/images/stacked_service_3.jpg",
    timeline: "8 Weeks",
    client: "Commercial Logistics Provider",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "100%", label: "Centralized Data Visibility", subtext: "Zero external spreadsheets" },
      { value: "-75%", label: "Quote Generation Time", subtext: "Automated dynamic rate tables" },
      { value: "450+", label: "Daily Active Team Members", subtext: "Role-based mobile and desktop access" },
      { value: "$180k/yr", label: "Saved in SaaS Licensing", subtext: "Replaced 5 disconnected tools" },
    ],
    challenge: {
      heading: "Fragmented Spreadsheets & Outdated Invoice Syncing",
      description:
        "Operations teams, dispatchers, and billing accountants were maintaining separate Google Sheets, leading to conflicting inventory counts, missed billing dates, and lost customer histories.",
      bottlenecks: [
        "Manual copy-pasting of freight contracts between operations and accounting software.",
        "Zero real-time visibility for account managers regarding outstanding payment milestones.",
        "Lack of granular security controls exposing confidential margin calculations to junior staff.",
      ],
    },
    solution: {
      heading: "Unified Ground-Up Enterprise CRM & Invoicing Engine",
      description:
        "Axtrait engineered a dedicated CRM platform with unified customer records, dynamic rate calculation modules, automated contract generation, and direct two-way synchronization with Zoho Books and bank feeds.",
      highlights: [
        "Single pane of glass unifying customer conversations, contracts, shipments, and billing.",
        "Automated PDF quote generator populating freight specifications and terms in 15 seconds.",
        "Bi-directional API sync keeping customer balances and invoices aligned with zero human error.",
      ],
    },
    flagshipSnapshot: {
      title: "Enterprise Deal & Operations Console",
      caption: "Unified command center featuring deal pipeline stages, revenue forecasts, dispatch statuses, and automated task queues.",
      image: "/images/stacked_service_3.jpg",
    },
    snapshots: [
      {
        title: "Dynamic Rate Calculator & Quote Engine",
        description: "Interactive quoting tool factoring mileage, fuel surcharges, and volume discounts into standardized PDF agreements.",
        image: "/images/about_future_city.png",
        tag: "Quoting Engine",
      },
      {
        title: "Automated Ledger Synchronization",
        description: "Real-time webhook sync ensuring invoices created in the CRM mirror in corporate accounting software.",
        image: "/images/stage_4.jpg",
        tag: "Accounting API",
      },
    ],
    techStack: ["Next.js 15", "Node.js", "PostgreSQL", "Prisma", "Zoho API", "Tailwind CSS", "Docker"],
  },

  {
    id: "crm-2",
    slug: "automated-sales-pipeline",
    title: "AUTOMATED SALES PIPELINE",
    tagline: "Stage-triggered CRM automation system with webhook routing and SLA breach monitors.",
    category: "Sales Automation & Workflows",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Workflow", "Webhooks"],
    image: "/images/stage_2.jpg",
    timeline: "5 Weeks",
    client: "B2B Medical Device Distributor",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "0", label: "Dropped Lead Inquiries", subtext: "Automated escalation triggers" },
      { value: "+215%", label: "Rep Follow-Up Consistency", subtext: "Automated task queue generation" },
      { value: "<2h", label: "Average Deal Stage Duration", subtext: "From lead intake to quote issued" },
      { value: "98.5%", label: "Data Entry Accuracy", subtext: "Automated field validation" },
    ],
    challenge: {
      heading: "Deals Stagnating in Silos & Inconsistent Sales Follow-Ups",
      description:
        "High-value hospital inquiries were getting stuck in sales reps' inboxes for days without follow-up, causing prospects to purchase from competitor distributors with faster turnaround times.",
      bottlenecks: [
        "No visibility into stalled deals until monthly pipeline review meetings.",
        "Reps neglecting to log phone call notes or schedule mandatory follow-up dates.",
        "Manual approval chains delaying custom discounted pricing by up to 5 business days.",
      ],
    },
    solution: {
      heading: "Event-Driven Deal Orchestration with SLA Timers",
      description:
        "Designed an automated sales deal management architecture that listens for deal stage events, enforces maximum time limits per stage, sends instant Slack escalation alerts for delayed deals, and pre-populates follow-up emails.",
      highlights: [
        "Automated SLA timers warning managers before deals breach response deadlines.",
        "One-click mobile approval buttons allowing directors to approve discount tiers via Slack.",
        "Automated drip sequences triggered when prospects move between evaluation stages.",
      ],
    },
    flagshipSnapshot: {
      title: "Interactive Kanban Pipeline & SLA Sentinel",
      caption: "Visual sales pipeline featuring real-time deal values, automated health indicators, and instant stage progression actions.",
      image: "/images/stage_2.jpg",
    },
    snapshots: [
      {
        title: "Automated Slack Deal Alerts & Approvals",
        description: "Interactive Slack bot dispatching deal milestones, urgent follow-up notifications, and executive margin sign-offs.",
        image: "/images/about_team_collab.jpg",
        tag: "Slack Bot",
      },
      {
        title: "Deal Velocity Analytics",
        description: "Comparative reporting showing average conversion speed and bottleneck stages across individual sales reps.",
        image: "/images/card_3d_gem.jpg",
        tag: "Analytics",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Slack Bolt API", "Webhooks", "PostgreSQL", "Tailwind CSS"],
  },

  {
    id: "crm-3",
    slug: "real-estate-broker-crm",
    title: "REAL ESTATE BROKER CRM",
    tagline: "Multi-agent brokerage CRM with automated listing matching and commission tracking.",
    category: "Real Estate Brokerage Systems",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Property Hub", "Cloud"],
    image: "/images/about_arch_main.jpg",
    timeline: "7 Weeks",
    client: "Metropolitan Brokerage Network (120+ Agents)",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "120+", label: "Active Brokers Managed", subtext: "Individual agent workspaces & shared inventory" },
      { value: "100%", label: "Commission Transparency", subtext: "Automated split calculations & payouts" },
      { value: "<30s", label: "Buyer-Property Match", subtext: "Instant algorithmic recommendation" },
      { value: "+44%", label: "Repeat Investor Referrals", subtext: "Automated annual portfolio reviews" },
    ],
    challenge: {
      heading: "Agent Friction, Listing Duplication, and Inaccurate Commission Splits",
      description:
        "With over 120 agents competing for exclusive property mandates, agents were accidentally pitching the same off-market listings to the same buyers, causing disputes and embarrassing double-brokering incidents.",
      bottlenecks: [
        "Duplicate buyer entries in shared spreadsheets sparking territorial agent arguments.",
        "Complex manual commission split calculations causing accounting disputes each month.",
        "Zero automated property matching when new high-value penthouse listings were signed.",
      ],
    },
    solution: {
      heading: "Intelligent Multi-Tenant Brokerage Operating System",
      description:
        "Engineered an exclusive broker platform featuring automated buyer-to-listing algorithmic matching, strict listing ownership timestamps, one-click commission split calculators, and automated client portfolio reviews.",
      highlights: [
        "Algorithmic listing matcher notifying agents within 3 seconds when new listings fit registered buyer criteria.",
        "Automated commission distribution engine generating approved payout vouchers for accounting.",
        "Mobile-optimized listing repository with digital watermark security on private brochures.",
      ],
    },
    flagshipSnapshot: {
      title: "Broker Portal & Real-Time Property Matcher",
      caption: "Interactive agent interface showcasing active buyer demand vs off-market inventory, split ratios, and verified deal contracts.",
      image: "/images/about_arch_main.jpg",
    },
    snapshots: [
      {
        title: "Automated Buyer-Listing Match Algorithm",
        description: "Vector search engine cross-referencing buyer budget, preferred neighborhoods, and square footage requirements against new property intakes.",
        image: "/images/about_pill_portrait.jpg",
        tag: "Vector Search",
      },
      {
        title: "Commission Split & Settlement Vault",
        description: "Automated ledger calculating brokerage splits, agent fees, and tax deductions with downloadable PDF vouchers.",
        image: "/images/stage_1.jpg",
        tag: "Settlement",
      },
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "PostgreSQL", "Supabase Auth", "Tailwind CSS", "Prisma"],
  },

  {
    id: "crm-4",
    slug: "whatsapp-crm-gateway",
    title: "WHATSAPP CRM GATEWAY",
    tagline: "Omnichannel WhatsApp conversational gateway connecting web leads directly to sales teams.",
    category: "Messaging & Conversational CRM",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Meta API", "Support"],
    image: "/images/about_future_city.png",
    timeline: "4 Weeks",
    client: "Global Relocation & Luxury Concierge",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "<15s", label: "First Contact Latency", subtext: "Automated conversational greeting" },
      { value: "91.2%", label: "Client Reply Rate", subtext: "WhatsApp vs 18% standard email" },
      { value: "10,000+", label: "Conversations Managed / Mo", subtext: "Concurrent multi-agent inbox" },
      { value: "100%", label: "Conversation Archiving", subtext: "Compliant chat logs stored in CRM" },
    ],
    challenge: {
      heading: "Email Outreach Ignored While WhatsApp Chats Remained Untracked",
      description:
        "International clients rarely checked their emails, preferring instant messaging on WhatsApp. However, sales agents were conducting business on personal mobile phones, meaning conversations were lost whenever agents resigned.",
      bottlenecks: [
        "Zero company oversight into deals negotiated over personal agent WhatsApp chats.",
        "Customer inquiries going unanswered for hours over weekends and international holidays.",
        "Inability to broadcast segmented announcements or property releases to opted-in VIPs.",
      ],
    },
    solution: {
      heading: "Official Meta WhatsApp Business Cloud Gateway & Unified Inbox",
      description:
        "Implemented a centralized multi-agent WhatsApp platform powered by Meta’s Cloud API. Incoming website leads trigger an instant AI assistant that collects requirements and seamlessly hands off conversations to designated available human advisors.",
      highlights: [
        "Centralized team inbox allowing multiple agents to respond from a single verified business number.",
        "Zero-latency automated greetings, interactive quick-reply buttons, and rich media brochure delivery.",
        "Full conversation history and customer tags synced directly to the master CRM database.",
      ],
    },
    flagshipSnapshot: {
      title: "Unified Team WhatsApp Inbox & Dispatcher",
      caption: "Multi-agent conversational dashboard with real-time customer dossier sidebar, quick-reply macros, and instant agent handoff controls.",
      image: "/images/about_future_city.png",
    },
    snapshots: [
      {
        title: "Conversational Flow Builder & Interactive Menus",
        description: "Visual logic flow routing incoming chats based on customer language, budget range, and immediate urgency.",
        image: "/images/card_cyborg_exact.png",
        tag: "Flow Builder",
      },
      {
        title: "CRM Customer Profile Sidebar",
        description: "Live context panel displaying customer deal history, lifetime spend, and past support tickets inside the chat window.",
        image: "/images/stage_4.jpg",
        tag: "Context Engine",
      },
    ],
    techStack: ["Next.js", "Meta WhatsApp Cloud API", "Node.js", "WebSockets", "Redis", "Tailwind CSS"],
  },

  {
    id: "crm-5",
    slug: "invoicing-billing-tracker",
    title: "INVOICING & BILLING TRACKER",
    tagline: "Automated recurring retainer billing, payment reconciliation, and milestone invoicing.",
    category: "Financial Workflows & Invoicing",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Finance", "Automation"],
    image: "/images/card_3d_sphere.jpg",
    timeline: "5 Weeks",
    client: "Commercial Engineering Consultancy",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "0 Days", label: "Billing Reconciliation Lag", subtext: "Automated bank feed matching" },
      { value: "+32%", label: "On-Time Payment Rate", subtext: "Automated SMS/Email reminders" },
      { value: "$2.8M", label: "Monthly Retainers Processed", subtext: "Automated multi-currency Stripe billing" },
      { value: "100%", label: "Audit-Ready Reports", subtext: "Automated tax & revenue recognition" },
    ],
    challenge: {
      heading: "Late Client Payments, Manual Reminders, and Revenue Recognition Chaos",
      description:
        "The firm relied on manual monthly invoices created in Word and emailed by hand. Chasing late payments consumed 15 hours per week of senior partners' time, while revenue recognition across milestone contracts was inaccurate.",
      bottlenecks: [
        "Invoices regularly sent 2 to 3 weeks past scheduled milestone completion dates.",
        "Partners embarrassed to chase unpaid retainers directly over the phone.",
        "Manual currency conversions creating balance discrepancies on international projects.",
      ],
    },
    solution: {
      heading: "Automated Milestone Billing & Escrow Gateway",
      description:
        "Engineered an automated billing portal that issues verified milestone invoices the moment project deliverables are marked complete. Features branded customer payment links supporting Apple Pay, credit cards, and instant bank wires.",
      highlights: [
        "Milestone-triggered invoice generation with automated cryptographic PDF signing.",
        "Gentle automated escalation sequences for overdue invoices with payment portal links.",
        "Real-time bank ledger reconciliation updating project profitability margins instantaneously.",
      ],
    },
    flagshipSnapshot: {
      title: "Financial Billing Command & Milestone Radar",
      caption: "Interactive revenue dashboard displaying paid, overdue, and upcoming milestone invoices with automated collection status.",
      image: "/images/card_3d_sphere.jpg",
    },
    snapshots: [
      {
        title: "Self-Service Client Payment Portal",
        description: "Secure branded customer portal where enterprise clients review itemized deliverables and pay via one-click wire or card.",
        image: "/images/stage_2.jpg",
        tag: "Customer Portal",
      },
      {
        title: "Automated Dunning & Escalation Rules",
        description: "Configurable reminder schedule delivering courteous multi-channel reminders before payments become delinquent.",
        image: "/images/about_arch_main.jpg",
        tag: "Automation",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Stripe Billing API", "PostgreSQL", "Tailwind CSS", "Prisma"],
  },

  {
    id: "crm-6",
    slug: "support-dispatch-system",
    title: "SUPPORT DISPATCH SYSTEM",
    tagline: "High-priority ticket routing, SLA resolution tracking, and technician mobile dispatch.",
    category: "Operations & Ticket Management",
    categoryTag: "CRM SOLUTIONS",
    year: "[ 2026 ]",
    tags: ["Helpdesk", "Operations"],
    image: "/images/card_3d_robot.jpg",
    timeline: "6 Weeks",
    client: "Critical Industrial Facility Support",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "4.2m", label: "Average Critical Dispatch", subtext: "Down from 45 minutes manually" },
      { value: "99.4%", label: "SLA Compliance Rate", subtext: "Guaranteed tier-1 response times" },
      { value: "35k+", label: "Service Tickets Handled", subtext: "Automated triage & categorization" },
      { value: "99.99%", label: "Uptime on Dispatch Engine", subtext: "Redundant cloud failover" },
    ],
    challenge: {
      heading: "Chaotic Phone Dispatches & Missed SLA Penalties",
      description:
        "Industrial plant managers experienced critical machinery failures and had to call a busy call center. Dispatches were delayed, technicians arrived without the correct replacement parts, and contractual SLA breach fines were mounting.",
      bottlenecks: [
        "No digital record of emergency requests during high-volume outage spikes.",
        "Field technicians dispatched without visibility into equipment service history.",
        "Manual telephone reporting causing catastrophic 45-minute response delays.",
      ],
    },
    solution: {
      heading: "Automated Ticket Triage & Geolocation Dispatch System",
      description:
        "Developed a mission-critical support desk dispatch platform that automatically ingests sensor error logs and emergency client portal tickets. Dispatches the closest qualified technician via GPS proximity while provisioning equipment manuals to their mobile device.",
      highlights: [
        "Algorithmic geographic technician dispatch matching skill requirements with travel time.",
        "Mobile technician web application with offline schematic access and digital customer sign-off.",
        "Live SLA countdown clocks notifying regional directors 15 minutes prior to breach thresholds.",
      ],
    },
    flagshipSnapshot: {
      title: "Real-Time Emergency Dispatch Command Center",
      caption: "Geospatial operations map displaying live technician locations, incident severity tiers, and SLA resolution timers.",
      image: "/images/card_3d_robot.jpg",
    },
    snapshots: [
      {
        title: "Field Technician Mobile Companion",
        description: "Touch-optimized mobile interface for field engineers showing job details, diagnostic checklists, and digital signature capture.",
        image: "/images/about_innovation_team.jpg",
        tag: "Mobile App",
      },
      {
        title: "SLA Resolution Countdown Radar",
        description: "Mission-critical timer monitoring open incident milestones with automated escalation to on-call senior engineers.",
        image: "/images/about_ai_tech.jpg",
        tag: "Monitoring",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Mapbox GL", "PostgreSQL", "WebSockets", "Docker", "Tailwind CSS"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. AI & AUTOMATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "ai-1",
    slug: "autonomous-support-agent",
    title: "AUTONOMOUS SUPPORT AGENT",
    tagline: "Fine-tuned enterprise LLM customer support agent with live database actions and human escalation.",
    category: "Conversational AI Systems",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["LLM", "Chatbot"],
    image: "/images/about_ai_tech.jpg",
    timeline: "6 Weeks",
    client: "Global FinTech Service Provider",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "78%", label: "Autonomous Resolution Rate", subtext: "Zero human intervention required" },
      { value: "0.8s", label: "Average Response Time", subtext: "Sub-second streaming token output" },
      { value: "4.8/5", label: "User CSAT Rating", subtext: "Empathetic, verified accurate responses" },
      { value: "$240k", label: "Annual Support Payroll Saved", subtext: "Scale without hiring additional reps" },
    ],
    challenge: {
      heading: "Overwhelmed Tier-1 Support & 14-Hour Resolution Delays",
      description:
        "The client’s global user base flooded their support desk with repetitive questions regarding account verification, payment status, and wire limits. Live agents were exhausted, while high-value enterprise accounts waited hours for basic answers.",
      bottlenecks: [
        "Repetitive Tier-1 tickets occupying 80% of senior support agents' working hours.",
        "Off-the-shelf chatbots hallucinating inaccurate financial policy answers.",
        "Lack of direct database integration forcing bots to offer useless generic help links.",
      ],
    },
    solution: {
      heading: "RAG-Powered Autonomous Agent with Guardrailed Function Calling",
      description:
        "Axtrait developed a custom autonomous support agent combining Retrieval-Augmented Generation (RAG) over the company's verified documentation with strictly validated database tool actions (e.g. check wire status, reissue receipts, update billing).",
      highlights: [
        "Strict hallucination guardrails preventing inaccurate financial claims or policy breaches.",
        "Secure function calling enabling the AI to resolve real account requests inside the chat.",
        "Seamless sentiment-triggered human handoff when complex or distressed users are detected.",
      ],
    },
    flagshipSnapshot: {
      title: "Autonomous Agent Supervision Console",
      caption: "Real-time AI monitoring deck displaying streaming customer chats, tool execution logs, confidence scores, and instant takeover switches.",
      image: "/images/about_ai_tech.jpg",
    },
    snapshots: [
      {
        title: "Vector Knowledge Base Retrieval Engine",
        description: "Semantic chunking pipeline querying vector embeddings in Milvus with sub-20ms latency to provide contextual answers.",
        image: "/images/card_cyborg_exact.png",
        tag: "Vector RAG",
      },
      {
        title: "Deterministic Function Calling Gateway",
        description: "Sandboxed API gateway validating parameters before the AI executes balance checks or ticket modifications.",
        image: "/images/stage_1.jpg",
        tag: "Tool Actions",
      },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI GPT-4o", "LangChain", "Milvus Vector DB", "Tailwind CSS"],
  },

  {
    id: "ai-2",
    slug: "document-invoice-parser",
    title: "SMART DOCUMENT & INVOICE PARSER",
    tagline: "Intelligent optical document understanding pipeline with automated accounting ledger ingestion.",
    category: "Document Intelligence & OCR",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["OCR", "Automation"],
    image: "/images/stacked_service_4.jpg",
    timeline: "5 Weeks",
    client: "International Import/Export Corporation",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "99.7%", label: "Field Extraction Precision", subtext: "Line-item, tax, and total parsing" },
      { value: "1.8s", label: "Per-Document Parse Speed", subtext: "Handles skewed mobile phone scans" },
      { value: "15,000+", label: "Invoices Processed Monthly", subtext: "Zero manual data entry required" },
      { value: "-88%", label: "Accounts Payable Processing Time", subtext: "Instant three-way matching" },
    ],
    challenge: {
      heading: "Drowning in Thousands of Multilingual PDF Bills & Invoices",
      description:
        "The company's finance team was manually typing thousands of foreign supplier invoices into accounting software each month. Typos in IBANs and amounts led to payment delays and strained vendor relationships.",
      bottlenecks: [
        "Inconsistent supplier invoice layouts making traditional rule-based OCR templates completely obsolete.",
        "Manual three-way matching against purchase orders taking 4 to 5 business days per batch.",
        "Overlooked billing duplicates costing the company tens of thousands annually.",
      ],
    },
    solution: {
      heading: "Vision-Language Document Understanding Pipeline",
      description:
        "Engineered an automated parsing engine powered by multimodal vision-language models. The system extracts line items, VAT numbers, currency codes, and vendor details from PDF files and smartphone camera photos, performing automated three-way reconciliation against ERP purchase orders.",
      highlights: [
        "Zero-template layout adaptability parsing unexpected vendor formats effortlessly.",
        "Automated duplicate detection flagging suspicious or previously processed vendor invoices.",
        "One-click ERP ingestion populating line items and purchase order numbers with zero human typing.",
      ],
    },
    flagshipSnapshot: {
      title: "Document Ingestion & Extraction Review Studio",
      caption: "Side-by-side verification interface highlighting parsed bounding boxes, line-item totals, and confidence verification badges.",
      image: "/images/stacked_service_4.jpg",
    },
    snapshots: [
      {
        title: "Automated Three-Way Reconciliation",
        description: "Reconciliation engine comparing invoice totals against original purchase orders and warehouse receiving slips.",
        image: "/images/stage_4.jpg",
        tag: "Reconciliation",
      },
      {
        title: "ERP Export & Audit Trail",
        description: "Cryptographically signed batch ledger export pushing validated transactions into corporate ERP databases.",
        image: "/images/card_3d_gem.jpg",
        tag: "ERP Integration",
      },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "Tesseract OCR", "Vision LLM", "PostgreSQL", "Tailwind CSS"],
  },

  {
    id: "ai-3",
    slug: "ai-lead-qualifier",
    title: "AI LEAD QUALIFIER BOT",
    tagline: "Conversational WhatsApp and web lead qualifier conducting natural buyer discovery.",
    category: "AI Sales Qualification",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["WhatsApp AI", "CRM"],
    image: "/images/card_cyborg_exact.png",
    timeline: "4 Weeks",
    client: "High-Ticket Advisory & Wealth Firm",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "92%", label: "Lead Qualification Completion", subtext: "Natural back-and-forth dialogue" },
      { value: "<45s", label: "Inquiry to Booked Call", subtext: "Instant calendar link on qualification" },
      { value: "3.4x", label: "Qualified Pipeline Growth", subtext: "Captures after-hours inquiries" },
      { value: "100%", label: "CRM Field Population", subtext: "Zero empty contact records" },
    ],
    challenge: {
      heading: "Weekend Leads Cold by Monday Morning",
      description:
        "Over 45% of inbound advisory inquiries arrived on evenings and weekends. By the time human advisors followed up on Monday, prospects had already scheduled consultations with responsive competitors.",
      bottlenecks: [
        "Inquiries left unaddressed for up to 60 hours over weekends.",
        "Static forms asking 10 questions experiencing high bounce rates.",
        "Advisors spending Monday mornings playing telephone tag rather than conducting advisory calls.",
      ],
    },
    solution: {
      heading: "24/7 Conversational AI Qualifier & Calendar Scheduler",
      description:
        "Deployed an empathetic, highly trained AI agent that greets incoming leads on WhatsApp and website widgets within 15 seconds. It discovers client net worth, investment objectives, and urgency in a natural conversational style, then books a calendar consultation with the ideal specialist.",
      highlights: [
        "Conversational discovery gathering complex financial requirements without boring forms.",
        "Instant calendar booking respecting advisor availability, buffers, and time zones.",
        "Structured summary generation formatting call notes directly into the CRM deal record.",
      ],
    },
    flagshipSnapshot: {
      title: "Conversational Intelligence & Lead Scoreboard",
      caption: "Live monitoring console displaying real-time dialogue streams, qualification scoring algorithms, and auto-scheduled discovery calls.",
      image: "/images/card_cyborg_exact.png",
    },
    snapshots: [
      {
        title: "Conversational Intent Analysis",
        description: "Semantic analysis extracting investment horizons, budget thresholds, and urgency signals during conversation.",
        image: "/images/about_ai_tech.jpg",
        tag: "NLP Engine",
      },
      {
        title: "Executive Lead Dossier Generation",
        description: "Automated executive summary emailed to assigned advisors 10 minutes prior to scheduled discovery calls.",
        image: "/images/stage_1.jpg",
        tag: "Dossier Engine",
      },
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI GPT-4o", "WhatsApp Cloud API", "HubSpot", "Tailwind CSS"],
  },

  {
    id: "ai-4",
    slug: "realtime-data-sync",
    title: "REAL-TIME DATA SYNC PIPELINE",
    tagline: "Event-driven webhook engine synchronizing multi-database state across enterprise microservices.",
    category: "Event-Driven Architecture",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["Zapier", "Webhooks"],
    image: "/images/about_3d_torus.jpg",
    timeline: "5 Weeks",
    client: "National Healthtech Service Network",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "sub-50ms", label: "Cross-System Sync Latency", subtext: "Instant record consistency" },
      { value: "2.4M+", label: "Daily Events Processed", subtext: "Zero dropped webhook payloads" },
      { value: "99.999%", label: "Message Delivery Guarantee", subtext: "Idempotent dead-letter queue" },
      { value: "0", label: "Manual Data Correction Incidents", subtext: "Automated conflict resolution" },
    ],
    challenge: {
      heading: "Data Desynchronization Between Legacy EHR and Modern Portals",
      description:
        "The healthcare provider experienced painful data lag between their on-premise Electronic Health Record (EHR) database and their new patient-facing mobile application, causing prescription and appointment conflicts.",
      bottlenecks: [
        "Batch synchronization running only once every 6 hours, leading to double-booked doctors.",
        "Webhook timeouts causing silent failures and un-synced patient records.",
        "Absence of idempotent event processing resulting in duplicate insurance billings.",
      ],
    },
    solution: {
      heading: "Idempotent Event Mesh with Dead-Letter Auto-Retry",
      description:
        "Axtrait engineered a high-throughput event processing pipeline utilizing Apache Kafka and Redis streams. Every patient update or appointment change is emitted as an immutable event, deduplicated, and delivered reliably to all consumer services within 50 milliseconds.",
      highlights: [
        "Zero data loss architecture backed by distributed queues and dead-letter monitoring.",
        "Automatic conflict resolution ensuring latest verified medical timestamps take precedence.",
        "End-to-end cryptographic audit trail recording every state modification for HIPAA compliance.",
      ],
    },
    flagshipSnapshot: {
      title: "Real-Time Event Stream Monitor & Telemetry",
      caption: "High-throughput pipeline visualizer displaying incoming event rates, queue depth, consumer lag, and replay triggers.",
      image: "/images/about_3d_torus.jpg",
    },
    snapshots: [
      {
        title: "Dead-Letter Queue & Payload Replayer",
        description: "Visual administration console allowing engineers to inspect failed payloads, modify schemas, and replay failed events with one click.",
        image: "/images/stage_2.jpg",
        tag: "Failover Engine",
      },
      {
        title: "Cryptographic Audit Ledger",
        description: "Tamper-evident log storing SHA-256 signatures of state transitions to ensure strict regulatory compliance.",
        image: "/images/card_3d_sphere.jpg",
        tag: "Compliance",
      },
    ],
    techStack: ["Node.js", "TypeScript", "Redis Streams", "Docker", "PostgreSQL", "Tailwind CSS", "Prisma"],
  },

  {
    id: "ai-5",
    slug: "predictive-analytics-bot",
    title: "PREDICTIVE ANALYTICS BOT",
    tagline: "Statistical forecasting model predicting customer churn and inventory restocking spikes.",
    category: "Machine Learning & Forecasting",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["Python", "AI Engine"],
    image: "/images/stage_1.jpg",
    timeline: "7 Weeks",
    client: "Multi-Location Retail Franchise",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "94.2%", label: "Forecast Accuracy", subtext: "30-day inventory demand modeling" },
      { value: "-28%", label: "Overstock Holding Costs", subtext: "Optimized warehouse capital" },
      { value: "4.1x", label: "Identification of Churn Risks", subtext: "Triggered proactive retention offers" },
      { value: "$410k", label: "Direct Annual Profit Recaptured", subtext: "Minimized stockouts & cancellations" },
    ],
    challenge: {
      heading: "Costly Stockouts & Unpredictable Customer Churn",
      description:
        "Franchise store managers relied on intuition to order inventory, resulting in sold-out popular items while slow-moving stock gathered dust in regional warehouses. Meanwhile, valuable corporate accounts were quietly slipping away unnoticed.",
      bottlenecks: [
        "Frequent stockouts during peak promotional weekends causing lost revenues.",
        "Over $600,000 in capital tied up in slow-moving warehouse inventory.",
        "No early warning indicators when longtime repeat customers began declining purchase frequency.",
      ],
    },
    solution: {
      heading: "Automated Predictive Forecasting & Churn Alert Sentinel",
      description:
        "Built a predictive analytics engine that trains on 5 years of historical transaction data, seasonal weather trends, and marketing calendar inputs. Generates automated weekly restocking recommendations and alerts account managers when clients display churn indicators.",
      highlights: [
        "Time-series demand forecasting incorporating seasonality, holidays, and marketing promotions.",
        "Automated churn detection flagging declining order velocity 60 days before contract renewal.",
        "Executive weekly digest delivered every Monday morning to store directors and procurement teams.",
      ],
    },
    flagshipSnapshot: {
      title: "Predictive Inventory & Churn Telemetry Deck",
      caption: "Interactive forecasting platform showing predicted demand curves, confidence intervals, and automated supplier reorder triggers.",
      image: "/images/stage_1.jpg",
    },
    snapshots: [
      {
        title: "Automated Supplier Reorder Engine",
        description: "Automated logic generating pre-filled purchase orders dispatched to suppliers when inventory drops below safety thresholds.",
        image: "/images/about_future_city.png",
        tag: "Procurement",
      },
      {
        title: "Client Health & Churn Risk Matrix",
        description: "Scatter plot categorizing enterprise accounts by lifetime value and engagement decay to prioritize retention calls.",
        image: "/images/card_3d_gem.jpg",
        tag: "Retention",
      },
    ],
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "Scikit-Learn", "PostgreSQL", "Tailwind CSS"],
  },

  {
    id: "ai-6",
    slug: "ai-campaign-generator",
    title: "AI CAMPAIGN GENERATOR",
    tagline: "Automated marketing copy and creative asset pipeline generating branded social variations.",
    category: "Generative AI & Marketing",
    categoryTag: "AI & AUTOMATION",
    year: "[ 2026 ]",
    tags: ["OpenAI", "Media"],
    image: "/images/Hero%20card%201.png",
    timeline: "4 Weeks",
    client: "Performance Marketing Agency",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "50+", label: "Ad Variations / Minute", subtext: "Multi-format copy & banner generation" },
      { value: "-70%", label: "Creative Production Overhead", subtext: "Faster sprint iteration cycles" },
      { value: "+42%", label: "Average Click-Through Rate", subtext: "Hyper-relevant angle testing" },
      { value: "100%", label: "Brand Tone Compliance", subtext: "Trained on brand guidelines" },
    ],
    challenge: {
      heading: "Creative Fatigue & Slow Turnaround for High-Velocity Ad Testing",
      description:
        "Performance media buyers needed to test 50+ new ad angles weekly across TikTok, Meta, and LinkedIn to combat creative fatigue. The design team was swamped with mundane resizing and slight copy tweaks, delaying client launch dates.",
      bottlenecks: [
        "Creative production turnaround lagging behind media budget spend capabilities.",
        "Copywriters burning out writing 40 minor variations of the same headline.",
        "Junior staff introducing typos and off-brand phrasing in rushed campaign launches.",
      ],
    },
    solution: {
      heading: "Programmatic Creative Generator with Brand Guideline Guardrails",
      description:
        "Engineered an automated asset studio where media buyers input target audiences and core product value props. The platform generates 50+ compliance-verified ad headlines, body hooks, and auto-composited social card images in seconds, ready for export into Meta Ads Manager.",
      highlights: [
        "Automated angle generator exploring 10 distinct psychological buyer motivations.",
        "Brand tone classifier reviewing generated copy against strict prohibited keyword lists.",
        "Batch CSV and visual asset export pre-formatted for direct upload into advertising managers.",
      ],
    },
    flagshipSnapshot: {
      title: "Generative Creative Studio & Angle Matrix",
      caption: "Creative studio workspace displaying generated visual ad cards, headline variations, and estimated engagement scores.",
      image: "/images/Hero%20card%201.png",
    },
    snapshots: [
      {
        title: "Multi-Platform Asset Formatter",
        description: "Instant aspect ratio reflow optimizing creative visuals for 9:16 vertical stories, 1:1 feeds, and 16:9 desktop banners.",
        image: "/images/about_innovation_team.jpg",
        tag: "Visual Engine",
      },
      {
        title: "Compliance & Tone Safety Check",
        description: "Automated scan ensuring claims comply with FTC and advertising network editorial guidelines prior to publication.",
        image: "/images/card_cyborg_exact.png",
        tag: "Compliance",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "OpenAI API", "Canvas API", "Tailwind CSS", "PostgreSQL"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. SAAS DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: "saas-1",
    slug: "perky-digital-loyalty",
    title: "PERKY DIGITAL LOYALTY",
    tagline: "Apple & Google Wallet digital stamp cards with automated push notification triggers.",
    category: "Retail Tech & Loyalty SaaS",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Next.js", "NextGen"],
    image: "/images/Hero%20card%202.png",
    timeline: "8 Weeks",
    client: "Hospitality & Specialty Retail Network",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "480k+", label: "Active Mobile Passes Issued", subtext: "Zero mobile app download required" },
      { value: "68%", label: "Push Notification Read Rate", subtext: "Delivered directly to mobile lock screens" },
      { value: "+34.5%", label: "Repeat Store Visits", subtext: "Automated proximity push triggers" },
      { value: "99.98%", label: "Pass Generation Uptime", subtext: "Instant pass signing on Apple & Google" },
    ],
    challenge: {
      heading: "Paper Punch Cards Thrown Away & Slow App Installs",
      description:
        "Restaurants and boutique retailers were losing customers to paper stamp cards that were forgotten or lost. Custom mobile apps had an 88% bounce rate at POS registers because customers refused to wait 3 minutes to download an app in line.",
      bottlenecks: [
        "Paper loyalty cards providing zero customer data or re-marketing contact information.",
        "Custom mobile apps suffering from high abandonment and massive maintenance costs across iOS and Android.",
        "Inability to send time-sensitive promotions to foot traffic near retail locations.",
      ],
    },
    solution: {
      heading: "Native Apple & Google Wallet Digital Stamp Engine",
      description:
        "Axtrait developed a multi-tenant loyalty SaaS enabling merchants to issue branded digital loyalty cards directly into Apple Wallet and Google Wallet with a single QR code scan. Merchants send lock-screen push notifications and trigger automatic stamp updates upon checkout.",
      highlights: [
        "1-click install into Apple Wallet and Google Wallet without downloading any native app.",
        "Location-based geofence triggers displaying merchant rewards on lock screens when near stores.",
        "Merchant web scanner app allowing cashier tablets to stamp passes in under 2 seconds.",
      ],
    },
    flagshipSnapshot: {
      title: "Multi-Tenant Merchant Portal & Campaign Manager",
      caption: "SaaS administrative portal for franchise managers to design branded wallet passes, set tier rewards, and broadcast push promotions.",
      image: "/images/Hero%20card%202.png",
    },
    snapshots: [
      {
        title: "Real-Time Apple Wallet Pass Signing Engine",
        description: "Cryptographic pass generation service signing PKPass bundles using Apple developer certificates in under 200ms.",
        image: "/images/about_future_city.png",
        tag: "Cryptographic Engine",
      },
      {
        title: "Cashier Tablet Scanner & Point-of-Sale Terminal",
        description: "Ultra-fast web scanner enabling cashiers to authenticate passes and award loyalty stamps with one tap.",
        image: "/images/stage_4.jpg",
        tag: "POS Terminal",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Node.js", "Apple Wallet PassKit", "Google Wallet API", "PostgreSQL", "Prisma"],
  },

  {
    id: "saas-2",
    slug: "multitenant-booking-engine",
    title: "MULTI-TENANT BOOKING ENGINE",
    tagline: "White-label appointment scheduling and resource dispatch SaaS for wellness and clinics.",
    category: "Vertical Booking SaaS",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Cloud SaaS", "Stripe"],
    image: "/images/stage_4.jpg",
    timeline: "7 Weeks",
    client: "Aesthetic Clinics & Wellness Chain",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "100%", label: "Multi-Tenant Isolation", subtext: "Dedicated database schema per clinic" },
      { value: "$3.6M+", label: "Appointments Booked / Mo", subtext: "Across 45+ franchise locations" },
      { value: "-78%", label: "Appointment No-Shows", subtext: "Mandatory deposit authorization" },
      { value: "0.2s", label: "Calendar Availability Query", subtext: "Optimized slot indexing" },
    ],
    challenge: {
      heading: "Double Bookings & Franchise Data Separation Headaches",
      description:
        "Franchise owners required customized branding and separate revenue reporting, but the client’s legacy booking script suffered from race conditions where two clients booked the same aesthetic practitioner simultaneously.",
      bottlenecks: [
        "Concurrent booking race conditions causing double-booked surgery rooms and angry patients.",
        "Lack of multi-tenant data isolation risking cross-clinic patient data leakage.",
        "Excessive appointment no-shows due to lack of upfront credit card hold features.",
      ],
    },
    solution: {
      heading: "Distributed Schema-Isolated Multi-Tenant Booking Engine",
      description:
        "Built a resilient multi-tenant SaaS with PostgreSQL row-level security and pessimistic slot locking. Features customizable white-label booking widgets, automated deposit holds via Stripe Connect, and instant calendar synchronization with staff devices.",
      highlights: [
        "Pessimistic concurrency locking eradicating double bookings entirely.",
        "Custom domain and white-label branding support for each franchise clinic location.",
        "Automated Stripe Connect split payments routing deposits directly to franchise bank accounts.",
      ],
    },
    flagshipSnapshot: {
      title: "Franchise Multi-Calendar Scheduling Hub",
      caption: "Enterprise scheduling grid displaying treatment room allocations, practitioner schedules, and real-time appointment statuses.",
      image: "/images/stage_4.jpg",
    },
    snapshots: [
      {
        title: "White-Label Embeddable Booking Widget",
        description: "Lightweight, responsive booking module matching client branding with step-by-step practitioner and time selection.",
        image: "/images/stage_1.jpg",
        tag: "Embeddable Widget",
      },
      {
        title: "Automated SMS & WhatsApp Reminder Engine",
        description: "Scheduled two-way confirmation bot allowing patients to confirm or reschedule appointments with a simple 1-word reply.",
        image: "/images/about_team_collab.jpg",
        tag: "Patient Reminders",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Connect", "Twilio API", "Tailwind CSS", "Docker"],
  },

  {
    id: "saas-3",
    slug: "cloud-telemetry-hub",
    title: "CLOUD ASSET TELEMETRY HUB",
    tagline: "Industrial IoT equipment monitoring dashboard with predictive anomaly detection.",
    category: "Industrial IoT & Telemetry",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["IoT", "Dashboard"],
    image: "/images/about_future_city.png",
    timeline: "9 Weeks",
    client: "Renewable Energy & Solar Asset Operator",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "50,000+", label: "Connected Inverters & Sensors", subtext: "Ingesting 100k data points/sec" },
      { value: "sub-1s", label: "Anomaly Alert Dispatch", subtext: "Instant push notification to engineers" },
      { value: "99.99%", label: "Telemetry Pipeline Uptime", subtext: "Zero data loss during grid surges" },
      { value: "+14.2%", label: "Solar Energy Harvest Efficiency", subtext: "Automated panel angle adjustment" },
    ],
    challenge: {
      heading: "Massive Ingestion Bottlenecks & Undetected Inverter Failures",
      description:
        "The operator managed 45 solar farms spanning multiple countries. Their existing dashboard lagged by over 45 minutes, meaning damaged inverters went unnoticed for hours, resulting in significant electrical revenue losses.",
      bottlenecks: [
        "Inability to handle millions of concurrent time-series data points from field sensors.",
        "No predictive anomaly detection to alert maintenance crews before inverter burnouts.",
        "Unreliable network connections in remote desert solar locations causing corrupted uploads.",
      ],
    },
    solution: {
      heading: "TimescaleDB Time-Series Telemetry Engine with Edge MQTT Brokers",
      description:
        "Engineered an industrial telemetry platform utilizing TimescaleDB and MQTT protocols. The system visualizes real-time power curves, detects anomalous thermal signatures via machine learning, and dispatches automated field maintenance orders.",
      highlights: [
        "Ultra-scalable time-series architecture ingesting 100,000 measurements per second.",
        "Edge-buffer resilience storing telemetry locally during remote internet outages and syncing upon reconnect.",
        "Predictive thermal anomaly detection identifying degraded components weeks before catastrophic failure.",
      ],
    },
    flagshipSnapshot: {
      title: "Global Solar Farm Telemetry & Inverter Matrix",
      caption: "Geospatial telemetry dashboard displaying real-time kilowatt output, ambient temperatures, and immediate alert clusters across 45 facilities.",
      image: "/images/about_future_city.png",
    },
    snapshots: [
      {
        title: "Real-Time Power Curve Visualizer",
        description: "High-density WebGL charting displaying millisecond voltage and amperage fluctuations with zoomable inspection brushes.",
        image: "/images/about_ai_tech.jpg",
        tag: "WebGL Charts",
      },
      {
        title: "Automated Work-Order Generation",
        description: "Instant dispatch system generating technical work orders with exact GPS coordinates and replacement part numbers.",
        image: "/images/card_3d_robot.jpg",
        tag: "Work Orders",
      },
    ],
    techStack: ["React 19", "TimescaleDB", "MQTT", "Python", "Docker", "Tailwind CSS", "ECharts"],
  },

  {
    id: "saas-4",
    slug: "global-subscription-gateway",
    title: "SUBSCRIPTION GATEWAY",
    tagline: "Cross-border recurring billing SaaS with smart dunning and tax compliance automation.",
    category: "Fintech & Billing Infrastructure",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Billing", "Webhooks"],
    image: "/images/stacked_service_1.jpg",
    timeline: "6 Weeks",
    client: "Global Developer Tooling Startup",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "185+", label: "Countries Supported", subtext: "Automated local VAT, GST, and sales tax" },
      { value: "+22.4%", label: "Recovered Involuntary Churn", subtext: "Smart card network retry logic" },
      { value: "0ms", label: "Auth Token Delay", subtext: "Edge-verified subscription JWT tokens" },
      { value: "SOC-1", label: "Compliant Billing Ledger", subtext: "Immutable audit trail" },
    ],
    challenge: {
      heading: "Failed Payments & Complex Global Sales Tax Regulations",
      description:
        "As the SaaS expanded internationally, European VAT and US state sales tax compliance became a nightmare. High rates of false credit card declines (involuntary churn) were eroding monthly recurring revenue by over 8%.",
      bottlenecks: [
        "Manual calculation of complex local digital services taxes risking severe tax penalties.",
        "Crude retry schedules burning cards on expired billing attempts and increasing churn.",
        "Slow subscription entitlement checks adding 300ms latency to API gateway calls.",
      ],
    },
    solution: {
      heading: "High-Performance Merchant of Record & Smart Dunning Engine",
      description:
        "Built a dedicated subscription gateway integrating Stripe Billing, automated tax calculation engines, and machine learning retry algorithms that test card networks at optimal banking hours to recover declined payments.",
      highlights: [
        "Automated international tax calculations ensuring seamless compliance across 180+ jurisdictions.",
        "Smart dunning algorithms recovering 22% of previously lost involuntary churn charges.",
        "Edge-cached cryptographic entitlements allowing client applications to verify licenses in under 2ms.",
      ],
    },
    flagshipSnapshot: {
      title: "Global Revenue & MRR Cohort Command Center",
      caption: "Executive subscription analytics platform tracking Net Revenue Retention, churn cohorts, and recovered dunning revenue.",
      image: "/images/stacked_service_1.jpg",
    },
    snapshots: [
      {
        title: "Intelligent Payment Retry Sequence",
        description: "Algorithmic retry scheduler predicting optimal banking transaction hours based on issuing card country and BIN data.",
        image: "/images/card_3d_sphere.jpg",
        tag: "Smart Retries",
      },
      {
        title: "Self-Service Customer Billing Portal",
        description: "Branded portal allowing subscribers to upgrade tiers, modify seats, and download itemized tax invoices instantly.",
        image: "/images/stage_3.jpg",
        tag: "Customer Portal",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Stripe API", "PostgreSQL", "Cloudflare Workers", "Tailwind CSS"],
  },

  {
    id: "saas-5",
    slug: "creator-portfolio-suite",
    title: "CREATOR PORTFOLIO SUITE",
    tagline: "Headless CMS and portfolio builder engineered for elite architectural photographers.",
    category: "Creative Industry SaaS",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Vercel", "AWS"],
    image: "/images/about_arch_main.jpg",
    timeline: "6 Weeks",
    client: "International Visual Artists Collective",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "99/100", label: "Core Web Vitals Score", subtext: "Flawless rendering on 50MB raw files" },
      { value: "0.28s", label: "Image Decryption & Load", subtext: "Edge WebP & AVIF transcoding" },
      { value: "100%", label: "Digital Watermark Protection", subtext: "Zero-unauthorized right-click theft" },
      { value: "3,200+", label: "Portfolios Published", subtext: "Custom domain SSL auto-provisioning" },
    ],
    challenge: {
      heading: "Sluggish Image Loading Destroying Photographer Client Showcases",
      description:
        "High-end photographers showcase massive 50MB RAW files to prospective architecture clients. Legacy portfolio builders choked on these files, resulting in 8-second render times, blurry previews, and unauthorized asset scraping.",
      bottlenecks: [
        "Excessive load latency on high-resolution image portfolios destroying visitor engagement.",
        "Lack of image theft protection allowing unlicensed high-res downloading.",
        "Manual custom domain setup requiring tedious DNS support tickets for every photographer.",
      ],
    },
    solution: {
      heading: "Edge-Transcoded Dynamic Visual Portfolio Engine",
      description:
        "Axtrait developed an ultra-sleek, minimalist portfolio SaaS with on-the-fly edge image transcoding to next-gen AVIF formats. Includes forensic watermarking, private client proofing galleries with PIN protection, and automated custom domain SSL provisioning.",
      highlights: [
        "Edge image optimization delivering sub-300ms high-fidelity image rendering globally.",
        "Private VIP client proofing galleries with digital watermarks and one-click select approvals.",
        "Automated custom domain DNS verification using Vercel and Cloudflare APIs.",
      ],
    },
    flagshipSnapshot: {
      title: "Visual Portfolio Builder & Curated Gallery",
      caption: "Minimalist visual editor featuring drag-and-drop layout curation, dynamic aspect ratio adjustments, and client proofing links.",
      image: "/images/about_arch_main.jpg",
    },
    snapshots: [
      {
        title: "Forensic Digital Watermarking & Client Proofing",
        description: "Cryptographic watermarking engine embedding invisible and visible client identifiers to protect photographer copyrights.",
        image: "/images/about_pill_portrait.jpg",
        tag: "Proofing Engine",
      },
      {
        title: "Custom Domain Auto-Provisioning",
        description: "Zero-touch domain verification pipeline generating automated Let's Encrypt SSL certificates in under 60 seconds.",
        image: "/images/stage_1.jpg",
        tag: "Cloudflare Edge",
      },
    ],
    techStack: ["Next.js", "TypeScript", "AWS S3", "Cloudflare Images", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },

  {
    id: "saas-6",
    slug: "api-rate-limiter-saas",
    title: "SECURE API RATE LIMITER",
    tagline: "Distributed token-bucket rate limiting and anti-DDoS middleware for high-volume public APIs.",
    category: "Developer Infrastructure & Security",
    categoryTag: "SAAS DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Go", "Redis"],
    image: "/images/card_3d_gem.jpg",
    timeline: "7 Weeks",
    client: "High-Volume B2B API Provider",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "sub-1ms", label: "Added Middleware Latency", subtext: "In-memory Redis atomic evaluation" },
      { value: "450M+", label: "Daily API Requests Filtered", subtext: "Zero bottleneck on downstream origin" },
      { value: "99.999%", label: "Security Service Uptime", subtext: "Distributed multi-region cluster" },
      { value: "-99.4%", label: "Malicious Scraping Attempts", subtext: "Automated IP reputation banning" },
    ],
    challenge: {
      heading: "Scraper Bots Overwhelming Origin Servers & Spiking Cloud Bills",
      description:
        "The client’s public financial data APIs were repeatedly targeted by aggressive scraper bots and distributed denial-of-service attempts. Their cloud servers were hitting CPU throttling, causing legitimate enterprise paying clients to experience 504 Gateway Timeouts.",
      bottlenecks: [
        "Aggressive unauthorized scraping consuming over 70% of available origin database compute.",
        "Lack of granular tier-based rate limiting for free vs premium paid API keys.",
        "Cascading server failures during sudden bot traffic spikes.",
      ],
    },
    solution: {
      heading: "Distributed In-Memory Token Bucket Proxy Cluster",
      description:
        "Engineered an ultra-low-latency reverse proxy gateway in Go and Redis. Implemented sliding-window and token-bucket rate limiting algorithms that evaluate API key tiers, IP reputations, and request headers in under 1 millisecond, dropping abusive traffic before it ever touches customer servers.",
      highlights: [
        "Sub-1 millisecond inspection latency with zero performance degradation on origin servers.",
        "Granular tier rate limiting allowing dynamic limits based on client subscription levels.",
        "Automated bot signature detection isolating and banning bad actor IP subnets automatically.",
      ],
    },
    flagshipSnapshot: {
      title: "API Gateway Traffic Radar & Security Sentinel",
      caption: "High-velocity telemetry console displaying live request volumes, dropped bot attacks, origin latency, and active API key quotas.",
      image: "/images/card_3d_gem.jpg",
    },
    snapshots: [
      {
        title: "Sliding-Window Quota Evaluator",
        description: "Atomic Redis script verifying API key rate limits across distributed geographic edge nodes with zero race conditions.",
        image: "/images/stage_2.jpg",
        tag: "In-Memory Proxy",
      },
      {
        title: "Real-Time Threat Intelligence & Ban Table",
        description: "Automated perimeter defense automatically blocking IP addresses exhibiting credential stuffing or scraping behaviors.",
        image: "/images/about_ai_tech.jpg",
        tag: "Threat Defense",
      },
    ],
    techStack: ["Go (Golang)", "Redis Cluster", "Docker", "Next.js", "TypeScript", "Prometheus", "Grafana"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: "app-1",
    slug: "luxury-mobility-app",
    title: "LUXURY MOBILITY APP",
    tagline: "Cross-platform mobile application for on-demand private chauffeur and helicopter dispatch.",
    category: "Mobile Concierge & Mobility",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["React Native", "iOS"],
    image: "/images/Hero%20card%203.png",
    timeline: "8 Weeks",
    client: "VIP Aviation & Private Chauffeur Club",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "4.9/5", label: "App Store Rating", subtext: "Across 2,400+ verified luxury reviews" },
      { value: "<60s", label: "Chauffeur Dispatch Time", subtext: "Automated nearest VIP driver lock" },
      { value: "100%", label: "Biometric Security", subtext: "FaceID passkey authentication" },
      { value: "0", label: "Payment Disputes", subtext: "Pre-authorized luxury credit line" },
    ],
    challenge: {
      heading: "Clunky Phone Bookings Failing VIP High-Net-Worth Travelers",
      description:
        "High-net-worth clients demanding on-demand executive sedans or airport helicopter transfers had to call a concierge desk. Dispatches were prone to misheard pickup locations, delays in flight-tracking updates, and clunky manual credit card authorizations.",
      bottlenecks: [
        "Manual telephone booking causing 30-minute coordination delays during international arrivals.",
        "Lack of real-time flight radar tracking resulting in chauffeurs waiting at wrong terminal gates.",
        "Security concerns handling corporate credit cards manually over unencrypted phone lines.",
      ],
    },
    solution: {
      heading: "Opulent Native iOS & Android Chauffeur Dispatch Application",
      description:
        "Axtrait engineered a bespoke React Native mobile application featuring private flight radar synchronization, instant chauffeur booking, biometric FaceID authorizations, and live GPS vehicle tracking with encrypted in-app messaging.",
      highlights: [
        "Live flight number telemetry automatically adjusting driver dispatch for landing delays.",
        "One-tap chauffeur dispatch with vehicle interior preferences, water choices, and route notes.",
        "Biometric FaceID payment authorization with automated corporate expense receipt generation.",
      ],
    },
    flagshipSnapshot: {
      title: "Luxury Mobility Mobile Application Suite",
      caption: "Dark obsidian mobile interface featuring live vehicle telemetry, jet charter scheduling, and private chauffeur communications.",
      image: "/images/Hero%20card%203.png",
    },
    snapshots: [
      {
        title: "Live GPS Vehicle Radar & Chauffeur Profile",
        description: "Vector mapping interface showing the approaching vehicle's live coordinates, driver credentials, and vehicle specifications.",
        image: "/images/stage_1.jpg",
        tag: "Live Radar",
      },
      {
        title: "Flight Telemetry Auto-Adjustment",
        description: "Integration with global flight tracking APIs adjusting pickup times automatically when private jets encounter headwinds.",
        image: "/images/about_future_city.png",
        tag: "Aviation Sync",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Mapbox Navigation SDK", "Tailwind CSS", "Stripe"],
  },

  {
    id: "app-2",
    slug: "dealership-mobile-inventory",
    title: "DEALERSHIP MOBILE APP",
    tagline: "Native automotive inventory app with VIN barcode scanner and instant digital appraisal.",
    category: "Automotive Retail Mobile",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Flutter", "Android"],
    image: "/images/stacked_service_2.jpg",
    timeline: "6 Weeks",
    client: "Multi-Brand Automotive Dealer Group",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "0.5s", label: "VIN Barcode Scan Speed", subtext: "Camera OCR extraction" },
      { value: "-80%", label: "Vehicle Intake Time", subtext: "From 45 minutes to under 8 minutes" },
      { value: "100%", label: "Instant Lot Location Tracking", subtext: "Bluetooth beacon vehicle finder" },
      { value: "450+", label: "Sales Reps Active Daily", subtext: "Zero lag across dealership lots" },
    ],
    challenge: {
      heading: "Sales Reps Wandering 10-Acre Lots Unable to Locate Keys or Specs",
      description:
        "Sales reps walking vast car dealership lots had to run back inside to desktop computers to print specification sheets, verify whether a car was reserved, or find where a key was stored, losing impatient buyers.",
      bottlenecks: [
        "Reps unable to answer buyer questions on pricing or options while standing next to vehicles.",
        "Manual vehicle trade-in appraisals taking 45 minutes with paper clipboards and manual typing.",
        "Lost vehicle keys causing delayed test drives and frustrated customers.",
      ],
    },
    solution: {
      heading: "Field Dealership Companion Mobile App with Offline VIN Scanning",
      description:
        "Developed a high-performance native mobile app allowing reps to scan any windshield VIN barcode. Instantly displays complete vehicle specs, current financing offers, lot location coordinates, key tag numbers, and allows walking trade-in appraisals with photo documentation.",
      highlights: [
        "Instant camera VIN scanning displaying vehicle specifications, window stickers, and profit margins.",
        "5-minute guided walkaround trade-in appraisal tool with damage photo uploads and instant valuation.",
        "Bluetooth beacon tracking showing exact parking row and key locker status on dealer maps.",
      ],
    },
    flagshipSnapshot: {
      title: "Dealership Lot Assistant & Inventory Radar",
      caption: "Mobile interface allowing sales reps to look up any vehicle, review window stickers, and start financing applications on the lot.",
      image: "/images/stacked_service_2.jpg",
    },
    snapshots: [
      {
        title: "Instant Camera VIN Scanner",
        description: "Computer vision barcode reader extracting 17-digit VINs and pulling Carfax history reports in under 1 second.",
        image: "/images/stage_3.jpg",
        tag: "Computer Vision",
      },
      {
        title: "Digital Trade-In Appraisal Walkthrough",
        description: "Guided mobile checklist capturing exterior scratches, tire tread depths, and audio notes to calculate trade-in values.",
        image: "/images/card_3d_sphere.jpg",
        tag: "Appraisals",
      },
    ],
    techStack: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Google Vision API", "Tailwind CSS"],
  },

  {
    id: "app-3",
    slug: "field-sales-mobile-crm",
    title: "FIELD SALES MOBILE CRM",
    tagline: "Offline-first mobile CRM for territory sales representatives with voice-to-text logging.",
    category: "Field Operations & Mobile Sales",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Mobile", "Cloud"],
    image: "/images/stage_3.jpg",
    timeline: "7 Weeks",
    client: "Pharmaceutical & Medical Supply Firm",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "100%", label: "Offline Mode Availability", subtext: "Local SQLite database sync" },
      { value: "3.5x", label: "Call Notes Logged Per Rep", subtext: "Automated voice-to-text summaries" },
      { value: "-45m", label: "Daily Admin Work Per Rep", subtext: "Reps head home immediately after visits" },
      { value: "99.8%", label: "Geotagged Visit Verification", subtext: "Tamper-proof GPS check-ins" },
    ],
    challenge: {
      heading: "Hospital Basements Without Cellular Signal & Lost Meeting Notes",
      description:
        "Medical sales reps visiting hospital basements routinely lost cellular connection, causing standard cloud CRM apps to crash and wipe out meeting notes. Reps delayed logging notes until late at night, resulting in vague or forgotten summaries.",
      bottlenecks: [
        "Web-based CRM tools failing completely in hospital basements with zero cellular connectivity.",
        "Sales reps spending 2 hours every evening typing up meeting notes from memory.",
        "Sales leadership having zero verified visibility into whether scheduled clinic visits took place.",
      ],
    },
    solution: {
      heading: "Offline-First Native Mobile CRM with AI Voice Summarization",
      description:
        "Engineered an offline-first mobile app using local SQLite storage that seamlessly syncs when internet reconnects. Reps speak meeting impressions into their phone microphone while walking back to their car, and the AI transcribes, formats, and extracts follow-up tasks into the CRM.",
      highlights: [
        "True offline architecture allowing reps to view account histories and record orders with zero signal.",
        "AI voice-to-structured-text converting 60-second voice memos into categorized CRM deal fields.",
        "GPS proximity check-ins confirming doctor visits with automated sample inventory tracking.",
      ],
    },
    flagshipSnapshot: {
      title: "Field Sales Mobile Companion & Voice Transcriber",
      caption: "Mobile interface featuring today's route itinerary, doctor account dossiers, voice memo recording, and sample drop-off logging.",
      image: "/images/stage_3.jpg",
    },
    snapshots: [
      {
        title: "AI Voice Memo to CRM Field Parser",
        description: "Whisper AI transcription engine extracting discussed medication dosages, doctor objections, and promised follow-up dates.",
        image: "/images/about_ai_tech.jpg",
        tag: "Voice AI",
      },
      {
        title: "Optimized Daily Visit Itinerary",
        description: "Turn-by-turn route optimization calculating best visit sequences to avoid rush-hour traffic between regional clinics.",
        image: "/images/about_team_collab.jpg",
        tag: "Route Planning",
      },
    ],
    techStack: ["React Native", "TypeScript", "SQLite", "OpenAI Whisper", "PostgreSQL", "Node.js"],
  },

  {
    id: "app-4",
    slug: "invoicing-mobile-app",
    title: "INVOICING MOBILE APP",
    tagline: "On-the-go contract generation and instant card tap-to-pay mobile billing.",
    category: "Mobile Billing & Payments",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Finance", "Expo"],
    image: "/images/card_3d_sphere.jpg",
    timeline: "5 Weeks",
    client: "High-End Luxury Remodeling Contractors",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "<30s", label: "Invoice Creation Speed", subtext: "Quick line-item presets" },
      { value: "88%", label: "Collected On Site", subtext: "Via Apple Tap to Pay on iPhone" },
      { value: "0", label: "Paper Invoices Printed", subtext: "100% digital SMS and email receipts" },
      { value: "$1.2M", label: "Monthly Contractor Billing", subtext: "Next-day bank payout deposits" },
    ],
    challenge: {
      heading: "Delayed Contractor Invoices Causing Severe Cash-Flow Gaps",
      description:
        "Tradesmen and luxury contractors finished jobs on Friday but didn't sit down to create invoices until two weeks later. Homeowners forgot agreed changes, disputed handwritten bills, and delayed payments by months.",
      bottlenecks: [
        "Contractors waiting an average of 42 days to get paid for completed remodeling milestones.",
        "Disputes over handwritten paper change orders without photo evidence.",
        "Inability to accept credit card payments on site without carrying clunky external card readers.",
      ],
    },
    solution: {
      heading: "Native Tap to Pay Mobile Invoicing & Digital Change Orders",
      description:
        "Built a ruggedized mobile invoicing app supporting Apple's Tap to Pay technology. Contractors create itemized invoices with attached completion photos on their iPhone and accept contactless payments directly on their phone screen with zero external hardware.",
      highlights: [
        "Apple Tap to Pay on iPhone allowing clients to tap contactless cards and Apple Pay directly on the phone.",
        "Visual change order signatures with before/after photos eradicating client disputes.",
        "Instant SMS invoice receipts with one-click payment links and automatic bank reconciliation.",
      ],
    },
    flagshipSnapshot: {
      title: "Mobile Invoicing & Tap to Pay Terminal",
      caption: "Mobile invoice builder with instant itemized presets, digital client signature pad, and integrated contactless card reader.",
      image: "/images/card_3d_sphere.jpg",
    },
    snapshots: [
      {
        title: "Apple Tap to Pay Contactless Interface",
        description: "Hardware-free payment reader enabling contractors to collect $5,000+ milestone deposits directly on their smartphone.",
        image: "/images/stage_2.jpg",
        tag: "Tap to Pay",
      },
      {
        title: "Visual Change Order Agreement",
        description: "Camera documentation tool capturing structural changes with instant digital homeowner sign-offs before work commences.",
        image: "/images/stage_4.jpg",
        tag: "Change Orders",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Stripe Terminal SDK", "Tailwind CSS", "Node.js"],
  },

  {
    id: "app-5",
    slug: "real-estate-agent-mobile",
    title: "REAL ESTATE AGENT APP",
    tagline: "Mobile property showing assistant with geofenced buyer notes and instant lockbox codes.",
    category: "Real Estate Mobile Tech",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["Mobile UI", "Map API"],
    image: "/images/about_team_collab.jpg",
    timeline: "6 Weeks",
    client: "Elite Urban Brokerage Association",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "100%", label: "Digital Showing Coordination", subtext: "Zero phone calls for lockbox access" },
      { value: "<10s", label: "Lockbox Code Retrieval", subtext: "Geofence-verified security authorization" },
      { value: "+38%", label: "Offer Submission Speed", subtext: "In-car digital offer signing" },
      { value: "4.9/5", label: "Broker Adoption Rate", subtext: "Intuitive touch UX design" },
    ],
    challenge: {
      heading: "Showing Delays & Frustrated Luxury Buyers Waiting at Gates",
      description:
        "Brokers conducting multi-property showing tours spent precious minutes fumbling through email threads for gate codes, lockbox combinations, and parking instructions while high-profile clients waited awkwardly outside.",
      bottlenecks: [
        "Scattered gate codes and lockbox keys across fragmented email and text threads.",
        "No structured mechanism to record buyer reactions immediately after leaving each home.",
        "Delayed offer submissions allowing competing buyers to snap up underpriced luxury listings.",
      ],
    },
    solution: {
      heading: "Geofenced Mobile Showing Companion & Offer Fast-Track",
      description:
        "Engineered an exclusive mobile app for luxury real estate agents. When an agent pulls up to a scheduled showing address, the app's geofence automatically displays gate codes, lockbox combinations, showing instructions, and prompts for rapid audio feedback upon exit.",
      highlights: [
        "Geofence-triggered showing cards displaying security codes and parking details automatically.",
        "Rapid buyer reaction logger recording client likes, dislikes, and likelihood of submitting an offer.",
        "One-tap digital purchase offer drafting sending watermarked PDF agreements to buyers' phones.",
      ],
    },
    flagshipSnapshot: {
      title: "Agent Showing Radar & Property Assistant",
      caption: "Mobile dashboard displaying today's tour schedule, automatic geofenced property access codes, and instant buyer feedback capture.",
      image: "/images/about_team_collab.jpg",
    },
    snapshots: [
      {
        title: "Geofenced Access Code Display",
        description: "Proximity detector verifying the agent is physically at the property before unlocking secure gate and lockbox access codes.",
        image: "/images/about_pill_portrait.jpg",
        tag: "Geofencing",
      },
      {
        title: "One-Click Digital Offer Generator",
        description: "Mobile contract engine pre-populating legal purchase agreements with buyer details and offer prices for instant signing.",
        image: "/images/stage_1.jpg",
        tag: "Digital Contracts",
      },
    ],
    techStack: ["React Native", "TypeScript", "Mapbox SDK", "PostgreSQL", "DocuSign API", "Tailwind CSS"],
  },

  {
    id: "app-6",
    slug: "team-dispatch-chat-app",
    title: "TEAM DISPATCH & CHAT APP",
    tagline: "Secure field communications, instant dispatch alerts, and encrypted file sharing.",
    category: "Enterprise Mobile Operations",
    categoryTag: "APP DEVELOPMENT",
    year: "[ 2026 ]",
    tags: ["WebSockets", "Native"],
    image: "/images/about_innovation_team.jpg",
    timeline: "7 Weeks",
    client: "National Critical Infrastructure Maintenance",
    scope: "Full-Stack Dev, Automated Pipelines & CRM",
    status: "🔒 Private Infrastructure (Under NDA)",
    metrics: [
      { value: "sub-20ms", label: "Push Notification Delivery", subtext: "Zero dispatch delay" },
      { value: "E2EE", label: "End-to-End Encryption", subtext: "Military-grade Signal Protocol" },
      { value: "100%", label: "Mobile Uptime in Disasters", subtext: "Mesh peer-to-peer fallback" },
      { value: "18,000+", label: "Field Technicians Connected", subtext: "Zero performance degradation" },
    ],
    challenge: {
      heading: "Unsecured Consumer Messaging Apps Risking Sensitive Infrastructure Data",
      description:
        "Field crews were using personal WhatsApp and Telegram groups to share photos of electrical substations and industrial facilities. The company faced massive security compliance fines and had no corporate audit oversight.",
      bottlenecks: [
        "Unencrypted consumer chat apps violating critical infrastructure regulatory standards.",
        "Ex-employees retaining access to sensitive operational chat threads after termination.",
        "Inability to broadcast emergency priority alerts that override phone silent modes.",
      ],
    },
    solution: {
      heading: "End-to-End Encrypted Team Dispatch & Alert Mobile Application",
      description:
        "Developed a proprietary enterprise mobile chat and dispatch application utilizing the Signal encryption protocol. Includes remote wipe capabilities, role-based channel access, and emergency broadcast sirens that pierce silent phone modes for critical safety evacuations.",
      highlights: [
        "End-to-end cryptographic encryption ensuring complete confidentiality of facility blueprints.",
        "Emergency broadcast alerts overriding mobile silent settings during hazardous incidents.",
        "Centralized active-directory revocation instantly cutting access upon employee departure.",
      ],
    },
    flagshipSnapshot: {
      title: "Encrypted Operations Chat & Emergency Dispatch",
      caption: "High-security mobile interface featuring mission channels, urgent incident alerts, encrypted document sharing, and location pings.",
      image: "/images/about_innovation_team.jpg",
    },
    snapshots: [
      {
        title: "Emergency Broadcast Siren Alert",
        description: "Priority notification system triggering visual and audible sirens on field devices during urgent environmental alerts.",
        image: "/images/card_3d_robot.jpg",
        tag: "Priority Alerts",
      },
      {
        title: "Encrypted Schematic File Viewer",
        description: "In-app secure blueprint viewer preventing screenshots or unauthorized external forwarding of facility schematics.",
        image: "/images/stage_4.jpg",
        tag: "Secure Viewer",
      },
    ],
    techStack: ["React Native", "TypeScript", "WebSockets", "Signal Protocol", "Node.js", "Docker", "Tailwind CSS"],
  },
];

/* ── Helper Functions ─────────────────────────────────────────── */
export function getAllProjects(): Project[] {
  return allProjectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjectsData.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = allProjectsData.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === allProjectsData.length - 1) {
    return allProjectsData[0];
  }
  return allProjectsData[currentIndex + 1];
}
