import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { thumbsUpOutline, chatboxOutline, shareOutline } from "ionicons/icons";
import { useState, useEffect } from "react";

const Search:React.FC = () => {
   const games = [
    {name: 'Gou Ultra', details:"POWER"},
    {name: 'Goku 1', details:"POWER"},
    {name: 'Goku 2', details:"POWER"},
    {name: 'Goku 3', details:"POWER"},
    {name: 'Super Goku', details:"POWER"}
    ]
    
    const [searchText, setSearchText] = useState('');
    const [filtered,setFilteredGames] = useState(games);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filtered = games.filter(game=>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        },400);

        return () => clearTimeout(debounce);
    },[searchText]);

    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonSearchbar placeholder = "Search Games"
                value={searchText}
                debounce = {0}
                onIonInput={(e) => setSearchText(e.detail.value!)}
                >
                </IonSearchbar>
                    <IonList>
                                        {filtered.map((item,index) => (
                                    <IonCard key={index}>
                                    <img alt="Goku" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT612xr1Wl4fP3QdDQ-3Q1gfTcW5IX2j6MRvg&s" />
                                    <IonCardHeader>
                                        <IonCardTitle>{item.name}</IonCardTitle>
                                        <IonCardSubtitle>{item.details}</IonCardSubtitle>
                                    </IonCardHeader>
                    
                    
                    
                                    <IonCardContent></IonCardContent>
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

export default Search;