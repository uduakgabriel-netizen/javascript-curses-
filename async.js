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


userButton.addEventListener('click', async () => {

    try {
        const users = await getUser();
        setTimeout(() => {
        const info = users.map(user =>
        `<li>
        <strong>${user.name}</strong> (${user.email}) <br>
        ${user.address.street}, ${user.address.city}
        </li>`
        );
        userResult.innerHTML = `<ul>${info.join('')}</ul>`;
        }, 1000);
    } catch (error) {
            userResult.innerHTML = `Error Fetching Result: ${error.message}`;
        }
    })

    })
    

    


    
