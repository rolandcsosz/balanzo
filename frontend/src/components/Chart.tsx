import styles from "./Chart.module.scss";
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-basic-dist";

const Plot = createPlotlyComponent(Plotly);

interface ChartProps {
    title: string;
    data: { [key: string]: any } | any[];
    showLegend?: boolean;
}

const Chart = ({ title, data, showLegend = false }: ChartProps) => {
    return (
        <div className={styles.plot} style={{ width: "100%", height: "100%" }}>
            <h2 className={styles.title}>{title}</h2>
            <Plot
                data={Array.isArray(data) ? data : [data]}
                layout={{
                    autosize: true,
                    showlegend: showLegend,
                    margin: {
                        t: 30,
                        b: 80,
                        l: 40,
                        r: 40,
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
