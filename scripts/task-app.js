const task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false, //prevent this function from being overwritten
    enumerable: false, //hides this function from public 
    configurable: false //prevent this functions configs from being altered
});

console.log(task.toString());

console.log(Object.keys(task));

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false, //prevent this function from being overwritten
    enumerable: false, //hides this function from public 
    configurable: false //prevent this functions configs from being altered
});

console.log(urgentTask.toString());