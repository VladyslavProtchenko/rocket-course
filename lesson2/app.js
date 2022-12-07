const fs = require('node:fs');
const path = require('node:path');



fs.readdir(__dirname,function(err,data){
    for(i of data) {
        let item = i;

        fs.readdir(path.join(__dirname,item),function(err,data){
            if(data){
                for(x of data){
                    let name = x;
                    let file = path.join(__dirname,item,x);
    
                    fs.readFile(file,(err,data)=>{
                        let json = JSON.parse(data);
                
                        if(json.sex == 'female') {
                            fs.rename(file,path.join(__dirname,'girls',name),(e)=>{})
                        } else {
                            fs.rename(file,path.join(__dirname,'boys',name),(e)=>{})
                        }
                
                    })                        
                }
            }
        }) 
    }                
})


    // .then(data=>{
    //     console.log(data)
    //     let json = JSON.parse(data);
        
    //             if(json.sex == 'female') {
    //                 fs.rename(file,path.join(__dirname,'girls',name),(e)=>{})
    //             } else {
    //                 fs.rename(file,path.join(__dirname,'boys',name),(e)=>{})
    //             }
    // })










// const mainPath = './files/videos';

// let readStream = fs.createReadStream(path.join(__dirname,'./new.txt'));
// // let writeStream = fs.createWriteStream();

// readStream.on('data',(bit)=>{ 
//     console.log(bit);
// })                      

// fs.readdir(mainPath)
//     .then(value=>{
//         const promis = [];

//         for (string of value) {
//             const way = path.join(mainPath,string);
//             promis.push(fs.stat(way));
//         }

//         return Promise.allSettled(promis);
//     })
//     .then(data=> console.log(data))
//     .catch(e=>console.log(e));

// fs.readdir(mainPath, { withFileTypes: true }).then(files => {
//       files.forEach(file =>{
//         console.log(file.isFile());
//       })
// })
// fs.rename('text.txt','new.txt');


// const readFilePromise = util.promisify(fs.readFile); 

// fs.readdir('./files').then(value => console.log(value))

// fs.writeFile('./files/text.txt', "text2\n");

// const filePath = path.join(__dirname,'text.txt');

// fs.readdir(filePath, { withFileTypes: true }.then(files => {
//     files.forEach
// }))






// readFilePromise('./text.txt')
//     .then(value => console.log(value));


// fs.readFile('./text.txt', (err, data)=>{
//     if(err) return console.log(err);
        
//     console.log(data);
// });








// fs.writeFile('text.txt', 'here is your text, bitch',()=>{
//     console.log('done');
// });