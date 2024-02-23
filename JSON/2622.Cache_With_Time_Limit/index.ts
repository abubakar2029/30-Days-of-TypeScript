class TimeLimitedCache {
  private cache: Map<number, { value: number; expiration: number }> = new Map();

  set(key: number, value: number, duration: number): boolean {
    const existingEntry = this.cache.get(key);
    // if (this.cache.has(key) && existingEntry.expiration > Date.now()) {
    if (existingEntry && existingEntry.expiration > Date.now()) {
      this.cache.set(key, { value, expiration: Date.now() + duration });
      return true;
    } else {
      this.cache.set(key, { value, expiration: duration + Date.now() });
      return false;
    }
  }

  get(key: number): number {
    const existingEntry = this.cache.get(key);

    if (
      // this.cache.has(key) &&
      existingEntry &&
      existingEntry.expiration > Date.now()
    )
      return existingEntry.value;
    else return -1;
  }

  count(): number {
    let count: number = 0;
    for (let entry of this.cache.entries()) {
      if (entry[1].expiration > Date.now()) count++;
    }
    return count;
  }
}

// class TimeLimitedCache {
//   private data: Map<number, { value: number, expiration: number }> = new Map();

//   set(key: number, value: number, duration: number): boolean {
//     if (this.data.has(key) && this.data.get(key).expiration > Date.now()) {
//       this.data.set(key, { value, expiration: Date.now() + duration });
//       return true;
//     } else {
//       this.data.set(key, { value, expiration: Date.now() + duration });
//       return false;
//     }
//   }

//   get(key: number): number {
//     if (this.data.has(key) && this.data.get(key).expiration > Date.now()) {
//       return this.data.get(key).value;
//     } else {
//       return -1;
//     }
//   }

//   count(): number {
//     let count = 0;
//     for (const key of this.data.keys()) {
//       if (this.data.get(key).expiration > Date.now()) {
//         count++;
//       }
//     }
//     return count;
//   }
// }
