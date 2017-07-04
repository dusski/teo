const fs = require('fs') // node file system package
const path = require('path')

const holder = document.getElementById('holder');
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
    let files = [];
    // console.log(e.dataTransfer)
    // console.log(e.dataTransfer.files)
    // for (let item of e.dataTransfer.items) { console.log(item) }
    // console.log(e.dataTransfer.types)
    for (let f of e.dataTransfer.files) {

        let isDir = fs.statSync(f.path).isDirectory()

        if (isDir) {
            let pass = 1;
            fs.writeFileSync(`config_${pass}.txt`, fileList(f.path), 'utf8');
            pass += 1;
        } else {
            files.push(`
            <div> 
            <p>FIle Name: ${f.name}</p>
            <p>Last Modified: ${f.lastModified}</p>
            <p>Last Modiied (Date): ${f.lastModifiedDate} </p>
            <p>Folder or File: File</p>
            <p>Contains Files: <span></span></p>
            </div>
            <hr>
            `)
        }

    }

    holder.innerHTML = files;
    return false;
}

function fileList(dir) {
    console.log(dir);
    return fs.readdirSync(dir).reduce(function (list, file) {
        var name = path.join(dir, file);
        var isDir = fs.statSync(name).isDirectory();
        return list.concat(isDir ? fileList(name) : [name]);
    }, []);
}