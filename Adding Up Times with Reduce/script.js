const timeNodes = [...document.querySelectorAll('[data-time]')];

// const seconds = timeNodes
//   .map(timeNode => timeNode.dataset.time)
//   .map(timeCode => {
//     const [mins, secs] = timeCode.split(':').map(parseFloat);
//     return mins * 60 + secs;
//   })
//   .reduce((total, seconds) => total + seconds);

// let secondsLeft = seconds;

let secondsLeft = timeNodes.reduce((total, seconds) => {
  const [mins, secs] = seconds.dataset.time.split(':').map(parseFloat);
  seconds = mins * 60 + secs;
  return total + seconds;
}, 0);

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
