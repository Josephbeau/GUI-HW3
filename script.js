/*
File: index.html
GUI Assignment: Creating a multiplication website where the user can input the start and end of a row
and column for a multiplication table to be created dynamically for them on command.
Joseph Beausoleil, UMass Lowell Computer Science, Joseph_Beausoleli@uml.student.edu
What to submit: My HTML, CSS, and JS files along with github link
Copyright (c) 2021 by Jospeh. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JB on June 3, 2024
*/

function myClick() {
    //resets all edited feilds
    document.getElementById("table").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("test").innerHTML = "Selectied Numbers: ";

    //collects data from form
    let SC = document.getElementById("SC").value;
    let EC = document.getElementById("EC").value;
    let SR = document.getElementById("SR").value;
    let ER = document.getElementById("ER").value;

    //validates input
    let error = document.getElementById("errorMessage");
    if(isNaN(SC) || SC < -50 || SC > 50 || SC > EC || SC == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(EC) || EC < -50 || EC > 50 || SC > EC  || EC == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";       
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(SR) || SR < -50 || SR > 50 || SR > ER  || SR == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";      
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(ER) || ER < -50 || ER > 50 || SR > ER || ER == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";
        document.getElementById("fill").reset();
        return false;
    }

    //displays input
    document.getElementById("test").innerHTML = "Selectied Numbers: " + SC + " to " + EC + ", " + SR + " to " + ER;

    //grabs the table
    let table = document.getElementById("table");

    //creates the first row
    let trFirst = document.createElement('tr');
    let tdBlank = document.createElement('td');
    let blank = document.createTextNode("");
    tdBlank.append(blank);
    trFirst.append(tdBlank);

    for(let i = SC; i <= EC; i++){
        let td = document.createElement('td');
        let num = document.createTextNode(i);

        td.append(num);
        trFirst.append(td);
        table.append(trFirst);
    }

    //creates the rest of teh multiplication table. THe first loop does the rows and the secodn loop does the columns
    for(let i = SR; i <= ER; i++){
        let tr = document.createElement('tr');

        let tdFirst = document.createElement('td');
        let numFirst = document.createTextNode(i);

        tdFirst.append(numFirst);
        tr.append(tdFirst);
        for(let j = SC; j <= EC; j++){
            let td = document.createElement('td');
            let num = document.createTextNode(j * i);
    
            td.append(num);
            tr.append(td);
            table.append(tr);
        }
    }
    
}

