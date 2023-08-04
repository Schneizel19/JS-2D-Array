//array of items
// index

// var aItems = [
//     'Can Goods', 
//     'Rice', 
//     'Junkfoods', 
//     'Liqour', 
//     'Pork',
// ];

var aItems = [
    /* 0 => */  [
        /* 0 => */'Canned Goods', 
        /* 1 => */360
    ],

    ['Rice', 1300],
    ['Junk Foods', 120],
    ['Liquor', 275],
    ['Pork', 330],   
];

displayItems(aItems);

function displayItems(arrItems) {
    var sList = "";
    for(var i = 0; i < arrItems.length; i++) {
        // sList += "<li><span>" + i + " : " + arrItems[i] + "</span><button onclick='removeItem("+ i +");'>X</button></li>";
        sList += `<li>${i}:<span>${arrItems[i][0]}</span><span>${arrItems[i][1]}</span>
            <button onclick='editItem(${i});'>&Eopf;</button>
            <button onclick='removeItem(${i});'>&Xopf;</button>
        </li>`;
    }
    
    document.querySelector("#ul-lists").innerHTML = sList;
    console.table(aItems);
}



//Edit Item on List
let editValue = '';
let editPrice = '';
let indexHolder = 0;

function editItem(arrIndex) {
    indexHolder = arrIndex;
    editValue = aItems[arrIndex][0]
    editPrice = aItems[arrIndex][1];

    const newValue = document.querySelector('#txtItem').value = editValue;
    const newPrice = document.querySelector('#txtPrice').value = editPrice;

    displayItems(aItems);
}

// Update Item on List
document.querySelector('#btnUpdate').addEventListener('click', function(arrNum) {
    arrNum = indexHolder;

    const newValue = document.querySelector('#txtItem').value;
    const newPrice = parseFloat(document.querySelector('#txtPrice').value);   
    
    // aItems[arrNum] = [editValue, editPrice];
    aItems.splice(arrNum, 1, [newValue, newPrice]);
    console.log("index => " + arrNum);
    
    clearInputFields();
    displayItems(aItems);
});

//Update the item on list
// document.querySelector('#btnUpdate').addEventListener('click', function() {
//     const newValue = document.querySelector('#txtItem').value;
//     const newPrice = Number(document.querySelector('#txtPrice').value);

//     if (!isNaN(newPrice)) {
//         aItems[indexHolder] = [newValue, newPrice];
//         displayItems(aItems);
//         clearInputFields();
//     }
// });

//Remove Item on List
function removeItem(arrIndex) {
    aItems.splice(arrIndex, 1);
    displayItems(aItems);
}

//Adding Item on Top of List
document.querySelector('#btnAddTop').addEventListener('click', function() {
    const addTopValue = document.querySelector('#txtItem').value;
    const addTopPrice = Number(document.querySelector('#txtPrice').value);

    aItems.unshift([addTopValue, addTopPrice]);

    clearInputFields();
    displayItems(aItems);
});

//Add Item on Bottom of List
document.querySelector('#btnAddBot').addEventListener('click', function() {
    const addBotValue = document.querySelector('#txtItem').value;
    const addBotPrice = Number(document.querySelector('#txtPrice').value);

    aItems.push([addBotValue, addBotPrice]);

    clearInputFields();
    displayItems(aItems);
});

//Remove Top item 
document.querySelector('#btnDelTop').addEventListener('click', function() {
    aItems.shift();
    displayItems(aItems);
});

//Remove Bottom item
document.querySelector('#btnDelBot').addEventListener('click', function() {
    aItems.pop();
    displayItems(aItems);
});

// Clear the entered fields
function clearInputFields() {
    document.querySelector('#txtItem').value = '';
    document.querySelector('#txtPrice').value = '';
}
