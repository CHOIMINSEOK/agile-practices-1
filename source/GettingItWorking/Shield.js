class Ship {
  energy = 40000
  shields = new Shields()
  getEnergy = function() {
    return this.energy
  }

  decreaseEnergy = function(given_energy) {
    this.energy -= given_energy
  }

  transferEnergy = function(value) {
    this.decreaseEnergy(this.shields.increaseEnergy(value))
  }
}

class Shields {
  isUped = false
  energy = 2000
  isUp = function() {
    return this.isUped
  }
  isDown = function() {
    this.isUped = false
  }
  raise = function() {
    this.isUped = true
  }
  getEnergy = function() {
    return this.energy
  }

  increaseEnergy = function(given_energy) {
    var previousEnergy = this.energy
    this.energy += given_energy
    if (this.energy > 10000) {
      this.energy = 10000
      return 10000 - previousEnergy
    } else {
      return given_energy
    }
  }
}
