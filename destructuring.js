// Opdracht 1: destructure price en refreshRate, en log ze in de console

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

const {price, refreshRate} = product;
console.log(price);
console.log(refreshRate);



// Opdracht 2: destructure type en brand en log ze in de console

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

const {general:{ type, brand}} = productInformation;
console.log(brand, type)

// Opdracht 3: destructure wifi en bluetooth en log ze in de console

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

const {options:{connectivity:{popular:{wifi, bluetooth}}}} = tvOptions;
console.log(wifi,bluetooth);

// opdracht 4: destructure name en adress uit de return value van deze functie en log ze in de console

function getDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }

}

const {name, adress} = getDetails();
console.log(name, adress);

// opdracht 5: destructure beide zinnetjes uit de return value van deze functie en log ze in de console

function getDetails2(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

const [namess,age]=getDetails2("Fatih","32");
console.log(namess,age);