const firstName = "Yagnesh";

const lastName = "Modh";

// const FullName = firstName + ' ' + lastName;

const FullName = `${firstName} ${lastName}`;

console.log(FullName);

// Yagnesh Modh

// Yagnesh's Car

// const pos = firstName + "'s car";

const quanity = 5;
const price = 19.99;

console.log(`Total cost is ${Math.round(quanity * price)}`);

const pos = `${firstName}'s Car`;

console.log(pos);

// console.log(firstName.concat(lastName));

// const html = '<!DOCTYPE html>' +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>Document</title>' +
// '\n</head>' +
// '\n<body>' +
//     '\n' +
// '\n</body>' +
// '\n</html>';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(html);
