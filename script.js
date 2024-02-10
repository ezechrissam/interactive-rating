// DOM Elements
const listItems = document.querySelectorAll(".list-item");
const submitBtn = document.querySelector(".rating-card--btn");
const startSection = document.querySelector(".start");
const endSection = document.querySelector(".end");
const p = document.createElement("p");

// Numbers Active State
listItems.forEach(el => {
    el.addEventListener("click", () => {
        checkActive(listItems);
        el.classList.toggle("active");
    })
});

// Submit Button
submitBtn.addEventListener("click", () => {
    const container = document.querySelector(".card-selected--output");
    const mainContainer = document.querySelector(".main-container");
    const value = checkActive(listItems);
    
    if (value) {
        if (mainContainer.childNodes.length >= 6) {
            mainContainer.removeChild(p);
        }

        startSection.classList.add("hidden");
        endSection.classList.remove("hidden");
        
        container.innerHTML = `<p>You selected ${value} out of 5</p>`;
    } else {
        p.id = "error-msg";
        p.textContent = "Please, select an option";
        mainContainer.appendChild(p);
    }
});

// Functions 
function checkActive(nodelist) {
    for (let i = 0; i < nodelist.length; i++) {
        if (nodelist[i].classList.contains("active")) {
            const value = nodelist[i].value;
            nodelist[i].classList.remove("active");

            return value;
        }
    }
}