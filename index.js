class CashRegister {

    constructor () {
        this.max = Number.MIN_VALUE;
        this.min = Number.MAX_VALUE;
        this.total = 0;
        this.length = 0;
        this.frequency = [];
        }

  ringUp(num) {

      if (this.max < num) {
        this.max = num;
        }

      if (this.min > num) {
          this.min = num;
        }

        this.total += num;
        this.length +=1;

      if (this.frequency[num]) {
           this.frequency[num]++;
        } else {
           this.frequency[num] = 1;
        }
    
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;     
  }

  getMean() {
    return this.total / this.length;
  }

  getMode() {
      var maxFrequency = 0;
      var freqValue = 0;
    
      for (var i = 0; i < this.frequency.length; i++) {
        if (this.frequency[i] > maxFrequency) {
            maxFrequency = this.frequency[i];
            freqValue = i;
        }
      }
      return freqValue;
      
  }
}



(function testMax1() {

    var register = new CashRegister();
    register.ringUp(3);
    console.log(register.getMax() == 3);

})();

(function testMax2() {

    var register = new CashRegister();
    register.ringUp(3);
    register.ringUp(1);
    console.log(register.getMax() == 3);

})();

(function testMin1() {

    var register = new CashRegister();
    register.ringUp(1);
    console.log(register.getMin() == 1);

})();

(function testMin2() {

    var register = new CashRegister();
    register.ringUp(4);
    register.ringUp(1);
    console.log(register.getMin() == 1);

})();

(function testMean1() {

    var register = new CashRegister();
    register.ringUp(1);
    console.log(register.getMean() == 1);

})();

(function testMean2() {

    var register = new CashRegister();
    register.ringUp(1);
    register.ringUp(2);
    console.log(register.getMean() == 1.5);

})();

(function testMean3() {

    var register = new CashRegister();
    register.ringUp(1);
    register.ringUp(3);
    console.log(register.getMean() == 2);

})();

(function testMode1() {

    var register = new CashRegister();
    register.ringUp(1);
    console.log(register.getMode() == 1);

})();

(function testMode2() {

    var register = new CashRegister();
    register.ringUp(5);
    register.ringUp(5);
    console.log(register.getMode() == 5);

})();

(function testMode3() {

    var register = new CashRegister();
    register.ringUp(1);
    register.ringUp(3);
    register.ringUp(2);
    register.ringUp(3);
    console.log(register.getMode() == 3);

})();

(function testMode3() {

    var register = new CashRegister();
    register.ringUp(1);
    register.ringUp(3);
    register.ringUp(2);
    register.ringUp(3);
    register.ringUp(2);
    console.log(register.getMode() == 2);

})();