import logo from './logo.svg';
import './App.css';
import Mid from './Body/Mid.js'
import Movie1 from './MoviesPages/Movie1.js'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import first from './Body/first.jpeg'
import second from './Body/second.jpeg'
import third from './Body/third.jpeg'
import fourth from './Body/fourth.jpeg'
import fifth from './Body/fifth.jpeg'
import sixth from './Body/sixth.jpeg'
import seventh from './Body/seventh.jpeg'
import eighth from './Body/eighth.jpeg'
import ninth from './Body/ninth.jpeg'
import tenth from './Body/tenth.jpeg'
import fir from './Body/1st.jpeg'
import sec from './Body/2nd.jpeg'
import thi from './Body/3rd.jpeg'
import fou from './Body/4th.jpeg'
import fif from './Body/5th.jpeg'
import six from './Body/6th.jpeg'
import sev from './Body/7th.jpeg'
import eig from './Body/8th.jpeg'
import nin from './Body/9th.jpeg'
import ten from './Body/10th.jpeg'
import i from './Body/i.jpg'
import ii from './Body/ii.jpg'
import iii from './Body/iii.jpg'
import iv from './Body/iv.jpg'
import v from './Body/v.jpg'
import vi from './Body/vi.jpg'
import vii from './Body/vii.png'
import viii from './Body/viii.jpg'
import ix from './Body/ix.jpg'
import x from './Body/x.jpg'
const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui augue. In vulputate tempus pretium. Vivamus sit amet rhoncus purus. Etiam maximus vehicula nibh, sit amet commodo orci suscipit ac. Cras ullamcorper enim leo, sed tempus dolor elementum et. Aliquam convallis sem quis fringilla porttitor. Aliquam pharetra, tortor vitae feugiat sollicitudin, nisi mi sodales felis, sit amet viverra elit dui ac nibh. Aliquam erat volutpat. Nam at quam pulvinar, lacinia erat id, euismod lectus. Aenean mattis eros dui, eget vestibulum turpis feugiat in. Donec tristique, urna et tempus consequat, ante nisl lobortis libero, ut dictum arcu orci vulputate sem. Proin sit amet efficitur tortor. Nulla commodo dolor at libero varius, ac pharetra augue mattis. Donec a mattis massa. Aenean molestie ligula ac mi scelerisque, et lobortis nisl elementum."
function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Mid/>}/>
            <Route path="/1" element={<Movie1 language="English" pix={first} title="Black Panther: Wakanda Forever" country="Country: America" overview={text} votecount="Votecount:  88" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever"/>}/>
            <Route path="/2" element={<Movie1 language="English" pix={second} title="Quantamina" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/3" element={<Movie1 language="English" pix={third} title="Thor:Love and Thunder" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/4" element={<Movie1 language="English" pix={fourth} title="The Marvels" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/5" element={<Movie1 language="English" pix={fifth} title="Guardians of the Galaxy:Vol 3" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/6" element={<Movie1 language="English" pix={sixth} title="Black Adam" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/7" element={<Movie1 language="English" pix={seventh} title="Spiderman:Across the Spider Verse" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/8" element={<Movie1 language="English" pix={eighth} title="Jurassic world:Dominion" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/9" element={<Movie1 language="English" pix={ninth} title="Minions:The Rise of Gru" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/10" element={<Movie1 language="English" pix={tenth} title="Doctor Strange:The Multiverse of Madness" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/11" element={<Movie1 language="English" pix={fir} title="Eternal Sunshine of the Spotless Mind" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/12" element={<Movie1 language="English" pix={sec} title="Iron Man 3" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/13" element={<Movie1 language="English" pix={thi} title="Anchorman" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/14" element={<Movie1 language="English" pix={fou} title="Finding Nemo" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/15" element={<Movie1 language="English" pix={fif} title="Mean Girls" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/16" element={<Movie1 language="English" pix={six} title="Avatar" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/17" element={<Movie1 language="English" pix={sev} title="Incredibles" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/18" element={<Movie1 language="English" pix={eig} title="The Dark Knight" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/19" element={<Movie1 language="English" pix={nin} title="The Lord of The Rings" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/20" element={<Movie1 language="English" pix={ten} title="Wall-E" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/21" element={<Movie1 language="English" pix={i} title="Jaws" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/22" element={<Movie1 language="English" pix={ii} title="The Schindler's List" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/23" element={<Movie1 language="English" pix={iii} title="Taxi Driver" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/24" element={<Movie1 language="English" pix={iv} title="Pride and Prejudice" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/25" element={<Movie1 language="English" pix={v} title="The Silence of the Lambs" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/26" element={<Movie1 language="English" pix={vi} title="Insterstellar" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/27" element={<Movie1 language="English" pix={vii} title="Pulp Fiction" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/28" element={<Movie1 language="Korean" pix={viii} title="Parasite" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/29" element={<Movie1 language="Japanese" pix={ix} title="The Grave of the Fireflies" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
            <Route path="/30" element={<Movie1 language="English" pix={x} title="The Godfather" country="Country: America" overview={text} votecount="Votecount:  868" voteaverage="Votecount:  9.1" budget="Budget: 93.7million" revenue="Revenue: 104 million" lin="https://en.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" />}/>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


