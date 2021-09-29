import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Carrer from './components/Carrer/Carrer';
import CarrerDetails from './components/CarrerDetails/CarrerDetails';
import CarrerForm from './components/CarrerForm/CarrerForm';

import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import AgencyReel from './components/InternalPages/AgencyReel/AgencyReel';
import AgencyReel2_0 from './components/InternalPages/AgencyReel2.0/AgencyReel2_0';
import ClipsReel from './components/InternalPages/ClipsReel/ClipsReel';
import ClipsReel2_0 from './components/InternalPages/ClipsReel2_0/ClipsReel2_0';
import CourseReel from './components/InternalPages/CourseReel/CourseReel';
import CurationNeos from './components/InternalPages/CurationNeos/CurationNeos';
import LiveReel from './components/InternalPages/LiveReel/LiveReel';
import Podreel from './components/InternalPages/Podreel/Podreel';
import ScriptReel from './components/InternalPages/ScriptReel/ScriptReel';
import Sonority from './components/InternalPages/Sonority/Sonority';
import StoryReel from './components/InternalPages/StoryReel/StoryReel';
import StoryReel2_0 from './components/InternalPages/StoryReel2_0/StoryReel2_0';
import Syvid from './components/InternalPages/Syvid/Syvid';
import TrafficFresh from './components/InternalPages/TrafficFresh/TrafficFresh';
import VidBuilderFX from './components/InternalPages/VidBuilderFX/VidBuilderFX';
import VidCuratorFX from './components/InternalPages/VidCuratorFX/VidCuratorFX';
import VideoReel from './components/InternalPages/VideoReel/VideoReel';
import Vidneos from './components/InternalPages/Vidneos/Vidneos';
import ViralReel from './components/InternalPages/ViralReel/ViralReel';
import ViralTraffic from './components/InternalPages/ViralTraffic/ViralTraffic';
import VisualReel from './components/InternalPages/VisualReel/VisualReel';
import ScrolltoTop from './components/ScrolltoTop';
import ShopifyApps from './components/ShopifyApps/ShopifyApps';
import Software from './components/Software/Software';
import WebApps from './components/WebApps/WebApps';
import WordPress from './components/WordPress/WordPress';



function App() {
  return (

    <div className="App">
        <Router basename={'/Vega6'}>
        <ScrolltoTop>
            <Switch>
        
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/home" component={Home}/>
                 <Route exact path="/software" component={Software} /> 
                 <Route exact path="/wordpress" component={WordPress} />
                 <Route exact path="/webapps" component={WebApps} /> 
                 <Route exact path="/shopify" component={ShopifyApps}/>
                 <Route exact path="/carrer" component={Carrer}/>
                 <Route exact path="/carrerDetails" component={CarrerDetails}/>
                 <Route exact path="/about" component={About}/>
                 <Route exact path="/contact" component={Contact}/>
                 <Route exact path="/blog" component={Blog}/>
                 <Route exact path="/gallery" component={Gallery}/>
                 <Route exact path="/carrerform" component={CarrerForm} />
                

                 {/* Internal pages */}

                 <Route exact path="/livereel" component={LiveReel}/>
                 <Route exact path="/storyreel" component={StoryReel}/>
                 <Route exact path="/vidcuratorfx" component={VidCuratorFX}/>
                 <Route exact path="/visualreel" component={VisualReel}/>
                 <Route exact path="/videoreel" component={VideoReel}/>
                 <Route exact path="/vidBuilderFx" component={VidBuilderFX}/>
                 <Route exact path="/clipsreel" component={ClipsReel}/>
                 <Route exact path="/scriptreel" component={ScriptReel}/>
                 <Route exact path="/curationneos" component={CurationNeos}/>
                 <Route exact path="/trafficfresh" component={TrafficFresh}/>
                 <Route exact path="/vidneos" component={Vidneos}/>  
                 <Route exact path="/agencyreel" component={AgencyReel}/>               
                 <Route exact path="/agencyreel2_0"  component={AgencyReel2_0}/>
                 <Route exact path="/clipsreel2_0" component={ClipsReel2_0}/>
                 <Route exact path="/storyreel2_0" component={StoryReel2_0}/>
                 <Route exact path="/sonority" component={Sonority}/>
                 <Route exact path="/viralreel" component={ViralReel}/>
                 <Route exact path="/viraltraffic" component={ViralTraffic}/>
                 <Route exact path="/CourseReel" component={CourseReel}/>
                 <Route exact path="/podreel" component={Podreel}/>
                 <Route exact path="/syvid" component={Syvid}/>

                
               
            </Switch>
            </ScrolltoTop>
        </Router>
    
    </div>
    
  );
}

export default App;
