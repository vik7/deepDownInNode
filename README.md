## Deep Down In Node

- First example is about how you can register custom event
  by inheriting from EventEmitter class and simply using `.emit()` function
- By using `process.nextTick(callback)` instead of `setTimeOut(callback, 0)`
    your `callback` will run immediately after all the events in the eventQueue
    has been processed that is much sooner in terms of CPU time scale than the
     Javascript queue has been activated 
