import React, { Component } from 'react';
import './App.css';
import Box from "./Box"
import Navbar from "./Navbar"


 const CardState = {
      HIDING:0,
      SHOWING:1,
      MATCHED:2
    }
  class App extends Component {
  

  constructor(props){
    super(props);
   
    const boxes = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
      ];
    
      
     
      this.state = {boxes: this.shuffle(boxes)};
  }
  
 shuffle = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );
  
  handleClick = (id) =>{
    const boxes = [...this.state.boxes];
    const foundBox = boxes.find(x => x.id === id);
     if(foundBox.cardState<1){
        foundBox.cardState++;
      }
      this.setState({boxes})
    const clicked = boxes.filter((x)=>x.cardState===1)
    if(clicked.length===2){
      console.log(clicked.every((x)=>x.backgroundColor === clicked[0].backgroundColor))
      if(clicked.every((x)=>x.backgroundColor === clicked[0].backgroundColor)){
           clicked.map(x=>(
             x.cardState++
           ))
      }else{
        setTimeout(()=>{
          boxes.map(x => (x.cardState === 1 ? x.cardState = 0 : null));
          this.setState({boxes})
        },300)
        
      }
    }
    const matched = boxes.filter((x)=>x.cardState===2);
    if(matched.length===boxes.length){
      alert("WYGRAŁEŚ!")
    }
    console.log(boxes);
   
  }
  
  handleNewGame = () =>{
    let boxes = [...this.state.boxes];
    boxes.map((x)=>(x.cardState=0));
    boxes = this.shuffle(boxes);
    this.setState({boxes});
  }
  
  
  render() {
    const boxes = this.state.boxes.map((box, index)=>(
      <Box 
      key={box.id} 
      showing={box.cardState !== 0} 
      backgroundColor = {box.backgroundColor}
      onClick={ () => this.handleClick(box.id)}/>
      ));
    return (
     <div className="App">
        <Navbar handleNewGame={this.handleNewGame}/>
        <div className="board">
          {boxes}
        </div>
      </div>
    );
  }
}

export default App;
