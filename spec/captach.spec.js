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
    expect(echo.echopattern_one(0,3,2)).toBe('3 + two')
  });


});
