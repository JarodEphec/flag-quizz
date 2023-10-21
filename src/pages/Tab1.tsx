import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Le quizz des drapeaux</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Bienvenue !</h1>
        <img src="https://media.tenor.com/Vb3g5JF3MB4AAAAi/neco-arc-taunt.gif" alt="Neco-Arc" className="tab1-img" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
