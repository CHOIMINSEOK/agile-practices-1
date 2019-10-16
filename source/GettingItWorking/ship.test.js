describe("ship test", function() {
  var ship

  beforeEach(function() {
    ship = new Ship()
  })

  it("check ship energy", function() {
    expect(ship.getEnergy() == 40000).toBe(true)
  })

  it("decrease ship energy", function() {
    ship.decreaseShipEnergy(100)
    expect(ship.getEnergy() == 39900).toBe(true)
  })

  it("transfer shield energy", function() {
    ship.transferEnergy(100)

    expect(ship.getEnergy() == 39900).toBe(true)
    expect(ship.shields.getEnergy() == 2100).toBe(true)
  })

  it("validate shield max energy", function() {
    expect(ship.shields.increaseShieldsEnergy(12000) === 8000).toBe(true)
    expect(ship.shields.getEnergy() === 10000).toBe(true)
  })

  it("validate shield max energy", function() {
    ship.transferEnergy(12000)
    expect(ship.getEnergy() == 32000).toBe(true)
    expect(ship.shields.getEnergy() === 10000).toBe(true)
  })

  it("shields get damage over its energy", function() {
    expect(ship.shields.decreaseShieldsEnergy(2500) === 500).toBe(true)
    expect(ship.shields.getEnergy() === 0).toBe(true)
    expect(ship.shields.buckled()).toBe(true)
  })

  it("ship attacked", function() {
    ship.shields.raise()
    ship.attacked(1500)
    expect(ship.shields.getEnergy() === 500)
    expect(ship.shields.buckled()).toBe(false)
  })
})
