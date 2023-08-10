async function getFilesPHP(amount = 1) {
    const response = await fetch('src/scripts/view.pic.php')
    const data = await response.json();

    let result = [];
    let random;
    for (let i = 0; i < amount; i++) {
        random = Math.floor(Math.random() * data.length);
        result.push(data[random]);
    }
    return result;
}

const filesPHP = getFilesPHP(100)
filesPHP.then((res) => {
    for (let i = 0; i < res.length; i++) {
        const div = document.createElement("div");
        div.classList.add("picture-container")

        div.innerHTML = `<div class="pic-overlay">

                <div class="top left button">aesthetics</div>
                <div class="top right button">save</div>
                <div class="bottom right button">ℹ️</div>

        </div>
        <a href="#"><img src="./src/images/posts/${res[i]}" width="200" height="450" alt="autoloaded content">`;
        // <a href="#"><img src="//wsrv.nl/?url=https://wsrv.nl/?url=https://pin.bloodyeyes.xyz/src/images/posts/${res[i]}&output=webp&q=60$" width="200" height="450" alt="autoloaded content"`;

        document.getElementById("view-pictures").appendChild(div);
    }
})

// async function getFiles(amount) {
//     const response = await fetch('files/files.json')
//     const data = await response.json();

//     let result = [];
//     let random;
//     for (let i = 0; i < amount; i++) {
//         random = Math.floor(Math.random() * data.length);
//         console.log(random);
//         result.push(data[random]);
//     }
//     return result;
// }

// const files = getFiles(550);
// files.then((res) => {
//   for (let i = 0; i < res.length; i++) {
//       const div = document.createElement("div");
//       div.classList.add("picture-container")

//       div.innerHTML = `<div class="pic-overlay">

//               <div class="top left overlay-function button">save on list</div>
//               <div class="top right overlay-function button">quick-save</div>
//               <div class="bottom right overlay-function button">extend</div>

//       </div>
//       <img src="${res[i].file}"/>`;

//       document.getElementById("view-pictures").appendChild(div);
//   }
// })