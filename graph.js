'use strict';

module.exports = class Graph{
    constructor(){
      //adjecency list
      this._adjacencyList = new Map();
    }

    addVertex(vertex){
      this._adjacencyList.set(vertex, []); //later you will improve the last parameter, [], to be a linked list

    }
    //start, end, weight
    addEdge(startVertex, endVertex, weight = 0) {
      if(!this._adjacencyList.has(startVertex)||
      !this._adjacencyList.has(endVertex)) {
        throw new Error('_INVALID_VERTEX_');
      }
      const edge = {
        vertex = endVertex,
        weight, 
      };

      this._adjacencyList.get(startVertex).push(edgeData);
    }


    getNeighbors(vertex) {
      if(!this._adjacencyList.has(vertex)){
        throw new Error('_INVALID_VERTEX_');
      }
      return [...this._adjacencyList.get(vertex)];
    }
};
