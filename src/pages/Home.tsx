import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonMenu,
  IonButtons,
  IonMenuButton
} from '@ionic/react';

import {
  chevronUpCircle,
  document,
  colorPalette,
  globe
} from 'ionicons/icons';

import './Home.css';

const Home: React.FC = () => {
  return (
    <>
     
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
       
        </IonContent>
      </IonMenu>

    
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

          

         
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton>
              <IonIcon icon={chevronUpCircle} />
            </IonFabButton>

            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={document} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={colorPalette} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={globe} />
              </IonFabButton>
            </IonFabList>
          </IonFab>

        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;