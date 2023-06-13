import React, { useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from './marker.png';
import { useCountryCases } from '../../hooks/coronaApi';
const LeafletMap = () => {
    const { data, error, isLoading } = useCountryCases();

    const customMarker = L.icon({
        iconUrl: markerIcon,
        iconSize: [20, 25],
        iconAnchor: [15, 30]
    });

    return (
        <div className='w-full z-10'>
            {data && data.length > 0 && data?.map((country: any) => (
                <Marker
                    icon={customMarker}
                    key={country.countryInfo._id}
                    position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                    <Popup>
                        <div>
                            <h2>{country.country}</h2>
                            <p>
                                Active Cases: {country.active} <br />
                                Recovered Cases: {country.recovered} <br />
                                Deaths: {country.deaths}
                            </p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </div>
    );
};

export default LeafletMap;
