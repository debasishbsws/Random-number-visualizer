const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
const button = document.getElementById("button");
// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

let numbers = [];
// let x = 700, y = 350;

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

let isPause = false;

function drawPoint(x, y) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 2, 0, 2 * Math.PI);
    context.fill();
}

// //stop Animation
// function pauseAnimation() {
//     button.innerHTML = "Start Animation";
//     isPause = true;
//     if (numbers.length > 0) {
//         button.setAttribute('onclick', 'startAnimationFromFile()');
//     } else {
//         button.setAttribute('onclick', 'startAnimationRandom()');

//     }
// }

// //start Animation from File
// function startAnimationFromFile() {
//     button.innerHTML = "Pause Animation";
//     button.setAttribute('onclick', 'pauseAnimation()');
//     isPause = false;
//     context.fillStyle = "red";
//     let i = 0;
//     draw();
//     function draw() {
//         let speed = 10;

//         let n = numbers[i++];

//         // check if the ball is out of the canvas
//         if (x > canvas.width) {
//             x -= speed;
//         } else if (x < 0) {
//             x += speed;
//         }
//         if (y > canvas.height) {
//             y -= speed;
//         } else if (y < 0) {
//             y += speed;
//         }

//         if (isPause) {
//             return;
//         }

//         //repeate the animation
//         if (i > numbers.length - 1) {
//             i = 0;
//         }
//         drawPoint(x, y);
//         requestAnimationFrame(draw);

//     }
// }

// // animation from defualt Math.random() function
// function startAnimationRandom() {
//     button.innerHTML = "Pause Animation";
//     button.setAttribute('onclick', 'pauseAnimation()');
//     isPause = false;
//     context.fillStyle = "red";
//     draw();
//     function draw() {
//         let speed = 10;

//         let n = Math.random();
//         if (n > 0 && n <= 0.1) {
//             x += speed;
//         } else if (n > 0.1 && n <= 0.2) {
//             x -= speed;
//         } else if (n > 0.2 && n <= 0.3) {
//             y += speed;
//         } else if (n > 0.3 && n <= 0.4) {
//             y -= speed;
//         } else if (n > 0.4 && n <= 0.5) {
//             x += speed;
//             y += speed;
//         } else if (n > 0.5 && n <= 0.6) {
//             x -= speed;
//             y -= speed;
//         } else if (n > 0.6 && n <= 0.7) {
//             x += speed;
//             y -= speed;
//         } else if (n > 0.7 && n <= 0.8) {
//             x -= speed;
//             y += speed;
//         } else if (n > 0.8 && n <= 0.9) {
//             context.fillStyle = "blue";
//         } else if (n > 0.9 && n <= 1) {
//             context.fillStyle = "red";
//         }
//         // check if the ball is out of the canvas
//         if (x > canvas.width) {
//             x -= speed;
//         } else if (x < 0) {
//             x += speed;
//         }
//         if (y > canvas.height) {
//             y -= speed;
//         } else if (y < 0) {
//             y += speed;
//         }

//         if (isPause) {
//             return;
//         }
//         drawPoint(x, y);
//         requestAnimationFrame(draw);

//     }

// }

const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

async function startAnimation4D() {
    const canvas4D = document.getElementById('canvas4d');
    let ctx = canvas4D.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas4D.width, canvas4D.height);
    let x = 2700;
    let y = 1300;

    console.log("running");

    let i = 0;

    while (i < 1000000) {
        ctx.beginPath();
        ctx.moveTo(x, y);

        let n = numbers[i];
        if (n >= 0 && n <= 0.25) {
            x += 5;
        } else if (n > 0.25 && n <= 0.5) {
            y += 5;
        }
        else if (n > 0.5 && n <= 0.75) {
            x -= 5;
        }
        else if (n > 0.75 && n <= 1) {
            y -= 5;
        }
        if (i % 10000 == 0) {
            console.log(i);
            await delay(5000);
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        i++;
    }
}

