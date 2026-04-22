import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { thumbsUpOutline, chatboxOutline, shareOutline } from "ionicons/icons";

const Feed:React.FC = () => {


    const games = [
        {name: 'Goku Ulrta'},
        {name: 'Goku 1'},
        {name: 'Goku 2'},
        {name: 'Goku 3'},
        {name: 'Super Goku'}
    ]
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton>

                        </IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>


             <IonContent className="ion-padding">
                <IonList>
                    {games.map((item,index) => (
                <IonCard key={index}>
                <img alt="Goku" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT612xr1Wl4fP3QdDQ-3Q1gfTcW5IX2j6MRvg&s" />
                <IonCardHeader>
                    <IonCardTitle>{item.name}</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>



                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={thumbsUpOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={chatboxOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={shareOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

            ))}

                
                 </IonList>
                
            </IonContent>
        </IonPage>

    );

};

export default Feed;