const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

explorers.forEach((element) => console.log(element.name, element.stack));

const list = explorers.map((element) => element.stack);

console.log(list)

const js = explorers.filter((element)=>element.stack.includes('js'))

console.log('Lista de explorers que tienen en su stack "js"')

js.forEach(element => console.log(`${element.name} has ${element.stack}`))

console.log('Primer explorer que sea de la CDMX, usa FIND')

const cdmx= explorers.find(element => element.city === "CDMX")

console.log(`${cdmx.name} lives in ${cdmx.city}`)

console.log('Suma de todos los exercises_completed:')

const total = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)

console.log(total)

const finished= explorers.some(element => element.missions.frontend.exercisesFinished === true)

console.log('Someone finished all exercises? : '+finished)

const allfinished= explorers.every(element => element.missions.onboarding.exercisesFinished === true)

console.log('Everyone in onboarding? : '+finished)