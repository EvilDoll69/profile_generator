const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
  rl.question(`What's an activity you like doing?`, (activity) => {
    rl.question(`What do you listen to while doing that?`, (music) => {
      rl.question(`Which meal is your favourite`, (meal) => {
        rl.question(`Which sport is your absolute favourite?`, (sport) => {
          console.log(`${name} loves ${activity} and prefare ${music} music over others. Favourite meal is ${meal} and sport activity ${sport}`);
          rl.close();
        });
      });
    });
  });
});
