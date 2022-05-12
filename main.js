function GetAge() {
    const today = new Date();
    const birth = new Date('2003/08/07');

    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();

    let y = today.getFullYear() - birth.getFullYear();
    if (m < 0 || (m === 0 && d < 0)) y--;

    document.write(y + " Years");
}