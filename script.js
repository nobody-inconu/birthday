
function toggleAdminLogin() {
    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm.style.display === 'none') {
        adminLoginForm.style.display = 'block';
        adminLoginForm.style.position = 'relative';
        adminLoginForm.style.top = "-376";
        adminLoginForm.style.zIndex = "-99";
        

        publicmode.style.display = 'none';
        
        
    } else {
        adminLoginForm.style.display = 'none';
        publicmode.style.display = 'block';
    }
}



document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Ici, vous pouvez ajouter une vérification des identifiants administrateur
    if (username === 'admin' && password === 'admin123') {
        document.getElementById('public-mode').style.display = 'none';
        document.getElementById('admin-mode').style.display = 'block';
        document.getElementById('admin-login-form').style.display = 'none';
        loadAdminData();
    } else {
        alert('Identifiants incorrects');
    }
});

function loadAdminData() {
    // Ici, vous pouvez charger les données des utilisateurs depuis le serveur
    // et les afficher dans la section admin-content
    const adminContent = document.getElementById('admin-content');
    adminContent.innerHTML = '<p>Données des utilisateurs chargées ici...</p>';
}

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const photos = document.getElementById('photos').files;

    // Ici, vous pouvez envoyer les données du formulaire au serveur
    const formData = new FormData();
    formData.append('name', name);
    formData.append('birthdate', birthdate);
    for (let i = 0; i < photos.length; i++) {
        formData.append('photos[]', photos[i]);
    }

    // Exemple d'envoi des données avec Fetch API
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Formulaire soumis avec succès!');
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});


