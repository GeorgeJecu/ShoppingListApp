let store = [

];

function addItem(form, event){
    event.preventDefault();
    let product = {};
    product.name = form.querySelector("[name='addProduct']").value.trim();
    store.push(product);
    draw();
    document.querySelector("form").reset();
}

function showTable() {
    document.querySelector("#shoppingList").classList.remove("hidden");
    draw();
}

function bought(x) {
    store[x].bought = true;
    draw();
}


function draw() {
    let str = '';

    for (i = 0; i < store.length; i++) {
        str += `<tr><td class ="${store[i].bought === true ? "marked" : ""}">${store[i].name} </td>
        <td><input class="bought" type="button" onclick="bought(${i});" value="Mark as bought"></td></tr>`
    }
    document.querySelector("#shoppingList > tbody").innerHTML = str;
}

function sort(x) {
    if (x === "asc") {
        store.sort(function compare(a, b){
            let name1 = a.name.toUpperCase();
            let name2 = b.name.toUpperCase();
            if (name1 < name2) {
                return -1;
            }
            else {
                return 1;
            }
        });

    } else {
        store.sort(function compare(a, b) {
            let name1 = a.name.toUpperCase();
            let name2 = b.name.toUpperCase();
            if (name1 < name2) {
                return 1;
            }
            else {
                return -1;
            }
        });
    }
    draw();
}

function compare(a, b) {
    return a - b;
}


