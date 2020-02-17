import React, { Component } from 'react';
//import MoviesDefaultData from '../MovieData'
import axios from 'axios'
import Nav from './Nav';


export class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state={
        MoviesDetails:{},
        Id:window.localStorage.getItem('ID'),
        
       
        }
        

    }
 
    componentWillMount(){
        const{Id}=this.state
        axios.get('https://www.omdbapi.com/?apikey=87a63bbc&i='+Id)
        .then((response) => {
          console.log(response);
          let movie = response.data;
          this.setState({
              MoviesDetails:movie
          })

        }).catch((err) => {
          console.log(err);
        });
    }
    
    render() {
        
      console.log(this.state);
        return (
            <>
            <Nav/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner image">
                <div className="carousel-item active">
                    <img src="https://vovatia.files.wordpress.com/2017/01/bane-batman-standoff-the-dark-knight-rises-wall-poster1.jpg"   alt="..."/>
                  </div>
              <div className="carousel-item">
                <img src="https://cityonfire.com/wp-content/uploads/2012/07/the-expendables-2-gets-a-cool-new-poster-107596-02-1000-100.jpg"   alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/cd/78/0a/cd780a7de444b557dce522ce14eb3388.jpg"   alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://news.cgtn.com/news/3d3d674d78457a4d78457a6333566d54/img/d315f9d2ffd54368a77696495acfcee2/d315f9d2ffd54368a77696495acfcee2.jpg"  alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/261c2340664543.57ba7f41d2b3b.png"   alt="..."/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="row">
          <div className="col">
            <img style={{marginTop:'40px',marginLeft:'30px'}} src={this.state.MoviesDetails.Poster} className="thumbnail"/>
          </div>
          <div className="col-md-6">
            <h2 style={{color:'white'}}>{this.state.MoviesDetails.Title}</h2>
            <ul style={{boxSizing:'border-box'}} className="list-group">
            <li className="list-group-item"><strong>Genre:</strong>{this.state.MoviesDetails.Genre}</li>
              <li className="list-group-item"><strong>Released:</strong> {this.state.MoviesDetails.Released}</li>
              <li className="list-group-item"><strong>Rated:</strong> {this.state.MoviesDetails.Rated}</li>
              <li className="list-group-item"><strong>IMDB Rating:</strong> {this.state.MoviesDetails.imdbRating}</li>
              <li className="list-group-item"><strong>Director:</strong> {this.state.MoviesDetails.Director}</li>
              <li className="list-group-item"><strong>Writer:</strong> {this.state.MoviesDetails.Writer}</li>
              <li className="list-group-item"><strong>Actors:</strong> {this.state.MoviesDetails.Actors}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="well">
            <h3 style={{color:'white'}}>Plot</h3>
           <p style={{color:'white'}}>{this.state.MoviesDetails.Plot}</p>
            <hr/>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" className="btn btn-primary ">View IMDB</a>
            <a href="/Dashboard" className="btn btn-success default m-4">Go Back To Search</a>
          </div>
        </div>

        <footer class="p-3 bg-teal text-white text-center bg-success">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <h3>Copyright © 2020</h3>
                    <h6>All Rights Reserved</h6>
                    <h6>Developed & Maintained by Ravi Kumar Ojha
                        <a class="text-warning" href="https://github.com/raviojha007" target="_blank">
                           
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    </footer>
     </>

        );
    }
}

export default MoviesList;
