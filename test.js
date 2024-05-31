class produit {
  constructor(nom, description, prix, quantitéEnStock) {
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.quantitéEnStock = quantitéEnStock;
  }

  afficherDetails() {
    return `${this.nom} : ${this.description} - ${this.prix}€ - ${this.quantitéEnStock} en stock`;
  }
}

const chaise = new produit("Chaise", "Une chaise confortable", 45, 10);
console.log(chaise.afficherDetails());

class Livre {
  constructor(titre, auteur, anneeDePublication, disponible) {
    this.titre = titre;
    this.auteur = auteur;
    this.anneeDePublication = anneeDePublication;
    this.disponible = disponible;
  }
}

class Bibliotheque {
  constructor() {
    this.livres = [];
  }

  ajouterUnLivre(livre) {
    return this.livres.push(livre);
  }

  supprimerUnLivre(livre) {
    return this.livres.filter((book) => book != livre);
  }

  rechercherUnLivre(livre) {
    return this.livres.find((el) => el === livre);
  }

  emprunterLivre(titre) {
    const livre = this.livres.find((el) => el.titre === titre);

    if (livre === livre.disponible) {
      livre.disponible = false;
    }
  }

  retournerLivre(titre) {
    const livre = this.livres.find((el) => el.titre === titre);

    if (livre === livre.disponible) {
      livre.disponible = false;
    }
  }
}
