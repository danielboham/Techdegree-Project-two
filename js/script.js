/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Global variables
const studentList = document.querySelectorAll('.student-item');
const itemsNumber = 10;

/***
 Create the `showPage` function to hide all of the items in the
 list except for the ten you want to show.

 Pro Tips:
 - Keep in mind that with a list of 54 students, the last page
 will only display four.
 - Remember that the first student has an index of 0.
 - Remember that a function `parameter` goes in the parens when
 you initially define the function, and it acts as a variable
 or a placeholder to represent the actual function `argument`
 that will be passed into the parens later when you call or
 "invoke" the function
 ***/


// showPage function
const showPage = (studentList, page) => {
    let startIndex = (page * itemsNumber) - itemsNumber;
    let endIndex = page * itemsNumber;

    for (let i = 0; i <= studentList.length; i += 1) {
       if (i >= startIndex && i < endIndex) {
           studentList[i].style.display = "block";
       } else {
           studentList[i].style.display = "none";
       }
    };
}

showPage(studentList, 1);


//appendPageLinks function
const appendPageLinks = (list) =>
{
    let pages = Math.ceil(studentList.length / itemsNumber)

    let parntDiv = document.querySelector(".page")
    let divApp = document.createElement('div');
    let ulApp = document.createElement('ul');


    parntDiv.appendChild(divApp);
    divApp.appendChild(ulApp);

    divApp.setAttribute("class","pagination");

    for (let i = 1; i <= pages; i += 1) {
        var liApp = document.createElement('li');
        var aApp = document.createElement('a');

        aApp.href = "#";
        aApp.textContent = [i];
        ulApp.appendChild(liApp);
        liApp.appendChild(aApp);

        if (aApp.textContent === "1") {
            aApp.className = "active";
        }
    }

    /*divApp.addEventListener('click', (e) => {
     if (e.target.tagName == 'A') {
     let aLink = event.target;
     let aNumber = aLink.textContent;

     for (let i = 1; i <= pages; i += 1) {
     if (aApp[i].textContent === 1) {
     aApp[i].classList.add('active');
     } else {
     aApp[i].classList.remove('active');
     }
     }

     }
     });*/

}

appendPageLinks(studentList);

