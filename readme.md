# node-fnv

Fowler–Noll–Vo (FNV-1a 32-bit) hash implementation for node.js

## Install

	npm install fnv

## Usage

	var FNV = require('fnv').FNV
	h = new FNV()
	h.update(Buffer("foobar"))
	h.digest("hex") // 'bf9cf968'


## References

- <http://isthe.com/chongo/tech/comp/fnv/>
- <http://tools.ietf.org/html/draft-eastlake-fnv-04>
