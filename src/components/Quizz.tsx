import { IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import myData from '../../curiexplore-pays.json';

let proposition: (number)[] = [];
let goodAnswer = 0;

const Quizz: React.FC = () => {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getPropositions() {
        return [getRandomInt(216), getRandomInt(216), getRandomInt(216), getRandomInt(216)];
    }
    if (proposition.length === 0) {
        proposition = getPropositions();
        goodAnswer = getRandomInt(4);
    }

    const [imgText, setImgText] = useState(myData[proposition[goodAnswer]].fields.flag);
    const changeImgText = (imgText: string) => setImgText(imgText);

    const [button0Text, setButton0Text] = useState(myData[proposition[0]].fields.name_fr);
    const change0Text = (button0Text: string) => setButton0Text(button0Text);

    const [button1Text, setButton1Text] = useState(myData[proposition[1]].fields.name_fr);
    const change1Text = (button1Text: string) => setButton1Text(button1Text);

    const [button2Text, setButton2Text] = useState(myData[proposition[2]].fields.name_fr);
    const change2Text = (button2Text: string) => setButton2Text(button2Text);

    const [button3Text, setButton3Text] = useState(myData[proposition[3]].fields.name_fr);
    const change3Text = (button3Text: string) => setButton3Text(button3Text);


    function isAnswerGood(answer: number, idButon: string) {
        let buton = document.getElementById(idButon);
        let goodAnswerButon = document.getElementById('buton' + goodAnswer);
        console.log(answer);
        if (answer === goodAnswer) {
            goodAnswerButon?.setAttribute("color", "success");
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
                button.setAttribute("color", "primary");
            }
        }
        change0Text(myData[proposition[0]].fields.name_fr);
        change1Text(myData[proposition[1]].fields.name_fr);
        change2Text(myData[proposition[2]].fields.name_fr);
        change3Text(myData[proposition[3]].fields.name_fr);
        changeImgText(myData[proposition[goodAnswer]].fields.flag);
    }


    return (
        <div>
            <IonGrid>
                <IonRow class="ion-justify-content-center">
                    <IonCol size="auto"><img src={imgText} alt="Flag" className="tab2-img" /></IonCol>
                </IonRow>
            </IonGrid>
            <br />
            <IonGrid fixed={true}>
                <IonRow class="ion-justify-content-center">
                    <IonCol><IonButton expand="block" color="primary" id='buton0' onClick={() => isAnswerGood(0, 'buton0')}>{button0Text}</IonButton></IonCol>
                    <IonCol><IonButton expand="block" color="primary" id='buton1' onClick={() => isAnswerGood(1, 'buton1')}>{button1Text}</IonButton></IonCol>
                </IonRow>
                <IonRow class="ion-justify-content-center">
                    <IonCol><IonButton expand="block" color="primary" id='buton2' onClick={() => isAnswerGood(2, 'buton2')}>{button2Text}</IonButton></IonCol>
                    <IonCol><IonButton expand="block" color="primary" id='buton3' onClick={() => isAnswerGood(3, 'buton3')}>{button3Text}</IonButton></IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default Quizz;
