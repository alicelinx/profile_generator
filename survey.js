const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};


const name = () => {
  rl.question("What's your name? (nicknames are also acceptable)\n", (answer) => {
    answers['name'] = answer;
    activity();
  });
};


const activity = () => {
  rl.question("What's an activity you like doing?\n", (answer) => {
    answers['activity'] = answer;
    music();
  });
};

const music = () => {
  rl.question("What do you listen to while doing that?\n", (answer) => {
    answers['music'] = answer;
    meal();
  });
};

const meal = () => {
  rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.)\n", (answer) => {
    answers['meal'] = answer;
    dish();
  });
};

const dish = () => {
  rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
    answers['dish'] = answer;
    sport();
  });
};

const sport = () => {
  rl.question("Which sport is your absolute favourite?\n", (answer) => {
    answers['sport'] = answer;
    superpower();
  });
};

const superpower = () => {
  rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
    answers['superpower'] = answer;
    generatedProfile();
  });
};

const generatedProfile = () => {
  console.log(`Hi there, this is ${answers.name}. I love listening to ${answers.music} while ${answers.activity}. As a foodie, ${answers.dish} is my must have for ${answers.meal}. My favourite sport is ${answers.sport} and I'm amazing at ${answers.superpower}!`);
  rl.close();
};


name();