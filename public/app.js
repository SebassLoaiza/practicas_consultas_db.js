async function getUsers() {
    const res = await fetch('/api/users');
    const users = await res.json();
    const list = document.getElementById('userList');
    list.innerHTML = '';
    users.forEach(user => {

        list.innerHTML += `
<li>
${user.name} - ${user.email}
<button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Editar</button>
<button onclick="deleteUser(${user.id})">Eliminar</button>
</li>`;
    });
}
async function saveUser() {
    const id = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (id) {
        await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
    } else {
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
    }
    clearForm();
    getUsers();
}
function editUser(id, name, email) {
    document.getElementById('userId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
}
async function deleteUser(id) {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    getUsers();
}
function clearForm() {
    document.getElementById('userId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}