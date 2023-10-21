import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Résultats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Résultats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>En construction !</h1>
        <img src="https://media.tenor.com/8RrVeCAWBoAAAAAd/neco-arc.gif" alt="Neco-Arc" className="tab1-img" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
