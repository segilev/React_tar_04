import React from 'react';

import RouteButton from './RouteButton';




// const personFromDB = [

//   {id : 0, name : "Dizza Beimal", gender: "female", age: 55, height: 162, location: "Michmoret",
//     hobbies: ["Ceramics", "Pilatis"],
//     image:"images/dizza.jpg",
//     premium : true
//   },
//   {id : 1, name : "Benny Bornfeld", gender: "male", age: 53, height: 180, location: "Ein Sarid",
//   image:"images/benny.jpg"
//   },
//   {id : 1, name : "David Ben Guryon", gender: "male", age: 65, height: 165, location: "Miztpe Ramon",
//   hobbies: ["Stand on the head", "Karate"],
//   image:"images/DAVID.jpg", premium : true
//   },
//   {id : 1, name : "Moshe Dayan", gender: "male", age: 75, height: 170, location: "Tel Aviv",
//   image:"images/MOSHE.jpg"
//   },
//   {id : 1, name : "Miri Regev", gender: "female", age: 50, height: 162, location: "Tel Aviv",
//   image:"images/MIRI.jpeg"
//   },
//   {id : 1, name : "Netta Alchamister", gender: "female", age: 25, height: 171, location: "Tel Aviv",
//   hobbies: ["Shooping", "Yoga"],
//   image:"images/NETA.jpg", premium : true
//   },
//   {id : 1, name : "Netta Toy", gender: "female", age: 28, height: 166, location: "Beer Sheva",
//   image:"images/NETTOY.jpg"
//   },
//   {id : 1, name : "Julia Roberts", gender: "female", age: 55, height: 168, location: "Holywood",
//   hobbies: ["Singing", "Walk on the beach"],
//   image:"images/julia.jpg", premium : true
//   }
// ]
class Show extends React.Component{
    constructor(props){
      super(props);   
      
      this.NextPic=this.NextPic.bind(this);
      this.state = {myIndex:0} 
    }

    NextPic(s) { 
     
      let size =s;
      let p = this.state.myIndex;
    if(p<s-1){
      {this.setState({myIndex:p+1});}
    }
    else{
      {this.setState({myIndex:0});}
    }
      
    }

      

    render(){
      var g=this.props.location.data.gender;
      var mi=parseInt(this.props.location.data.min);
      var ma=parseInt(this.props.location.data.max);
      let Matcharr = this.props.location.data2.filter((ent) => ent.Gender==g && ent.Age>=mi && ent.Age<=ma); 
      if(Matcharr.length==0){
        alert('No Matches Persons, please try again!');
        window.location = '/';
      
      }
     let s=Matcharr.length;
      return(
        
       <div>
       <div id='header'>
       <RouteButton  value="Back" pathname="/" />
       </div>
       
       
        <div>
           
          <h1>{Matcharr[this.state.myIndex].Name } </h1>
        <div><img className= 'img' src={Matcharr[this.state.myIndex].Image}></img></div>
        </div>
        
      

         <div id="ne"><img id='n'  onClick={() => this.NextPic(s)}  src='images/next.png'></img></div>
         <div id="lo"><img id='l'  onClick={() => this.NextPic(s)}  src='images/love-button.png'></img></div>
        <p>Age: {Matcharr[this.state.myIndex].Age} </p> 
        <p>Height: {Matcharr[this.state.myIndex].Height} </p> 
        <p>Location: {Matcharr[this.state.myIndex].Address} </p> 
       {Matcharr[this.state.myIndex].Hobbies && <p>Hobbies: {Matcharr[this.state.myIndex].Hobbies.map((hob)=>{
      
         return hob +", " })}  </p> }
       
        
        </div>
      
      );
    }
  }
  export default Show;