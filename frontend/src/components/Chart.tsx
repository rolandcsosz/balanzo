import styles from "./Chart.module.scss";
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-basic-dist";

const Plot = createPlotlyComponent(Plotly);

interface ChartProps {
    title: string;
    data: { [key: string]: any } | any[];
    showLegend?: boolean;
    margins?: { t?: number; b?: number; l?: number; r?: number };
}

const Chart = ({ title, data, showLegend = false, margins }: ChartProps) => {
    return (
        <div className={styles.plot} style={{ width: "100%", height: "100%" }}>
            <h2 className={styles.title}>{title}</h2>
            <Plot
                data={Array.isArray(data) ? data : [data]}
                layout={{
                    autosize: true,
                    showlegend: showLegend,
                    margin: {
                        t: margins?.t || 35,
                        b: margins?.b || 80,
                        l: margins?.l || 40,
                        r: margins?.r || 40,
                    },
                    barmode: "stack",
                }}
                style={{ width: "calc(100%)", height: "calc(100% - 40px)" }}
                config={{
                    responsive: true,
                    displayModeBar: false,
                    displaylogo: false,
                }}
            />
        </div>
    );
};

export default Chart;
