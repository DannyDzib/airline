function eventEmitter() {
    let events = {};
  
    return {
      subscribe: (event, fn) => {
        (events[event] || (events[event] = [])).push(fn);
        return {
          unsubscribe: () => {
            events[event].splice(events[event].indexOf(fn), 1);
          }
        };
      },
      emit: (event, data) => {
        (events[event] || []).forEach(fn => fn(data));
      }
    };
  }
  
  export { eventEmitter };
  