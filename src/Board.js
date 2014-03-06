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
  },
  getCol: function(colNumber) {
    var col = [];

    for (var i = 0; i < 9; i++) {
      col.push(this.arr[(9 * i) + colNumber]);
    }

    return col;

  }
}

module.exports = Board;
