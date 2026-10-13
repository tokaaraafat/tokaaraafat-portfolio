export type ProjectLink = {
  label: string
  /** Set to a real URL, or null until verified */
  url: string | null
}

export type Project = {
  id: string
  title: string
  /** Optional period shown on the card */
  period?: string
  /** The business question the project answers */
  question: string
  description: string
  /** Documented result, shown highlighted on the card */
  outcome?: string
  technologies: string[]
  /** Optional image under /public. Leave null for the CSS visual. */
  thumbnail: string | null
  thumbnailAlt: string
  /** Visual variant when no thumbnail is provided */
  visual: 'excel' | 'sql' | 'stock' | 'github'
  viewProject: ProjectLink
  viewCode: ProjectLink | null
}

/**
 * Featured projects, strongest first.
 * Leave a url as null to show a clearly marked "pending" state instead of a broken link.
 */
export const projects: Project[] = [
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Analytics Dashboard',
    period: '2025',
    question:
      'Which categories, regions and cities drive sales, and how do returns and discounts affect net sales?',
    description:
      'Consolidated four source tables (about 10,000 order lines, returns, sales reps and shipping costs) with Power Query into a data model, then built a KPI dashboard covering total and net sales, returns, discounts, COGS, customers and orders using 20 pivot tables, 14 charts and slicers.',
    outcome:
      'In the 2014–2017 data, revenue grew 51% and Technology was the top category at 36% of sales.',
    technologies: ['Excel', 'Power Query', 'Pivot Tables', 'Data Model', 'Slicers'],
    thumbnail: '/projects/sales-performance-dashboard.webp',
    thumbnailAlt: 'Excel sales dashboard with KPI cards, category, city and state charts and slicers',
    visual: 'excel',
    viewProject: {
      label: 'GitHub',
      url: 'https://github.com/tokaaraafat/Sales-Performance-Analytics-Dashboard-System-',
    },
    viewCode: null,
  },
  {
    id: 'stock-revenue',
    title: 'Financial Performance Visualizer & Analytics Dashboard',
    period: '2026',
    question:
      'How do a company\u2019s stock price and quarterly revenue move together, and how volatile is each stock?',
    description:
      'Interactive Streamlit dashboard comparing historical stock prices with quarterly revenue for Tesla and GameStop. Revenue tables are scraped with BeautifulSoup, prices come from yfinance, and the dashboard reports current price, annualized volatility and latest quarterly revenue alongside a dual-axis Plotly chart with a 50-day moving average.',
    outcome:
      'When captured (Oct 2026), GameStop\u2019s annualized volatility was 82.5% versus 57.3% for Tesla, whose latest quarterly revenue was $21,454M.',
    technologies: ['Python', 'Pandas', 'yfinance', 'BeautifulSoup', 'Plotly', 'Streamlit'],
    thumbnail: '/projects/financial-dashboard.webp',
    thumbnailAlt: 'Streamlit dashboard showing Tesla stock price against quarterly revenue with key metrics',
    visual: 'stock',
    viewProject: {
      label: 'Live Demo',
      url: 'https://financial-dashboard-tokaaraafat.streamlit.app/',
    },
    viewCode: {
      label: 'GitHub',
      url: 'https://github.com/tokaaraafat/financial-performance-dashboard',
    },
  },
  {
    id: 'bike-sales',
    title: 'Bike Sales Customer Analysis Dashboard',
    period: '2026',
    question: 'Which customers buy bikes, and what separates buyers from non-buyers?',
    description:
      'Cleaned a 1,000-record customer dataset, engineered age brackets and built an interactive Excel dashboard with slicers for marital status, region and education, analysing purchases by age, income, gender and commute distance.',
    outcome:
      'Middle-aged customers bought at 55% versus 31–36% for other age groups, and purchase rates fell from about 55% (under 1 mile) to about 30% (over 10 miles).',
    technologies: ['Excel', 'Pivot Tables', 'Slicers', 'Data Cleaning'],
    thumbnail: '/projects/bike-sales-dashboard.webp',
    thumbnailAlt: 'Excel bike sales dashboard with income, age bracket and commute distance charts',
    visual: 'excel',
    viewProject: {
      label: 'GitHub',
      url: 'https://github.com/tokaaraafat/bike-sales-data-analysis',
    },
    viewCode: null,
  },
]

export const githubExploreUrl = 'https://github.com/tokaaraafat'
