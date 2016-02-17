import { threshold } from './options.json';

export function stopCriterion (){
    return this.statistics ? this.statistics.maxScore > +( threshold ) : 0;
}
