describe("simple shields", function() {
  var shields
  var ship

  beforeEach(function() {
    shields = new Shields()
  })

  it("starts down", function() {
    expect(shields.isUp()).toBe(false)
  })

  it("can be raised", function() {
    shields.raise()
    expect(shields.isUp()).toBe(true)
  })


  it("check shield energy", function() {
    expect(shields.getEnergy() == 2000).toBe(true)
  })

  it("increase shield energy", function() {
    shields.increaseShieldsEnergy(100)
    expect(shields.getEnergy() == 2100).toBe(true)
  })


  it("shields get damage below its energy", function() {
    shields.decreaseShieldsEnergy(1500)
    expect(shields.getEnergy() === 500).toBe(true)
  })

})
