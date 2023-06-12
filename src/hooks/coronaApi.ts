import { useQuery, useQueryClient } from "react-query";

const fetchAllCases = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const results = await response.json();
    return results;
};

const fetchCountryCases = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const results = await response.json();
    return results;
};

const useAllCases = () => {
    return useQuery(["allCases"], () => fetchAllCases());
};

const useCountryCases = () => {
    return useQuery(["countryCases"], () => fetchCountryCases());
};

export { useAllCases, useCountryCases };
