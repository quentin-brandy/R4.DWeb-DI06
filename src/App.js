import "./App.css";
import All from "./js/all";
let data = {
title: "Prix et option à l'achats",
description: "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
  formules: [
      {
          formule: "Starter Package",
          prix: "29 999.99",
          link: "#Form1",
          button: "Get Started",
          advantages: [
              { index: 1, text: "Assurance auto complémentaire", checked: true },
              { index: 2, text: "Première recharge offerte", checked: true },
              { index: 3, text: "Assurance contre le vol", checked: true },
              { index: 4, text: "Service de rappel d'entretien", checked: true },
              { index: 5, text: "Nettoyage hebdomadaire", checked: false },
              { index: 6, text: "Service de diagnostic à distance", checked: false },
              { index: 7, text: "Service de remplissage du réservoir", checked: false },
              { index: 8, text: "Service de réparation à domicile", checked: false },
              { index: 9, text: "Entretien régulier", checked: false },
              { index: 10, text: "Recharge d'hydrogène illimité", checked: false }
          ]
      },
      {
          formule: "Premium Package",
          prix: "39 999.99",
          link: "#Form2",
          button: "Get Started",
          advantages: [
            { index: 1, text: "Assurance auto complémentaire", checked: true },
            { index: 2, text: "Première recharge offerte", checked: true },
            { index: 3, text: "Assurance contre le vol", checked: true },
            { index: 4, text: "Service de rappel d'entretien", checked: true },
            { index: 5, text: "Nettoyage hebdomadaire", checked: true },
            { index: 6, text: "Service de diagnostic à distance", checked: true },
            { index: 7, text: "Service de remplissage du réservoir", checked: true },
            { index: 8, text: "Service de réparation à domicile", checked: false },
            { index: 9, text: "Entretien régulier", checked: false },
            { index: 10, text: "Recharge d'hydrogène illimité", checked: false }
        ]
      },
      {
          formule: "Prestige Package",
          prix: "49 999.99",
          link: "#Form3",
          button: "Get Started",
          advantages: [
            { index: 1, text: "Assurance auto complémentaire", checked: true },
            { index: 2, text: "Première recharge offerte", checked: true },
            { index: 3, text: "Assurance contre le vol", checked: true },
            { index: 4, text: "Service de rappel d'entretien", checked: true },
            { index: 5, text: "Nettoyage hebdomadaire", checked: true },
            { index: 6, text: "Service de diagnostic à distance", checked: true },
            { index: 7, text: "Service de remplissage du réservoir", checked: true },
            { index: 8, text: "Service de réparation à domicile", checked: true },
            { index: 9, text: "Entretien régulier", checked: true },
            { index: 10, text: "Recharge d'hydrogène illimité", checked: true }
        ]
      }
  ]
}

function App() {
  return (
    <div>
   
      <All {...data}/>
          
</div>
  );
}

export default App;
