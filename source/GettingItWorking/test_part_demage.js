describe("", function() {
  var part = null;

  beforeEach(function() {
    
    part = new Part("warp engine", 200);

    spyOn(part, "setProperty")
  });

  it("part was selected with name and demage units", function() {
    part.pickPart()
    expect(part.setProperty).toHaveBeenCalled();
    expect(part.setProperty).toHaveBeenCalledWith("warp engine", 200);
    expect(part.name).toBe("warp engine");
    expect(part.demage).toBe(200);
  });

});