function Matrix(width, height) {
	this.width = width;
	this.height = height;

	// Making space
	this.data = new Array(); 
	for (i = 0; i < width * height; i++) {
		this.data.push(0);
	}

	this.add = add;
	this.scale = scale;
	this.x = multiply;
	this.e = element;
	this.setE = setElement;
	this.min = min;
	this.max = max;
	this.maxp = maxp;

	function add(B) {
		if (this.width != B.width || this.height != B.height) {
			throw "Matrices don't have the same dimensions";
		}
		res = new Matrix(this.width, this.height);
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				res.setE(i, j, this.e(i,j) + B.e(i,j));
			}
		}
		return res;
	}

	function maxp(B) {
		if (this.width != B.width || this.height != B.height) {
			throw "Matrices don't have the same dimensions";
		}
		res = new Matrix(this.width, this.height);
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				res.setE(i, j, Math.max(this.e(i,j), B.e(i,j)));
			}
		}
		return res;
	}

	function multiply(B) {
		if (this.width != B.width || this.height != B.height) {
			throw "Matrices don't have the same dimensions";
		}
		res = new Matrix(this.width, this.height);
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				res.setE(i, j, this.e(i,j) * B.e(i,j));
			}
		}
		return res;
	}

	function scale(scalar) {
		res = new Matrix(this.width, this.height);
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				res.setE(i, j, this.e(i,j) * scalar);
			}
		}
		return res;
	}
 
	function element(i,j) {
		return this.data[i + width * j];
	}

	function setElement(i,j,val) {
		this.data[i + width * j] = val;
	}

	function min() {
		res = Math.abs(this.e(0,0));
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				var val = Math.abs(this.e(i,j));
				if (res > val) {
					res = val;
				}
			}
		}
		return res;
	}

	function max() {
		res = Math.abs(this.e(0,0));
		for (i = 0; i < this.width; i++) {
			for (j = 0; j < this.height; j++) {
				var val = Math.abs(this.e(i,j));
				if (res < val) {
					res = val;
				}
			}
		}
		return res;
	}
}

