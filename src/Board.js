function Board () {
  this.arr = new Array(81);
}

Board.prototype = {
  setCell: function(x, y, value) {
    var index = (9 * x) + y;
    this.arr[index] = value;
  },
  getCell: function(x, y) {
    var index = (9 * x) + y;
    return this.arr[index];
  },
  getRow: function(rowNumber) {
    var begIdx = (9 * rowNumber),
        endIdx = begIdx + 9;
    return this.arr.slice(begIdx, endIdx);
  }
}

module.exports = Board;
