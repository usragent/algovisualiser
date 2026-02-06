export function heuristic(a, b) {
    return Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
}

export function astar(grid, start, end) {
    let openSet = [start];
    start.g = 0;
    start.f = heuristic(start, end);

    while (openSet.length) {
        openSet.sort((a, b) => a.f - b.f);
        let current = openSet.shift();

        if (current === end) return;

        let neighbors = getNeighbors(grid, current);

        for (let neighbor of neighbors) {
            let tempG = current.g + 1;

            if (tempG < neighbor.g || !neighbor.g) {
                neighbor.g = tempG;
                neighbor.f = tempG + heuristic(neighbor, end);
                neighbor.previous = current;

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
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