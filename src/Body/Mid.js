import React,{Component} from "react"
import './Mid.css'
import first from './first.jpeg'
import second from './second.jpeg'
import third from './third.jpeg'
import fourth from './fourth.jpeg'
import fifth from './fifth.jpeg'
import sixth from './sixth.jpeg'
import seventh from './seventh.jpeg'
import eighth from './eighth.jpeg'
import ninth from './ninth.jpeg'
import tenth from './tenth.jpeg'
import fir from './1st.jpeg'
import sec from './2nd.jpeg'
import thi from './3rd.jpeg'
import fou from './4th.jpeg'
import fif from './5th.jpeg'
import six from './6th.jpeg'
import sev from './7th.jpeg'
import eig from './8th.jpeg'
import nin from './9th.jpeg'
import ten from './10th.jpeg'
import i from './i.jpg'
import ii from './ii.jpg'
import iii from './iii.jpg'
import iv from './iv.jpg'
import v from './v.jpg'
import vi from './vi.jpg'
import vii from './vii.png'
import viii from './viii.jpg'
import ix from './ix.jpg'
import x from './x.jpg'

import SearchBar from "./SearchBar"
import BookData from "./Data.json"
import { Outlet, Link } from "react-router-dom";
class Mid extends Component{
    constructor(){
        super();
        this.state={
          len:20
        };
    }
render(){
    return (
        <React.Fragment>
            <div class="midbg">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <button class="btn btn-link btn-block border-bottom m-0"><a href="#upmbg">Upcoming Movies</a></button>
                        <button class="btn btn-link btn-block border-bottom m-0"><a href="#tpmbg">Toprated Movies</a></button>
                        <button class="btn btn-link btn-block border-bottom m-0"><a href="#ppmbg">Popular Movies</a></button>
                    </div>
                </div>           
                <nav class="navbar navbar-dark bg-dark">
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <SearchBar placeholder="Enter a Book Name..." data={BookData} />
                </nav>   
                <br></br>
                <div class="contain">
                    <div class="sp">
                        <h1>
                        Upcoming Movies</h1>
                    </div>
                    <div id="upmbg">
                        <div class="ret" style={{marginBottom:'70px'}}>
                                <Link to="/1"><button class="pics"><img className="ic icon1" src={first} alt="icon" /><h4 class="descrip">Release Date: 11/11/22</h4></button></Link>
                                <Link to="/2"><button class="pics"><img className="ic icon2" src={second} alt="icon" /><h4 class="descrip">Release Date: 28/07/23</h4></button></Link>
                                <Link to="/3"><button class="pics"><img className="ic icon3" src={third} alt="icon" /><h4 class="descrip">Release Date: 08/07/22</h4></button></Link>
                                <Link to="/4"><button class="pics"><img className="ic icon4" src={fourth} alt="icon" /><h4 class="descrip">Release Date: 17/02/23</h4></button></Link>
                                <Link to="/5"><button class="pics"><img className="ic icon5" src={fifth} alt="icon" /><h4 class="descrip">Release Date: 23/05/23</h4></button></Link>
                        </div>
                        <div class="ret">
                                <Link to="/6"><button class="pics"><img className="ic icon6" src={sixth} alt="icon" /><h4 class="descrip">Release Date: 29/07/22</h4></button></Link>
                                <Link to="/7"><button class="pics"><img className="ic icon7" src={seventh} alt="icon" /><h4 class="descrip">Release Date: 07/10/22</h4></button></Link>
                                <Link to="/8"><button class="pics"><img className="ic icon8" src={eighth} alt="icon" /><h4 class="descrip">Release Date: 10/06/22</h4></button></Link>
                                <Link to="/9"><button class="pics"><img className="ic icon9" src={ninth} alt="icon" /><h4 class="descrip">Release Date: 01/07/22</h4></button></Link>
                                <Link to="/10"><button class="pics"><img className="ic icon10" src={tenth} alt="icon" /><h4 class="descrip">Release Date: 06/05/22</h4></button></Link>
                        </div>
                    </div>
                    <div class="sp"><h1>
                        Popular Movies</h1>
                    </div>
                    <div id="ppmbg">
                        <div class="ret" style={{marginBottom:'70px'}}>
                                <Link to="/11"><button class="pics"><img className="ic icon1" src={fir} alt="icon" /><h4 class="descrip">Vote Count:345 Vote Average:7.9</h4></button></Link>
                                <Link to="/12"><button class="pics"><img className="ic icon2" src={sec} alt="icon" /><h4 class="descrip">Vote Count:345 Vote Average:7.9</h4></button></Link>
                                <Link to="/13"><button class="pics"><img className="ic icon3" src={thi} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/14"><button class="pics"><img className="ic icon4" src={fou} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/15"><button class="pics"><img className="ic icon5" src={fif} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                        </div>
                        <div class="ret">
                                <Link to="/16"><button class="pics"><img className="ic icon6" src={six} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/17"><button class="pics"><img className="ic icon7" src={sev} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/18"><button class="pics"><img className="ic icon8" src={eig} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/19"><button class="pics"><img className="ic icon9" src={nin} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                                <Link to="/20"><button class="pics"><img className="ic icon10" src={ten} alt="icon" /><h4 class="descrip">Vote Count :345 
                                Vote Average:7.9</h4></button></Link>
                        </div>
                    </div>
                    <div class="sp"><h1>
                        Toprated Movies</h1>
                    </div>
                    <div id="tpmbg">
                        <div class="ret" style={{marginBottom:'70px'}}>
                                <Link to="/21"><button class="pics"><img className="ic icon1" src={i} alt="icon" /><h4 class="descrip">IMDb Rating: 9.2</h4></button></Link>
                                <Link to="/22"><button class="pics"><img className="ic icon2" src={ii} alt="icon" /><h4 class="descrip">IMDb Rating: 9.1</h4></button></Link>
                                <Link to="/23"><button class="pics"><img className="ic icon3" src={iii} alt="icon" /><h4 class="descrip">IMDb Rating: 9.7</h4></button></Link>
                                <Link to="/24"><button class="pics"><img className="ic icon4" src={iv} alt="icon" /><h4 class="descrip">IMDb Rating: 8.9</h4></button></Link>
                                <Link to="/25"><button class="pics"><img className="ic icon5" src={v} alt="icon" /><h4 class="descrip">IMDb Rating: 9.6</h4></button></Link>
                        </div>
                        <div class="ret">
                                <Link to="/26"><button class="pics"><img className="ic icon6" src={vi} alt="icon" /><h4 class="descrip">IMDb Rating: 9.5</h4></button></Link>
                                <Link to="/27"><button class="pics"><img className="ic icon7" src={vii} alt="icon" /><h4 class="descrip">IMDb Rating: 9.8</h4></button></Link>
                                <Link to="/28"><button class="pics"><img className="ic icon8" src={viii} alt="icon" /><h4 class="descrip">IMDb Rating: 8.8</h4></button></Link>
                                <Link to="/29"><button class="pics"><img className="ic icon9" src={ix} alt="icon" /><h4 class="descrip">IMDb Rating: 8.7</h4></button></Link>
                                <Link to="/30"><button class="pics"><img className="ic icon10" src={x} alt="icon" /><h4 class="descrip">IMDb Rating: 9.4</h4></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
}
export default Mid