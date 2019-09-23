/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Global variables
const studentList = document.querySelectorAll('.student-item');
const itemsNumber = 10;


// showPage function
const showPage = (list, page) => {
    let startIndex = (page * itemsNumber) - itemsNumber;
    let endIndex = page * itemsNumber;

    for (let i = 0; i <= studentList.length; i += 1) {
       if (i >= startIndex && i < endIndex) {
          studentList[i].style.display = "block";
       } else {
           studentList[i].style.display = "none";
       }
    }
};


//appendPageLinks function
const appendPageLinks = (list) =>
{
    let pages = Math.ceil(studentList.length / itemsNumber)

    let page = document.querySelector(".page")
    let div = document.createElement('div');
    let ul = document.createElement('ul');


    page.appendChild(div);
    div.appendChild(ul);

    div.setAttribute("class","pagination");

    for (let i = 1; i <= pages; i += 1) {
        var li = document.createElement('li');
        var anchor = document.createElement('a');

        anchor.href = "#";
        anchor.textContent = [i];
        ul.appendChild(li);
        li.appendChild(anchor);

        if (anchor.textContent === "1") {
            anchor.className = "active";
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

showPage(studentList, 1);
appendPageLinks(studentList);

