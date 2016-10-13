function Captcha() {
  var i = 0;
  var k = 0;
  var j = 0;
  var numberOparator = ['0','1','2','3','4','5','6','7','8','9'];
  var stringOparator = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var oparator = ['+','-'];

  this.echopattern_one = function(){
    return numberOparator[i]+" "+oparator[j]+" "+stringOparator[k];
  }

  this.addnumber = function(){
    i++;
  }
}
describe("Captcha()", function() {
  var echo = new Captcha();
  it('it should be "1 + zero"', function() {
    echo.addnumber();
    expect(echo.echopattern_one()).toBe('1 + zero');
  });
  it('it should be "2 + one"', function() {
    echo.addnumber();
    echo.addString();
    expect(echo.echopattern_one()).toBe('2 + one');
  });


});
