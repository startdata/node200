const ship = {
    max: 4,
    passegers: [],
    onBoard: function(name) {
        if (this.passegers.length ===4){
            console.log(`this is ${name}`);
        } else {
            this.passegers.push(name);
            console.log(`${name} boarded`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');

console.log(ship.passegers);
