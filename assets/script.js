console.log('connecté !'); 

const MyForm = document.querySelector('form');
console.log('élement MyForm', MyForm)
MyForm.addEventListener("submit", FormSubmited, Reset);


function FormSubmited(event) {
//Ne pas recharger la page.
    event.preventDefault();
    const MyFirstName = document.querySelector('#first-name').value;
    console.log('élément MyFirstName', MyFirstName)
    const MyLastName = document.querySelector('#last-name').value;
    console.log('élement MyLastName', MyLastName)
    const MyMessage = document.querySelector('#message').value;
    console.log('élement My Message', MyMessage)
    const ErrorMessage = document.querySelector('#error-message');
    console.log('élement Message erreur', ErrorMessage)
    

//Si les champs sont vides : le message d'erreur est affiché.
//Si les champs sont remplis : le commentaire est créé, le message d'erreur n'apparaît pas et les champs sont resetés.
    if (MyFirstName.trim() === "" || MyLastName.trim() === "" || MyMessage.trim() === "") {
        console.log ("Tous les champs doivent être remplis");
        ErrorMessage.style.display="block";
    return ;

    } else {
        CreateComment(MyFirstName, MyLastName, MyMessage);
        Reset (MyFirstName, MyLastName, MyMessage) ;
        ErrorMessage.style.display="none";
    return ;
    }

};


//Créer un commentaire avec les balises HTML existantes.
function CreateComment(MyFirstName, MyLastName, MyMessage) {
    let newComment = document.getElementById("comment-list");
    console.log('élément newComment', newComment)
    let createDiv = document.createElement("div");
    console.log('élément createDiv', createDiv)
    let contentHtml = `<div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${MyFirstName + " " + MyLastName}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
    <p>${MyMessage}</p>
    </div>
    </div>`;
    console.log('élément contentHtml', contentHtml)
     
        createDiv.innerHTML = contentHtml;
        newComment.appendChild(createDiv);
        
};


//Effacer le contenu du formulaire après validation de celui-ci.
function Reset () {
    document.querySelector("form").reset();

};