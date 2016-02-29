import { Task } from 'genetic';
import options from './options.js';
import crossover from './src/crossover.js';
import getRandomSolution from './src/getRandomSolution.js';
import stagnating from './src/stopCriteria.js';
import fitness from './src/fitness.js';
import mutate from './src/mutate.js';

let taskInstance = new Task({
    getRandomSolution : getRandomSolution,
    popSize : options.popSize,
    stopCriteria : stagnating,
    fitness : fitness,
    minimize : options.minimize,
    mutateProbability : options.mutateProbability,
    mutate : mutate,
    crossoverProbability : options.crossoverProbability,
    crossover : crossover,
});

console.log("start");
taskInstance.run( stats => {
    console.log('~drum roll~ results: ', JSON.stringify(stats.max) + ";;;;;;" + stats.maxScore);
    debugger;
} )
