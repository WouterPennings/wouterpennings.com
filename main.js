// const urls = {
//     "/git": "https://github.com/wouterpennings", 
//     "/linkedin": "https://www.linkedin.com/in/wouterpennings/",
//     "/src": "https://github.com/WouterPennings/wouterpennings.com/"
// };

// window.onload = function() { 
//     const url = urls[window.location.pathname];
//     console.log(window.location.pathname)
//     console.log(url)
//     if(url !== undefined) {
//         location.href = url;
//     }

//     console.info("Hey! What are you doing here in the developer tools...")
// }

function GetAge() {
    const today = new Date();
    const birth = new Date('2003/08/07');

    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();

    let y = today.getFullYear() - birth.getFullYear();
    if (m < 0 || (m === 0 && d < 0)) y--;

    document.write(y + " Years");
}
