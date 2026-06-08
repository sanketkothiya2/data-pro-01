import type { ComponentType, CSSProperties } from "react";
import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,
  SiStreamlit,
  SiR,
  SiJavascript,
  SiMongodb,
  SiGooglecloud,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiGooglebigquery,
  SiTypescript,
} from "react-icons/si";
import { FaFileExcel, FaAws, FaDatabase, FaChartLine } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { TbBinaryTree2, TbMathFunction } from "react-icons/tb";

type IconProps = { size?: number; className?: string; style?: CSSProperties };
type IconType = ComponentType<IconProps>;

function PowerBI({ size = 18, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <rect x="3" y="11" width="4" height="10" rx="1" fill="#F2C811" />
      <rect x="10" y="6" width="4" height="15" rx="1" fill="#F2C811" opacity="0.85" />
      <rect x="17" y="2" width="4" height="19" rx="1" fill="#F2C811" opacity="0.7" />
    </svg>
  );
}

function Tableau({ size = 18, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" fill="#E8762D">
      <path d="M11.5 2h1v3.2h2.8v1H12.5V9.4h-1V6.2H8.7v-1h2.8V2Z" />
      <path d="M5 8.5h.9v2.4h2.1v.9H5.9v2.4H5v-2.4H2.9v-.9H5V8.5Z" opacity="0.9" />
      <path d="M18.1 8.5h.9v2.4H21v.9h-2v2.4h-.9v-2.4H16v-.9h2.1V8.5Z" opacity="0.9" />
      <path d="M11.6 13.6h.8v2h1.8v.8h-1.8v2h-.8v-2H9.8v-.8h1.8v-2Z" opacity="0.8" />
    </svg>
  );
}

const colors: Record<string, string> = {
  Python: "#5da9e0",
  SQL: "#38bdf8",
  MySQL: "#5b8db8",
  PostgreSQL: "#6e92e6",
  SQLite: "#5aa9d6",
  "MS SQL Server": "#e0564f",
  "SQL Server": "#e0564f",
  Pandas: "#9b8cff",
  NumPy: "#5aa9d6",
  "Scikit-learn": "#fab12f",
  SciPy: "#5da9e0",
  Plotly: "#7c8fd6",
  Streamlit: "#ff6b6b",
  R: "#5da9e0",
  JavaScript: "#ffd23f",
  TypeScript: "#5da9e0",
  "Microsoft Fabric": "#5da9e0",
  "Data Validation": "#9b8cff",
  "Data Modeling": "#9b8cff",
  Tableau: "#f59b5b",
  "Power BI": "#ffd23f",
  "Excel (VBA)": "#4cc38a",
  Excel: "#4cc38a",
  MongoDB: "#5cc97a",
  AWS: "#ffa94d",
  Azure: "#4f9eff",
  "Microsoft Azure": "#4f9eff",
  GCP: "#5da9e0",
  "Google Cloud Platform": "#5da9e0",
  TensorFlow: "#ffae57",
  Keras: "#e0564f",
  Jupyter: "#ffae57",
  XGBoost: "#ff8c5a",
  BigQuery: "#6e92e6",
  Statsmodels: "#38bdf8",
  SQLAlchemy: "#e0564f",
  Folium: "#5cc97a",
  Matplotlib: "#5da9e0",
  Seaborn: "#5da9e0",
  "Google Analytics": "#ffae57",
  "ETL Pipelines": "#38bdf8",
  DAX: "#ffd23f",
  M: "#fab12f",
};

const map: Record<string, IconType> = {
  Python: SiPython,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  Plotly: SiPlotly,
  Streamlit: SiStreamlit,
  R: SiR,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  GCP: SiGooglecloud,
  "Google Cloud Platform": SiGooglecloud,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  Jupyter: SiJupyter,
  BigQuery: SiGooglebigquery,
  Excel: FaFileExcel,
  "Excel (VBA)": FaFileExcel,
  AWS: FaAws,
  Azure: VscAzure,
  "Microsoft Azure": VscAzure,
  "MS SQL Server": DiMsqlServer,
  "SQL Server": DiMsqlServer,
  "Power BI": PowerBI,
  Tableau: Tableau,
  SQL: FaDatabase,
  "ETL Pipelines": TbBinaryTree2,
  SQLAlchemy: FaDatabase,
  Statsmodels: TbMathFunction,
  SciPy: TbMathFunction,
  Matplotlib: FaChartLine,
  Seaborn: FaChartLine,
  Folium: FaChartLine,
  XGBoost: TbBinaryTree2,
};

export function techColor(name: string) {
  return colors[name] ?? "#9fb0cc";
}

export function TechIcon({
  name,
  size = 18,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = map[name];
  if (Icon) {
    return <Icon size={size} className={className} style={{ color: techColor(name) }} />;
  }
  // fallback monogram badge
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={className}
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: 5,
        fontSize: size * 0.42,
        fontWeight: 700,
        color: "#060912",
        background: techColor(name),
        lineHeight: 1,
      }}
    >
      {initials}
    </span>
  );
}
