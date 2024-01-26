// const fs = require('fs');
// fs.writeFileSync('read.txt','welcome Arshad');

const fs = require('fs');
fs.readFile('./arshad.txt','utf-8',(error, data) => {
    if(error) {
        console.log(error);
    }
    else{
        console.log(data);
    }
});
