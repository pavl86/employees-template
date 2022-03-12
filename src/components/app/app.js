import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFort from '../employees-add-form/employees-add-form';

import './app.css';

// let totalEmployees = 5;
// let totalBonuses = 3;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Raffaello Santi', salary: 1200, increase: false, rise: false, id: 1},
                {name: 'Michelangelo Simoni', salary: 3000, increase: true, rise: true, id: 2},
                {name: 'Leonardo da Vinci', salary: 1700, increase: false, rise: false, id: 3},
                {name: 'Donato Bardi', salary: 4500, increase: false, rise: false, id: 4}
            ]
        }
        this.maxId = 5;
    }

    addItem = (name, salary) => {
        const newItem ={
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr =[...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(e => e.id !== id)
            }
        })
    }

    onToggleIncrease = (id) => {        
        this.setState(({data}) => ({
            data: data.map(item => {
              if (item.id === id) {
                  return {...item, increase: !item.increase}
              } 
              return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
              if (item.id === id) {
                  return {...item, rise: !item.rise}
              } 
              return item;
            })
        }))
    }

    render() {
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo emploees={emploees} increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddFort 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;