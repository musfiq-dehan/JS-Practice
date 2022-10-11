let btn1 = document.querySelector(".see-time")
let btn2 = document.querySelector(".reset")
let divText = document.querySelector("div")

const now = new Date()

function convertTextToTimeAndReset() {
    if (divText.innerText === "Current Time Will Be Shown Here") {
        divText.innerText = `Now Date:${now.toDateString()} and Time:${now.toTimeString()}`
    }
    else {
        divText.innerText = "Current Time Will Be Shown Here";
    }

    return divText.innerText;
}

function convertTimeToText() {
    divText.innerText = divText.innerText;
    return divText.innerText;
}

// btn.addEventListener("click", function (event) {
//     divText.innerText = `Now Date:${now.toDateString()} and Time:${now.toTimeString()} `
//     // console.log("Clicked")
// });
btn1.addEventListener("click", convertTextToTimeAndReset);
btn2.addEventListener("click",);
