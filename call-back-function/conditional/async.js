// WHAT DOSE ASYNCHRONOUS MEANS

// synchronous javascript  Runs one line at a time, in order.
// Examples: if one line takes 5 seconds, the next should wait.


//Asynchronouse javascript : lets long tasks run in the background without block
// Example: you order, then sit down and do other things. when your food is ready come in and take it


//  🐱‍🏍 Tools for Asynchronous javascript

// callbacks

//promise

//async / await.

//  WORKINGS

async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        // let users  = await response.json();
        // let address = users.map(item => `${item.address} ${item.name}`);
        if(!response.ok){
            throw new Error(`unable to fetch: ${response.status}`);

        }
        // console.log(address);
        const users = await response.json();
        return users;
    }   catch (error) {
        console.log("message: runtime error", error);
        throw error;
    }
}

window.addEventListener('DOMContentLoaded',() =>{
    const userResult = document.getElementById('userResult');
    const userButton = document.getElementById('userButton');


userButton.addEventListener('click',async () => {
    userResult.innerHTML = 'loading....';
    try {
        const users = await getUsers();
        const info = users.map(user =>
        `<li>
        <strong>${user.name}</strong> (${user.email}) <br>
        ${user.address.street}, ${user.address.city}
        </li>`
        );
        userResult.innerHTML = `<ul>${info.join('')}</ul>`;
    } catch (error) {
            userResult.innerHTML = `Error Fetching Result: ${error.message}`;
        }
    })

})
    
