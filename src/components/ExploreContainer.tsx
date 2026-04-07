import React from 'react';
import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
       <IonButton>Refresh</IonButton>
    </>
  );
};

export default ExploreContainer;