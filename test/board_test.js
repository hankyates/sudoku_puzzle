var expect = require('chai').expect,
    sinon = require('sinon'),
    Board = require('../src/Board');

describe('Board', function() {

  beforeEach(function() {
    this.board = new Board();

    this.board.setCell(0,0,2);
    this.board.setCell(0,1,1);
    this.board.setCell(0,2,3);
    this.board.setCell(0,3,4);
    this.board.setCell(0,4,5);
    this.board.setCell(0,5,6);
    this.board.setCell(0,6,7);
    this.board.setCell(0,7,8);
    this.board.setCell(0,8,9);

    this.board.setCell(1,0,8);
    this.board.setCell(2,0,7);
    this.board.setCell(3,0,6);
    this.board.setCell(4,0,5);
    this.board.setCell(5,0,4);
    this.board.setCell(6,0,3);
    this.board.setCell(7,0,9);
    this.board.setCell(8,0,1);

    this.board.setCell(1,1,4);
    this.board.setCell(1,2,5);
    this.board.setCell(2,1,6);
    this.board.setCell(2,2,9);

    this.board.setCell(5,6,7);
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
      expect(this.board.getCell(5, 6)).to.equal(7);
      expect(this.board.arr[0]).to.equal(2);
      expect(this.board.getCell(8, 8)).to.equal(5);
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
      expect(this.board.getRow(6)[5]).to.eql(7);
      expect(this.board.getRow(0)[0]).to.eql(2);
      expect(this.board.getRow(8)[8]).to.eql(5);
    });
  });

  describe('getCol', function() {
    it('should return a set containing the column', function() {
      expect(this.board.getCol(8)[8]).to.eql(5);
      expect(this.board.getCol(5)[6]).to.eql(7);
      expect(this.board.getCol(0)[0]).to.eql(2);
    });
  });

  describe('getGrid', function() {
    it('should return a set containing the grid', function() {
      expect(this.board.getGrid(8)[8]).to.eql(5);
      expect(this.board.getGrid(0)[0]).to.eql(2);
      expect(this.board.getGrid(7)[2]).to.eql(7);
    });
  });

  describe('isSetValid', function() {
    it('should return true the row set is valid', function() {
      expect(this.board.isSetValid(this.board.getRow(0))).to.be.true;
    });
    it('should return true the col set is valid', function() {
      expect(this.board.isSetValid(this.board.getCol(0))).to.be.true;
    });
    it('should return true if the grid set is valid', function() {
      expect(this.board.isSetValid(this.board.getGrid(0))).to.be.true;
    });
  });

});
