Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) {
  }
  return this.flat(Infinity).length === other.flat(Infinity).length;
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
