// Ex 3
export interface myInterface {
    myArr:Array<string>;

    addTask(task: string): number;

    listAllTasks():void;
    
    deleteTask(task: string):Number
}