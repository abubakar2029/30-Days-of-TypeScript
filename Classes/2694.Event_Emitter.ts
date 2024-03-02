type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private _subs: Map<string, Callback[]>;

  constructor() {
    this._subs = new Map();
  }
  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this._subs.get(eventName)) {
      this._subs.set(eventName, []);
    }
    this._subs.get(eventName)?.push(callback);
    return {
      unsubscribe: () => {
        let subcribers = this._subs.get(eventName);
        if (subcribers) {
          const index = subcribers.indexOf(callback);
          if (index != -1) {
            subcribers.splice(index, 1);
          }
          if (subcribers.length == 0) {
            this._subs.delete(eventName);
          }
        }
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const subcribers = this._subs.get(eventName) || [];
    return subcribers.map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
