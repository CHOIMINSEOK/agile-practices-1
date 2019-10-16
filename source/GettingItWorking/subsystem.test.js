describe("simple subsystem", function() {
  // var shields
  // var ship

  // beforeEach(function() {
  //   shields = new Shields()
  //   ship = new Ship()
  // })

  it("intiatePhaser", function() {
    energy = 300
    phaser = new Phaser(energy)

    expect(phaser.energy).toBe(300)
    
  })

  it("initiateShieldGen", function() {
    energy = 500
    shieldGen = new ShieldGen(energy)

    expect(shieldGen.energy).toBe(500)
  })

  it("initiateEngine", function() {
    energy = 200
    engine = new Engine(energy)

    expect(engine.energy).toBe(200)
  })
})
