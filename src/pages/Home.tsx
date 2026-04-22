import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { bookOutline, search, star } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Feed from './home-tabs/Feed';
import Favorites from './home-tabs/Favorites';
import Search from './home-tabs/Search';


const Home: React.FC = () => {
  const tabs = [
    {name: 'Feed', tab: 'feed', url: '/app/home/feed', icon:bookOutline},
    {name: 'Favorites', tab: 'favorites', url: '/app/home/favorites', icon:star},
    {name: 'Search', tab: 'search', url: '/app/home/search', icon:search},
  ];
  
  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>
              Tabs
            </IonTitle>
          </IonToolbar>
          {/**/}
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      

      <IonRouterOutlet>
        <Route exact path="/app/home/feed" component={Feed} />  
        <Route exact path="/app/home">
          <Redirect to="/app/home/feed" />
        </Route>
        <Route exact path="/app/home/favorites" component={Favorites} />
        <Route exact path="/app/home/search" component={Search} />


      </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;