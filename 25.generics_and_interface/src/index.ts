// generics

// ! function without generics
function logString(data: string): void {
  console.log(data);
}
function logNumber(data: number): void {
  console.log(data);
}
function logBoolean(data: boolean): void {
  console.log(data);
}

logString("Hello World");
logNumber(52678);
logBoolean(true);

// ! function with generics
function logData<T>(data: T) {
  console.log(data);
}

logData<string>("Hablu is a student");
logData<number>(265697);
logData<boolean>(false);

// ! generics interfaces

interface apiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: apiResponse<{ name: string }> = {
  success: true,
  data: {
    name: "Hablu",
  },
};

const numberResponse: apiResponse<number> = {
  success: false,
  data: 45,
};
