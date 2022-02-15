import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = {
    element:[],
    cle: 0,
    search: [{craft: "ISS", name: "Mark Vande Hei"}, {craft: "ISS", name: "Pyotr Dubrov"}, {craft: "ISS", name: "Anton Shkaplerov"}, {craft: "Shenzhou 13", name: "Zhai Zhigang"}, {craft: "Shenzhou 13", name: "Wang Yaping"}, {craft: "Shenzhou 13", name: "Ye Guangfu"}, {craft: "ISS", name: "Raja Chari"}, {craft: "ISS", name: "Tom Marshburn"}, {craft: "ISS", name: "Kayla Barron"}, {craft: "ISS", name: "Matthias Maurer"}],
    tab: [{craft: "ISS", name: "Mark Vande Hei"}, {craft: "ISS", name: "Pyotr Dubrov"}, {craft: "ISS", name: "Anton Shkaplerov"}, {craft: "Shenzhou 13", name: "Zhai Zhigang"}, {craft: "Shenzhou 13", name: "Wang Yaping"}, {craft: "Shenzhou 13", name: "Ye Guangfu"}, {craft: "ISS", name: "Raja Chari"}, {craft: "ISS", name: "Tom Marshburn"}, {craft: "ISS", name: "Kayla Barron"}, {craft: "ISS", name: "Matthias Maurer"}]
  }
  handleDropDown = event => {
    let nom = event.target.value;
    let elm = [];
    const {tab} = this.state;
    tab.map(item => {
      if(item.name.search(nom) >= 0) {
        elm.push(item);
      }
    })
    this.setState({search:elm});
    setTimeout(function() {
      document.getElementById("myDropdown").classList.toggle("show");
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    }, 10);

    
  }

  handleClick(elm) {
    const {element, cle} = this.state;
    element.push({titre:elm, key:cle+1})
    this.setState({cle: cle+1});
    this.setState({element});
    document.getElementById("input").value = "";
  }

  handleDelete(elm) {
    const {element} = this.state;
    let tri = element.filter((item)=> item.titre !== elm);
    this.setState({element:tri});
  }

  render() {
    const {element, search} = this.state;
    let i = 0;
    return (
      <div className="App">
        <div className='elm'>
          {element.map(item=>
            <button key={item.key} type="button" className="btn btn-light">
              {item.titre} <span onClick={() => this.handleDelete(item.titre)} class="badge badge-light">X</span>
            </button>
            )}
          <div className="dropdown">
            <input type="text" id='input' placeholder='+ add tag' onKeyUp={this.handleDropDown}/>
            <div id="myDropdown" className="dropdown-content">
              {search.map(item => 
                <a key={item.name} onClick={() => this.handleClick(item.name)}>{item.name}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
