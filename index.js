let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let num = document.getElementById("txtNum").value;
    let arr = getPrimes(num);
    
    let table = document.getElementById("table");
    console.log(table);
    table.innerHTML = `
    <table>
        <tr>
            <td></td>
            `+arr.map((el) => `<td class='prime'>${el}</td>`).join('')+`
        <tr>
        `+arr.map((el, i) => `
        <tr>    
            <td class='prime'>${el}</td>
            `+arr.map((el) => `<td>${el * arr[i]}</td>`).join('')+`
        </tr>
        `).join('')+`
    </table>
    `
})