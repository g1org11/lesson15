const currentDay = new Date(3).getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
  default:
    console.log("other day");
    break;
}

for (let i = 0; i <= 100; i++) {
  console.log(i);
}
// 3;
let i = 1;
while (i <= 50) {
  console.log(i);
  i++;
}
// 4;
let b = 0;
do {
  console.log(b);
  b++;
} while (b < 150);
// 5.
let arr = [];
for (i = 0; i < 15; i++) {
  i = i * i;

  arr.push(i);
}

console.log(arr);
