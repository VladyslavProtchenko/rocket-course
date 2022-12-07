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