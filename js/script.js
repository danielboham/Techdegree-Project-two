/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//### Global variables ###//
const studentList = document.querySelectorAll('.student-item');
// Variable for amount of items on one page
const itemsNumber = 10;


// showPage function
function showPage(studentList, page) {
    //Create t
    // Two variables to store the start index and the end index of the list items
    let startIndex = (page * itemsNumber) - itemsNumber;
    let endIndex = page * itemsNumber;
    // Loop studentList
    for (let i = 0; i < studentList.length; i++) {
        if (!(i >= startIndex && i < endIndex)) {
            studentList[i].style.display = "none";
        } else {
            studentList[i].style.display = "block";
        }
    }
}

// appendPageLinks function
function appendPageLinks (list) {
    const pages = Math.ceil(studentList.length / itemsNumber);
    // Target elements
    let page = document.querySelector(".page");
    let div = document.createElement('div');
    let ul = document.createElement('ul');
    // Append the elements above
    page.appendChild(div);
    div.appendChild(ul);
    div.setAttribute("class", "pagination");
    // Loop pages start with 1 so navigation has first value 1!
    for (let i=1; i<=pages; i++) {
        // create navigation links
        const li = document.createElement('li');
        const anchor = document.createElement('a');

        anchor.href = "#";
        anchor.textContent = [i];
        ul.appendChild(li);
        li.appendChild(anchor);
        // Check value of navigation text. If 1 put that link on active so list starts with 1
        if (anchor.textContent === "1") {
            anchor.className = "active";
        }
    }

    // Event listener for the navigation div
    div.addEventListener("click", (e) => {
    let pagination = e.target;
    let paginationNumber = pagination.textContent;

    // Get all anchors and loop through anchors
    const a = document.querySelectorAll("a");
    for(let i=0; i<a.length; i++) {
        if (a[i].textContent === paginationNumber) {
            a[i].classList.add('active');
        }
        else {
            a[i].classList.remove('active');
            }
        }
        showPage(studentList, paginationNumber);
    });
}

// Calling functions
showPage(studentList,  1);
appendPageLinks(studentList);

