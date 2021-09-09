import data from '../universal/data.js';

export function listcomplete(user){
    for (let list of data) {
        const isComplete = user.completed[list.id];
        if (isComplete){
            return true;
        }
    }
    return false;
}



