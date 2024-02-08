"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = /** @class */ (function () {
    function todos() {
        this.myArr = [];
    }
    todos.prototype.addTask = function (task) {
        var length = this.myArr.push(task);
        console.log(task + " has been added to our Tasks Array2.");
        return length;
    };
    todos.prototype.listAllTasks = function () {
        this.myArr.forEach(function (item) {
            console.log("Element " + item + " is in our Array tasks");
        });
    };
    todos.prototype.deleteTask = function (task) {
        var index = this.myArr.indexOf(task);
        if (index > -1) {
            this.myArr.splice(index, 1);
            console.log(task + " has been delete to our Tasks Array2.");
        }
        else {
            console.log(task + " is not in our tasks array");
        }
        return this.myArr.length;
    };
    return todos;
}());
var myTasks = new todos();
myTasks.addTask("HomeWork!!!");
myTasks.addTask("Hello World");
myTasks.listAllTasks();
myTasks.deleteTask("HomeWork!!!");
myTasks.deleteTask("NoHomeWork!");
myTasks.listAllTasks();
