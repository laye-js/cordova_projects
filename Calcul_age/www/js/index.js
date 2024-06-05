function calculerAge() {
  const anneeNaissance = Number(naissance.value);
  const anneeActuelle = new Date().getFullYear();

  if (anneeNaissance > anneeActuelle) {
    const resultat = document.getElementById('resultat');
    resultat.innerHTML = "L'année de naissance ne peut pas être supérieure à l'année actuelle.";

    const resultatArea = document.querySelector('fieldset');
    resultatArea.hidden = false;
  } else {
    const age = anneeActuelle - anneeNaissance;
    const resultat = document.getElementById('resultat');
    resultat.innerHTML = `votre age est ${age}`;

    const resultatArea = document.querySelector('fieldset');
    resultatArea.hidden = false;
  }
}
