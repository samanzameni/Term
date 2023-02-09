const xhr1 = new XMLHttpRequest();
let title;
xhr1.open('GET' , 'https://swapi.dev/api/starships/2/');
xhr1.onload = () => {
    this.title = JSON.parse(xhr1.response);
    console.log(this.title);
    document.getElementById('1').innerHTML = this.title.name ;
    // document.getElementById('1').addEventListener('click', test1);
};
xhr1.send();
 const test1 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/2/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 1

const xhr2 = new XMLHttpRequest();
xhr2.open('GET' , 'https://swapi.dev/api/starships/3/');
xhr2.onload = () => {
    const data = JSON.parse(xhr2.response);
    console.log(data);
    document.getElementById('2').innerHTML = data.name;
    document.getElementById('2').addEventListener('click', test2);
};
xhr2.send();
const test2 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/3/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 2

const xhr3 = new XMLHttpRequest();
xhr3.open('GET' , 'https://swapi.dev/api/starships/5/');
xhr3.onload = () => {
    const data = JSON.parse(xhr3.response);
    console.log(data);
    document.getElementById('3').innerHTML = data.name;
    document.getElementById('3').addEventListener('click', test3);
};
xhr3.send();
const test3 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/5/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 3

const xhr4 = new XMLHttpRequest();
xhr4.open('GET' , 'https://swapi.dev/api/starships/9/');
xhr4.onload = () => {
    const data = JSON.parse(xhr4.response);
    console.log(data);
    document.getElementById('4').innerHTML = data.name;
    document.getElementById('4').addEventListener('click', test4);
};
xhr4.send();
const test4 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/9/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 4

const xhr5 = new XMLHttpRequest();
xhr5.open('GET' , 'https://swapi.dev/api/starships/10/');
xhr5.onload = () => {
    const data = JSON.parse(xhr5.response);
    console.log(data);
    document.getElementById('5').innerHTML = data.name;
    document.getElementById('5').addEventListener('click', test5);
};
xhr5.send();
const test5 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/10/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 5

const xhr6 = new XMLHttpRequest();
xhr6.open('GET' , 'https://swapi.dev/api/starships/11/');
xhr6.onload = () => {
    const data = JSON.parse(xhr6.response);
    console.log(data);
    document.getElementById('6').innerHTML = data.name;
    document.getElementById('6').addEventListener('click', test6);
};
xhr6.send();
const test6 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/11/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 6

const xhr7 = new XMLHttpRequest();
xhr7.open('GET' , 'https://swapi.dev/api/starships/12/');
xhr7.onload = () => {
    const data = JSON.parse(xhr7.response);
    console.log(data);
    document.getElementById('7').innerHTML = data.name;
    document.getElementById('7').addEventListener('click', test7);
};
xhr7.send();
const test7 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/12/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 7

const xhr8 = new XMLHttpRequest();
xhr8.open('GET' , 'https://swapi.dev/api/starships/13/');
xhr8.onload = () => {
    const data = JSON.parse(xhr8.response);
    console.log(data);
    document.getElementById('8').innerHTML = data.name;
    document.getElementById('8').addEventListener('click', test8);
};
xhr8.send();
const test8 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/13/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 8

const xhr9 = new XMLHttpRequest();
xhr9.open('GET' , 'https://swapi.dev/api/starships/15/');
xhr9.onload = () => {
    const data = JSON.parse(xhr9.response);
    console.log(data);
    document.getElementById('9').innerHTML = data.name;
    document.getElementById('9').addEventListener('click', test9);
};
xhr9.send();
const test9 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/15/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 9

const xhr10 = new XMLHttpRequest();
xhr10.open('GET' , 'https://swapi.dev/api/starships/17/');
xhr10.onload = () => {
    const data = JSON.parse(xhr10.response);
    console.log(data);
    document.getElementById('10').innerHTML = data.name;
    document.getElementById('10').addEventListener('click', test10);
};
xhr10.send();
const test10 = () => {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET' , 'https://swapi.dev/api/starships/17/');
    xhr1.onload = () => {
        const data = JSON.parse(xhr1.response);
        console.log(data);
        document.getElementById('11').innerHTML = "name: "+ data.name+ "<br>" + "model: " + data.model+ "<br>" + "manufacturer: " + data.manufacturer
            + "<br>" + "cost_in_credits: " + data.cost_in_credits+ "<br>" + "length: " + data.length+ "<br>" + "max_atmosphering_speed: " + data.max_atmosphering_speed+ "<br>" + "crew: " + data.crew
            + "<br>" + "passengers: " + data.passengers+ "<br>" + "cargo_capacity: " + data.cargo_capacity+ "<br>" + "consumables: " + data.consumables+ "<br>" + "hyperdrive_rating: " + data.hyperdrive_rating
            + "<br>" + "MGLT: " + data.MGLT+ "<br>" + "starship_class: " + data.starship_class+ "<br>" + "pilots: " + data.pilots+ "<br>" + "films: " + data.films
            + "<br>" + "created: " + data.created+ "<br>" + "edited: " + data.edited+ "<br>" + "url: " + data.url;
    };
    xhr1.send();
};
// using XMLHttpRequest for api get ajax for id = 10

