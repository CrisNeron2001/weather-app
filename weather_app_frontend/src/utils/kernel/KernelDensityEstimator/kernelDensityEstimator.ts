import * as d3 from 'd3';

export const kernelDensityEstimator = (kernel: (u: number) => number, X: number[]) => {
    return (V: number[]) => {
        return X.map((x) => [
            x,
            d3.mean(V, (v) => kernel(x - v)) ?? 0,
        ]);
    };
};