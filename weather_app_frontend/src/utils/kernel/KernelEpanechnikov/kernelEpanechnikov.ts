export function kernelEpanechnikov(k: number) {
    return function (v: number) {
      return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
    };
}