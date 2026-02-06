export function dijkstra(grid, start, end) {
    start.distance = 0;
    let unvisited = grid.flat();

    while (unvisited.length) {
        unvisited.sort((a, b) => a.distance - b.distance);
        let current = unvisited.shift();

        if (current.distance == Infinity) break;
        current.visited = true;

        if (current === end) break;

        let neighbors = getNeighbors(grid, current);

        for (let neighbor of neighbors) {
            if (!neighbor.visited) {
                let newDist = current.distance + 1;
                if (newDist < neighbor.distance) {
                    neighbor.distance = newDist;
                    neighbor.previous = current;
                }
            }
        }
    }
}

function getNeighbors(grid, node) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let neighbors = [];

    for (let [dr, dc] of dirs) {
        let r = node.r + dr;
        let c = node.c + dc;
        if (grid[r] && grid[r][c]) {
            neighbors.push(grid[r][c]);
        }
    }
    return neighbors;
}