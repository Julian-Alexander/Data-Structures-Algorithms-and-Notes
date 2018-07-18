/* Queue
Create a F.I.F.O Queue data structure with the methods 'enqueue' and 'dequeue'. 
Enqueue should add an element to the front of the queue, and dequeue
should remove the element from the end.
Testing: `jest Queue/test.js`
*/

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(record) {
        this.data.unshift(record);
    }

    dequeue() {
        this.data.pop();
    }
}

module.exports = Queue;
