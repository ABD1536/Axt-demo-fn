export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  metrics: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  badge: string;
  heroTitleLine1: string;
  heroTitleLine2?: string;
  heroSubtitle: string;
  introBadge: string;
  introHeadline: string;
  introDescription: string;
  metrics: MetricItem[];
  dualShowcaseImages?: [string, string];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: CapabilityItem[];
  fullWidthBannerImage?: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];
  techStackTitle: string;
  techStackSubtitle: string;
  techStack: string[];
  caseStudiesTitle: string;
  caseStudiesSubtitle: string;
  caseStudies: CaseStudyItem[];
  faqsTitle: string;
  faqsSubtitle: string;
  faqs: FaqItem[];
  ctaHeadline: string;
  ctaSubtext: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    number: "01",
    badge: "WEB DEVELOPMENT",
    heroTitleLine1: "MODERN WEB",
    heroTitleLine2: "DEVELOPMENT",
    heroSubtitle:
      "Engineered for speed, built for conversion, and designed to scale globally with Next.js and cutting-edge web architecture.",
    introBadge: "ENGINEERING EXCELLENCE",
    introHeadline: "High-Performance Digital Platforms That Convert & Scale",
    introDescription:
      "We architect ultra-fast, responsive web applications and enterprise platforms. By pairing headless CMS engines with edge compute and fluid micro-animations, we turn visitors into high-value pipeline.",
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Average Conversion Lift", value: "+142%" },
      { label: "Global Edge Latency", value: "<120ms" },
      { label: "Uptime Reliability", value: "99.99%" },
    ],
    dualShowcaseImages: ["/images/stacked_service_1.jpg", "/images/hero_card_2.jpg"],
    capabilitiesTitle: "Core Web Capabilities",
    capabilitiesSubtitle: "From high-traffic portals to bespoke web apps, explore our full spectrum of web engineering solutions.",
    capabilities: [
      {
        icon: "Layout",
        title: "Corporate & Brand Flagships",
        description:
          "High-end, bespoke agency and corporate websites designed to position authority and captivate enterprise clients.",
        tags: ["Bespoke UI/UX", "Brand Authority", "Next.js", "Motion Design"],
      },
      {
        icon: "ShoppingBag",
        title: "Headless E-Commerce",
        description:
          "Ultra-fast storefronts built on Shopify Plus, Medusa, and Stripe with instant search and sub-second checkouts.",
        tags: ["Shopify Plus", "Medusa.js", "Stripe API", "Instant Search"],
      },
      {
        icon: "Code2",
        title: "Custom Web Applications",
        description:
          "Dynamic Next.js and React full-stack web applications engineered for heavy compute and complex user flows.",
        tags: ["Next.js 15", "React", "Serverless", "Edge Compute"],
      },
      {
        icon: "ShieldCheck",
        title: "B2B & Client Portals",
        description:
          "Secure authenticated dashboards, customer portals, and internal tooling with role-based access control.",
        tags: ["Auth0 / Clerk", "RBAC", "REST & GraphQL", "Live Dashboards"],
      },
      {
        icon: "Zap",
        title: "High-Converting Landing Pages & Funnels",
        description:
          "Lightning-fast campaign landing pages engineered specifically for high conversion rates and paid media traffic.",
        tags: ["A/B Testing", "Sub-Second Load", "Conversion Rate", "Analytics"],
      },
      {
        icon: "Database",
        title: "Vast / Enterprise Content Platforms",
        description:
          "Scalable headless CMS architectures (Sanity/Strapi) built for high-traffic multi-region digital properties.",
        tags: ["Sanity CMS", "Strapi", "Multi-Region", "ISR / Caching"],
      },
    ],
    fullWidthBannerImage: "/images/parallax_office.jpg",
    processTitle: "Our 4-Stage\nExecution Process",
    processSubtitle: "A disciplined, transparent delivery framework engineered to take your product from concept to global launch.",
    processSteps: [
      {
        step: "01",
        title: "Discovery & Architecture Blueprint",
        description: "We map your user personas, technical requirements, SEO goals, and system integrations into an actionable technical blueprint.",
        deliverables: ["Technical Specification Doc", "Database Schema", "Information Architecture"],
      },
      {
        step: "02",
        title: "Design System & Interactive Prototyping",
        description: "Our design team crafts high-fidelity UI screens in Figma, complete with micro-interactions, responsive breakpoints, and tokenized design systems.",
        deliverables: ["Figma Interactive Prototype", "Design Token Library", "UX Flow Validations"],
      },
      {
        step: "03",
        title: "Sprint-Based Engineering & Integration",
        description: "Our engineers build the platform in rapid 2-week sprints with automated CI/CD testing, strict code reviews, and weekly live demo staging environments.",
        deliverables: ["Staging Environments", "API Integrations", "Automated E2E Test Suite"],
      },
      {
        step: "04",
        title: "Audit, Hardening & Global Launch",
        description: "Rigorous cross-browser stress testing, Lighthouse 95+ score enforcement, SSL/DNS propagation, and seamless zero-downtime production deployment.",
        deliverables: ["Production DNS Cutover", "Lighthouse 95+ Report", "Post-Launch SLA Guarantee"],
      },
    ],
    techStackTitle: "Battle-Tested Technology Stack",
    techStackSubtitle: "We build exclusively on modern, high-performance tools that guarantee maintainability and speed.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
      "Vue.js",
      "Vite",
      "WordPress",
      "Elementor",
      "Webflow",
      "Framer",
      "Sanity.io",
      "Strapi",
      "Storyblok",
      "Shopify Plus",
      "WooCommerce",
      "Medusa.js",
      "Stripe API",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Prisma ORM",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Vercel",
      "AWS",
      "Cloudflare",
      "Docker",
      "GitHub Actions",
    ],
    caseStudiesTitle: "Featured Web Development Work",
    caseStudiesSubtitle: "Real-world web platforms delivering measurable revenue and engagement metrics.",
    caseStudies: [
      {
        title: "MKT Auto Marketplace",
        category: "AUTOMOTIVE PLATFORM",
        year: "2026",
        description: "Next-generation automotive discovery and financing marketplace with sub-second vehicle filtering and dynamic booking.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        image: "/images/stacked_service_1.jpg",
        metrics: "+168% Lead Inquiries",
      },
      {
        title: "Silver Arrow Luxury Rentals",
        category: "EXOTIC CAR RENTALS",
        year: "2026",
        description: "High-end luxury fleet booking platform with real-time telematics integration and instant Stripe VIP deposits.",
        tags: ["React", "Stripe API", "Vercel", "Tailwind"],
        image: "/images/stage_1.jpg",
        metrics: "3.4x Online Bookings",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Clear answers to common questions about our web development process and deliverables.",
    faqs: [
      {
        question: "How long does a custom web development project typically take?",
        answer: "A standard corporate or high-performance web platform takes between 3 to 6 weeks. Complex web applications with bespoke authentication, custom databases, and payment flows generally take 6 to 10 weeks with dedicated sprint milestones.",
      },
      {
        question: "Will our internal marketing team be able to edit content without writing code?",
        answer: "Yes, 100%. We integrate headless visual CMS systems like Sanity or Storyblok with custom modular blocks, allowing your marketing team to create landing pages, update copy, and publish blog articles effortlessly.",
      },
      {
        question: "How do you ensure top-tier Google Lighthouse performance scores?",
        answer: "We employ Next.js server-side rendering, edge caching, responsive modern image formats (AVIF/WebP), font subsetting, and tree-shaken CSS. Every project is audited to meet Google's Core Web Vitals threshold before going live.",
      },
      {
        question: "Do you provide post-launch maintenance, hosting, and ongoing support?",
        answer: "Yes. We offer continuous SLA maintenance packages that cover security patches, uptime monitoring, performance fine-tuning, and on-demand feature expansion.",
      },
    ],
    ctaHeadline: "Ready to Build a High-Performance Web Platform?",
    ctaSubtext: "Schedule a technical discovery call with our engineering leads to blueprint your project.",
  },

  "lead-generation": {
    slug: "lead-generation",
    number: "02",
    badge: "LEAD GENERATION",
    heroTitleLine1: "PREDICTABLE",
    heroTitleLine2: "B2B ACQUISITION",
    heroSubtitle:
      "High-converting multi-channel acquisition funnels, outbound infrastructure, and verified B2B prospect pipelines.",
    introBadge: "PIPELINE ACCELERATION",
    introHeadline: "Data-Driven Funnels & Automated Outbound Engines",
    introDescription:
      "We build automated lead generation infrastructure that consistently sources, enriches, and qualifies high-ticket B2B prospects. From custom cold email infrastructure to hyper-targeted paid campaigns, we maximize pipeline velocity and booked demos.",
    metrics: [
      { label: "Inbox Deliverability Rate", value: "99.4%" },
      { label: "Average Reply Rate", value: "14.8%" },
      { label: "Generated Pipeline Value", value: "$4.2M+" },
      { label: "Cost Per Qualified Lead", value: "-45%" },
    ],
    dualShowcaseImages: ["/images/stacked_service_2.jpg", "/images/stage_2.jpg"],
    capabilitiesTitle: "Acquisition & Outbound Capabilities",
    capabilitiesSubtitle: "Comprehensive outbound and inbound systems engineered to deliver qualified sales conversations on autopilot.",
    capabilities: [
      {
        icon: "Mail",
        title: "Cold Outbound Infrastructure",
        description: "Dedicated secondary domain provisioning, SPF/DKIM/DMARC alignment, automated mailbox rotation, and AI warmup algorithms.",
        tags: ["Smartlead", "Instantly", "DNS Hardening", "Mailbox Warmup"],
      },
      {
        icon: "Search",
        title: "B2B Data Enrichment & Scraping",
        description: "Multi-source prospect enrichment combining Apollo, Clay, LinkedIn Sales Navigator, and custom scrapers for validated verified emails.",
        tags: ["Clay.com", "Apollo.io", "Waterfall Enrichment", "ZeroBounce"],
      },
      {
        icon: "Target",
        title: "High-Converting Inbound Funnels",
        description: "Interactive ROI calculators, multi-step qualification lead forms, dynamic video landing pages, and instant booking calendar embeds.",
        tags: ["Landing Funnels", "Cal.com", "Typeform Logic", "A/B Testing"],
      },
      {
        icon: "TrendingUp",
        title: "Paid Acquisition Campaigns",
        description: "Hyper-targeted paid media on Google Ads, Meta Ads, and LinkedIn with pixel tracking, custom audience exclusions, and retargeting.",
        tags: ["Google Search Ads", "LinkedIn Ads", "Meta Pixel", "Server-Side CAPI"],
      },
      {
        icon: "Sparkles",
        title: "AI-Personalized Outbound Copy",
        description: "Dynamic variable mapping and individualized company hook generation that avoids spam filters and drives genuine peer-to-peer replies.",
        tags: ["OpenAI API", "Dynamic Copywriting", "Spintax Logic", "Offer Crafting"],
      },
      {
        icon: "Share2",
        title: "Automated CRM Lead Routing",
        description: "Instant webhook notifications to Slack, HubSpot, or Salesforce whenever a prospect replies positively or schedules a demo.",
        tags: ["HubSpot Sync", "Slack Webhooks", "Make.com", "Lead Scoring"],
      },
    ],
    fullWidthBannerImage: "/images/about_arch_main.jpg",
    processTitle: "Our Outbound Engine\nDeployment Flow",
    processSubtitle: "How we launch, test, and scale a predictable pipeline of qualified buyers for your company.",
    processSteps: [
      {
        step: "01",
        title: "ICP & TAM Market Segmentation",
        description: "We define your Ideal Customer Profile, analyze competitor positioning, and calculate your total addressable market with high-intent filters.",
        deliverables: ["ICP Battlecard", "Target Account List", "Offer Strategy Blueprint"],
      },
      {
        step: "02",
        title: "Dedicated Domain & DNS Provisioning",
        description: "We set up isolated secondary domains with Google Workspace / Microsoft 365, configure DNS records, and initiate a 21-day gradual warmup.",
        deliverables: ["10-50 Secondary Inboxes", "DMARC/DKIM/SPF Certified", "Warmup Dashboard"],
      },
      {
        step: "03",
        title: "Campaign Architecture & A/B Copy Tests",
        description: "We craft value-driven messaging angles, inject personalized data points, and launch 4 distinct sequence variations to pinpoint winning copy.",
        deliverables: ["4 Tested Outbound Angles", "Interactive Landing Page", "Dynamic Enriched Lists"],
      },
      {
        step: "04",
        title: "Scale, Sentiment Routing & Optimization",
        description: "We scale volume to winning sequences, route positive replies directly to your calendar, and continuously refresh contact lists.",
        deliverables: ["Live Performance Dashboard", "Weekly Lead Reviews", "CRM Auto-Sync"],
      },
    ],
    techStackTitle: "Lead Generation Technology Stack",
    techStackSubtitle: "Industry-leading data enrichment, delivery engines, and marketing automation platforms.",
    techStack: [
      "Clay.com",
      "Smartlead",
      "Apollo.io",
      "Instantly.ai",
      "LinkedIn Sales Nav",
      "HubSpot CRM",
      "Make.com",
      "Zapier",
      "Google Ads",
      "Meta Ads",
      "OpenAI API",
      "ZeroBounce",
      "PhantomBuster",
      "Prospeo",
      "Lemlist",
      "Stripe API",
    ],
    caseStudiesTitle: "Featured Lead Generation Campaigns",
    caseStudiesSubtitle: "Proven B2B campaigns that scaled pipeline and generated high-ticket sales meetings.",
    caseStudies: [
      {
        title: "B2B Outbound Acquisition Engine",
        category: "SAAS PIPELINE",
        year: "2026",
        description: "Automated multi-domain outbound infrastructure targeting VP-level decision makers with individualized data points.",
        tags: ["Apollo.io", "Smartlead", "Clay", "Cold Email"],
        image: "/images/stacked_service_2.jpg",
        metrics: "84 Demos Booked / mo",
      },
      {
        title: "High-Ticket Real Estate Pipeline",
        category: "COMMERCIAL REAL ESTATE",
        year: "2026",
        description: "High-intent Meta & Google search funnel acquiring pre-qualified property investors and commercial buyers.",
        tags: ["Meta Ads", "Google Ads", "Landing Funnels"],
        image: "/images/stage_2.jpg",
        metrics: "$28M+ Property Inquiries",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Everything you need to know about our lead generation and outbound pipeline infrastructure.",
    faqs: [
      {
        question: "Will cold emailing harm our primary company domain reputation?",
        answer: "Never. We strictly set up isolated secondary domains (e.g. yourcompanyhq.com) with separate IP addresses and dedicated Google Workspace accounts so your main corporate domain remains 100% protected.",
      },
      {
        question: "How quickly do we start seeing qualified meetings booked?",
        answer: "Domain warmup takes approximately 2 to 3 weeks to establish perfect deliverability. Once live campaigns start sending, positive replies and booked discovery calls typically begin within the first 5 to 7 days of live outreach.",
      },
      {
        question: "How do you guarantee the quality and accuracy of prospect data?",
        answer: "We use waterfall enrichment across multiple tier-1 data providers (Apollo, Clay, LinkedIn, Prospeo) and verify every single email address through dual verification APIs before sending.",
      },
      {
        question: "Can positive replies be booked directly onto our sales team's calendars?",
        answer: "Yes. Our automated routing system sends calendar booking links directly to interested prospects or notifies your reps in Slack within 60 seconds of a positive response.",
      },
    ],
    ctaHeadline: "Ready to Fill Your Calendar With Qualified Demos?",
    ctaSubtext: "Let's blueprint your custom B2B acquisition engine and start generating pipeline.",
  },

  "crm-solutions": {
    slug: "crm-solutions",
    number: "03",
    badge: "CRM SOLUTIONS",
    heroTitleLine1: "INTELLIGENT CRM",
    heroTitleLine2: "SYSTEMS & PIPELINES",
    heroSubtitle:
      "Tailored sales pipelines, automated deal workflows, and deep revenue analytics built to eliminate sales friction.",
    introBadge: "REVENUE OPERATIONS",
    introHeadline: "Centralize Your Revenue Operations & Automate Every Stage",
    introDescription:
      "Stop losing deals in fragmented spreadsheets and messy inboxes. We design custom CRM architectures and automated revenue workflows that give your sales reps superpowers and your leadership crystal-clear pipeline visibility.",
    metrics: [
      { label: "Sales Cycle Duration", value: "-35%" },
      { label: "Data Capture Accuracy", value: "99.8%" },
      { label: "Rep Admin Hours Saved", value: "20hrs/wk" },
      { label: "Close Rate Increase", value: "+28%" },
    ],
    dualShowcaseImages: ["/images/stage_3.jpg", "/images/stacked_service_4.jpg"],
    capabilitiesTitle: "CRM & RevOps Capabilities",
    capabilitiesSubtitle: "Engineered CRM systems that align marketing, sales, and client onboarding into one frictionless ecosystem.",
    capabilities: [
      {
        icon: "Layers",
        title: "Custom CRM Architecture",
        description: "Tailored setup and custom object modeling across HubSpot, Salesforce, GoHighLevel, and Pipedrive built around your exact sales process.",
        tags: ["HubSpot", "Salesforce", "Custom Objects", "GoHighLevel"],
      },
      {
        icon: "GitBranch",
        title: "Automated Deal Pipelines",
        description: "Stage-gate validations, automated task assignments, deal rot alerts, and SLA breach triggers that ensure no lead falls through the cracks.",
        tags: ["Deal Automation", "SLA Monitoring", "Task Routing", "Lead Scoring"],
      },
      {
        icon: "MessageSquare",
        title: "Omnichannel Communication Hub",
        description: "Two-way synchronization for email, SMS, WhatsApp, and VOIP calling directly inside the customer record with call recording and transcripts.",
        tags: ["Twilio Sync", "WhatsApp API", "Email Logging", "VOIP Call Tracking"],
      },
      {
        icon: "CreditCard",
        title: "Billing & ERP Integrations",
        description: "Seamless synchronization between your CRM and Stripe, QuickBooks, DocuSign, or custom billing portals for automated invoicing and contract generation.",
        tags: ["Stripe Invoicing", "DocuSign API", "QuickBooks Sync", "Pandadoc"],
      },
      {
        icon: "BarChart3",
        title: "Executive Revenue Dashboards",
        description: "Live executive analytics displaying pipeline velocity, rep win rates, weighted forecast revenue, and CAC-to-LTV payback period metrics.",
        tags: ["Revenue Forecasting", "Rep Leaderboards", "Attribution Models", "PowerBI"],
      },
      {
        icon: "RefreshCw",
        title: "Data Cleansing & Migration",
        description: "Flawless data extraction, deduplication, schema normalization, and zero-downtime historical migration from legacy systems.",
        tags: ["Zero Data Loss", "Deduplication", "Schema Mapping", "API Importer"],
      },
    ],
    fullWidthBannerImage: "/images/about_innovation_team.jpg",
    processTitle: "Our CRM Engineering\nLifecycle",
    processSubtitle: "A systematic transformation that turns messy sales pipelines into automated revenue engines.",
    processSteps: [
      {
        step: "01",
        title: "Revenue Operations Audit",
        description: "We examine your current sales cycle, identify friction points where deals stall, and map out the ideal stages from inquiry to closed-won.",
        deliverables: ["Sales Bottleneck Audit", "Pipeline Architecture Map", "Integration Matrix"],
      },
      {
        step: "02",
        title: "Data Modeling & Custom Pipeline Build",
        description: "We configure custom fields, pipeline rules, automated deal scoring, and stage gating inside your CRM platform.",
        deliverables: ["Custom CRM Environment", "Stage Progression Rules", "Required Field Validation"],
      },
      {
        step: "03",
        title: "Workflow Automation & Tool Integration",
        description: "We connect your forms, billing systems, contract generators, and notification channels via robust webhooks and API connectors.",
        deliverables: ["Stripe / DocuSign Webhooks", "Slack Alert Bots", "Automated Task Workflows"],
      },
      {
        step: "04",
        title: "Team Training & Live Onboarding",
        description: "We train your sales team with custom video SOPs, conduct live simulation workshops, and monitor system adoption.",
        deliverables: ["Video SOP Library", "Sales Team Workshop", "30-Day Post-Launch Support"],
      },
    ],
    techStackTitle: "CRM & RevOps Tech Stack",
    techStackSubtitle: "Enterprise-grade CRM tools, API bridges, and automation engines.",
    techStack: [
      "HubSpot",
      "Salesforce",
      "GoHighLevel",
      "Pipedrive",
      "Stripe API",
      "DocuSign",
      "Twilio",
      "Make.com",
      "Zapier",
      "PostgreSQL",
      "Cal.com",
      "Retool",
      "Zendesk",
      "ClickUp",
      "Monday.com",
      "ActiveCampaign",
    ],
    caseStudiesTitle: "Featured CRM Case Studies",
    caseStudiesSubtitle: "Real-world revenue systems delivering measurable sales velocity and operational clarity.",
    caseStudies: [
      {
        title: "Unified Deal Flow & Sales Hub",
        category: "FINANCIAL SERVICES",
        year: "2026",
        description: "Complete HubSpot RevOps transformation unifying 4 regional offices, automating deal progression, and cutting sales cycle by 42%.",
        tags: ["HubSpot", "Make.com", "Twilio", "Stripe"],
        image: "/images/stage_3.jpg",
        metrics: "-42% Sales Cycle Time",
      },
      {
        title: "Enterprise Client Portal & Pipeline",
        category: "B2B LOGISTICS",
        year: "2026",
        description: "Custom Salesforce and Stripe integration automating customer contracts, invoice delivery, and rep commission calculations.",
        tags: ["Salesforce", "DocuSign", "PostgreSQL", "Zapier"],
        image: "/images/about_arch_main.jpg",
        metrics: "$1.8M ARR Streamlined",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Clear answers to your CRM implementation and data migration questions.",
    faqs: [
      {
        question: "Can we migrate our existing customer data without losing notes or deal history?",
        answer: "Yes. We execute sanitized data migrations with custom script validation that preserves all historical deal records, contact notes, timestamps, and customer associations with zero data loss.",
      },
      {
        question: "Which CRM platform do you recommend: HubSpot, Salesforce, or GoHighLevel?",
        answer: "It depends on your business model. For high-growth B2B companies, HubSpot offers the fastest adoption and cleanest UI. For complex enterprise rules, Salesforce is ideal. For agencies and local service businesses, GoHighLevel is unbeatable.",
      },
      {
        question: "How do you ensure our sales reps actually use the new CRM system?",
        answer: "We eliminate manual data entry through automated enrichment and email sync, so reps spend time selling rather than typing. We also provide custom screen-recorded SOPs and live hands-on training sessions.",
      },
      {
        question: "Can the CRM integrate with our existing invoicing and contract software?",
        answer: "Yes. We build two-way integrations with Stripe, QuickBooks, DocuSign, PandaDoc, and custom ERPs to automate contract generation upon deal closure.",
      },
    ],
    ctaHeadline: "Ready to Supercharge Your Sales Operations?",
    ctaSubtext: "Talk to our RevOps architects to design an automated CRM pipeline that closes more deals.",
  },

  "ai-automation": {
    slug: "ai-automation",
    number: "04",
    badge: "AI & AUTOMATION",
    heroTitleLine1: "AI AGENTS &",
    heroTitleLine2: "SYSTEM AUTOMATION",
    heroSubtitle:
      "Autonomous AI workflows, custom LLM agents, and end-to-end process automation that 10x team leverage.",
    introBadge: "INTELLIGENT COMPUTING",
    introHeadline: "Automate Repetitive Workflows With Custom AI Intelligence",
    introDescription:
      "We build intelligent AI agents and autonomous workflows that run 24/7. From customer support triage to document processing and complex multi-app data routing, we turn manual bottlenecks into instant automated tasks with zero human error.",
    metrics: [
      { label: "Task Execution Speed", value: "Instant" },
      { label: "Support Ticket Deflection", value: "68%" },
      { label: "Operational Cost Reduction", value: "-55%" },
      { label: "System Availability", value: "24/7/365" },
    ],
    dualShowcaseImages: ["/images/about_ai_tech.jpg", "/images/stage_1.jpg"],
    capabilitiesTitle: "AI & Automation Capabilities",
    capabilitiesSubtitle: "Cutting-edge artificial intelligence systems designed to multiply operational throughput.",
    capabilities: [
      {
        icon: "Bot",
        title: "Autonomous AI Agents",
        description: "Multi-agent systems using LangChain, CrewAI, and OpenAI function calling that plan, reason, browse the web, and execute multi-step business tasks.",
        tags: ["LangChain", "CrewAI", "Function Calling", "GPT-4o"],
      },
      {
        icon: "Headphones",
        title: "RAG Support Copilots",
        description: "Retrieval-Augmented Generation bots trained strictly on your internal knowledge base to resolve customer inquiries accurately without hallucinations.",
        tags: ["Pinecone", "Vector Embeddings", "RAG Pipeline", "Zendesk Sync"],
      },
      {
        icon: "FileText",
        title: "Document & Invoice Intelligence",
        description: "Automated OCR extraction that reads PDFs, receipts, and invoices, extracts structured JSON fields, and inputs them directly into your ERP.",
        tags: ["OCR Vision", "JSON Extraction", "Automated Reconciliation", "FastAPI"],
      },
      {
        icon: "Network",
        title: "Complex Multi-App Workflows",
        description: "End-to-end event-driven automations connecting your forms, databases, communication channels, and internal APIs via n8n and Make.com.",
        tags: ["n8n", "Make.com", "Webhooks", "Self-Healing Workflows"],
      },
      {
        icon: "Mic",
        title: "Conversational Voice AI",
        description: "Ultra-low latency conversational voice assistants for inbound phone call qualification, appointment booking, and customer status updates.",
        tags: ["ElevenLabs", "Twilio Voice", "Whisper AI", "Sub-600ms Latency"],
      },
      {
        icon: "Database",
        title: "Internal Enterprise Knowledge Hubs",
        description: "Secure semantic search and AI Q&A engines that index internal Slack channels, Notion docs, PDFs, and Google Drive for instant staff answers.",
        tags: ["Semantic Search", "Enterprise Security", "Data Encryption", "OAuth2"],
      },
    ],
    fullWidthBannerImage: "/images/parallax_office.jpg",
    processTitle: "Our AI Implementation\nBlueprint",
    processSubtitle: "How we audit, engineer, test, and deploy production-grade AI agents into your business.",
    processSteps: [
      {
        step: "01",
        title: "Automation Opportunity Audit",
        description: "We identify the repetitive, high-labor bottlenecks across your operations and calculate the exact ROI of automating each process with AI.",
        deliverables: ["AI Feasibility Analysis", "ROI & Cost Breakdown", "Data Security Plan"],
      },
      {
        step: "02",
        title: "Prompt Engineering & Vector Setup",
        description: "We structure system prompts, implement guardrails, index your knowledge base into high-speed vector databases, and configure agent toolkits.",
        deliverables: ["Vector Database Pipeline", "System Guardrails", "API Endpoint Specs"],
      },
      {
        step: "03",
        title: "Integration & Fallback Architecture",
        description: "We build the automation logic in n8n/Python with strict exception handling, human-in-the-loop review queues, and logging telemetry.",
        deliverables: ["Working AI Pipeline", "Human Review UI", "Telemetry Dashboard"],
      },
      {
        step: "04",
        title: "Production Deployment & Fine-Tuning",
        description: "We deploy the AI systems with live token monitoring, latency optimization, and continuous evaluation loops to ensure accuracy.",
        deliverables: ["Live Production Agents", "Cost Optimization Report", "Ongoing Model Tuning"],
      },
    ],
    techStackTitle: "AI & Machine Learning Stack",
    techStackSubtitle: "State-of-the-art foundation models, vector stores, and orchestration frameworks.",
    techStack: [
      "OpenAI GPT-4o",
      "Claude 3.5 Sonnet",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "n8n",
      "Make.com",
      "Python",
      "FastAPI",
      "ElevenLabs",
      "Vercel AI SDK",
      "PostgreSQL (pgvector)",
      "Ollama",
      "Whisper AI",
      "ChromaDB",
      "Hugging Face",
    ],
    caseStudiesTitle: "Featured AI & Automation Deployments",
    caseStudiesSubtitle: "Measurable efficiency breakthroughs delivered with custom AI agents and workflows.",
    caseStudies: [
      {
        title: "Autonomous Customer Support & Triage",
        category: "FINTECH SUPPORT",
        year: "2026",
        description: "RAG-powered AI support agent resolving 68% of common inquiries instantly with zero human intervention and 94% CSAT.",
        tags: ["GPT-4o", "Pinecone", "LangChain", "Zendesk API"],
        image: "/images/stacked_service_4.jpg",
        metrics: "45,000+ Inquiries / mo",
      },
      {
        title: "Automated Invoice & Document Extraction",
        category: "LOGISTICS & SUPPLY CHAIN",
        year: "2026",
        description: "Vision AI OCR pipeline parsing freight bills and receipts in 3 seconds, cutting financial audit time from 4 days to 30 seconds.",
        tags: ["FastAPI", "Python", "OCR Vision", "n8n"],
        image: "/images/stage_1.jpg",
        metrics: "99.4% Parsing Accuracy",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Clear answers to your AI safety, privacy, and integration questions.",
    faqs: [
      {
        question: "How do you prevent AI hallucinations and incorrect answers?",
        answer: "We implement Retrieval-Augmented Generation (RAG) with strict system guardrails. The AI is programmed to only answer using verified context from your knowledge base and will gracefully escalate to a human agent when uncertain.",
      },
      {
        question: "Is our proprietary company data safe and kept private?",
        answer: "Yes, 100%. We utilize enterprise API endpoints with zero-data-retention agreements where your data is never used to train public foundation models. All data in transit and at rest is encrypted with AES-256.",
      },
      {
        question: "How much do OpenAI / LLM API costs typically run per month?",
        answer: "With modern token optimization, prompt caching, and lightweight model routing (e.g. GPT-4o-mini for simple tasks), average API usage costs typically range from $15 to $80/month even at high operational volume.",
      },
      {
        question: "Can the AI agent take direct actions in our existing software like CRMs and email?",
        answer: "Yes. Using structured function calling and secure API webhooks, our AI agents can create CRM deals, send calendar invitations, issue refunds, and trigger Slack notifications automatically.",
      },
    ],
    ctaHeadline: "Ready to Automate Your Business Operations With AI?",
    ctaSubtext: "Schedule an AI architecture session to discover which workflows will yield the highest ROI.",
  },

  "saas-development": {
    slug: "saas-development",
    number: "05",
    badge: "SAAS DEVELOPMENT",
    heroTitleLine1: "SCALABLE SAAS",
    heroTitleLine2: "SOFTWARE & PORTALS",
    heroSubtitle:
      "Multi-tenant cloud architectures, subscription billing, interactive dashboards, and battle-tested SaaS infrastructure.",
    introBadge: "CLOUD SOFTWARE ARCHITECTURE",
    introHeadline: "From MVP to Multi-Tenant Enterprise Cloud Platforms",
    introDescription:
      "We engineer robust, scalable SaaS applications that handle millions of requests with ease. With secure multi-tenancy, automated subscription lifecycle management, and ultra-responsive dashboards, we build software products that win market share.",
    metrics: [
      { label: "API Response Latency", value: "<45ms" },
      { label: "System Availability", value: "99.99%" },
      { label: "Multi-Tenant Isolation", value: "Bank-Grade" },
      { label: "Deployment Cycle", value: "Instant CI/CD" },
    ],
    dualShowcaseImages: ["/images/stacked_service_3.jpg", "/images/stage_2.jpg"],
    capabilitiesTitle: "SaaS Engineering Capabilities",
    capabilitiesSubtitle: "Full-cycle software engineering designed for high availability, security, and recurring subscription revenue.",
    capabilities: [
      {
        icon: "Cloud",
        title: "Multi-Tenant Cloud Architectures",
        description: "Enterprise-grade multi-tenancy with row-level security (RLS), isolated tenant schemas, custom subdomain routing, and automated tenant provisioning.",
        tags: ["Multi-Tenancy", "Supabase RLS", "PostgreSQL", "Subdomain Routing"],
      },
      {
        icon: "CreditCard",
        title: "Subscription & Usage Billing",
        description: "End-to-end Stripe Billing integration supporting tiered subscriptions, per-seat licensing, metered usage billing, and localized taxes.",
        tags: ["Stripe Billing", "Usage Metering", "Customer Portal", "Dunning Logic"],
      },
      {
        icon: "PieChart",
        title: "High-Density Analytics Dashboards",
        description: "Real-time interactive data visualizations, financial charts, drag-and-drop kanban boards, and exportable CSV/PDF reporting engines.",
        tags: ["Recharts", "WebSockets", "Data Grids", "PDF Generation"],
      },
      {
        icon: "ShieldCheck",
        title: "Enterprise Auth & Role Permissions",
        description: "SSO (SAML, Okta, Google Workspace), multi-factor authentication (MFA), role-based access control (RBAC), and session auditing.",
        tags: ["WorkOS", "NextAuth / Clerk", "RBAC Permissions", "SAML SSO"],
      },
      {
        icon: "Code",
        title: "Public Developer APIs & Webhooks",
        description: "Secure RESTful and GraphQL APIs with API key management, rate-limiting tiers, automated OpenAPI documentation, and outgoing webhook engines.",
        tags: ["REST / GraphQL", "API Keys", "Rate Limiting", "Swagger / OpenAPI"],
      },
      {
        icon: "Server",
        title: "DevOps & Auto-Scaling Infrastructure",
        description: "Containerized deployment pipelines on AWS and Vercel with Redis caching, PostgreSQL connection pooling, and automated failover.",
        tags: ["Docker", "AWS ECS", "PgBouncer", "Terraform / GitHub Actions"],
      },
    ],
    fullWidthBannerImage: "/images/about_team_collab.jpg",
    processTitle: "Our SaaS Product\nEngineering Lifecycle",
    processSubtitle: "How we take your software vision from architectural design to profitable subscription product.",
    processSteps: [
      {
        step: "01",
        title: "Product Scope & Technical Architecture",
        description: "We define user roles, database relational models, billing tiers, and API specifications before writing a single line of code.",
        deliverables: ["Product Requirements Document", "ERD Database Diagram", "API Architecture Plan"],
      },
      {
        step: "02",
        title: "UX Design & Interactive Dashboard Mockups",
        description: "We design every dashboard state, modal, settings screen, and onboarding flow with intuitive ergonomic UX patterns.",
        deliverables: ["Complete Figma Dashboard Suite", "Component Library", "User Onboarding Flow"],
      },
      {
        step: "03",
        title: "Full-Stack Development Sprints",
        description: "We build the platform in transparent two-week sprints with unit testing, integration tests, and live staging previews.",
        deliverables: ["Working SaaS Application", "Stripe Webhook Suite", "Staging Environment"],
      },
      {
        step: "04",
        title: "Security Penetration Audit & Global Launch",
        description: "We conduct vulnerability audits, test auto-scaling under synthetic load, configure zero-downtime CI/CD, and launch to the public.",
        deliverables: ["Security Audit Report", "Production Infrastructure", "SLA Support Agreement"],
      },
    ],
    techStackTitle: "SaaS Technology Stack",
    techStackSubtitle: "Modern, battle-tested software engineering tools built for scale and developer velocity.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Redis",
      "Docker",
      "AWS",
      "Stripe Billing",
      "Tailwind CSS",
      "GitHub Actions",
      "GraphQL",
      "tRPC",
      "Vercel",
    ],
    caseStudiesTitle: "Featured SaaS Applications",
    caseStudiesSubtitle: "Real-world cloud software platforms driving recurring subscription revenue.",
    caseStudies: [
      {
        title: "Apex Enterprise Cloud Portal",
        category: "FINTECH SAAS",
        year: "2026",
        description: "Multi-tenant financial analytics dashboard serving 120,000+ active business users with real-time portfolio tracking and instant Stripe payouts.",
        tags: ["Next.js", "PostgreSQL", "Supabase RLS", "Stripe"],
        image: "/images/stage_2.jpg",
        metrics: "120k+ Active Users",
      },
      {
        title: "Omnichannel SaaS Inventory Engine",
        category: "E-COMMERCE INFRASTRUCTURE",
        year: "2026",
        description: "High-throughput cloud portal syncing stock levels across Shopify, Amazon, and warehouse ERPs in sub-second latency.",
        tags: ["Node.js", "Redis", "TypeScript", "AWS"],
        image: "/images/stacked_service_3.jpg",
        metrics: "10M+ Daily API Calls",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Clear answers to questions regarding SaaS architecture, IP ownership, and scalability.",
    faqs: [
      {
        question: "Do we own 100% of the code and intellectual property?",
        answer: "Yes, absolutely. You receive 100% full intellectual property ownership and full repository access upon project completion. We do not charge ongoing royalty fees.",
      },
      {
        question: "How do you handle multi-tenant data security and tenant isolation?",
        answer: "We enforce PostgreSQL Row-Level Security (RLS) policies at the database layer paired with tenant token validation in our API middleware, ensuring tenant data is mathematically isolated.",
      },
      {
        question: "Can we implement complex pricing like usage-based metering or per-seat billing?",
        answer: "Yes. We have deep expertise with Stripe Billing and custom webhook event tracking to support tiered pricing, seat licenses, metered API consumption, and custom enterprise invoicing.",
      },
      {
        question: "How does the infrastructure scale as our user base grows?",
        answer: "We architect on serverless and containerized micro-instances with connection pooling (PgBouncer) and Redis caching layers that automatically scale horizontally as your traffic multiplies.",
      },
    ],
    ctaHeadline: "Ready to Build & Scale Your Next SaaS Product?",
    ctaSubtext: "Connect with our cloud software architects to review your technical roadmap.",
  },

  "app-development": {
    slug: "app-development",
    number: "06",
    badge: "APP DEVELOPMENT",
    heroTitleLine1: "NATIVE & HYBRID",
    heroTitleLine2: "MOBILE APPS",
    heroSubtitle:
      "High-performance iOS and Android applications built with React Native, Flutter, and native frameworks.",
    introBadge: "MOBILE ENGINEERING",
    introHeadline: "Fluid, Native-Grade Mobile Apps for iOS & Android",
    introDescription:
      "We craft mobile experiences that users love. Leveraging cross-platform frameworks and native hardware modules, we deliver 60fps animations, instant offline sync, biometric security, and streamlined App Store submissions.",
    metrics: [
      { label: "Interface Frame Rate", value: "60 FPS" },
      { label: "Crash-Free Sessions", value: "99.9%" },
      { label: "App Store Rating Avg", value: "4.9/5" },
      { label: "Codebase Reusability", value: "90%+" },
    ],
    dualShowcaseImages: ["/images/stage_1.jpg", "/images/stage_3.jpg"],
    capabilitiesTitle: "Mobile Development Capabilities",
    capabilitiesSubtitle: "Full-cycle iOS and Android app engineering from wireframing to App Store approval.",
    capabilities: [
      {
        icon: "Smartphone",
        title: "Cross-Platform Mobile Apps",
        description: "Unified cross-platform engineering with React Native (Expo) and Flutter delivering near-100% code sharing across iOS and Android without sacrificing native performance.",
        tags: ["React Native", "Expo SDK", "Flutter", "TypeScript"],
      },
      {
        icon: "Cpu",
        title: "Native Device Feature Modules",
        description: "Deep native hardware integration including Bluetooth Low Energy (BLE), background GPS tracking, camera pipelines, NFC, and biometric authentication.",
        tags: ["Biometrics / FaceID", "BLE Sensors", "Background GPS", "Camera API"],
      },
      {
        icon: "WifiOff",
        title: "Offline-First Local Sync",
        description: "Robust offline database architecture (SQLite, WatermelonDB) with optimistic UI updates and automated conflict resolution upon reconnecting.",
        tags: ["WatermelonDB", "SQLite", "Optimistic UI", "Sync Engine"],
      },
      {
        icon: "CreditCard",
        title: "In-App Purchases & Subscriptions",
        description: "Seamless monetization with RevenueCat, Apple StoreKit 2, and Google Play Billing for recurring in-app subscriptions and paywalls.",
        tags: ["RevenueCat", "Apple Pay", "Google Play Billing", "Paywall A/B"],
      },
      {
        icon: "Bell",
        title: "Push Notifications & Engagement",
        description: "Rich push notification workflows with OneSignal and Firebase, interactive action buttons, deep-linking routing, and scheduled engagement triggers.",
        tags: ["OneSignal", "Firebase Cloud Messaging", "Deep Linking", "User Segments"],
      },
      {
        icon: "CheckCircle",
        title: "App Store & Play Store Submissions",
        description: "Complete handling of the Apple App Store and Google Play Console submission process, compliance audits, and fast-track review management.",
        tags: ["App Store Review", "Google Play Console", "TestFlight", "Privacy Nutrition Labels"],
      },
    ],
    fullWidthBannerImage: "/images/about_arch_main.jpg",
    processTitle: "Our Mobile App\nDevelopment Lifecycle",
    processSubtitle: "From initial gesture wireframes to published App Store success.",
    processSteps: [
      {
        step: "01",
        title: "Mobile UX & Gesture Architecture",
        description: "We map out touch targets, swipe interactions, modal sheets, and device ergonomics tailored for iOS and Android guidelines.",
        deliverables: ["Figma Mobile UI Suite", "Clickable Prototype", "User Flow Diagrams"],
      },
      {
        step: "02",
        title: "Native Architecture & API Modeling",
        description: "We configure the native navigation stack, establish the offline database schema, and design lightweight mobile API endpoints.",
        deliverables: ["Navigation Hierarchy", "Offline Sync Blueprint", "Mobile API Contracts"],
      },
      {
        step: "03",
        title: "Sprint-Based App Development",
        description: "We code the mobile app with React Native, integrate native device modules, and push continuous internal builds via TestFlight.",
        deliverables: ["TestFlight iOS Builds", "Android APK Staging", "Weekly Feature Drops"],
      },
      {
        step: "04",
        title: "QA Device Matrix & Store Approval",
        description: "We test on 30+ physical screen sizes, verify memory leaks, submit to Apple & Google review boards, and guarantee approval.",
        deliverables: ["App Store Live Release", "Google Play Store Release", "Crash Analytics Setup"],
      },
    ],
    techStackTitle: "Mobile Technology Stack",
    techStackSubtitle: "Modern mobile frameworks, native tooling, and cloud backend integrations.",
    techStack: [
      "React Native",
      "Expo SDK",
      "TypeScript",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "RevenueCat",
      "Supabase",
      "OneSignal",
      "GraphQL",
      "Tailwind (NativeWind)",
      "TestFlight",
      "SQLite",
      "WatermelonDB",
      "App Store Connect",
    ],
    caseStudiesTitle: "Featured Mobile Applications",
    caseStudiesSubtitle: "Engaging native and cross-platform apps published on the App Store and Google Play.",
    caseStudies: [
      {
        title: "Silver Arrow Luxury Mobile Key",
        category: "IOT & AUTOMOTIVE APP",
        year: "2026",
        description: "React Native mobile companion with Bluetooth LE digital vehicle unlocking, GPS tracking, and instant reservation extensions.",
        tags: ["React Native", "BLE", "TypeScript", "RevenueCat"],
        image: "/images/stage_1.jpg",
        metrics: "4.9 ★ App Store Rating",
      },
      {
        title: "Prime Health & Fitness Companion",
        category: "HEALTH & WELLNESS",
        year: "2026",
        description: "Offline-first workout and recovery mobile app with Apple HealthKit / Google Fit biometric synchronization.",
        tags: ["Expo", "WatermelonDB", "HealthKit", "Firebase"],
        image: "/images/stage_3.jpg",
        metrics: "85k+ Active Mobile Users",
      },
    ],
    faqsTitle: "Frequently Asked Questions",
    faqsSubtitle: "Clear answers to your mobile development and App Store publishing questions.",
    faqs: [
      {
        question: "Should we build with React Native or fully native Swift / Kotlin?",
        answer: "For 95% of applications, React Native (or Flutter) is the ideal choice. It allows you to build both iOS and Android apps simultaneously from a single codebase, cutting development and maintenance costs in half with 60fps native performance.",
      },
      {
        question: "Do you guarantee our app will be approved by Apple and Google?",
        answer: "Yes, 100%. We handle all App Store guideline compliance, privacy manifests, in-app purchase regulations, and review communications until your app is approved and live.",
      },
      {
        question: "How do users test the app before it goes public?",
        answer: "We distribute weekly pre-release beta builds directly to your team and stakeholders using Apple TestFlight for iOS and Google Play Internal Testing for Android.",
      },
      {
        question: "Can the app function offline when the user has no cellular connection?",
        answer: "Yes. We build with offline-first local databases (SQLite / WatermelonDB) so users can interact with the app seamlessly offline, and changes automatically sync when connectivity is restored.",
      },
    ],
    ctaHeadline: "Ready to Build an Award-Winning Mobile App?",
    ctaSubtext: "Consult with our mobile engineering leads to review your app concepts and architecture.",
  },
};
