//dotenv = 환경변수
//
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: './common.env'});
dotenv.config({path: path.join(__dirname, './common.env')})

console.log(process.env.PORT);

//프로젝트의 어떤 파일에서든 환경변수에 접근 가능하다.
console.log(process.env.PORT);
console.log(process.env);

//Figma
//Postman