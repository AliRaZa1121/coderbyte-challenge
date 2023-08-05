function TreeConstructor(strArr) {
    const parentCount = {};  // To keep track of parent counts for each node
    const childCount = {};   // To keep track of child counts for each node

    for (const pair of strArr) {
        const [child, parent] = pair.slice(1, -1).split(',');
        const childInt = parseInt(child);
        const parentInt = parseInt(parent);

        parentCount[childInt] = (parentCount[childInt] || 0) + 1;
        childCount[parentInt] = (childCount[parentInt] || 0) + 1;
    }

    for (const node in parentCount) {
        if (parentCount[node] > 1) {  // Check if a child has more than one parent
            return "false";
        }
    }

    for (const node in childCount) {
        if (childCount[node] > 2) {  // Check if a parent has more than two children
            return "false";
        }
    }

    return "true";
}

// Test cases
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]));  // Output: true
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));  // Output: false
console.log(TreeConstructor(["(1,2)", "(2,3)", "(3,4)", "(4,5)"]));  // Output: false
console.log(TreeConstructor(["(1,2)", "(2,3)", "(2,4)", "(5,4)"]));  // Output: false
