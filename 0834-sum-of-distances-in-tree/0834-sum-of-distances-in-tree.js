/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const sum = new Array(n).fill(0);
    const count = new Array(n).fill(0);
    const graph = new Array(n).fill().map((_) => []);

    for (const [v1, v2] of edges) {
      graph[v1].push(v2);
      graph[v2].push(v1);
    }

    postOrder(sum, count, graph, 0, null);
    preOrder(sum, count, graph, 0, null, n);

    return sum;
};

function postOrder(sum, count, graph, curr, parent) {
  for (const child of graph[curr]) {
    if (child === parent) continue;
    postOrder(sum, count, graph, child, curr);
    sum[curr] += sum[child] + count[child];
    count[curr] += count[child];
  }
  count[curr]++;
}

function preOrder(sum, count, graph, curr, parent, n) {
  for (const child of graph[curr]) {
    if (child === parent) continue;
    sum[child] = sum[curr] + n - count[child] - count[child];
    preOrder(sum, count, graph, child, curr, n);
  }
}
