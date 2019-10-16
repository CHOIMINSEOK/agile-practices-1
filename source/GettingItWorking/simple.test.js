describe("simple shields", function() {
  //var shields
  var ship

  beforeEach(function() {
    //shields = new Shields()
    ship = new Ship()
  })

  it("starts down", function() {
    expect(ship.shields.isUp()).toBe(false)
  })

  it("can be raised", function() {
    ship.shields.raise()
    expect(ship.shields.isUp()).toBe(true)
  })

  it("check ship energy", function() {
    expect(ship.getEnergy()).toBe(40000)
  })

  it("check shield energy", function() {
    expect(ship.shields.getEnergy()).toBe(2000)
  })

  it("decrease ship energy", function() {
    ship.decreaseShipEnergy(100)
    expect(ship.getEnergy()).toBe(39900)
  })

  it("increase shield energy", function() {
    ship.shields.increaseShieldsEnergy(100)
    expect(ship.shields.getEnergy()).toBe(2100)
  })

  it("transfer shield energy", function() {
    ship.transferEnergy(100)

    expect(ship.getEnergy()).toBe(39900)
    expect(ship.shields.getEnergy()).toBe(2100)
  })

  it("validate shield max energy", function() {
    expect(ship.shields.increaseShieldsEnergy(12000)).toBe(8000)
    expect(ship.shields.getEnergy()).toBe(10000)
  })

  it("validate shield max energy", function() {
    ship.transferEnergy(12000)
    expect(ship.getEnergy()).toBe(32000)
    expect(ship.shields.getEnergy()).toBe(10000)
  })

  it("shields get damage below its energy", function() {
    ship.shields.decreaseShieldsEnergy(1500)
    expect(ship.shields.getEnergy()).toBe(500)
  })

  it("shields get damage over its energy", function() {
    expect(ship.shields.decreaseShieldsEnergy(2500)).toBe(500)
    expect(ship.shields.getEnergy()).toBe(0)
    expect(ship.shields.buckled()).toBe(true)
  })

  it("ship attacked", function() {
    ship.shields.raise()
    ship.attacked(1500)
    expect(ship.shields.getEnergy()).toBe(500)
    expect(ship.shields.buckled()).toBe(false)
  })
})
