"use strict"

var assert = require("assert")
var FNV = require('./fnv').FNV

suite('FNV')

test('Chainable .update()', function(){
    assert.equal(new FNV().update("foobar").digest("hex"), "bf9cf968");
})

test('#init', function(){
	var h = new FNV()
	assert.equal(h.digest("hex"), "811c9dc5")
})

test('#empty', function(){
	var h = new FNV()
	h.update(Buffer(""))
	assert.equal(h.digest("hex"), "811c9dc5")
})

test('#foobar', function(){
	var h = new FNV()
	h.update(Buffer("foobar"))
	assert.equal(h.digest("hex"), "bf9cf968")
})

test('#a', function(){
	var h = new FNV()
	h.update(Buffer("a"))
	assert.equal(h.digest("hex"), "e40c292c")
})

test('#foobar-zero', function(){
	var h = new FNV()
	h.update(Buffer("foobar\0"))
	assert.equal(h.digest("hex"), "0c1c9eb8")
})

test('#foo split bar', function(){
	var h = new FNV()
	h.update(Buffer("foo"))
	h.update(Buffer("bar"))
	assert.equal(h.digest("hex"), "bf9cf968")
})

test('#type string', function() {
	var h = new FNV()
	h.update("")
	assert.equal(h.digest("hex"), "811c9dc5")
	h.update("foobar")
	assert.equal(h.digest("hex"), "bf9cf968")
	h = new FNV()
	h.update("a")
	assert.equal(h.digest("hex"), "e40c292c")
})

test("#type not supported", function() {
	var h = new FNV()
	assert.throws(
		function() {
			h.update({foo: 42})
		}
	)
})
