var expect = require('chai').expect,
    sinon = require('sinon'),
    Board = require('../src/Board');

describe('Board', function() {

  beforeEach(function() {
    this.board = new Board();
  });

  describe('constructor', function() {

    it('should return an object', function() {
      expect(typeof this.board === 'object').to.be.true;
    });

    it('should create an array with 81 items', function() {
      expect(this.board.arr.length).to.equal(81);
    });

  });

  describe('setCell', function() {

    it('should set the cell based on x,y coordinates', function() {
      this.board.setCell(5,6,7);
      expect(this.board.arr[51]).to.equal(7);
      this.board.setCell(0,0,2);
      expect(this.board.arr[0]).to.equal(2);
      this.board.setCell(8,8,5);
      console.log(this.board.arr);
      expect(this.board.arr[80]).to.equal(5);
    });

  });

});
