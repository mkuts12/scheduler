import { Task } from 'genetic';
import options from './options.js';
import crossover from './src/crossover.js';
import getRandomSolution from './src/getRandomSolution.js';
import stopCriteria from './src/stopCriteria.js';
import fitness from './src/fitness.js';
import mutate from './src/mutate.js';

let taskInstance = Task({
    getRandomSolution : getRandomSolution,
    popSize : options.popSize,
    stopCriteria : stopCriteria,
    fitness : fitness,
    minimize : options.minimize,
    mutateProbability : options.mutateProbability,
    mutate : mutate,
    crossoverProbability : options.crossoverProbability,
    crossover : crossover,
});

taskInstance.run( stats => {
    console.log('~drum roll~ results: ', stats);
} )
