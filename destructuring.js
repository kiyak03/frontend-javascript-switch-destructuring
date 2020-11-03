// Opdracht 1: destructure price en refreshRate, en log ze in de console

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

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

// opdracht 4: destructure name en adress uit de return value van deze functie en log ze in de console

function getDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }
}

// opdracht 5: destructure beide zinnetjes uit de return value van deze functie en log ze in de console

function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}