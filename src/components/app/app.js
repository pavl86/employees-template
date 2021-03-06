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
                {name: 'Raffaello Santi', salary: 1200, increase: false, rise: true, id: 1},
                {name: 'Michelangelo Simoni', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Leonardo da Vinci', salary: 1700, increase: true, rise: false, id: 3},
                {name: 'Donato Bardi', salary: 4500, increase: false, rise: true, id: 4}
            ],
            term: '',
            filter: 'all'
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
            if (name.length >= 3 && salary > 200) {
                return {
                    data: newArr
                }
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

    onToggleProp = (id, prop) => {        
        this.setState(({data}) => ({
            data: data.map(item => {
              if (item.id === id) {
                  return {...item, [prop]: !item[prop]}
              } 
              return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    salaryFilter =(items, salary) => {
        if (salary < 1000) {
            return items;
        }

        return items.filter(item => {
            return item.salary > 1000
        })
    }

    riseFilter =(items, increase) => {
        if (!increase) {
            return items;
        }

        return items.filter(item => {
            return item.increase = true
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo emploees={emploees} increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddFort 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;