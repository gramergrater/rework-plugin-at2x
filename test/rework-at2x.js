
var rework = require('rework')
  , inline = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.at2x()', function(){
  it('should add device-pixel-ratio rules', function(){
    rework(fixture('at2x'))
      .use(rework.at2x())
      .toString()
      .should.equal(fixture('at2x.out'));
  })
})