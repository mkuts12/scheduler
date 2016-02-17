import { threshold } from './options.js';

export function stopCriterion (){
    return this.statistics ? this.statistics.maxScore > threshold : 0;
}
