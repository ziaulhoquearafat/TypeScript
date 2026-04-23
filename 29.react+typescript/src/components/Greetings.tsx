type GreetingProps = {
  name: string;
  age: number;
};

const Greetings = ({ name, age }: GreetingProps) => {
  return (
    <div>
      Hello, I am {name}, and I am {age} Years old
    </div>
  );
};

export default Greetings;
