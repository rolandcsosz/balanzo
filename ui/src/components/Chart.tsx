import './Chart.scss';
import Plot from 'react-plotly.js';
import { useEffect, useState } from 'preact/hooks';

interface ChartProps {
    title: string;
    data: { [key: string]: any } | any[];
    showLegend?: boolean;
}

export function Chart({ title, data, showLegend = false }: ChartProps) {
    return (
        <div className="plot" style={{ width: '100%', height: '100%' }}>
            <h2 className="title">{title}</h2>
            <Plot
                data={Array.isArray(data) ? data : [data]}
                layout={{
                    autosize: true,
                    showlegend: showLegend,
                    margin: {
                        t: 30,
                        b: 30,
                        l: 40,
                        r: 0,
                    },
                }}
                style={{ width: 'calc(100% - 40px)', height: 'calc(100% - 40px)' }}
                config={{
                    responsive: true,
                    displayModeBar: false,
                    displaylogo: false,
                }}
            />
        </div>
    );
}
