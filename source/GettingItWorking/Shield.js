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
  attacked = function(value) {
    this.shields.decreaseEnergy(value)
  }
}

class Shields {
  isUped = false
  energy = 2000
  isUp = function() {
    return this.isUped
  }
  buckled = function() {
    return !this.isUped
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

  decreaseEnergy = function(damage) {
    var previousEnergy = this.energy
    this.energy -= damage
    if (this.energy < 0) {
      this.energy = 0
      this.isUped = false
      return damage - previousEnergy
    } else {
      return 0
    }
  }
}
