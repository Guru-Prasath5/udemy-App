import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';


class App extends Component {
  state = {
    person : [
      {id:'qw1', name : 'Guru' , age : 25},
      {id:'qw2', name : 'Aishu' , age :89}
    ],
    clickEnable : true,
    showPerson: false,
  }
  clickHandler = (newname)=>{
    console.log("was clicked");
    console.log(this);
    this.setState({
      person : [
        {id:'qw1', name : newname , age : 25},
        {id:'qw2', name : 'Aishu' , age :89}
      ],
      clickEnable : this.state.clickEnable ? false : true ,
      
    })

  }
  changeHandler = (event , persIndex)=>{
    console.log("was clicked");
    const perswithindex = this.state.person.findIndex(p =>{
      return p.id === persIndex;
    } )
    console.log(perswithindex);
    const personss = {...this.state.person[perswithindex]};
    personss.name = event.target.value;
    console.log(personss);

    const person = [...this.state.person];
    person[perswithindex] = personss;
    console.log(person);
    this.setState({
      person : person,
      clickEnable : this.state.clickEnable ? false : true ,
    })
    console.log(this.state.person  );

  }
  deletePerson=(persIndex)=>{
    console.log("deleteclicked"+persIndex);
    //const delPerson = this.state.person.slice();
    const delPerson = [...this.state.person];
    delPerson.splice(persIndex,1);
    this.setState({person : delPerson});
  }
  toggleShowPerson=()=>{
    const perviousState = this.state.showPerson;
    this.setState({
      showPerson: !perviousState,
    })
  }
  render() {
    let persons =null;
    if(this.state.showPerson){
      persons=(
        <div >
          {this.state.person.map((pers,index)=>
          {
            return <Person key={pers.id} name={pers.name} age ={pers.age} 
            click={()=>this.deletePerson(index)} changed={(event)=>this.changeHandler(event, pers.id)}/>
          })}
      {/* <Person
        name={this.state.person[0].name}
        age ={this.state.person[0].age}
        changed = {this.changeHandler}>
        <font>and a good boy</font>
        </Person>

        <Person
        name={this.state.person[1].name}
        age = {this.state.person[1].age}
        clickok={this.clickHandler.bind(this,'Guru11')}>
        </Person> */}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hello</h1>
        <button className="button" onClick={this.toggleShowPerson}>showPerson</button>
        
        {persons}

        <button className="button" onClick={this.clickHandler.bind(this,'guru')}>click</button>
        <p  className={this.state.clickEnable ? "hide":"App"}>was clicked</p> 
      </div>
    );
  }
}

export default App;
