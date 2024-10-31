function mincost(arr) {
    let minHeap = new MinHeap();
    let totalCost = 0;
    
    for (let rope of arr) {
        minHeap.insert(rope);
    }
    
    while (minHeap.heap.length > 1) {
        let first = minHeap.extractMin();
        let second = minHeap.extractMin();
        let cost = first + second;
        totalCost += cost;
        minHeap.insert(cost);
    }
    
    return totalCost;
}
module.exports=mincost;
