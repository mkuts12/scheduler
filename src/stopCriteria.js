import { threshold } from '../options.js';

// export default function stopCriterion (){
//     return this.statistics ? this.statistics.maxScore >= threshold : false;
// }

function addStagnationIndictator(){
    if( this.stagnation !== undefined )
        return;
    this.stagnation = 0;
    this.previousMaxScore = 0;
}

function getDiff(){
    return this.statistics.maxScore - this.previousMaxScore;
}

function updateMaxScore(){
    this.previousMaxScore = this.statistics.maxScore;
    return false;
}

function isStagnated(){
    this.stagnation = getDiff.call(this) <= threshold ? this.stagnation + 1 : 0;
    updateMaxScore.call(this);
    return this.stagnation >= 5;
}

export default function stagnating (){
    if( ! this.statistics )
        return false;
    addStagnationIndictator.call(this);
    console.log("generation: " + this.generation);
    debugger;
    return isStagnated.call(this);
}
