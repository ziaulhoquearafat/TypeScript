// implements keyword

interface Drive {
  start: () => void;
  stop: () => void;
}

class Car implements Drive {
  start() {
    console.log(`car is started...`);
  }
  stop() {
    console.log(`car is stopped...`);
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();
