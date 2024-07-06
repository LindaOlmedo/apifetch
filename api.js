const buttonSection = document.getElementById('actBoton');addEventListener('click', function() {
    const content = document.getElementById('content');
    const loader = document.getElementById('loader');
    const tableBody = document.getElementById('user-table-body');

    loader.classList.remove('d-none');

    fetch('https://reqres.in/api/users?delay=3Links')
    
        .then(response => response.json())
        .then(data => {
        tableBody.innerHTML = '';

        console.log(data);
        data.data.forEach(user => {
        const row = `
            <tr>
            <td data-label="id">${user.id}</td>
            <td data-label="First Name">${user.first_name}</td>
            <td data-label="Last Name">${user.last_name}</td>
            <td data-label="e-mail">${user.email}</td>
            <td data-label="Image"><img src=${user.avatar}></img></td>
            </tr>
        `;
            tableBody.innerHTML += row;
});

        loader.classList.add('d-none');
        content.classList.remove('d-none');
})
       .catch( (error)=> console.log(error)  );
    });