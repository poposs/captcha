function Oparator(){
  this.oparator = function(o){
    var opa = ['+','-'];
    return opa[o];
  }
}
function numberOparator() {
  this.numberOparator = function(r){
    var number = ['0','1','2','3','4','5','6','7','8','9'];
    return number[r];
  }

}
function stringOparator(){
  this.stringOparator = function(l){
    var str = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    return str[l];
  }
}
function Captcha() {
  var o = new Oparator();
  var number = new numberOparator();
  var string = new stringOparator();

  this.echopattern_one = function(O,R,L){
    return number.numberOparator(R)+" "+o.oparator(O)+" "+string.stringOparator(L);
  }
  this.echopattern_two = function(O,L,R){
    return string.stringOparator(L)+" "+o.oparator(O)+" "+number.numberOparator(R);
  }

}
describe("Captcha()", function() {
  var echo = new Captcha();
  it('it should be "1 + zero"', function() {
    expect(echo.echopattern_one(0,1,0)).toBe('1 + zero');
  });
  it('it should be "2 + one"', function() {
    expect(echo.echopattern_one(0,2,1)).toBe('2 + one');
  });
  it('it should be "3 + two"', function() {
    expect(echo.echopattern_one(0,3,2)).toBe('3 + two');
  });
  it('it should be "4 + three"', function() {
    expect(echo.echopattern_one(0,4,3)).toBe('4 + three');
  });
  it('it should be "5 + four"', function() {
    expect(echo.echopattern_one(0,5,4)).toBe('5 + four');
  });
  it('it should be "6 - five"', function() {
    expect(echo.echopattern_one(1,6,5)).toBe('6 - five');
  });
  it('it should be "7 - six"', function() {
    expect(echo.echopattern_one(1,7,6)).toBe('7 - six');
  });
  it('it should be "8 - seven"', function() {
    expect(echo.echopattern_one(1,8,7)).toBe('8 - seven');
  });
  it('it shold be "9 - eight"', function() {
    expect(echo.echopattern_one(1,9,8)).toBe('9 - eight');
  });
  it('it should be "9 - nine"', function() {
    expect(echo.echopattern_one(1,9,9)).toBe('9 - nine');
  });
});
describe("Captcha()", function() {
  var echo = new Captcha();
  it('it should be "zero + 1"', function() {
    expect(echo.echopattern_two(0,0,1)).toBe('zero + 1');
  });
  it('it sholud be "one + 2"', function() {
    expect(echo.echopattern_two(0,1,2)).toBe('one + 2');
  });
  it('it sholud be "two + 3"', function() {
    expect(echo.echopattern_two(0,2,3)).toBe('two + 3');
  });
  it('it should be "three + 4"', function() {
    expect(echo.echopattern_two(0,3,4)).toBe('three + 4');
  });
  it('it should be "four + 5"', function() {
    expect(echo.echopattern_two(0,4,5)).toBe('four + 5');
  });
  it('it should be "five + 6"', function() {
    expect(echo.echopattern_two(0,5,6)).toBe('five + 6');
  });
  it('it should be "six + 7"', function() {
    expect(echo.echopattern_two(0,6,7)).toBe('six + 7');
  });
  it('it should be "seven - 8"', function() {
    expect(echo.echopattern_two(1,7,8)).toBe('seven - 8');
  });
  it('it should be "eight - 9"', function() {
    expect(echo.echopattern_two(1,8,9)).toBe('eight - 9');
  });
  it('it should be "nine - 9"', function() {
    expect(echo.echopattern_two(1,9,9)).toBe('nine - 9');
  });
});
