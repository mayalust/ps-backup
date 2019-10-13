class PsGridPage {
  constructor (length = 0, s = 10) {
    this.current = 0
    this.length = length;
    this.total = Math.ceil(length / s);
    this.size = s;
  }
  setSize (s) {
    this.size = s;
    this.total = Math.ceil(this.length / s);
    this.current = 0;
  }
  setLength (l) {
    this.length = l;
    this.total = Math.ceil(l / this.size);
  }
  getTotal () {
    return this.total;
  }
  getCurrent () {
    return this.current;
  }
  isFirst () {
    return this.current == 0;
  }
  isLast () {
    return this.current == this.total.length - 1;
  }
  nextPage () {
    this.current < this.total - 1 && this.current++;
  }
  prevPage () {
    this.current > 0 && this.current--;
  }
  moveTo (inx) {
    this.current = inx;
  }
  getSize () {
    return this.size;
  }
  getStartPoint () {
    return this.current * this.size;
  }
}

export default PsGridPage;