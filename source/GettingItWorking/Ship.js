class Ship {
  energy = 40000
  shields = new Shields()
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
  }
}