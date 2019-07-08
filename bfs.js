'use strict';

module.exports = (graph, startVertex, goalVertex) => {
    const queue = []; //Vinicio, HW, make this a real queue instead of an array; queue-fifo npm
    const visitedVertices = new Set();

    //Vinicio - most important structure of algorithm
    const paths = new Map();

    queue.unshift(startVertex);
    visitedVertices.add(startVertex);

    while(queue.length > 0) {
        // dequeue
        //check for goal
        //loop over all the neighbors
        const currentVertex = queue.pop();

        if(currentVertex === goalVertex) {
            return paths;
        }
        
        for(let neighbor of graph.getNeighbors(currentVertex)){
            if(visitedVertices.has(neighbor.vertex)){
                continue;
            } else {
                visitedVertices.add(neighbor.vertex);
            }
            paths.set(neighbor.vertex, currentVertex);
            queue.unshift(neighbor.vertex);
        }
    }
    //Vinicio - meaning no path
    return null;
};
