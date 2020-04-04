var tree = {
  "1": {
    "2": {
      "7": null,
      "8": {
        "10": {
          "11": null
        }
      },
      "9": null
    },
    "3": null,
    "4": null,
    "5": null,
    "6": null
  }
};

function dfs(theObject, itemToFind) {
  let result = null;

  for (var node in theObject) {
    console.log(node);
    if (theObject.hasOwnProperty(node)) {
      if (node === itemToFind) {
        return theObject;
      }
      result = dfs(theObject[node], itemToFind);
      if (result) {
        break;
      }
    }
  }

  return result;
}
console.log("DFS - Depth-first-search");
dfs(tree, "10");

//============================================================================

function bfs(theObject, findItem) {
  const arr = [theObject];

  while (arr.length) {
    const node = arr.shift(); //Removes the first element from an array and returns that removed element.

    for (let item in node) {
      console.log(item);

      if (node[findItem] !== undefined) {
        return node[findItem];
      }
      if (node[item] instanceof Object) {
        arr.push(node[item]);
      }
    }
  }
}

console.log("BFS - Breadth-first-search");
bfs(tree, "10");
