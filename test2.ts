// Ex 3
import { myInterface } from './test2Interface';

class todos implements myInterface{

    myArr:Array<string> = [];

    addTask(task: string): number {
        let length: number = this.myArr.push(task);
        console.log(task + " has been added to our Tasks Array2.");
        return length;
    }

    listAllTasks():void {
        this.myArr.forEach((item) => {
            console.log("Element " + item + " is in our Array tasks");
        })
    }
    
    deleteTask(task: string): number {
        let index: number = this.myArr.indexOf(task);
        if (index > -1) {
            this. myArr.splice(index, 1);
            console.log(task + " has been delete to our Tasks Array2.");
        }
        else {
            console.log(task + " is not in our tasks array");
        }
        return this.myArr.length;
    } 
}
let myTasks = new todos();
myTasks.addTask("HomeWork!!!");
myTasks.addTask("Hello World");
myTasks.listAllTasks();
myTasks.deleteTask("HomeWork!!!");
myTasks.deleteTask("NoHomeWork!");
myTasks.listAllTasks();