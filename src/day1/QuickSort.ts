const quickSort = (arr: number[], lo: number, hi: number): void => {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    quickSort(arr, lo, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, hi);
}

const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1)
}
