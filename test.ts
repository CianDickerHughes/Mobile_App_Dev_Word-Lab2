// Ex 2
let myArr2: string[] = []; // or let myArr :Array<string>=[];

function addTask2(task: string): number {
    let length: number = myArr2.push(task);
    console.log(task + " has been added to our Tasks Array2.");
    return length;
}

function listAllTasks2() {
    myArr2.forEach((item) => {
        console.log("Element " + item + " is in our Array tasks");
    })
}

function deleteTask2(task: string): number {
    let index: number = myArr2.indexOf(task);
    if (index > -1) {
        myArr2.splice(index, 1);
        console.log(task + " has been delete to our Tasks Array2.");
    }
    else {
        console.log(task + " is not in our tasks array");
    }

    return myArr2.length;
}

addTask2("HomeWork!");
addTask2("HelloWorld");
listAllTasks2();
deleteTask2("HomeWork!");
deleteTask2("NoHomeWork!");
listAllTasks2();

console.log("\n\n");





/*

 listAllTasks3() {
        for (let i = 0; i < myArr3.length; i++) {
            console.log(myArr3[i])
        }
    }

    deleteTask3(task: string): number {
        for (let i = 0; i < myArr3.length; i++) {
            if (task == myArr3[i]) {
                myArr3.splice(i, i);
            }
        }
        console.log(task + " has been delete to our Tasks Array3.");
        return myArr3.length;
    }

    */