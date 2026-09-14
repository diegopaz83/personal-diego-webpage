import { SolutionCase, StrategicDiscipline, CredentialItem } from '../types';

export const STRATEGIC_DISCIPLINES: StrategicDiscipline[] = [
  {
    id: 'powerbi-intelligence',
    title: 'Enterprise Power BI & Decision Intelligence',
    subtitle: 'Dimensional Data Modeling & High-Performance DAX',
    description: 'Architecting end-to-end business intelligence ecosystems that turn disparate ERP, cloud, and operational databases into authoritative Star Schemas. Delivering sub-second analytical models, robust Row-Level Security (RLS), and C-level executive dashboards.',
    capabilities: [
      'High-performance Star Schema & Dimensional Modeling',
      'Advanced DAX: Time-Intelligence, Virtual Tables & Dynamic Ranking',
      'Power Query M optimization & incremental refresh pipelines',
      'Enterprise Row-Level Security (RLS) & workspace governance',
      'Executive P&L, OPEX/CAPEX, and working capital cockpits'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & Operational Change',
    subtitle: 'Bridging Strategy, Technology & People',
    description: 'Guiding corporate divisions through end-to-end digital maturity roadmaps. Transitioning organizations from legacy friction and isolated spreadsheets into unified, data-driven operating cultures with measurable ROI.',
    capabilities: [
      'Organizational digital maturity diagnostic frameworks',
      'Change management & adoption programs for technical solutions',
      'Design Thinking facilitated innovation workshops',
      'KPI & OKR alignment linking operations to boardroom strategy',
      'Cross-functional team mentoring and capability building'
    ]
  },
  {
    id: 'agile-governance',
    title: 'Strategic Project Governance & Agile Leadership',
    subtitle: 'Scrum Discipline Coupled with PMBOK Rigor',
    description: 'Leading multi-disciplinary engineering, software, and consulting teams. Balancing agile sprint velocity with disciplined earned value management, quantitative risk mitigation, and client satisfaction.',
    capabilities: [
      'Certified Scrum Master (SMPC) & Product Owner (SPOPC)',
      'PMBOK / PMP aligned scope, budget, and schedule controls',
      'Quantitative risk matrix design & proactive mitigation plans',
      'Multi-stakeholder executive reporting & sprint governance',
      'International client delivery across North and South America'
    ]
  },
  {
    id: 'engineering-automation',
    title: 'Systems Engineering, Automation & AI Foundations',
    subtitle: 'Deep Technical Roots in Control & Analytics',
    description: 'Rooted in Electronic Engineering with foundational research in neural networks and fuzzy logic. Deep domain expertise in industrial automation, process control, and real-time plant telemetry.',
    capabilities: [
      'Electronic Engineer with Neural Networks & Fuzzy Logic research',
      'Industrial automation, SCADA & plant historian integration',
      'Applied AI and machine learning for business decision systems',
      'OT/IT convergence and telemetry data ingestion pipelines',
      'Licensed Professional Engineer (CNMMEE VL206-61169)'
    ]
  }
];

export const SOLUTION_CASES: SolutionCase[] = [
  {
    id: 'executive-financial-pnl',
    title: 'Executive Financial Control Tower & Real-Time P&L',
    category: 'Enterprise BI',
    tagline: 'Multi-entity corporate consolidation with automated variance diagnostics and RLS governance.',
    context: 'Multi-subsidiary enterprise with decentralized ERP instances and complex intercompany operations.',
    problem: 'Month-end financial closures took up to 12 business days. Financial analysts relied on un-auditable manual spreadsheets, leading to delayed executive decision-making and inconsistent margin calculations.',
    solution: 'Designed and deployed an enterprise Star Schema model in Power BI integrated directly with the SQL Server Data Warehouse. Implemented advanced DAX time-intelligence calculations (YTD, QTD, MoM, YoY), automated budget variance decomposition, and hierarchical Row-Level Security based on executive roles.',
    architecture: ['Power BI Service & Gateway', 'Advanced DAX', 'SQL Data Warehouse', 'Power Query M', 'Row-Level Security (RLS)'],
    daxLogic: `// Dynamic Budget Variance % with safe zero-division handling
Budget_Variance_% = 
VAR ActualSales = [Total_Sales_YTD]
VAR Budget = [Budget_Sales_YTD]
RETURN 
IF(
    NOT ISBLANK(Budget) && Budget > 0,
    DIVIDE(ActualSales - Budget, Budget, 0),
    BLANK()
)`,
    metrics: [
      { label: 'Closing Cycle Time', value: '-83%', sublabel: 'Reduced from 12 days to 48 hours' },
      { label: 'Data Accuracy & Auditability', value: '99.9%', sublabel: 'Single source of financial truth' },
      { label: 'Active C-Suite Decision Makers', value: '45+', sublabel: 'Desktop and mobile continuous access' }
    ],
    businessImpact: 'Accelerated board decision latency by more than a week every fiscal month, directly enabling immediate reallocation of capital and prompt containment of operational expense overruns.'
  },
  {
    id: 'industrial-oee-telemetry',
    title: 'Plant OEE & Operational Reliability Cockpit',
    category: 'Industrial & IoT',
    tagline: 'Real-time telemetry ingestion, continuous OEE measurement, and downtime Pareto analysis.',
    context: 'High-throughput manufacturing facility operating continuous packaging and process lines.',
    problem: 'Unscheduled production line shutdowns were recorded manually on paper logs, masking root causes and distorting Availability, Performance, and Quality metrics for plant leadership.',
    solution: 'Engineered an operational telemetry dashboard in Power BI pulling directly from industrial historians and PLC telemetry. Programmed automated OEE calculation, Pareto classification of micro-stops, and mean-time-between-failures (MTBF) tracking.',
    architecture: ['Power BI', 'Industrial Telemetry / Historian', 'DirectQuery / Hybrid Modeling', 'Anomaly Detection Logic'],
    daxLogic: `// Overall Equipment Effectiveness (OEE) Metric
OEE_Score = 
VAR AvailabilityRate = [Line_Availability_Rate]
VAR PerformanceRate  = [Line_Performance_Rate]
VAR QualityRate      = [Line_Quality_Rate]
RETURN
AvailabilityRate * PerformanceRate * QualityRate`,
    metrics: [
      { label: 'OEE Improvement', value: '+14.5%', sublabel: 'Sustained across key packaging lines' },
      { label: 'Unplanned Down-time', value: '-32%', sublabel: 'Driven by root-cause Pareto visibility' },
      { label: 'Mean Time to Repair (MTTR)', value: '-22%', sublabel: 'Faster maintenance team dispatch' }
    ],
    businessImpact: 'Synchronized plant floor operations with executive engineering management, shifting maintenance strategy from reactive repairs to predictive reliability.'
  },
  {
    id: 'pmo-agile-portfolio',
    title: 'Enterprise PMO, Agile Velocity & Risk Governance',
    category: 'Strategy & Governance',
    tagline: 'Unified multi-initiative monitoring, sprint burn-down tracking, and quantitative risk exposure.',
    context: 'Corporate digital transformation portfolio comprising 20+ concurrent tech initiatives across distributed squads.',
    problem: 'Disjointed visibility between agile delivery metrics (Jira/DevOps) and PMBOK financial controls led to budget creep, milestone unpredictability, and misaligned client expectations.',
    solution: 'Built an executive PMO suite combining agile velocity tracking (Story Points, sprint predictability, cycle time) with Earned Value Management (EVM: CPI, SPI, AC, EV) and an interactive probability-impact risk matrix.',
    architecture: ['Power BI Service', 'Azure DevOps REST API', 'Earned Value Analysis (EVM)', 'Automated Alerting'],
    daxLogic: `// Cost Performance Index (CPI)
Cost_Performance_Index = 
VAR EarnedValue = [Earned_Value_EV]
VAR ActualCost  = [Actual_Cost_AC]
RETURN
IF(ActualCost > 0, DIVIDE(EarnedValue, ActualCost, 1), 1)`,
    metrics: [
      { label: 'Budget Variance', value: '< 3.2%', sublabel: 'Down from historical 18% variance' },
      { label: 'On-Time Sprint Completion', value: '94%', sublabel: 'Improved cross-functional transparency' },
      { label: 'Client Delivery NPS', value: '4.8 / 5', sublabel: 'Verified by international sponsors' }
    ],
    businessImpact: 'Standardized delivery governance across North American and Latin American engagements, establishing executive transparency and predictable client milestones.'
  },
  {
    id: 'supply-chain-inventory-abc',
    title: 'Supply Chain Working Capital & ABC/XYZ Inventory Optimization',
    category: 'Operations & Supply Chain',
    tagline: 'Automated Pareto stock classification, stockout risk mitigation, and lead-time visibility.',
    context: 'Regional distribution network with central warehousing and 10,000+ active product SKUs.',
    problem: 'Working capital was trapped in slow-moving inventory while critical high-demand SKUs frequently suffered costly out-of-stock events during peak commercial cycles.',
    solution: 'Architected an automated inventory analytics model with dynamic ABC classification based on Pareto distribution, Days of Inventory Remanent (DIR), and automated replenishment reorder warnings.',
    architecture: ['Power BI', 'SQL Server Warehouse', 'DAX Windowing Functions', 'ETL Dataflow Architecture'],
    daxLogic: `// Dynamic ABC Pareto Classification
ABC_Classification = 
VAR CumulativeSalesPct = [Sales_Pareto_Cumulative_%]
RETURN
SWITCH(
    TRUE(),
    CumulativeSalesPct <= 0.80, "Class A - Critical (80% Value)",
    CumulativeSalesPct <= 0.95, "Class B - Moderate (15% Value)",
    "Class C - Residual (5% Value)"
)`,
    metrics: [
      { label: 'Trapped Working Capital', value: '-18%', sublabel: 'Freed up within 9 months' },
      { label: 'Critical Stockouts (Class A)', value: '-65%', sublabel: 'Proactive replenishment triggers' },
      { label: 'Forecast Accuracy', value: '91.8%', sublabel: 'Harmonized demand planning' }
    ],
    businessImpact: 'Aligned purchasing, warehouse management, and finance, significantly improving cash-flow agility without compromising fulfillment service levels.'
  },
  {
    id: 'digital-maturity-index',
    title: 'Organizational Digital Maturity & Adoption Diagnostic',
    category: 'Strategy & Governance',
    tagline: 'Quantifying cultural adoption, process digitalization, and capability benchmarks.',
    context: 'Enterprise embarking on multi-year cloud, ERP, and operational transformation.',
    problem: 'Technology investments were stalling post-rollout due to cultural resistance, lack of structured user adoption metrics, and absence of an objective readiness baseline.',
    solution: 'Designed a digital maturity diagnostic framework grounded in master’s thesis research (University of Barcelona). Deployed interactive radar visualizers, capability gap analysis, and user adoption tracking across business units.',
    architecture: ['Power BI', 'Survey & Telemetry Integration', 'Digital Adoption Framework', 'Design Thinking Workshops'],
    metrics: [
      { label: 'Software Feature Adoption', value: '+42%', sublabel: 'Measured at 90 days post-launch' },
      { label: 'Certified Change Champions', value: '35+', sublabel: 'Trained across key divisions' },
      { label: 'Operational Units Assessed', value: '12', sublabel: 'From executive to shop-floor teams' }
    ],
    businessImpact: 'Shifted technology deployment from a purely technical installation into a human-centric organizational transformation with measurable business adoption.'
  }
];

export const CREDENTIALS_SUMMARY: CredentialItem[] = [
  {
    type: 'Degree',
    title: 'Master in Digital Transformation & Business Development',
    institution: 'University of Barcelona (Spain)',
    focus: 'Thesis: Organizational culture change and operational KPI adoption via structured innovation frameworks.'
  },
  {
    type: 'Degree',
    title: 'Electronic Engineer',
    institution: 'Universidad del Valle (Colombia)',
    focus: 'Graduation Project: Neural networks and artificial intelligence algorithms utilizing fuzzy logic in controlled environments.'
  },
  {
    type: 'Certification',
    title: 'Scrum Master Professional Certificate (SMPC)',
    institution: 'CertiProf® International'
  },
  {
    type: 'Certification',
    title: 'Scrum Product Owner Professional Certificate (SPOPC)',
    institution: 'CertiProf® International'
  },
  {
    type: 'Certification',
    title: 'Design Thinking Professional Certificate (DTPC)',
    institution: 'CertiProf® International / EdducaIT'
  },
  {
    type: 'Certification',
    title: 'PMP® / CAPM® Exam Preparation (PMBOK® Framework)',
    institution: 'Pontificia Universidad Javeriana'
  },
  {
    type: 'Certification',
    title: 'Enterprise AI & Machine Learning Management Diplomas',
    institution: 'Escuela Empresarial Unipymes'
  },
  {
    type: 'License',
    title: 'National Professional Engineering License',
    institution: 'CNMMEE (Council of Electrical & Mechanical Engineers)',
    focus: 'License No. VL206-61169'
  }
];
