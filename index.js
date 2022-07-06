const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const button = document.getElementById("button");
// let hidden = button.getAttribute("hidden");

let numbers = [];

// myForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("Form submitted");
//     const input = csvFile.files[0];

//     const reader = new FileReader();

//     reader.onload = function (e) {
//         const text = e.target.result;
//         const data = csvToArray(text);


//         data.forEach(element => {
//             numbers.push(Number(element[0]));
//         })
//         button.removeAttribute("hidden");
//     };
//     reader.readAsText(input);
// });

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
let breakPoint = false;
function changeButton() {
    button.innerHTML = "Stop Animation";
    button.setAttribute('onclick', 'stopAnimation()');
}
function stopAnimation() {
    button.innerHTML = "Start Animation";
    breakPoint = true;
    button.setAttribute('onclick', 'startAnimation()');
}
let x = 350, y = 350;
function startAnimation() {
    changeButton();
    breakPoint = false;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "red";
    // let i = 100000;
    xVe = 1;
    yVe = 1;
    draw();
    function draw() {
        let speed = 5;
        let n = Math.random();
        if (n > 0 && n <= 0.1) {
            x += speed;
        } else if (n > 0.1 && n <= 0.2) {
            x -= speed;
        } else if (n > 0.2 && n <= 0.3) {
            y += speed;
        } else if (n > 0.3 && n <= 0.4) {
            y -= speed;
        } else if (n > 0.4 && n <= 0.5) {
            x += speed;
            y += speed;
        } else if (n > 0.5 && n <= 0.6) {
            x -= speed;
            y -= speed;
        } else if (n > 0.6 && n <= 0.7) {
            x += speed;
            y -= speed;
        } else if (n > 0.7 && n <= 0.8) {
            x -= speed;
            y += speed;
        } else if (n > 0.8 && n <= 0.9) {
            context.fillStyle = "blue";
        } else if (n > 0.9 && n <= 1) {
            context.fillStyle = "red";
        }
        // check if the ball is out of the canvas
        if (x > canvas.width) {
            x -= speed;
        }
        if (y > canvas.height) {
            y -= speed;
        }
        if (x < 0) {
            x += speed;
        }
        if (y < 0) {
            y += speed;
        }
        if (breakPoint) {
            return;
        }

        drawPoint(x, y);
        requestAnimationFrame(draw);

    }

    function drawPoint(x, y) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fill();
    }

}

// function for drawing the points sequentially
// function startAnimation() {
//     var canvas = document.getElementById('canvas'), context = canvas.getContext('2d');

//     var y = 0;
//     let i = 0;
//     draw();
//     function draw() {
//         // console.log("running");
//         for (let x = 0; x < 1450; x++) {
//             if (numbers[i++] > 0.25) {
//                 context.fillRect(x, y, 1, 1);
//             }
//         }
//         y++;
//         if (y < 700) {
//             requestAnimationFrame(draw);
//         }
//     }
// }

