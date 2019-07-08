'use strict';

module.exports = (graph, startVertex, goalVertex) => {
    const stack = []; 
    const visitedVertices = new Set();

    //Vinicio - most important structure of algorithm
    const paths = new Map();

    stack.push(startVertex);
    visitedVertices.add(startVertex);

    while(stack.length > 0) {
        
        //check for goal
        //loop over all the neighbors
        const currentVertex = stack.pop();

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
            stack.push(neighbor.vertex);
        }
    }
    //Vinicio - meaning no path
    return null;
};
