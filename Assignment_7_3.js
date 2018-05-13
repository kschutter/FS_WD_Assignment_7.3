// Oldest programming task?
var out;
for (var i = 1; i < 101; i++) {
    out = i + " ";

    if (i % 3 == 0) out += "Fizz";
    if (i % 5 == 0) out += "Buzz";

    console.log(out);
}