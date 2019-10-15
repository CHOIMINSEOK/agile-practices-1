describe("simple shields", function() {
  var shields
  var ship

  beforeEach(function() {
    shields = new Shields()
    ship = new Ship()
  })
  it("starts down", function() {
    expect(shields.isUp()).toBe(false)
  })
  it("can be raised", function() {
    shields.raise()
    expect(shields.isUp()).toBe(true)
  })
  it("check ship energy", function() {
    expect(ship.getEnergy() == 40000).toBe(true)
  })
  it("check shield energy", function() {
    expect(shields.getEnergy() == 2000).toBe(true)
  })
  it("decrease ship energy", function() {
    ship.decreaseEnergy(100)
    expect(ship.getEnergy() == 39900).toBe(true)
  })
  it("increase shield energy", function() {
    shields.increaseEnergy(100)
    expect(shields.getEnergy() == 2100).toBe(true)
  })
  it("transfer shield energy", function() {
    ship.transferEnergy(100)

    expect(ship.getEnergy() == 39900).toBe(true)
    expect(ship.shields.getEnergy() == 2100).toBe(true)
  })

  it("validate shield max energy", function() {
    expect(ship.shields.increaseEnergy(12000) === 8000).toBe(true)
    expect(ship.shields.getEnergy() === 10000).toBe(true)
  })

  it("validate shield max energy", function() {
    ship.transferEnergy(12000)
    expect(ship.getEnergy() == 32000).toBe(true)
    expect(ship.shields.getEnergy() === 10000).toBe(true)
  })

  it("sheild down", function() {
    ship.transferEnergy(12000)
    expect(ship.getEnergy() == 32000).toBe(true)
    expect(ship.shields.getEnergy() === 10000).toBe(true)
  })
})
