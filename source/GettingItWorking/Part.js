class Part {
    name = null
    demage = null

    // constructor() {
    //     // random pick
    // }

    constructor(name, demage) {
        this.setProperty(name, demage)
      }

    pickPart = function() {
        this.setProperty("warp engine", 200)
    }
    
    setProperty = function(name, demage) {
        this.name = name
        this.demage = demage
    }
}