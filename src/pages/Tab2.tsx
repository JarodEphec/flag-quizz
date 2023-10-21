import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Quizz from '../components/Quizz';

const Tab2: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Le quizz là</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <Quizz></Quizz>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Le quizz là</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage >
  );
};

export default Tab2;
