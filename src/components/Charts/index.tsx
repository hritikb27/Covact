import { useEffect, useState } from "react";
import { useAllCases } from "../../hooks/coronaApi";
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer } from "react-leaflet";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import LeafLetMap from "./LeafletMap";
import LoadingModal from "../Loading/LoadingModal";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Charts = () => {
    const [allCases, setAllCases] = useState<{
        labels: string[];
        datasets: {
            label: string;
            data: unknown[];
            borderColor: string;
            fill: boolean;
        }[];
    }>();
    const [loading, setLoading] = useState(false);
    // Using the hook
    const { data, error, isLoading } = useAllCases();

    useEffect(() => {
        if (isLoading && !data) setLoading(true);
        if (!isLoading && data) setLoading(false);
        if (data) {
            const lineGraphData = {
                labels: Object.keys(data.cases),
                datasets: [
                    {
                        label: 'Cases',
                        data: Object.values(data?.cases || {}),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false,
                    },
                    {
                        label: 'Deaths',
                        data: Object.values(data?.deaths || {}),
                        borderColor: 'rgba(192, 75, 75, 1)',
                        fill: false,
                    },
                    {
                        label: 'Recovered',
                        data: Object.values(data?.recovered || {}),
                        borderColor: 'rgba(75, 192, 75, 1)',
                        fill: false,
                    },
                ],
            }
            setAllCases(lineGraphData)
        }

    }, [data, isLoading])

    return (
        <div className="w-full h-full">
            {!loading && <><h2>Line Graph of Cases</h2>
                {allCases && <Line key={Math.random()} data={allCases} />}
                <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">Covid Leaflet Map</h1>
                <div
                    className="border-2 border-blue-500 w-11/12 m-auto h-[400px]"
                >
                    <MapContainer
                        className="m-auto w-full z-0 h-full border-blue-700 h-full"
                        zoom={4}
                        center={[51.0, 19.0]}
                        maxZoom={18}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        />
                        <LeafLetMap />
                    </MapContainer>
                </div></>}
            <LoadingModal open={loading} setOpen={setLoading} />

        </div>
    )
}

export default Charts;