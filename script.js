function myfetch(){

        if(!navigator.onLine){
            alert("please check your intenet connection")
            return
        }
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Convert response to JSON
        .then(users => {
            const tableBody = document.querySelector("#userTable tbody");
            users.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.username}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
    }