class Band{
    constructor(name, members){
        this.name = name; 
        this.members = members; 
    }
    hire(musician){
        this.members.push(musician);
    }
    fire(musician){
       let self = this; 
       this.members.forEach(function(member, index){
        if(member.name === musician.name){
            self.members.splice(index,1)
        }
       })
    }
}