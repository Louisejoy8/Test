class Musician{
    constructor(name,instrument, bands){
        this.name = name; 
        this.instrument = instrument; 
        this.bands = bands; 
    }
    joinBand(band){
        this.bands.push(band);
    }
    leaveBand(band){
        let self = this; 
        this.bands.forEach(function(b, i){
            if(b.name === band.name){
                self.bands.splice(i,1)
            }
        })
    }
}

/* Arrow function
this.bands.forEach((b, i) => {
    if(b.name === band.name){
        this.bands.splice(i,1)
    }
})
*/