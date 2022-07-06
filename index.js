const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const button = document.getElementById("button");
// let hidden = button.getAttribute("hidden");

let numbers = [];

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");
    const input = csvFile.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);


        data.forEach(element => {
            numbers.push(Number(element[0]));
        })
        button.removeAttribute("hidden");
    };
    reader.readAsText(input);
});

//function csv to array
function csvToArray(text) {
    const result = [];
    const p = text.split("\n");
    for (let i = 0; i < p.length; i++) {
        const q = p[i].split(",");
        result.push(q);
    }
    return result;
}

// while (numbers.length == 0) {
//     console.log("waiting");
// }

function startAnimation() {
    var canvas = document.getElementById('canvas'), context = canvas.getContext('2d');

    var y = 0;
    let i = 0;
    draw();
    function draw() {
        // console.log("running");
        for (let x = 0; x < 1450; x++) {
            if (numbers[i++] > 0.25) {
                context.fillRect(x, y, 1, 1);
            }
        }
        y++;
        if (y < 700) {
            requestAnimationFrame(draw);
        }
    }
}


