let voidTransactionForRecord = false
const radioInput = findSelection('selected_location')
const locationName = document.querySelector("#locationName");

//radioInput.addEventListener("change", showLocation);


//selected.addEventListener("change", showLocation);

const selectedId = () => {
    return document.querySelector('input[name="selected_location"]:checked').value;
}

function showLocation() {
    console.log("INSIDE SHOW LOCATION")
    console.log(radioInput)
    locationName.value = radioInput.value;
}

function findSelection(it, rad_name) {
    try {
        var id = it.getAttribute("id");
        var temp = it.getAttribute("name")
        const locationName = document.querySelector("#locationName");
        let label = document.querySelector(`label[for=${id}]`);
        let name = document.querySelector(`input[name=${temp}]`)
        console.log(name)
        console.log(label)
        let labelText = label.innerHTML;
        let rad_val = document.querySelector('input[name=' + rad_name + ']:checked');
        locationName.value = (rad_val ? labelText : "")
        return (rad_val ? rad_val.value : "");

    } catch (ex) {

    }
}

function voidTransaction() {
    voidTransactionForRecord = !voidTransactionForRecord
    let rightSide = document.getElementById('rhs')
    console.log(rightSide)
    if(voidTransactionForRecord) {
        rightSide.style.backgroundColor = "#00FF00"
        rightSide.style.borderRadius = "25px"
        rightSide.style.width = "115%"
        rightSide.style.height = "100%"
    } else {
        rightSide.style.backgroundColor = "transparent"
        rightSide.style.borderRadius = "25px"
    }
}

function agreementMode() {
    let nonagreement = document.getElementById('nonagreementForm')
    nonagreement.style.display = agreementModeCheckBox.checked ? "block" : "none";
    let agreementLabel = document.getElementById('agreementLabel')
    agreementLabel.textContent = agreementModeCheckBox.checked ? "Non Agreement" : "Agreement";
    let rightSide = document.getElementById('rhs')
    rightSide.style.backgroundColor = "transparent"
    rightSide.style.borderRadius = "25px"
}

function calculateDifference() {
    let reportedAmount = document.getElementById('reportedAmount').value
    let auditedAmount = document.getElementById('auditedAmount').value
    let differenceAmount = document.getElementById('differenceAmount')
    let under3 = document.getElementById('under3')

    let total = auditedAmount - reportedAmount
    console.log(total)
    differenceAmount.setAttribute('value', total)
    if(total < 3) {
        under3.checked = true;
        under3.toggleAttribute('disabled', true)
    }
    else {
        under3.checked = false;
        under3.toggleAttribute('disabled', true)
    }
}