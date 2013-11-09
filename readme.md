# node-fnv

Fowler–Noll–Vo (FNV-1a 32-bit) hash implementation for node.js

## Install

	npm install fnv

## Usage

	var FNV = require("fnv").FNV
	var h = new FNV()
	h.update(Buffer("foobar"))
	h.digest("hex") // 'bf9cf968'


## API

### Class FNV

##### new FNV()

Create a new FNV hash object.

##### fnv.update(data)

- <code>data</code> Buffer or String (UTF-8 encoded)

Updates the hash content with the given data.
This can be called many times with new data.


##### fnv.digest([encoding])

- <code>encoding</code> String - can be <code>'hex'</code>, <code>'binary'</code> or <code>'base64'</code>

Returns the digest of all of the passed data to be hashed.
If no encoding is provided <code>'binary'</code> is used.

##### fnv.value()

Returns the hash value as Number

## References

- <http://isthe.com/chongo/tech/comp/fnv/>
- <http://tools.ietf.org/html/draft-eastlake-fnv-06>
