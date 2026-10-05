// Site content gathered from the AMC Company Profile 2025 (17-page PDF extract).
// Source of truth rules: see AMC-WEBSITE-PLAN.md section 3 (Verified facts register).
// FLAG items below need AMC sign-off before launch.

export const site = {
  name: "Africa Management Consult",
  shortName: "AMC",
  legalName: "Africa Management Consult Limited",
  tagline: "Building Capacities for Growth",
  regNo: "138382",
  incorporated: "2011",
  email: "africamacoltd@gmail.com", // FLAG: move to domain email before launch
  phonePrimary: "+256 702 831 314",
  phoneAlt: ["+256 752 957 890", "+256 772 565 540"],
  whatsapp: "+256 772 565 540", // FLAG: confirm which number carries WhatsApp Business
  address: "Plot 1353 Sonde, Goma Division, Mukono Municipality, Mukono, Uganda",
  whatsappLink: "https://wa.me/256772565540",
} as const;

export const stats = [
  { value: "Since 2011", label: "Incorporated in Uganda", note: "Registration No. 138382" },
  { value: "1,000+", label: "Entrepreneurs trained", note: "Business skills and mentorship" },
  { value: "50+", label: "Development assignments", note: "Delivered across Uganda and East Africa" },
  { value: "ILO & ITC", label: "Certified master trainers", note: "Business, entrepreneurship, financial literacy" },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  detail: string;
  included: string[];
  methods: string[];
};

export const services: Service[] = [
  {
    slug: "enterprise-economic-development",
    name: "Enterprise and Economic Development",
    short: "Business training, mentorship and access to finance for micro, small and medium enterprises.",
    description:
      "We support micro, small, and medium enterprises through tailored business training, mentorship, and access to finance. Our programs promote inclusive, sustainable growth across key sectors including agriculture and green enterprise.",
    detail:
      "AMC offers a wide range of services to support micro to medium-scale enterprises, including identifying livelihood opportunities, delivering entrepreneurship training, facilitating attitudinal change programs, and providing consultancy. Our training solutions are result-oriented and combine local knowledge with international best practices.",
    included: [
      "Entrepreneurship and business skills training",
      "Mentorship and business advisory",
      "Access to finance and finance readiness support",
      "Livelihood and market opportunity identification",
      "Green enterprise development",
    ],
    methods: ["SIYB (Start and Improve Your Business)", "GET Ahead", "Business Development Services (BDS)", "SEED Starter Toolkit"],
  },
  {
    slug: "project-cycle-management",
    name: "Project Cycle Management",
    short: "Full-cycle project support, from needs assessment to monitoring and evaluation.",
    description:
      "AMC provides full-cycle project support, from needs assessment and planning to implementation, monitoring, and evaluation. We ensure projects are community-driven, results-oriented, and sustainable.",
    detail:
      "We deliver full-spectrum project services, starting with needs assessments, feasibility studies, participatory project design, proposal development, project implementation support, monitoring, evaluation, and exit strategy development. Our projects mainly focus on livelihood improvement, enterprise growth, environmental sustainability, and organizational development.",
    included: [
      "Needs assessments and feasibility studies",
      "Participatory project design and proposal development",
      "Implementation support and field coordination",
      "Monitoring, evaluation and learning systems",
      "Exit strategy development",
    ],
    methods: ["Participatory needs assessment", "Results-based management", "Theory of change", "Field-based delivery"],
  },
  {
    slug: "social-environmental-research",
    name: "Social and Environmental Research",
    short: "Baseline studies, impact assessments and socio-economic analysis.",
    description:
      "We conduct research to inform policy, program design, and impact assessment. Our expertise includes baseline studies, environmental evaluations, and socio-economic analysis.",
    detail:
      "Our research unit conducts problem identification, designs research frameworks, collects and analyzes data, and produces reports in areas critical to sustainable human development. We support research needs for government bodies, private sector entities, and non-governmental organizations, both locally and internationally, through baseline surveys, impact assessments, and environmental feasibility studies.",
    included: [
      "Baseline surveys and studies",
      "Impact assessments and evaluations",
      "Environmental and socio-economic analysis",
      "Research framework design and data collection",
      "Policy-relevant reporting",
    ],
    methods: ["Mixed-methods research", "Baseline studies", "Environmental feasibility studies", "Qualitative and quantitative field work"],
  },
  {
    slug: "organizational-development",
    name: "Organizational Development",
    short: "Strategic planning, leadership training and systems development for institutions.",
    description:
      "We strengthen institutions through strategic planning, leadership training, and systems development. Our goal is to enhance efficiency, accountability, and long-term performance.",
    detail:
      "AMC supports institutions through staff training, change management initiatives, corporate planning, management development, organizational restructuring, and process quality improvements. We facilitate participatory strategic planning sessions and the development of corporate plans with measurable key performance indicators.",
    included: [
      "Strategic and corporate planning",
      "Leadership and management development",
      "Change management and restructuring",
      "Systems and process quality improvement",
      "Key performance indicator frameworks",
    ],
    methods: ["Participatory strategic planning", "Organizational capacity assessment", "Training and coaching"],
  },
  {
    slug: "vocational-skills-training",
    name: "Vocational Skills Training",
    short: "Practical, hands-on trades training that equips youth and women for work.",
    description:
      "AMC offers practical, hands-on training in trades such as tailoring, carpentry, and repair services. These programs equip youth and women with marketable skills for employment or self-employment.",
    detail:
      "We empower communities by providing practical skills in areas such as tailoring, bricklaying, beekeeping, hairdressing, carpentry and joinery, phone repair, and motorcycle and bicycle maintenance. We implement these programs directly and through partnerships with accredited vocational institutions across Uganda.",
    included: [
      "Tailoring and fashion design",
      "Carpentry and joinery, bricklaying",
      "Beekeeping and agri-skills",
      "Hairdressing and beauty",
      "Phone repair, motorcycle and bicycle maintenance",
    ],
    methods: ["Hands-on practical training", "Partnerships with accredited vocational institutions", "Mentorship and market linkage"],
  },
  {
    slug: "recruitment",
    name: "Recruitment Services",
    short: "Skilled trainers, researchers, data collectors and technical personnel for your organisation.",
    description:
      "We help organizations hire skilled professionals across technical, administrative, and field roles. Our recruitment is thorough, targeted, and aligned with each client's needs.",
    detail:
      "Our recruitment services offer tailored staffing solutions to private, public, and international organizations. With a dedicated team of human resource professionals, AMC recruits skilled trainers, researchers, data collectors, and technical personnel, ensuring high productivity and optimal organizational performance.",
    included: [
      "Trainers and facilitators",
      "Researchers and data collectors",
      "Technical and field personnel",
      "Administrative and professional staff",
      "Short-term surge and surge-response teams",
    ],
    methods: ["Targeted headhunting", "Skills-based vetting", "Field deployment support"],
  },
];

export const phases = [
  {
    n: "01",
    name: "Diagnose and Co-Design",
    summary:
      "We begin by engaging directly with our clients and stakeholders to understand their challenges, goals, and operating environments. Through needs assessments, stakeholder consultations, and baseline studies, we gather insights that shape customized, context-relevant solutions. Every intervention is co-designed to ensure ownership, inclusivity, and alignment with development objectives.",
    steps: [
      "Participatory needs assessment with clients and stakeholders",
      "Co-development of tailored, practical action plans",
    ],
  },
  {
    n: "02",
    name: "Deliver and Empower",
    summary:
      "Using participatory and results-driven methodologies, we implement the agreed strategies through training, mentoring, consultancy, and research. Whether it is enterprise development, vocational training, or project management, our experienced team delivers hands-on support that builds capacity and drives performance. We empower individuals, businesses, and institutions to grow sustainably and independently.",
    steps: [
      "Collaborative implementation with clients and communities",
      "Flexible, field-based delivery in urban and remote areas",
    ],
  },
  {
    n: "03",
    name: "Monitor, Learn and Adapt",
    summary:
      "We track progress through robust monitoring and evaluation systems, collecting feedback and measuring impact. Lessons learned are used to adapt interventions in real time, ensuring continued relevance and effectiveness. We share results transparently with our clients, enabling informed decisions and fostering a culture of continuous improvement.",
    steps: [
      "Continuous monitoring and adaptive learning",
      "Transparent communication and clear reporting",
      "Measurable outcomes designed for sustainability",
    ],
  },
];

export type Project = {
  slug: string;
  client: string;
  title: string;
  years: string;
  status: "Ongoing" | "Completed" | "Ongoing and Completed";
  funder: string;
  sector: string;
  service: string;
  summary: string;
  activities: string[];
  image?: string;
  imageAlt?: string;
};

// FLAG (launch gate): UGX contract values come from AMC's own published profile.
// Confirm client consent before launch, or remove values to the capability statement.
export const projects: Project[] = [
  {
    slug: "ugefa-green-enterprise-finance",
    client: "Uganda Green Enterprise Finance Accelerator (UGEFA)",
    title: "Green enterprise support under the UGEFA accelerator",
    years: "EU-funded programme",
    status: "Completed",
    funder: "European Union",
    sector: "Green enterprise",
    service: "enterprise-economic-development",
    summary:
      "Under the European Union funded Uganda Green Enterprise Finance Accelerator (UGEFA), implemented by Adelphi Research GmbH with SEED, AMC supported over 50 SMEs in clean energy, green manufacturing, sustainable tourism, waste management, and sustainable transport. Out of more than 100 applicants, 20 SMEs were selected and supported to access and manage financing from partner financial institutions.",
    activities: [
      "Programme outreach and applicant screening",
      "Business plan development support",
      "Delivery of Business Development Services (BDS)",
      "Finance readiness support for selected SMEs",
    ],
    image: "/images/simon-ugefa.jpg",
    imageAlt: "Simon Katushabe supporting SMEs during the UGEFA accelerator",
  },
  {
    slug: "uwa-climate-risk-disaster-risk",
    client: "Uganda Wildlife Authority (UWA)",
    title: "Climate risk assessment and disaster risk reduction plan",
    years: "2024–2025",
    status: "Ongoing",
    funder: "Uganda Wildlife Authority",
    sector: "Environment",
    service: "social-environmental-research",
    summary:
      "Assessing climate change risks and developing a Disaster Risk Reduction and Climate Mitigation Plan to enhance climate resilience in protected areas. The contract is valued at UGX 49,250,000.",
    activities: [
      "Climate change risk assessment in protected areas",
      "Development of a disaster risk reduction and climate mitigation plan",
      "Capacity building for UWA staff",
    ],
    image: "/images/uwa-lake-mburo.jpg",
    imageAlt: "UWA staff at Lake Mburo National Park during a disaster risk assessment",
  },
  {
    slug: "fca-drdisp",
    client: "Finn Church Aid (DRDIP projects)",
    title: "Multiple assignments under the Development Response to Displacement Impacts Project",
    years: "2019–2024",
    status: "Ongoing and Completed",
    funder: "Finn Church Aid (DRDIP)",
    sector: "Agriculture and food security",
    service: "project-cycle-management",
    summary:
      "Implemented multiple assignments under the Development Response to Displacement Impacts Project (DRDIP) in Uganda's refugee-hosting districts.",
    activities: [
      "Training beneficiaries on market risks and mitigation strategies (UGX 66,660,000, 2024)",
      "Feasibility studies and design of irrigation schemes in Koboko District (UGX 23,000,000, 2023)",
      "Community planning guides for land tenure systems and natural resource access (2020–2021)",
      "Supply of irrigation equipment to improve agricultural infrastructure (UGX 195,000,000, 2019)",
    ],
    image: "/images/field-delivery.jpg",
    imageAlt: "AMC field delivery activity",
  },
  {
    slug: "wezesha-brmm-siyb",
    client: "Wezesha Impact (ILO BRMM project)",
    title: "SIYB training for Ugandan returnees under the BRMM project",
    years: "2024–2025",
    status: "Ongoing",
    funder: "International Labour Organization (BRMM)",
    sector: "Enterprise development",
    service: "enterprise-economic-development",
    summary:
      "Under the ILO-funded BRMM (Better Regional Migration Management) Project, this assignment provides Start and Improve Your Business (SIYB) training to Ugandan returnees, enhancing entrepreneurial skills and supporting reintegration through sustainable business development. The contract is valued at UGX 16,000,000.",
    activities: [
      "SIYB entrepreneurship training for returnees",
      "Business mentorship and reintegration support",
    ],
    image: "/images/siyb-game.jpg",
    imageAlt: "Facilitator running the ILO SIYB Module 1 game",
  },
  {
    slug: "rwayec-tororo",
    client: "Rural Women and Youth Empowerment Centre (RWAYEC)",
    title: "Climate risk and agribusiness programmes in Tororo District",
    years: "2014–2020",
    status: "Completed",
    funder: "European Union; Government of Uganda",
    sector: "Agriculture and food security",
    service: "enterprise-economic-development",
    summary:
      "Two major EU and government-funded assignments in Tororo District with farmer groups and value chain actors.",
    activities: [
      "Climate risk management training for farmer groups across all sub-counties, culminating in a stakeholder session in Tororo Municipality (UGX 87,000,000, EU-funded, 2020)",
      "Agribusiness training and coaching for cassava and potato value chain actors, forming over 300 farmer groups and clusters (UGX 120,000,000, Government of Uganda, 2014)",
    ],
    image: "/images/classroom.jpg",
    imageAlt: "Training participants at an AMC workshop",
  },
  {
    slug: "ccyef-strategic-plan",
    client: "Child Care and Youth Empowerment Foundation",
    title: "Organizational strategic planning",
    years: "2018",
    status: "Completed",
    funder: "Private Sector Foundation Uganda",
    sector: "Organizational development",
    service: "organizational-development",
    summary:
      "Facilitated the development of a strategic plan to strengthen organizational direction and operational efficiency, funded by the Private Sector Foundation Uganda (UGX 19,337,400).",
    activities: [
      "Participatory strategic planning process",
      "Corporate plan with measurable key performance indicators",
    ],
  },
  {
    slug: "psfu-irrigation-supply",
    client: "Private Sector Foundation Uganda",
    title: "Procurement and supply of irrigation equipment",
    years: "2019",
    status: "Completed",
    funder: "Private Sector Foundation Uganda",
    sector: "Agriculture and food security",
    service: "project-cycle-management",
    summary: "Procurement and supply of irrigation equipment to improve agricultural productivity.",
    activities: ["Procurement", "Supply and delivery of irrigation equipment"],
  },
];

export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  greyscale?: boolean;
  leadership?: boolean;
};

export const team: Person[] = [
  {
    slug: "peter-owori",
    name: "Peter Owori",
    role: "Managing Director, Enterprise Development Specialist",
    bio: "Peter is an HR and enterprise specialist with over a decade of experience, certified in SIYB, financial literacy, and project management. He has led training programs for TotalEnergies, EACOP and ILO projects.",
    photo: "/images/peter-owori.jpg",
    leadership: true,
  },
  {
    slug: "brian-osuna",
    name: "Brian Osuna",
    role: "Director",
    bio: "Brian believes in the power of people to drive sustainable development. Over the years he has committed himself to transforming lives through practical, research-driven solutions in enterprise development, capacity building, and social impact.",
    photo: "/images/brian-osuna.jpg",
    leadership: true,
  },
  {
    slug: "ochiengh-benjamin",
    name: "Ochiengh Benjamin",
    role: "Director, Research and Training",
    bio: "A social development expert with 15+ years of conflict programming and applied research experience in East Africa, Benjamin specializes in gender, peacebuilding, social inclusion, and impact assessment.",
    photo: "/images/ochiengh-benjamin.jpg",
    leadership: true,
  },
  {
    slug: "stella-kansime",
    name: "Stella Kansime",
    role: "Director, Organizational Development and HR",
    bio: "Stella is a seasoned consultant with expertise in human resource management, business growth and community-based development. She brings a practical, results-driven approach to organizational development and has successfully led client engagements across both non-profit and private sectors.",
    photo: "/images/stella-kansime.jpg",
    leadership: true,
  },
  {
    slug: "katushabe-simon",
    name: "Katushabe Simon",
    role: "Associate Director, Finance and Enterprise Development",
    bio: "Simon is a certified ILO GET Ahead and SIYB Trainer with a background in Tourism and Entrepreneurship. He brings strong expertise in financial literacy, enterprise development, and business training, with additional qualifications from Bank of Uganda and SEED's Starter Toolkit program.",
    photo: "/images/katushabe-simon.jpg",
    leadership: true,
  },
  {
    slug: "tirivangani-mutazu",
    name: "Tirivangani Mutazu",
    role: "Development Finance Policy Specialist",
    bio: "Based in Zimbabwe, Tirivangani is an expert in sovereign debt, taxation, and climate finance. He previously led debt management work at AFRODAD.",
    photo: "/images/tirivangani-mutazu.jpg",
    greyscale: true,
  },
  {
    slug: "josephine-okoth",
    name: "Josephine Okoth",
    role: "HR Management Specialist",
    bio: "Joseline has over 10 years of HR experience in both public and private sectors, including Umeme Ltd. She offers expertise in workforce planning, performance management, and organizational training.",
    photo: "/images/josephine-okoth.jpg",
  },
  {
    slug: "imelda-namagga",
    name: "Imelda Namagga",
    role: "Economist and Budget Analyst",
    bio: "Imelda is an Economist and Budget Analyst with over 10 years' experience in budget analysis, policy research and training across Uganda and Africa. She has led Uganda's Open Budget Survey since 2008, advanced gender and equity budgeting, built capacity for government, parliament and CSOs, and is a founder member and Board Treasurer of CSBAG.",
    photo: "/images/imelda-namagga.jpg",
  },
  {
    slug: "musiho-abdala",
    name: "Musiho Abdala",
    role: "Monitoring and Evaluation Specialist",
    bio: "With 15+ years of experience, Abdala is an expert in applied research and monitoring and evaluation across Africa and Asia. He has worked with organizations like USAID, GIZ, and UNICEF.",
    photo: "/images/musiho-abdala.jpg",
  },
  {
    slug: "peninnah-rashid-tenga",
    name: "Peninnah Rashid Tenga",
    role: "Business Management Specialist",
    bio: "Peninnah is a seasoned consultant with over 13 years of experience in business development, gender empowerment, and MSME capacity building. She specializes in entrepreneurship training, organizational development, and project implementation, with a strong focus on supporting women and youth in both urban and rural communities across Tanzania.",
    photo: "/images/peninnah-rashid-tenga.jpg",
    greyscale: true,
  },
  {
    slug: "busara-clemence",
    name: "Busara Clemence",
    role: "Development Consultant",
    bio: "He has over ten years of experience in livelihood restoration and economic empowerment, leading projects with organizations like EACOP, Oxfam, and the ILO. Skilled in entrepreneurship training and stakeholder engagement, he applies a multidisciplinary approach to drive sustainable, inclusive growth.",
    photo: "/images/busara-clemence.jpg",
    greyscale: true,
  },
  {
    slug: "kaduyu-abdallah-mwijje",
    name: "Kaduyu Abdallah Mwijje",
    role: "Climate Resilience and Green Enterprise Specialist",
    bio: "He is an expert in climate resilience, green enterprise development, and sustainable financing, specializing in helping businesses transition to environmentally sustainable models. He supports SMEs in accessing finance and advancing circular economy principles.",
    photo: "/images/kaduyu-abdallah-mwijje.jpg",
  },
  {
    slug: "magreth-joseph-mwasepele",
    name: "Magreth Joseph Mwasepele",
    role: "Development Consultant",
    bio: "She is a development practitioner with over nine years of experience in livelihood restoration, economic empowerment, and enterprise development. She has led impactful programs supporting youth and women through entrepreneurship training and mentorship, working with organizations like EACOP and World Vision.",
    photo: "/images/magreth-joseph-mwasepele.jpg",
    greyscale: true,
  },
];

export const leadership = team.filter((p) => p.leadership);

export const clients = {
  intro:
    "Our clients span government ministries, non-governmental organizations, international agencies, and private sector institutions. Our consistent delivery and results-driven approach have earned us long-term partnerships and repeat engagements across Uganda and East Africa.",
  logos: [
    { src: "/images/logos/uwa.jpg", alt: "Uganda Wildlife Authority" },
    { src: "/images/logos/fca.jpg", alt: "Finn Church Aid" },
    { src: "/images/logos/ilo.jpg", alt: "International Labour Organization" },
    { src: "/images/logos/uk-aid.jpg", alt: "UK aid from the British people" },
    { src: "/images/logos/wezesha.jpg", alt: "Wezesha Impact" },
    { src: "/images/logos/brmm.jpg", alt: "Better Regional Migration Management" },
    { src: "/images/logos/rwayec.jpg", alt: "Rural Women and Youth Empowerment Centre" },
    { src: "/images/logos/ccyef.jpg", alt: "Child Care and Youth Empowerment Foundation" },
    { src: "/images/logos/hcawfo.jpg", alt: "Hope for Children and Women Welfare Organization" },
    { src: "/images/logos/nafore.jpg", alt: "Nafore Action for Development" },
    { src: "/images/logos/afriq-creative.jpg", alt: "Afriq Creative Solutions" },
    { src: "/images/logos/cityside.jpg", alt: "Cityside" },
    { src: "/images/logos/ds-consult.jpg", alt: "DS Consult" },
    { src: "/images/logos/reign.jpg", alt: "Reign" },
    { src: "/images/logos/den.jpg", alt: "Development Network" },
  ],
  named: [
    "Uganda Wildlife Authority",
    "Uganda Green Enterprise Finance Accelerator (UGEFA)",
    "Finn Church Aid",
    "Wezesha Impact",
    "Rural Women and Youth Empowerment Centre (RWAYEC)",
    "International Labour Organization (ILO)",
    "EACOP",
    "ActionAid",
    "UNHCR",
  ],
};

export const sectors = [
  "Agriculture and Food Security",
  "Livestock and Poultry",
  "Financial Services",
  "Small Cottage Industries",
  "Tourism and Hospitality",
  "Environment",
  "Energy and Extractives",
  "Trade",
  "Oil and Gas",
];

export const about = {
  intro:
    "Africa Management Consult Limited (AMC) is a Human Capital Management solutions provider, legally incorporated in Uganda in 2011 (Registration No. 138382). We offer expertise in Business Skills Development, Human Capital Capacity Building, Personnel Management, Development Consultancy, and Research services. Our social research arm focuses on addressing socio-economic and environmental challenges impacting community well-being, backed by a panel of experts with diverse professional backgrounds.",
  impact:
    "Our major impact area is improving the livelihoods of disadvantaged communities through targeted capacity development initiatives. AMC provides Business Development Services to owners and managers operating in key sectors such as Agriculture and Food Security, Livestock and Poultry, Financial Services, Small Cottage Industries, Tourism and Hospitality, Environment, Energy and Extractives, Trade, and Oil and Gas. We deliver a comprehensive bundle of services including Market Access, Core Business Skills Training, Input Supply, Access to Finance, Technology and Product Development, Infrastructure Support, Policy and Advocacy.",
  team:
    "AMC is powered by a multi-disciplinary pool of over 15 Senior National and International Consultants and Associate Consultants, bringing vast experience in Business Development Services, Financial Services, Agribusiness, Natural Resource Management, Baseline Studies, and Project Management and Evaluation. Our staff are certified by the International Labour Organization (ILO) and the International Trade Centre (ITC) as Master Trainers and Trainers in Business, Entrepreneurship, Organizational Development, and Financial Literacy. Through these experts, AMC has delivered Business Fundamental Skills training and mentorship to more than 50 enterprises and over 1,000 entrepreneurs.",
  vision: "Life Transformation",
  mission: "Sustainable Development through Research, Training, Mentoring, and Coaching",
  values:
    "AMC's approach is rooted in forming strong partnerships with public and private sector organizations, as well as development agencies, to harness collective potential for sustainable progress. Our solutions are built on promoting local ownership, accountability, and responsiveness to client needs and operating contexts. Innovation, continuous learning, and the adoption of creative, context-specific strategies are central to our service delivery philosophy.",
  proposition:
    "At AMC, we deliver practical, high-impact solutions that are rooted in local realities and backed by international standards. Our strength lies in combining technical expertise with deep community engagement to ensure every intervention is relevant, inclusive, and sustainable. With a proven track record, a multidisciplinary team, and a presence across Uganda and East Africa, we are uniquely positioned to support organizations, enterprises, and communities in achieving measurable growth and transformation.",
  closing:
    "AMC is a dynamic and mission-driven consulting firm specializing in enterprise development, climate resilience, inclusive economic empowerment, and institutional capacity building. We partner with governments, development agencies, civil society organizations, and the private sector to drive sustainable, locally led transformation.",
  mdMessage:
    "At Africa Management Consult Limited, we believe in the power of knowledge, partnership and innovation to transform lives and build sustainable communities. Over the past decade, we have remained committed to delivering solutions that address real-world challenges in business development, human capital growth and community empowerment. Our team's dedication, expertise, and passion for sustainable development remain the cornerstone of our success. As we look to the future, we are excited to continue partnering with organizations and communities to create lasting impact. Thank you for trusting AMC as your partner in growth and transformation.",
};
