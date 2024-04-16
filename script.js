function getUser() {
    let username = document.getElementById('searchUser').value;
    if (username !== '') {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('User not found');
                }
            })
            .then(data => {
                document.getElementById('userProfile').innerHTML = `
                    <img src="${data.avatar_url}" alt="Avatar">
                    <h3>${data.name}</h3>
                    <p>${data.bio}</p>
                    <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
                `;
            })
            .catch(error => {
                document.getElementById('userProfile').innerHTML = `<p>User not found.</p>`;
            });
    }
}
