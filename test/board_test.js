var expect = require('chai').expect,
    sinon = require('sinon'),
    Board = require('../src/Board');

describe('Board', function() {

  beforeEach(function() {
    this.board = new Board();
    this.board.setCell(5,6,7);
    this.board.setCell(0,0,2);
    this.board.setCell(8,8,5);
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
      expect(this.board.arr[51]).to.equal(7);
      expect(this.board.arr[0]).to.equal(2);
      expect(this.board.arr[80]).to.equal(5);
    });

  });

  describe('getCell', function() {

    it('should return the cell that was set based on x,y coordinates', function() {
      expect(this.board.getCell(5,6)).to.equal(7);
      expect(this.board.getCell(0,0)).to.equal(2);
      expect(this.board.getCell(8,8)).to.equal(5);
    });

  });

  describe('getRow', function() {

    it('should return a set containing the row', function() {
      expect(this.board.getRow(5)[6]).to.eql(7);
      expect(this.board.getRow(0)[0]).to.eql(2);
      expect(this.board.getRow(8)[8]).to.eql(5);
    });

  });

});
