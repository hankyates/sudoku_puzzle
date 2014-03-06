function Board () {
  this.arr = new Array(81);
}

Board.prototype = {
  setCell: function(x, y, value) {
    var index = (9 * y) + x;
    this.arr[index] = value;
  },
  getCell: function(x, y) {
    var index = (9 * y) + x;
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
  },
  getGrid: function(gridNumber) {
    var grid = [];

    for (var i = 0; i < 9; i++) {
      var x = ((gridNumber % 3) * 3) + (i % 3),
          y = (~~(gridNumber / 3) * 3) + ~~(i / 3);
      grid.push(this.getCell(x, y));
    }

    return grid;
  },
  isSetValid: function(set) {
    var uniques = {};
    for (var i=0; i < set.length; i++){
      if (uniques[set[i]]){
        return false;
      } else {
        uniques[set[i]] = true;
      }
    }
    return true;
  }
}

module.exports = Board;
