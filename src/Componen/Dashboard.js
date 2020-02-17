import React, { Component,useState } from 'react';
import MoviesDefaultData from '../MovieData'
import Pagination from './Pagination'
import Nav from './Nav';
//import { withRouter } from "react-router-dom";

/*
const DefaultPoster = () => {
  return (
    <div>
        <img src="https://m.media-amazon.com/images/M/MV5BOThjY2JiNTQtNjkzYy00NzQ0LWIyZWQtNWJlMWYwNjk5Mzk5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"  className="card-img-top" alt="..."/>
    </div>
  );
}
const Poster = () => {
let [poster]=useState(MoviesDefaultData);
console.log(poster[0].Poster);
  return   <img src={poster[1].Poster} className="card-img-top" alt="..."/>
}
*/
 // Get current posts

 
export class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state={
      MoviesArr:MoviesDefaultData,
      textEnter:'',
      currentPage:1,
      postsPerPage:6,
      currentPosts:[]
    }
   

  }
  onChange=(e)=>{
 const name=e.target.name;
 const value =e.target.value;
 this.setState({
   [name]:value

 })  
  }
  FilterData=(textEnter)=>{
    const {MoviesArr}=this.state;
    let data=MoviesArr.filter((movies)=>{
             return movies.Title === textEnter
    })
    this.setState({
      MoviesArr:data
    },(err)=>{
      console.log(err)
    })
    //console.log(data);
    
  }
  
   
handleChange=(e)=>{

    e.preventDefault();
    const {textEnter}=this.state
    this.FilterData(textEnter);
    
   
    }
   ClickMore=(data)=>{
    console.log(data);
    window.localStorage.setItem('ID',data);
     this.props.history.push('/MoviesList');
    //console.log(idmkey);
   } 
   
 paginate = pageNumber => {
    
   //console.log(pageNumber)
 this.setState({
    currentPage:pageNumber
  
})

 }
/*
indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
currentPosts = this.state.MoviesArr.slice(indexOfFirstPost, indexOfLastPost)
*/
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const  indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
     const currentPosts = this.state.MoviesArr.slice(indexOfFirstPost,indexOfLastPost)
    console.log(this.state);
 const {MoviesArr}= this.state;
    return (
 <>
 
                 <Nav/>
             <div className="col 12">
               
               <h3 className="text-center">Search For Any Movie</h3>
              <form  onSubmit={this.handleChange}>
              <input type="text" 
                   className="form-control"
                    name="textEnter" 
                    value={this.state.textEnter}
                    onChange={this.onChange}
                     placeholder="Search Movies..."/>
        
              </form>
             </div>   

        <div className="container mt-5 sm">
            <div className="row" id="person-row">
            {currentPosts.map((MOVIES,INDEXS)=>{
                return(
                  <div key={INDEXS}className="card " style={{width: '15rem'}}>
                    <img src={MOVIES.Poster}  className="card-img-top" alt="..."/>
                  <div className="card-body">
                <h5 className="card-title">{MOVIES.Title}</h5>
                <p className="card-text">{MOVIES.Year}</p>
                    <a href="#" onClick={()=>this.ClickMore(MOVIES.imdbID)} className="btn btn-primary">Details</a>
                  </div>
        </div>
       
         
        )
     })} 
     
    </div>
  </div>
   <Pagination
        postsPerPage={this.state.postsPerPage}
        totalPosts={MoviesDefaultData.length}
        paginate={this.paginate}
      />
</>
    );
  }
}

export default Dashboard ;
