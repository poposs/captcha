describe("Captcha()", function() {
  var echo = new Captcha();
  it('it should be "1 + zero"', function() {
    echo.addnumber();
    expect(echo.echopattern_one()).toBe('1 + zero');
  });
  

});
