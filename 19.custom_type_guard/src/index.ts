// custom type guard

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const myPetFish: Fish = {
  swim() {
    console.log(`Fish is Swimming`);
  },
};

const myPetBird: Bird = {
  fly() {
    console.log("Bird Is Flying");
  },
};

console.log(isFish(myPetFish));
console.log(isFish(myPetBird));
