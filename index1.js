const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const button = document.getElementById("button");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let numbers = [];

// from submit event
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
        button.innerHTML = "Start Animation From File";
        // button.setAttribute('onclick', 'startAnimation()');
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



function startAnimation() {
    // var canvas = document.getElementById('canvas'), context = canvas.getContext('2d');

    var y = 0;
    let i = 0;
    draw();
    function draw() {

        for (let x = 0; x < 2000; x += 10) {
            if (numbers[i] < 0.25) {
                context.fillStyle = "black";
                context.fillRect(x, y, 10, 10);
            } else if (numbers[i] >= 0.25 && numbers[i] < 0.5) {
                context.fillStyle = "blue";
                context.fillRect(x, y, 10, 10);
            }
            else if (numbers[i] >= 0.5 && numbers[i] < 0.75) {
                context.fillStyle = "white";
                context.fillRect(x, y, 10, 10);
            }
            else if (numbers[i] >= 0.75 && numbers[i] < 1) {
                context.fillStyle = "red";
                context.fillRect(x, y, 10, 10);
            }
            i++
        }
        y += 10;
        if (y < 2000) {
            requestAnimationFrame(draw);
        }

    }
}
