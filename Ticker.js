// Toy example of EventEmitter
// You should see tick printed imn console after every second

const EventEmitter = require('events').EventEmitter;
const util = require('util');

class Ticker {
    constructor(){
        this.ticker();
    }
    ticker(){
        const self = this;
        setInterval(() => {
            self.emit('tick');
    }, 1000);
    }
}
util.inherits(Ticker, EventEmitter);

module.exports = Ticker;

