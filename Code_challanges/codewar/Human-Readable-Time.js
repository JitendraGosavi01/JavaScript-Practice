const humanReadable = (seconds) => {
  let hrs = prependWithZero(prependWithZero(seconds / 3600));
  let hrsRemainder = seconds % 3600;
  let minsReminder = hrsRemainder % 60;
  let mins = prependWithZero(hrsRemainder / 60);
  let secs = prependWithZero(((minsReminder / 0.6) * 60) / 100);

  return `${hrs}:${mins}:${secs}`;
};

function prependWithZero(num) {
  console.log(num);
  if (num >= 10) {
    return Math.floor(num);
  }
  return `0${Math.floor(num)}`;
}
console.log(humanReadable(359999));
console.log(humanReadable(86400));
console.log(humanReadable(86399));
console.log(humanReadable(3600));
console.log(humanReadable(45296));
console.log(humanReadable(0));
module.exports = humanReadable;
