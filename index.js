let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let canvasWidth = 800;
let canvasHeight = 1120;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let circle = 2 * Math.PI;


// blue section 
let leftRectWidth = canvasWidth / 2.7
ctx.fillStyle = '#323b4c';
ctx.fillRect(0, 0, leftRectWidth, canvasHeight);
ctx.fill();
ctx.stroke();


// image 

let image = new Image();
image.src = './person.jpg';

ctx.beginPath();
let arcWidth = 107;
ctx.fillStyle = 'white';
image.onload = () => {
    ctx.arc(leftRectWidth / 2, arcWidth, 70, 0, circle, true);
    ctx.clip()
    ctx.drawImage(image, leftRectWidth / 4, arcWidth - 75, 150, 150);
    ctx.restore();
}
ctx.fill();
ctx.stroke();


// Contact Section 
let headingFromX = 40;
let moveX = 38.5;
let moveY = 247;
ctx.font = 'bold 22px poppins';
ctx.fillStyle = 'white';
ctx.fillText('Contact', headingFromX, arcWidth * 2.2);

ctx.beginPath();
ctx.strokeStyle = 'white'
ctx.moveTo(moveX, moveY * 1.001)
ctx.lineTo(leftRectWidth, moveY * 1.001)
ctx.stroke();


// icons
let iconWidth = 11;
let fromX = 50;
let fromY = 285;

// phone 
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(fromX, fromY, iconWidth, 0, circle, true);
ctx.fill();
ctx.stroke();

ctx.font = '14px poppins';
ctx.fillStyle = 'white';
ctx.fillText('+01 000 1112233', fromX + 20, fromY + 6);

// mail
ctx.beginPath();
ctx.arc(fromX, fromY + 40, iconWidth, 0, circle, true);
ctx.fill();
ctx.stroke();

ctx.fillText('tayyabafzal174@gmail.com', fromX + 20, fromY + 46);

// website
ctx.beginPath();
ctx.arc(fromX, fromY + 80, iconWidth, 0, circle, true);
ctx.fill();
ctx.stroke();

ctx.fillText('developortayyab.web.app', fromX + 20, fromY + 86);

// address
ctx.beginPath();
ctx.arc(fromX, fromY + 120, iconWidth, 0, circle, true);
ctx.fill();
ctx.stroke();

ctx.fillText('Lahore, Punjab, Pakistan.', fromX + 20, fromY + 126);





// Education Section 

ctx.font = 'bold 22px poppins';
ctx.fillStyle = 'white';
ctx.fillText('Education', headingFromX, fromY * 1.9);

ctx.beginPath();
ctx.moveTo(moveX, moveY * 2.25);
ctx.lineTo(leftRectWidth, moveY * 2.25);
ctx.stroke();



// matric & inter
ctx.font = '14px poppins'
ctx.fillText('2022', fromX - 10, fromY * 2.08);
ctx.fillText('Matric', fromX - 10, fromY * 2.15);
ctx.fillText('Govt. Boys High School', fromX - 10, fromY * 2.23);

ctx.fillText('2023', fromX - 10, fromY * 2.35);
ctx.fillText('Inter', fromX - 10, fromY * 2.43);
ctx.fillText('Private', fromX - 10, fromY * 2.51);


// Languages Section

ctx.font = 'bold 22px poppins';
ctx.fillStyle = 'white';
ctx.fillText('Languages', headingFromX, fromY * 2.9);

ctx.beginPath();
ctx.moveTo(moveX, moveY * 3.4);
ctx.lineTo(leftRectWidth, moveY * 3.4)
ctx.stroke();

ctx.font = '14px poppins'
ctx.fillText('Urdu', fromX - 10, fromY * 3.08);
ctx.fillText('Punjabi', fromX - 10, fromY * 3.16);
ctx.fillText('English', fromX - 10, fromY * 3.24);




// white section 

let rightRectWidth = canvasWidth / 1;
ctx.fillStyle = '#fff';
ctx.fillRect(leftRectWidth, 0, rightRectWidth, canvasHeight);
ctx.fill();
ctx.stroke();


// header text 
let moveX2 = leftRectWidth + 30;
let moveY2 = 100;

let fromY2 = 245;
let fromX2 = leftRectWidth + 40;

ctx.fillStyle = '#323b4c';
ctx.font = 'bold 60px lato';
ctx.fillText('Tayyab Afzal', moveX2, moveY2);

ctx.font = '20px lato';
ctx.letterSpacing = "4.3px";
ctx.fillText('Frontend Web Developer', moveX2, moveY2 + 50);


// about text
ctx.font = 'bold 24px poppins';
ctx.letterSpacing = '0px'
ctx.fillText('About', moveX2, moveY2 * 2.35);


// line circle 
ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.moveTo(moveX2, fromY2 * 1.01);
ctx.lineTo(rightRectWidth, fromY2 * 1.01)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.arc(fromX2, fromY2 * 1.15, 6, 0, circle);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.arc(fromX2, fromY2 * 1.15, 7, 0, circle);
ctx.stroke();


// ctx.beginPath();
// ctx.strokeStyle = '#323b4c';
// ctx.moveTo(moveX2 + 10, fromY2 * 1.14);
// ctx.lineTo(rightRectWidth - 500, fromY2 * fromY2)
// ctx.stroke();

ctx.fillRect(moveX2 + 10, fromY2 * 1.14, 1, 192);
ctx.fillStyle = '#323b4c';
ctx.stroke();


// paragraph 

let para = `My name is Tayyab Afzal, I’m 19 years old, and I'm a passionate Front-End Web Developer who mainly focuses on React.js. My programming journey started after learning C programming in the 10th grade, and after that, I started my career as a web developer. I've been working in the web development field for over a year, and I've spent the last seven months honing my React.js abilities. I'm excited to apply my expertise and knowledge to dynamic projects.`;

let paraX = moveX2 * 1.1;
let paraY = moveY * 1.17;
ctx.font = '16px Poppins';
ctx.letterSpacing = "1px";
ctx.textAlign = 'justify';

const maxWidth = canvas.width - paraX;
const lines = [];
const words = para.split(' ');

let currentLine = '';
for (const word of words) {
    const testLine = currentLine.length === 0 ? word : `${currentLine} ${word}`;
    const metrics = ctx.measureText(testLine);

    if (metrics.width < maxWidth) {
        currentLine = testLine;
    } else {
        lines.push(currentLine);
        currentLine = word;
    }
}

lines.push(currentLine);

ctx.fillStyle = 'black';
for (const line of lines) {
    ctx.fillText(line, paraX, paraY);
    paraY += 20;
}



ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.arc(fromX2, fromY2 * 1.91, 6, 0, circle);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.arc(fromX2, fromY2 * 1.91, 7, 0, circle);
ctx.stroke();




// skills section 
ctx.font = 'bold 24px poppins';
ctx.fillText('Skills', moveX2, moveY2 * 5.44);

ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.moveTo(moveX2, fromY2 * 2.27);
ctx.lineTo(rightRectWidth, fromY2 * 2.27)
ctx.stroke();

// skills

let skills = ['Html', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.js', 'WordPress'];

for (const skill of skills) {
    ctx.beginPath();
    ctx.strokeStyle = '#323b4c';
    ctx.arc(fromX2 + 20, fromY2 * 2.4, 4, 0, circle);
    ctx.stroke();
    ctx.fill();
    ctx.font = '16px poppins';
    ctx.fillText(skill, fromX2 + 35, fromY2 * 2.42);
    fromY2 += 12;
}



// projects section 
ctx.font = 'bold 24px poppins';
ctx.fillText('Projects', moveX2, moveY2 * 8.3);

ctx.beginPath();
ctx.strokeStyle = '#323b4c';
ctx.moveTo(moveX2, fromY2 * 2.555);
ctx.lineTo(rightRectWidth, fromY2 * 2.555)
ctx.stroke();

// projects
let projects = ['Personal Portfolio', 'Ecommerce Website', 'News Website', 'Lawyer Website', 'Images Gallery', 'Todo List']

for (const project of projects) {
    ctx.beginPath();
    ctx.strokeStyle = '#323b4c';
    ctx.arc(fromX2 + 20, fromY2 * 2.686, 4, 0, circle);
    ctx.stroke();
    ctx.fill();
    ctx.font = '16px poppins';
    ctx.fillText(project, fromX2 + 35, fromY2 * 2.7);
    fromY2 += 12;
}