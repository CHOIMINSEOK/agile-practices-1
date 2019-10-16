class Ship {
  energy = 40000
  shields = new Shields()
  phaser
  shieldGen
  engine

  constructor(phaser, shieldGen, engine) {
    this.phaser = phaser
    this.shieldGen = shieldGen
    this.engine = engine

  }

  getEnergy = function() {
    return this.energy
  }

  decreaseShipEnergy = function(given_energy) {
    this.energy -= given_energy
  }

  transferEnergy = function(value) {
    this.decreaseShipEnergy(this.shields.increaseShieldsEnergy(value))
  }
  attacked = function(value) {
    this.shields.decreaseShieldsEnergy(value)
    //if(this.shields.buckled()) {

    //}
  }

  /*subsystemDamaged = function(leftOverDamage) {
    this.shields.buckled()
  }*/
}