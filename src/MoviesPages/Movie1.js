import React,{Component} from "react";
import './MoviesPages.css'
class Movie1 extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <div class="moviewrap">
                    <div style={{textAlign:'center'}}>
                        <h1>{this.props.title}</h1>
                    </div>
                        <img class="moviei" src={this.props.pix} alt="icon"></img>
                    <div class="whole">
                        <div class="op">
                            <h3>{this.props.votecount}</h3>
                        </div>
                        <div class="op lines"></div>
                        <div class="op">
                            <h3>{this.props.voteaverage}</h3>
                        </div>
                        <div class="op">
                            <h1>{this.props.genre}</h1>
                        </div>
                        <div class="op lines"></div>
                        <div class="op">
                            <h3>{this.props.country}</h3>
                        </div>
                    </div>
                    <div>
                        <div class="op1">
                            <p style={{fontWeight:"bold"}}>{this.props.overview}</p>
                        </div>
                    </div>
                    <div class="boxoffice">
                        <div>
                            <h3 class="read">{this.props.budget}</h3>
                            <br></br>
                            <h3 class="read">{this.props.revenue}</h3>
                        </div>
                        <div>
                            <h3 class="read">You can read more about this movie <a href={this.props.lin}>here</a></h3>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Movie1