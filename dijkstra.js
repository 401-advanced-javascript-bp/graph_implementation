'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = (graph, startVertex, goalVertex) => {
    const priorityQueue = new PriorityQueue({
        comparator: (a,b) => a.priority - b.priority,
    }); 
    
    //Vinicio, HW, make this a real queue instead of an array; queue-fifo npm
    const visitedVertices = new Set();

    //Vinicio - most important structure of algorithm
    const paths = new Map();
    const shortestPathSoFar = new Map();

    priorityQueue.queue({
        vertex: startVertex,
        priority: 0, //this is the most important node right now
    });

    shortestPathSoFar.set(startVertex, 0);

    while(priorityQueue.length > 0) {
        const currentVertex = priorityQueue.dequeue().vertex;
      //many lines of this kind
        if(visitedVertices.has(currentVertex)){
            continue;
        }
        // only one line of this kind
        visitedVertices.add(currentVertex);

        if(currentVertex === goalVertex){
            return paths;
        }

        const neighbors = graph.getNeighbors(currentVertex);

        for(neighbor of neighbors) {
            const { weight, vertex: nextVertex } = neighbor;
        }
        if(visitedVertices.has(nextVertex)) {
            continue;
          }

          const pathWeight = shortestPathSoFar(currentVertex) + weight;

          //const pathWeight = shortestPathSoFar.get(currentVertex) + weight + heuristic(nextVertex);
          //if you'/re not sure what heuristic should be, use dijkstra

          if(!shortestPathSoFar.has(nextVertex) || pathWeight < shortestPathSoFar.get(nextVertex)) {
            shortestPathSoFar.set(nextVertex, pathWeight);
            paths.set(vertex, currentVertex);

            priorityQueue.queue({
              vertex: nextVertex,
              priority: shortestPathSoFar.get(nextVertex),
            });
          }
        }
}
        return null;
    };



