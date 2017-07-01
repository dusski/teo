const fs = require('fs') // node file system package
const $ = require('jquery') // jquery

const date = new Date();

// drag
holder.ondragover = () => {
    return false;
}

// drag
holder.ondragleave = holder.ondragend = () => {
    return false;
}


holder.ondrop = (e) => {
    e.preventDefault()
    // let files = [];
    console.log(e.dataTransfer.files)
    for (let f of e.dataTransfer.files) {

        // files.push(`
        // <div> 

        // <p>FIle Name: ${f.name}</p>
        // <p>Last Modified: ${f.lastModified}</p>
        // <p>Last Modiied (Date): ${f.lastModifiedDate} </p>
        // <p>Folder or File: ${isFolder(f.name) ? 'Folder' : 'File'}</p>
        // <p>Contains Files: <span></span></p>

        // </div>
        // <hr>
        // `)

        console.log(f.name, fsIsFolder(f.path), isFolder(f.name));

        // if (fsIsFolder(f.path)) {
        //     fs.readdir(f.path, (err, files) => {
        //         if (files) {

        //             // console.log(files)
        //             // files.forEach(file => {
        //             //     console.log(file);
        //             //     fs.readFile(__dirname + '\\' + file, { encoding: 'utf8' }, (err, data) => {
        //             //         console.log(data);
        //             //     })
        //             // })
        //         }
        //     })
        // }
    }

    $('#holder').html(files);
    return false;
}

let isFolder = (fileName) => {
    let tmp = fileName.split('.');
    for (let el of tmp) {
        if (el == "") {
            tmp.splice(tmp.indexOf(""), 1);
        }
    }
    return tmp.length == 1;
}

let fsIsFolder = (filePath) => {
    return fs.stat(filePath, (err, stats) => stats.isDirectory());
}