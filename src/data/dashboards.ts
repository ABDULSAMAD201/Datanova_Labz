/**
 * Power BI dashboard gallery.
 *
 * Real screenshots uploaded to public/dashboards/.
 */

export interface DashboardItem {
  id: string;
  name: string;
  industry: string;
  caption: string;
  image: string;
  overview: string;
  capabilities: string[];
  tech: string[];
}

export const dashboards: DashboardItem[] = [
  {
    id: "ai-forecast-01",
    name: "AI Forecast & Anomaly Dashboard",
    industry: "Forecasting",
    caption: "Where are my numbers heading, and is anything behaving strangely?",
    image: "/dashboards/finance-performance.png",
    overview:
      "Tracks cost and CO₂ emissions against forecast month by month, with headline counters for total anomalies, warnings and normal periods. Chart panels overlay actual and forecast lines so any drift is immediately visible, and stacked breakdowns by category and month show exactly where the outliers sit, letting you trace a variance back to the cost line or emission source behind it.",
    capabilities: [
      "Forecast vs actual analysis",
      "Anomaly visualization",
      "Time-series analysis",
      "KPI monitoring",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "logistics-01",
    name: "Logistics and Fulfillment Dashboard",
    industry: "Logistics",
    caption: "Are orders going out on time, and where are the delays?",
    image: "/dashboards/logistics-fulfillment.png",
    overview:
      "Compares fulfilment volume, cost and commercial share against budget in a single view. Headline cards cover patients assisted, units shipped, cost per unit and the share handled commercially, while monthly trend lines track those measures against budget, a regional map splits activity by geography, and a combined chart contrasts volume trends with commercial share.",
    capabilities: [
      "KPI monitoring",
      "Trend analysis",
      "Cost / performance analysis",
      "Geographic analysis",
      "Interactive filtering",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "executive-overview-01",
    name: "Executive Overview Dashboard",
    industry: "Management",
    caption: "How is the whole business doing, on one screen?",
    image: "/dashboards/healthcare-operations.png",
    overview:
      "Brings the whole business onto one screen: headline figures for revenue, costs, gross and net profit, cost ratio and profit margin, followed by monthly growth curves for revenue and profit, revenue plotted against margin by month, and revenue broken down by country. Industry filters let you re-cut every visual for a specific sector without touching the layout.",
    capabilities: [
      "Executive KPIs",
      "Revenue / profit trends",
      "Industry analysis",
      "Geographic performance",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "marketing-01",
    name: "Marketing Funnel Dashboard",
    industry: "Marketing",
    caption: "Where do potential customers drop off before buying?",
    image: "/dashboards/marketing-funnel.png",
    overview:
      "Reads the marketing funnel from spend through to sale: headline cards cover production volume, cost of goods, cost per unit, spoilage cost, yield and sales, with month-by-month trend lines for cost, sales and production beneath them. Laying those lines side by side shows where cost climbs faster than output, and where volume stalls between stages.",
    capabilities: [
      "Funnel analysis",
      "KPI monitoring",
      "Conversion trends",
      "Interactive filtering",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "operations-01",
    name: "Operations Monitoring Dashboard",
    industry: "Operations",
    caption: "What is slowing the team down right now?",
    image: "/dashboards/operations-monitoring.png",
    overview:
      "Breaks operational spend down line by line, comparing each cost category against plan for the month with absolute and percentage variance on every row. Categories with a gap are highlighted so it is clear at a glance which line — production, utilities, labour or overhead — is driving the overspend, and how that gap shifts from one month to the next.",
    capabilities: [
      "Production KPIs",
      "Cost breakdown",
      "Actual vs target analysis",
      "Monthly performance trends",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "ecommerce-01",
    name: "E-commerce Sales Dashboard",
    industry: "E-commerce",
    caption: "What is selling, to whom, and where?",
    image: "/dashboards/ecommerce-sales.png",
    overview:
      "Tracks sales and workforce output side by side: utilisation and availability cards, planned versus actual days, and workload charts broken down by project and by employee. Trend lines for actual and planned hours reveal where capacity is being over- or under-used, so staffing levels can be judged against the sales and fulfilment numbers that depend on them.",
    capabilities: [
      "KPI monitoring",
      "Sales trends",
      "Workforce performance",
      "Target vs actual analysis",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
];
