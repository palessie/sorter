class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a, b) => a - b;;
  }

  add(element) {
    this.array.push(element);
    // your implementation
  }

  at(index) {
    return this.array[index];
    // your implementation
  }

  get length() {
    return this.array.length;
    // your implementation
  }

  toArray() {
    return this.array;
    // your implementation
  }

  sort(indices) {

    let buff;
    indices.sort((a, b) => a - b);

    for (let i = 0; i < indices.length - 1; i++) {
      for (let j = i; j < indices.length; j++) {
        if (this.comparator(this.array[indices[i]], this.array[indices[j]]) > 0) {
          buff = this.array[indices[i]];
          this.array[indices[i]] = this.array[indices[j]];
          this.array[indices[j]] = buff;
        }
      }
    }

    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;