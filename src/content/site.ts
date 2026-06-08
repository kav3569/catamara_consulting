export type NavLink = {
  href: string;
  label: string;
  summary: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ServiceCapability = {
  title: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  project: string;
  client: string;
  location: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string[];
  execution: string[];
  outcomes: string[];
  metrics: Metric[];
};

export const navigation: NavLink[] = [
  {
    href: "/",
    label: "Home",
    summary: "Industrial technology positioning and global footprint.",
  },
  {
    href: "/ai-agent",
    label: "AI Agent",
    summary: "Workflow MVP and planned automation layer.",
  },
  {
    href: "/services",
    label: "Services",
    summary: "Capabilities spanning sourcing, NPD, NVD, and VAVE.",
  },
  {
    href: "/industries",
    label: "Industries",
    summary: "Automotive and industrial manufacturing expertise.",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    summary: "Proof points grounded in delivered cost and launch outcomes.",
  },
  {
    href: "/about",
    label: "About",
    summary: "Mission, vision, value proposition, and global operating model.",
  },
  {
    href: "/contact",
    label: "Contact",
    summary: "Project inquiries, partnerships, and consultation requests.",
  },
];

export const futureArchitecture = [
  "Insights",
  "Resources",
  "Careers",
  "Supplier Network",
  "Partner Portal",
];

export const siteContent = {
  company: {
    name: "CATAMARA",
    fullName: "Catamara Consulting",
    email: "info@catamaraconsulting.com",
    phone: "+91 9482146456",
    locations: ["Germany", "India", "China"],
    positioning:
      "Global supply chain intelligence, sourcing, supplier development, and industrial technology.",
    tagline:
      "Navigate the right product at the right time for the right price and create seamless, efficient supply chains.",
    summary:
      "CATAMARA operates at the intersection of manufacturing, engineering, supply chain, and AI-enabled workflow execution.",
    originStory:
      "The team in Germany, India, and China brings decades of combined experience in product development and sourcing, supported by a global network of reputed automotive and industrial component manufacturers.",
    mission:
      "Be the go-to partner for companies looking for comprehensive consulting tailored to their business needs in a VUCA world.",
    vision:
      "Navigate the right product at the right time for the right price and create seamless and efficient supply chains.",
    coreBelief:
      "A more connected future of sustained growth and success is built on knowledge, network, and trust.",
    differentiator:
      "A deep understanding of the technical landscape combined with ever-changing market dynamics, with strong emphasis on quality, reliability, and competitive pricing.",
    valueProposition: [
      "Knowledge, network, and experience across automotive and industrial sectors.",
      "VAVE: Value Analysis and Value Engineering for measurable cost savings.",
      "Competitive advantage through smart partnerships with vetted suppliers.",
      "High standards of quality and compliance.",
      "External perspective for technical and commercial decision-making.",
    ],
    structure: {
      headline: "Small core team. Structured global execution.",
      detail:
        "The organization visual describes a small team of three individuals, a structured organization for growth, and streamlined operations with enhanced collaboration.",
    },
  },
  home: {
    eyebrow: "Industrial Technology Platform",
    title:
      "Supply chain intelligence for teams building the next generation of manufacturing.",
    intro:
      "CATAMARA combines sourcing, supplier development, product execution, and workflow automation into one enterprise-grade operating layer for automotive and industrial organizations.",
    highlights: [
      "Global supplier network across Germany, India, and China",
      "Technical supplier management from requirements through ramp-up",
      "Workflow MVP for inquiry parsing, RFQ creation, and quote comparison",
    ],
  },
  metrics: [
    {
      value: "3",
      label: "Operating hubs",
      detail: "Germany, India, and China",
    },
    {
      value: "20%",
      label: "GPC reduction",
      detail: "Project WB350 at Schaeffler Automotive Aftermarket, Germany",
    },
    {
      value: "35%",
      label: "Profit margin maintained",
      detail: "Delivered alongside 20% GPC savings in the WB350 program",
    },
    {
      value: "180",
      label: "Products launched",
      detail: "Project NAPA, USA launched 180 products within one year",
    },
    {
      value: "70%",
      label: "Lead-time reduction",
      detail: "Reduced product launch lead times through feasibility and make-or-buy work",
    },
    {
      value: "80%",
      label: "Cost locked in at design stage",
      detail: "VAVE focus area highlighted in CATAMARA source materials",
    },
  ] as Metric[],
  services: [
    {
      title: "Technical Supplier Management",
      category: "Execution system",
      summary:
        "End-to-end supplier qualification, performance tracking, audit management, and corrective action coordination.",
      bullets: [
        "RFQ management and supplier matching",
        "Pre-qualification and compliance audits",
        "Technical specification alignment",
        "Multi-source and dual-source strategies",
      ],
    },
    {
      title: "Supplier Development",
      category: "Capability building",
      summary:
        "Embedded support for suppliers that need to close performance gaps and build sustainable manufacturing capability.",
      bullets: [
        "Supplier performance assessments",
        "Process improvement programs",
        "Quality system implementation including IATF 16949 and ISO 9001",
        "On-site technical coaching",
      ],
    },
    {
      title: "New Product Development (NPD)",
      category: "Program orchestration",
      summary:
        "Structured development from requirements definition through prototype, validation, design optimization, production ramp-up, and supplier integration.",
      bullets: [
        "Requirements definition and supplier selection",
        "Design review and approval loops",
        "Prototype development, testing, and validation",
        "QA, QC, and production ramp-up coordination",
      ],
    },
    {
      title: "New Vendor Development (NVD)",
      category: "Supplier onboarding",
      summary:
        "A full vendor-development workflow from need identification to relationship management and continuous improvement.",
      bullets: [
        "Vendor identification and pre-qualification",
        "RFI and proposal evaluation",
        "Site visits, audits, and contract negotiation",
        "Pilot validation, KPI monitoring, and collaboration mechanisms",
      ],
    },
    {
      title: "Market Analysis",
      category: "Strategic intelligence",
      summary:
        "Competitive benchmarking, market entry analysis, segment evaluation, and pricing intelligence before capital or tooling commitments are made.",
      bullets: [
        "Competitive benchmarking",
        "Segment and market opportunity analysis",
        "Pricing intelligence",
        "Entering new segments and rapid market adoption support",
      ],
    },
    {
      title: "Business Consulting",
      category: "Strategic function",
      summary:
        "Strategic advisory for automotive and industrial companies navigating transformation, launch decisions, and execution planning.",
      bullets: [
        "Product development strategy",
        "Make-or-buy decisions",
        "Market adoption planning",
        "Rapid launch execution support",
      ],
    },
    {
      title: "Value Engineering & Value Analysis",
      category: "Cost architecture",
      summary:
        "A systematic, analytical approach to maximize value and reduce cost without compromising quality.",
      bullets: [
        "Value engineering and value analysis methodology",
        "Materials, labor, and process cost optimization",
        "Early design-stage intervention where up to 80% of cost is determined",
        "Business-case presentation and validated savings pathways",
      ],
    },
  ] as ServiceCapability[],
  industries: [
    {
      title: "Automotive",
      summary:
        "OEM and Tier 1 supplier development across powertrain, chassis, body, and EV-specific components.",
      bullets: [
        "Deep familiarity with the lifecycle from concept to SOP",
        "Software-defined and AI-enabled vehicle transition context",
        "Standards and methods including IATF 16949, PPAP, APQP, FAI, and 3-batch validation",
      ],
      standards: ["IATF 16949", "PPAP", "APQP", "FAI", "3-Batch Validation"],
    },
    {
      title: "Industrial Manufacturing",
      summary:
        "Heavy equipment, capital machinery, precision fabrication, and agricultural machinery supply chains.",
      bullets: [
        "High-mix, low-volume sourcing environments",
        "Complex sub-assembly requirements",
        "Focus on precision manufacturing and capital equipment ecosystems",
      ],
      standards: ["ISO 9001", "High-Mix / Low-Volume", "Sub-Assembly", "Capital Equipment"],
    },
  ],
  caseStudies: [
    {
      slug: "wb350",
      project: "Project WB350",
      client: "Schaeffler Automotive Aftermarket",
      location: "Germany",
      headline: "Value engineering that reduced cost while preserving margin.",
      summary:
        "CATAMARA's VAVE methodology was used to create measurable cost savings without walking away from commercial health.",
      challenge:
        "Reduce gross product cost while maintaining a healthy profit margin in an aftermarket program.",
      approach: [
        "Applied CATAMARA's value engineering and value analysis framework.",
        "Focused intervention at the design stage, where the source material states up to 80% of product cost is determined.",
        "Used technical and commercial review to protect quality while improving cost structure.",
      ],
      execution: [
        "Gathered cost, materials, and process inputs.",
        "Evaluated alternatives through functional analysis and creative speculation.",
        "Developed an implementation-ready business case for the optimized solution.",
      ],
      outcomes: [
        "Saved 20% GPC.",
        "Maintained a healthy 35% profit margin.",
      ],
      metrics: [
        {
          value: "20%",
          label: "GPC reduction",
          detail: "Quoted directly in the source material",
        },
        {
          value: "35%",
          label: "Margin maintained",
          detail: "Quoted directly in the source material",
        },
      ],
    },
    {
      slug: "napa",
      project: "Project NAPA",
      client: "NAPA",
      location: "USA",
      headline: "Launch acceleration through feasibility and make-or-buy discipline.",
      summary:
        "CATAMARA supported launch execution by combining feasibility analysis with make-or-buy decisions.",
      challenge:
        "Launch a large number of products quickly without sacrificing decision quality.",
      approach: [
        "Used feasibility analysis to remove friction from the launch pipeline.",
        "Applied make-or-buy decisions to prioritize the right execution path.",
        "Structured execution around product readiness and supplier coordination.",
      ],
      execution: [
        "Coordinated product launch planning through CATAMARA's product-development expertise.",
        "Aligned sourcing and execution decisions to reduce delays.",
        "Focused on repeatable launch throughput across the program year.",
      ],
      outcomes: [
        "Successfully launched 180 products within one year.",
        "Reduced product launch lead times by 70%.",
      ],
      metrics: [
        {
          value: "180",
          label: "Products launched",
          detail: "Quoted directly in the source material",
        },
        {
          value: "70%",
          label: "Lead-time reduction",
          detail: "Quoted directly in the source material",
        },
      ],
    },
  ] as CaseStudy[],
  aiAgent: {
    label: "Procurement AI Workflow MVP",
    summary:
      "The current CATAMARA AI Agent prototype is presented as a workflow assistant for automotive parts sourcing, focused on parsing customer inquiries, generating supplier RFQs, and comparing supplier quotations.",
    stages: [
      {
        step: "01",
        title: "Inquiry Parser",
        description:
          "Reads raw customer inquiry emails and extracts clean line items, specifications, units, annual volumes, and notes.",
      },
      {
        step: "02",
        title: "RFQ Generator",
        description:
          "Generates structured, professional supplier RFQ emails from parsed line items and selected supplier details.",
      },
      {
        step: "03",
        title: "Quote Comparator",
        description:
          "Compares supplier quote replies and prepares a structured recommendation for CATAMARA's sourcing workflow.",
      },
    ] as ProcessStep[],
    automationLayers: [
      {
        step: "AI-1",
        title: "Inquiry Processing & RFQ Drafting",
        description:
          "Auto-reads SPR inquiry, extracts specs and target price, and generates a structured RFQ for suppliers in seconds.",
      },
      {
        step: "AI-2",
        title: "Supplier Quote Analysis & Negotiation Assist",
        description:
          "Benchmarks supplier quotes against the target price, flags gaps, and prepares counter-offer strategies and talking points.",
      },
      {
        step: "AI-3",
        title: "PO Drafting & Document Management",
        description:
          "Auto-generates PO documents, maintains version control, and stores transaction documents in a searchable repository.",
      },
      {
        step: "AI-4",
        title: "Quality Checklist & Inspection Reports",
        description:
          "Generates pre-shipment inspection checklists from specs, logs outcomes, and alerts CATAMARA on non-conformances before shipment approval.",
      },
    ] as ProcessStep[],
    transactionPhases: [
      {
        title: "Phase 1 - Inquiry & Price Negotiation",
        steps: [
          "SPR raises the inquiry with specs, quantities, and target price to CATAMARA.",
          "CATAMARA issues formal RFQs to qualified suppliers with technical alignment.",
          "CATAMARA leads price negotiations against the target price and finalizes the rate.",
        ],
      },
      {
        title: "Phase 2 - Order Placement",
        steps: [
          "SPR raises a PO and sends it to CATAMARA.",
          "CATAMARA issues the supplier-facing PO and remains the central documentation hub.",
        ],
      },
      {
        title: "Phase 3 - Quality, Logistics & Delivery",
        steps: [
          "CATAMARA conducts or arranges pre-shipment quality inspection at the supplier premises.",
          "CATAMARA manages coordination up to FOB, including shipping documents and Bill of Lading handover.",
          "CATAMARA follows through on payment confirmation and transaction closure once goods are delivered to the shipping agent.",
        ],
      },
    ],
    quickReference: [
      {
        title: "SPR",
        description: "Raises inquiry, issues PO to CATAMARA, and receives goods.",
      },
      {
        title: "CATAMARA",
        description:
          "Handles negotiations, supplier-facing PO, QC, and logistics coordination as the central operating hub.",
      },
      {
        title: "Supplier",
        description: "Quotes, manufactures, passes QC, and ships on schedule.",
      },
      {
        title: "AI Agent (planned)",
        description:
          "Automates RFQs, PO drafts, QC checklists, tracking, and communication logging.",
      },
    ],
  },
  npdSteps: [
    {
      step: "01",
      title: "Requirements Definition",
      description:
        "Technical specifications, quality standards, delivery schedules, and performance criteria are aligned with CATAMARA.",
    },
    {
      step: "02",
      title: "Supplier Selection",
      description:
        "Suppliers are selected against expertise, quality, cost, capacity, reliability, and past performance.",
    },
    {
      step: "03",
      title: "Initial Design & Proposal",
      description:
        "The selected supplier develops feasibility studies, concept direction, and cost estimates.",
    },
    {
      step: "04",
      title: "Design Review & Approval",
      description:
        "Customer review ensures alignment with requirements, objectives, and necessary iterations.",
    },
    {
      step: "05",
      title: "Prototype Development",
      description:
        "Prototypes are developed for testing and early identification of design and quality issues.",
    },
    {
      step: "06",
      title: "Testing & Validation",
      description:
        "Functional, durability, environmental, and compliance testing validate the part against requirements.",
    },
    {
      step: "07",
      title: "Design Optimization",
      description:
        "Testing insights are used to improve performance, reliability, manufacturability, or cost-effectiveness.",
    },
    {
      step: "08",
      title: "Production Ramp-Up",
      description:
        "Suppliers scale capacity, tooling, equipment, and training to meet required volume and delivery schedules.",
    },
    {
      step: "09",
      title: "QA & QC",
      description:
        "Rigorous process monitoring, inspection, and testing are maintained throughout production.",
    },
    {
      step: "10",
      title: "Supplier Integration & Collaboration",
      description:
        "CATAMARA and the customer coordinate closely with the supplier to ensure smooth supply-chain integration.",
    },
  ] as ProcessStep[],
  nvdSteps: [
    {
      step: "01",
      title: "Identify Need",
      description:
        "Need for a new vendor is defined through cost, capacity, delivery, or strategic drivers.",
    },
    {
      step: "02",
      title: "Vendor Identification",
      description:
        "Potential vendors are identified through market research, referrals, trade shows, and directories.",
    },
    {
      step: "03",
      title: "Supplier Pre-Qualification",
      description:
        "Vendors are screened on experience, certifications, compliance, financial stability, and reputation.",
    },
    {
      step: "04",
      title: "RFI",
      description:
        "Requests for information gather detail on capability, service, pricing, quality control, and compliance.",
    },
    {
      step: "05",
      title: "Proposal Evaluation",
      description:
        "Vendors are evaluated against pricing, quality, delivery schedules, warranty, payment terms, and SLAs.",
    },
    {
      step: "06",
      title: "Site Visits & Audits",
      description:
        "Facilities, production processes, quality systems, and regulatory compliance are assessed.",
    },
    {
      step: "07",
      title: "Contract Negotiation",
      description:
        "Pricing, payment terms, delivery schedules, standards, and warranty terms are negotiated.",
    },
    {
      step: "08",
      title: "Pilot & Test Phase",
      description:
        "Trial execution can include FAI and three-batch validation to test product or service quality.",
    },
    {
      step: "09",
      title: "Performance Monitoring",
      description:
        "KPIs track quality, delivery timelines, customer-service responsiveness, and SLA adherence.",
    },
    {
      step: "10",
      title: "Continuous Improvement",
      description:
        "Feedback loops are used to improve performance and surface new enhancement opportunities.",
    },
    {
      step: "11",
      title: "Relationship Management",
      description:
        "Long-term vendor relationships are built on mutual respect, trust, transparency, and regular review.",
    },
  ] as ProcessStep[],
  vaveSteps: [
    {
      step: "01",
      title: "Gather Information",
      description: "Collect the cost, materials, manufacturing-process, and labor baseline.",
    },
    {
      step: "02",
      title: "Functional Analysis",
      description: "Evaluate what each function costs against what it is worth.",
    },
    {
      step: "03",
      title: "Creative Speculation",
      description: "Explore alternative designs, materials, and manufacturing routes.",
    },
    {
      step: "04",
      title: "Value Analysis",
      description: "Compare alternatives against cost, quality, risk, and manufacturability.",
    },
    {
      step: "05",
      title: "Development",
      description: "Prototype and validate the optimized solution.",
    },
    {
      step: "06",
      title: "Presentation",
      description: "Present the business case with projected savings and an implementation path.",
    },
  ] as ProcessStep[],
  contact: {
    inquiryTypes: [
      "Supplier sourcing",
      "Supplier development",
      "New product development",
      "New vendor development",
      "Value engineering / value analysis",
      "AI workflow collaboration",
      "Partnership opportunities",
    ],
    note:
      "The contact experience is centered around direct phone-based conversations for consultation requests, project inquiries, and partnership discussions.",
  },
};
