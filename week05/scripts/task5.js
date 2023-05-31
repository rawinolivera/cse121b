/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

    const currentDat = new Date();

// Step 2: Declare another variable to hold the day of the week

    let dayOfTheWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

    dayOfTheWeek = currentDat.getDay();
// Step 4: Declare a variable to hold a message that will be displayed

    let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

    if(dayOfTheWeek < 6){
        message1 = 'Hang in there!';

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

    }else{
        message1 = 'Woohoo!  It is the weekend';
    }

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

    let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

    switch(dayOfTheWeek){
        case 1:
            message2 = "Monday";
            break;
        case 2:
            message2 = "Tuesday";
            break;
        case 3:
            message2 = "Wednesday";
            break;
        case 4:
            message2 = "Thursday";
            break;
        case 5:
            message2 = "Friday";
            break;
        case 6:
            message2 = "Saturday";
            break;
        case 7:
            message2 = "Sunday";
            break;
    }

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

    document.querySelector("#message1").textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

    document.querySelector("#message2").textContent = message2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

    let templesList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

    function output(templesList){
        templesList.forEach(temple => {
            
        
// - Creates an HTML <article> element

        let article = document.createElement('article');

// - Creates an HTML <h3> element and add the temple's templeName property to it

        let tempName = document.createElement('h3');
        tempName.textContent = temple.templeName;

// - Creates an HTML <h4> element and add the temple's location property to it

        let tempLocation = document.createElement('h4');
        tempLocation.textContent = temple.location;

// - Creates an HTML <h4> element and add the temple's dedicated property to it

        let tempDedicated = document.createElement('h4');
        tempDedicated.textContent = temple.dedicated;

// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute

        let img = document.createElement('img');
        img.setAttribute('src',temple.imageUrl);
        img.setAttribute('alt', temple.templeName);

// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children

        article.appendChild(tempName);
        article.appendChild(tempLocation);
        article.appendChild(tempDedicated);
        article.appendChild(img);

// - Appends the <article> element to the HTML element with an ID of temples

    document.querySelector("#temples").appendChild(article);
    });
}

// Step 3: Create another function called getTemples. Make it an async function.

    async function getTemples(){

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.

        const templesUrl = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
        const response = await fetch(templesUrl);
        if (response.ok){

// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.

            const data = await response.json();
            templesList = data;
        }

// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

    output(templesList);
}
    
    getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

    function reset(){
        const data = document.querySelector("#temples");
        while(data.hasChildNodes()){
            data.removeChild(data.firstChild);
        }
    }

// Step 8: Declare a function named sortBy that does the following:

    function sortBy(){

// - Calls the reset function

        reset();

// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy

        let sortedList = templesList.slice();
        let sortedValue = document.querySelector("#sortBy").value;
        if(sortedValue == "templeNameDescending"){
            sortedList.reverse();
        }

// - Calls the output function passing in the sorted list of temples

    output(sortedList);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

    let sortedValue = document.querySelector("#sortBy");
    sortedValue.addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files