import React, { Component } from 'react';

class HomeContainer extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Title</h1>
        <p>GO-FORT is een trainingsorganisatie, gespecialiseerd in teambuilding en het bevorderen van o.a. praktisch leiderschap maar ook agressie-trainingen. De docenten zijn voormalige specialisten van Het Korps Mariniers. Mensen die geopereerd hebben onder de meest extreme omstandigheden en ervaring hebben met crisissituaties, waarbij het altijd draaide om teamwork en leiderschap.</p>
        <p>Elke manager wil zijn team(s) optimaal laten functioneren. Het succes van een leidinggevende heeft geen basis met Formeel gezag. Belangrijk is visie, tact en overtuigingskracht. Hoe maak je van diverse individuen één goed samenwerkend team? Het traditionele contact tussen een teamleider en zijn teamleden staat onder druk vanwege ‘het nieuwe werken’ waarbij het gevaar van misscommunicatie en een vertroebelde werksfeer op de loer ligt. Deze nieuwe tijden brengen ook nieuwe uitdagingen.</p>
        <p>GO-FORT heeft de ervaring en de docenten die u daarbij kunnen helpen. Onder deskundige begeleiding werken de cursisten in een uitdagende omgeving aan het optimaliseren van hun sterke en het minimaliseren van de zwakke kanten.</p>
        <p>Vanuit de basiscursus Praktisch Leiderschap, zijn er mogelijkheden om gerelateerde thema cursussen te volgen.</p>
        <ul className='list'>
          <li>Coachend leidinggeven</li>
          <li>Leidinggeven aan professionals</li>
          <li>Teambuilding   1-daagse cursus samen met uw team</li>
        </ul>

        <strong>GO-FORT gaat graag de uitdaging aan!</strong>
      </div>
    );
  }
}

export default HomeContainer;
