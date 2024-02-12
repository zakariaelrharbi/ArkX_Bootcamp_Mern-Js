let playFoot = new Promise((resolve, reject) => {
    

    let PlayGame = false;

    if (PlayGame) {
        resolve('play the game');
    } else {
        reject('does not play the game');
    }
})
playFoot.then((fromResolve)=>{
    console.log('Player ' + fromResolve);
})
playFoot.catch((fromReject)=>{
    console.log('Player ' + fromReject);
})
playFoot.finally