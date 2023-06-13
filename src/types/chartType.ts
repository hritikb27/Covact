export interface allCasesType {
    labels: string[],
    datasets: {
        label: string,
        data: unknown[],
        borderColor: string,
        fill: boolean
    }[]
}