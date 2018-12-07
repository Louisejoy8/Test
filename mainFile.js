let name = `Christian`; 
let instrument = `guitar`;
let bands = [];
const musician = new Musician(name, instrument, bands );
const musician2 = new Musician("Louise", "Ukulele", [] )
let bandName = `skats`;
let members = [musician]; 
const band = new Band(bandName, members); 
const band2 = new Band("Rasmus Seebach", [] )
musician.joinBand(band);
musician.joinBand(band2)

musician.leaveBand(band);
//console.log(musician.bands) 
band2.hire(musician);
band2.hire(musician2);
band2.fire(musician)
console.log(band2)
