const fs  = require('fs').promises;
// function that read posts.json file.
const getAllPosts = async()=>{
    await fs.readFile("posts.json", 'utf-8', (error, data) =>{
    })
}
getAllPosts()

// fonction that write in posts.json file

const createPost = async(author, description, text) =>{
    await fs.appendFile("posts.json", `{author:${author}, description:${description}, text:${text}}`, (error, data)=>{
        if (error) {
            console.log("error writing in file" + error);
        }
        else{
            console.log("writing in the file successfully");
        }
    })
}
createPost("jjhkgk", "hjghjgk", "jgjhgkg");