import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import myData from '../../curiexplore-pays.json';

const Tab2: React.FC = () => {


    const [refresh, setRefresh] = useState(false);

    let proposition = getPropositions();

    let goodAnswer = getRandomInt(4);


    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getPropositions() {
        return [getRandomInt(216), getRandomInt(216), getRandomInt(216), getRandomInt(216)];
    }

    function isAnswerGood(answer: number, idButon: string) {
        let buton = document.getElementById(idButon);
        let goodAnswerButon = document.getElementById('buton' + goodAnswer);
        if (answer === goodAnswer) {
            buton?.setAttribute("color", "success");
            setTimeout(() => {
                refresher();
            }, 1000);
            return true;
        } else {
            buton?.setAttribute("color", "danger");
            goodAnswerButon?.setAttribute("color", "success");
            setTimeout(() => {
                refresher();
            }, 1000);
            return false;
        }
    }

    function refresher() {
        proposition = getPropositions();
        goodAnswer = getRandomInt(4);

        for (let i = 0; i < 4; i++) {
            let button = document.getElementById('buton' + i);
            if (button) {
                button.setAttribute("color", "default");
            }
        }
        setRefresh(true);
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="auto"><img key={refresh ? 'refresh' : 'no-refresh'} src={myData[proposition[goodAnswer]].fields.flag} alt="Flag" /></IonCol>
                    </IonRow>
                </IonGrid>
                <br />
                <IonGrid fixed={true}>
                    <IonRow class="ion-justify-content-center">
                        <IonCol><IonButton expand="block" key={refresh ? 'refresh' : 'no-refresh'} id='buton0' onClick={() => isAnswerGood(0, 'buton0')}>{myData[proposition[0]].fields.name_fr}</IonButton></IonCol>
                        <IonCol><IonButton expand="block" key={refresh ? 'refresh' : 'no-refresh'} id='buton1' onClick={() => isAnswerGood(1, 'buton1')}>{myData[proposition[1]].fields.name_fr}</IonButton></IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-center">
                        <IonCol><IonButton expand="block" key={refresh ? 'refresh' : 'no-refresh'} id='buton2' onClick={() => isAnswerGood(2, 'buton2')}>{myData[proposition[2]].fields.name_fr}</IonButton></IonCol>
                        <IonCol><IonButton expand="block" key={refresh ? 'refresh' : 'no-refresh'} id='buton3' onClick={() => isAnswerGood(3, 'buton3')}>{myData[proposition[3]].fields.name_fr}</IonButton></IonCol>
                    </IonRow>
                </IonGrid>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage >
    );
};

export default Tab2;
