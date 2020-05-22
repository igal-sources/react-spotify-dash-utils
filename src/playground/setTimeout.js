for (var i = 1; i <= 5; ++i) {
  setTimeout(() => console.log(i), 1000);
}

// 6
// 6
// 6
// 6
// 6

for (let i = 1; i <= 5; ++i) {
  setTimeout(() => console.log(i), 1000);
}

// 1
// 2
// 3
// 4
// 5
