const sliderImages = Array.from(document.querySelectorAll(".silder-container img"));
const sildeNumberElement = document.querySelector("#slide-number");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");


let sildesCount = sliderImages.length;
let currentSlide = 1;

nextButton.addEventListener("click", () => nextSlide());
prevButton.addEventListener("click", () => prevSlide());

const paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sildesCount; i++) {

const paginationItem = document.createElement("li");
paginationItem.setAttribute("data-index", i);
paginationItem.appendChild(document.createTextNode(i));
paginationElement.appendChild(paginationItem);
}

document.querySelector("#indicators").appendChild(paginationElement);
const paginationCreateUl = document.querySelector("#pagination-ul");
const paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));




const nextSlide = () =>{

    if(nextButton.classList.contains("disabled")) {
        return false;
    }else{
        currentSlide++;
        theChecker();
    }


}

const prevSlide = () =>{

    if(prevButton.classList.contains("disabled")) {
        return false;
    }else{
        currentSlide--;
        theChecker();
    }

}


const theChecker = () => {

    sildeNumberElement.textContent = "Slide # " + (currentSlide) + " of " + (sildesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add("active");
    paginationCreateUl.children[currentSlide - 1].classList.add("active");

    if (currentSlide === 1) {
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled");
    }

    if (currentSlide === sildesCount) {
        nextButton.classList.add("disabled");
    }else{
        nextButton.classList.remove("disabled");
    }

}

const removeAllActive = () =>{

    sliderImages.forEach((img) => {

        img.classList.remove("active");

    });
    paginationBullets.forEach((li) => {

        li.classList.remove("active");

    });
}

theChecker();