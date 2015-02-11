describe("#romanNumerals",function(){
  it('Returns a I for 1',function() {
    expect(romanNumerals(1)).to.equal("I");
  });

  it('Returns a V for 5', function() {
    expect(romanNumerals(5)).to.equal("V");
  });

  it('Returns a X for 10',function() {
    expect(romanNumerals(10)).to.equal("X");
  });

  it('Returns an L for 50', function() {
    expect(romanNumerals(50)).to.equal("L");
  });

  it('Returns a C for 100', function() {
    expect(romanNumerals(100)).to.equal("C");
  });

  it('Returns a D for 500', function() {
    expect(romanNumerals(500)).to.equal("D");
  });

  it('Returns a M for 1000', function(){
    expect(romanNumerals(1000)).to.equal("M");
  });

  it('Returns a II for 2', function() {
    expect(romanNumerals(2)).to.equal("II");
  });

  it('Returns a VI for 6', function() {
    expect(romanNumerals(6)).to.equal("VI");
  });

  it('Returns a IV for 4', function() {
    expect(romanNumerals(4)).to.equal("IV");
  });

  it('Returns a IX for 9', function() {
    expect(romanNumerals(9)).to.equal("IX");
  });

  it('Returns a XLIX for 49', function() {
    expect(romanNumerals(49)).to.equal("XLIX");
  });

  it('Returns a XC for 90', function() {
    expect(romanNumerals(90)).to.equal("XC");
  })
});
