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

    it('should create an array with number or rows passed in', function() {
      expect(this.board.arr.length).to.equal(81);
    });

  });

});
