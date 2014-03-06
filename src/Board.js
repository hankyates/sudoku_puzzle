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
  }
}

module.exports = Board;
