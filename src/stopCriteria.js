import { threshold } from '../options.js';

export default function stopCriterion (){
    return this.statistics ? this.statistics.maxScore > threshold : 0;
}
