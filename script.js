    // function colorSwap(){
    //     let chooseColor = prompt('Changer de couleur');
    //     let body = document.querySelector('body');
    //     // Document récupére TOUT les element de la page html lier
    //     // Style Permet de Modifier le Css.
    //     color = body.style.backgroundColor = chooseColor;
    // }
// Creation des elements d'une table
    const newTable = document.createElement("table");
    const newThead = document.createElement("thead");
    const newBody = document.createElement("tbody");
    const newTd = document.createElement("td");
    const newTr = document.createElement("tr");
    const firstTitle = document.createElement("h1")

    //Creation du document
    function createDocument() {
        //Supresion du bouton de création du document
        const btn = document.querySelector(".create");
        const btnOnlick = btn.remove() ;
        //Titre de la page
        const title = document.title = "Calculatrice";
        //Selection du body
        const bgImg = document.querySelector('body');
        //Background Image
        const bgImgImg = bgImg.style.backgroundImage = ('url("Zelda.jpg")')
        const bgImgPosition = bgImg.style.backgroundPosition = "inherit";
        const bgImgSize = bgImg.style.backgroundSize = "cover";
        const bgImgRepeat = bgImg.style.backgroundRepeat = "no-repeat";
        
        // Ecrire du contenue
        const theadTitle = document.createTextNode("Calculatrice");
        // Ajouter les contenues 
        newTable.appendChild(newThead);
        newTable.appendChild(newBody)
        newThead.appendChild(firstTitle);
        firstTitle.appendChild(theadTitle);

        //Ajout des 6 tr (rangée de la calculatrice)
        let nbTr = 6;
        for (let i = 0; i < nbTr; i++) {
            const element = document.createElement('tr');
            newBody.appendChild(element);
        }
        //Ajout des td dans les tr Courage on va y arriver

        //Ne s'affiche pas sans cette partie bizarre
        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newTable, currentDiv);

    }
        createDocument()
    //Ajouter des td dans les tr Script a amméliorer mais fonctionnel
    function addTd(){
        const tables = document.getElementsByTagName("tr");
        tables.item(0).className = "Succes";

        for (let i = 0; i < 2; i++) {
            const element = document.createElement('td');
            tables.item(0).appendChild(element);
            
        }
        function firstRow(){
            //Ajout des input d'affichage
            const selectTD = document.querySelector(".Succes td:nth-child(1)");
            const createInput = document.createElement("input");
            const typage = createInput.setAttribute("type", "text");
            selectTD.appendChild(createInput);
            //Ajout du bouton Clear
            const secondTD = document.querySelector(".Succes td:nth-child(2)");
            const createBtn = document.createElement("button");
            secondTD.appendChild(createBtn);
            const btnValue = document.querySelector(".Succes td:nth-child(2) button");
            btnValue.innerHTML = "C" ;
            btnValue.classList = "Clear" ;
            btnValue.setAttribute("onlick","forclear()")
            
        }firstRow()

        for (let i = 0; i < 2; i++) {
            const element = document.createElement('td');
            tables.item(1).appendChild(element);
        }
        function secondRow(){
            //Ajout des input d'affichage
            const selectTD = document.querySelector("tbody tr:nth-child(2) td:nth-child(1)");
            const createInput = document.createElement("div");
            selectTD.appendChild(createInput);
            //Ajout du bouton égale
            const secondTD = document.querySelector("tbody tr:nth-child(2) td:nth-child(2)");
            const createBtn = document.createElement("button");
            secondTD.appendChild(createBtn);
            const btnValue = document.querySelector("tbody tr:nth-child(2) td:nth-child(2) button");
            btnValue.innerHTML = "=" ;
            btnValue.setAttribute("onlick","calculate()")
            btnValue.classList = "equal-btn";
            //calcul() a rajouter
        }secondRow()

        for (let i = 0; i < 4; i++) {
            const element = document.createElement('td');
            tables.item(2).appendChild(element);
        }
        function thirdRow(){
            let input = document.createElement('button');
            input.classList.add("add-btn");
            input.innerHTML = "7";
            let selectTD = document.querySelector("tbody tr:nth-child(3) td:nth-child(1)");
            selectTD.appendChild(input);

            let input2 = document.createElement('button');
            input2.classList.add("add-btn");
            input2.innerHTML = "8";
            let selectTD2 = document.querySelector("tbody tr:nth-child(3) td:nth-child(2)");
            selectTD2.appendChild(input2);

            let input3 = document.createElement('button');
            input3.classList.add("add-btn");
            input3.innerHTML = "9";
            let selectTD3 = document.querySelector("tbody tr:nth-child(3) td:nth-child(3)");
            selectTD3.appendChild(input3);
            
            let input4 = document.createElement('button');
            input4.classList.add("add-btn");
            input4.innerHTML = "/";
            let selectTD4 = document.querySelector("tbody tr:nth-child(3) td:nth-child(4)");
            selectTD4.appendChild(input4);

            console.log(selectTD);
        }thirdRow()

        for (let i = 0; i < 4; i++) {
            const element = document.createElement('td');
            tables.item(3).appendChild(element);
        }
        function fourthRow(){
            let input = document.createElement('button');
            input.classList.add("add-btn");
            input.innerHTML = "4";
            let selectTD = document.querySelector("tbody tr:nth-child(4) td:nth-child(1)");
            selectTD.appendChild(input);

            let input2 = document.createElement('button');
            input2.classList.add("add-btn");
            input2.innerHTML = "5";
            let selectTD2 = document.querySelector("tbody tr:nth-child(4) td:nth-child(2)");
            selectTD2.appendChild(input2);

            let input3 = document.createElement('button');
            input3.classList.add("add-btn");
            input3.innerHTML = "6";
            let selectTD3 = document.querySelector("tbody tr:nth-child(4) td:nth-child(3)");
            selectTD3.appendChild(input3);
            
            let input4 = document.createElement('button');
            input4.classList.add("add-btn");
            input4.innerHTML = "*";
            let selectTD4 = document.querySelector("tbody tr:nth-child(4) td:nth-child(4)");
            selectTD4.appendChild(input4);

            console.log(selectTD);
        }fourthRow()

        for (let i = 0; i < 4; i++) {
            const element = document.createElement('td');
            tables.item(4).appendChild(element);
        }
        function fifthRow(){
            let input = document.createElement('button');
            input.classList.add("add-btn");
            input.innerHTML = "1";
            let selectTD = document.querySelector("tbody tr:nth-child(5) td:nth-child(1)");
            selectTD.appendChild(input);

            let input2 = document.createElement('button');
            input2.classList.add("add-btn");
            input2.innerHTML = "2";
            let selectTD2 = document.querySelector("tbody tr:nth-child(5) td:nth-child(2)");
            selectTD2.appendChild(input2);

            let input3 = document.createElement('button');
            input3.classList.add("add-btn");
            input3.innerHTML = "3";
            let selectTD3 = document.querySelector("tbody tr:nth-child(5) td:nth-child(3)");
            selectTD3.appendChild(input3);
            
            let input4 = document.createElement('button');
            input4.classList.add("add-btn");
            input4.innerHTML = "-";
            let selectTD4 = document.querySelector("tbody tr:nth-child(5) td:nth-child(4)");
            selectTD4.appendChild(input4);

            console.log(selectTD);
        }fifthRow()
        for (let i = 0; i < 4; i++) {
            const element = document.createElement('td');
            tables.item(5).appendChild(element);
            // console.log(Array.from(tables).length)
        }
        function lastRow(){
            let input = document.createElement('button');
            input.onclick = function test(){
                
            }
            input.innerHTML = "+/-";
            input.className = "negativy"
            let selectTD = document.querySelector("tbody tr:nth-child(6) td:nth-child(1)");
            selectTD.appendChild(input);

            let input2 = document.createElement('button');
            input2.classList.add("add-btn");
            input2.innerHTML = "0";
            let selectTD2 = document.querySelector("tbody tr:nth-child(6) td:nth-child(2)");
            selectTD2.appendChild(input2);

            let input3 = document.createElement('button');
            input3.classList.add("add-btn");
            input3.innerHTML = ".";
            let selectTD3 = document.querySelector("tbody tr:nth-child(6) td:nth-child(3)");
            selectTD3.appendChild(input3);
            
            let input4 = document.createElement('button');
            input4.classList.add("add-btn");
            input4.innerHTML = "+";
            let selectTD4 = document.querySelector("tbody tr:nth-child(6) td:nth-child(4)");
            selectTD4.appendChild(input4);

            console.log(selectTD);
        }lastRow()
        
    }   
        addTd()  
        
    function addValue(){
        const firstTd = document.querySelector(".Succes td:nth-child(1)");
        firstTd.colSpan = 3;
        const firstTdInput = document.querySelector(".Succes td:nth-child(1) input");
        firstTdInput.setAttribute("id","typing-input")
        firstTdInput.setAttribute("readonly","true")
        
        const secondTd = document.querySelector("tbody tr:nth-child(2) td:nth-child(1)");
        secondTd.colSpan = 3;
        const secondTdInput = document.querySelector("tbody tr:nth-child(2) td:nth-child(1) div");
        secondTdInput.setAttribute("id","result-div")
        console.log(secondTdInput);
        //console.log(secondTd);
        
    }
    addValue()
    
    // Affichage des nombres
    function addToInput(event){
        let button = event.target;
        //alert(button.innerHTML) //Permes de récuperer la valeur inscrit dans les boutons
        let element = document.getElementById('typing-input');
        element.value = element.value + button.innerHTML; 
    }
        
    let buttons = document.querySelectorAll('.add-btn');
    for (const element of buttons)
    {
        element.addEventListener('click', addToInput);
    }

    //On efface les Nombres
    const button = document.querySelector('.Clear');
    button.onclick = function() {
        document.querySelector("#typing-input").value = "";
    }
    
    //On Calcul tout les String dans l'input
    const result = document.querySelector('.equal-btn');
    result.onclick = function showResult(){
    let input = document.getElementById("typing-input");
    let contenu = input.value;
    let result = eval(contenu);
    let div = document.getElementById("result-div");
    div.innerHTML = result;
    }
    //Nombre négatif
    const negativity = document.querySelector(".negativy");
    negativity.onclick = function opposite(){
    if( document.getElementById("typing-input").value > 0) {
        document.getElementById("typing-input").value = -document.getElementById("typing-input").value;
    }
    else{
       document.getElementById("typing-input").value =  "+" +    (document.getElementById("typing-input").value)
    }
    console.log("Ok")
    }

    //Css
    




    //Methode pour modifier les td a garder pour plus tard
    // const test = document.querySelector(".Succes")
    // const test1 = document.querySelector(".Succes td:nth-child(1)")
    // console.log(Array.from(test1));
