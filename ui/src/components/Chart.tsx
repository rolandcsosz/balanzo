import './Chart.scss';
import Plot from 'react-plotly.js';
import { useEffect, useState } from 'preact/hooks';

export enum ChartSize {
    SMALL,
    MEDIUM,
    LARGE,
    FILL_CONTENT
}

interface ChartProps {
    title: string;
    data: { [key: string]: any } | any[];
    size: ChartSize;
    showLegend?: boolean;
}

export function Chart({ title, data, size, showLegend = false }: ChartProps) {
    // State to track the window width
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.outerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to determine chart size based on the provided size and window width
    const getChartSize = (size: ChartSize, windowWidth: number) => {
        switch (size) {
            case ChartSize.FILL_CONTENT:
                return windowWidth - 50;
            case ChartSize.SMALL:
                return ((windowWidth - 330) / 3);
            case ChartSize.MEDIUM:
                return ((windowWidth - 310) / 3) * 2;
            case ChartSize.LARGE:
                return (windowWidth - 290);
            default:
                return windowWidth / 2;
        }
    };

    // Calculate the chart size
    const chartSize = getChartSize(size, windowWidth);

    return (
        <div className="plot"
            style={{ width: chartSize, height: 337 }}
        >
            <h2 class="title">{title}</h2>
            <Plot
                data={Array.isArray(data) ? data : [data]}
                layout={{
                    width: chartSize - 40,
                    height: 260,
                    showlegend: showLegend,
                    margin: {
                        t: 40,
                        b: 40,
                        l: 40,
                        r: 30,
                    }
                }}
                config={{
                    displayModeBar: false,
                    displaylogo: false,
                }}
            />
        </div>
    );
}
