import React from 'react';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/react';
import {
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent fullscreen>
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
  );
};

export default ExploreContainer;