"use strict"
/* implement http://tools.ietf.org/html/draft-eastlake-fnv-04 */

function FNV() {
	this.hash = 0x811C9DC5 /* offset_basis */
}

FNV.prototype = {
	update: function(data) {
		if(typeof data === 'string') {
			data = Buffer(data)
		} else if(!(data instanceof Buffer)) {
			throw Error("FNV.update expectes String or Buffer")
		}
		for(var i = 0; i < data.length; i++) {
			this.hash = this.hash ^ data[i]
			/* 32 bit FNV_Prime = 2**24 + 2**8 + 0x93 */
			this.hash += (this.hash << 24) + (this.hash << 8) + (this.hash << 7) + (this.hash << 4) + (this.hash << 1)
		}

        // Make API chainable
        return this;
	},
	digest: function(encoding) {
		encoding = encoding || "binary"
		var buf = new Buffer(4)
		buf.writeInt32BE(this.hash & 0xffffffff, 0)
		return buf.toString(encoding)
	},
	value: function() {
		return this.hash & 0xffffffff
	}
}

exports.FNV = FNV