import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFort from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

const data = [
    {name: 'Raffaello Santi', salary: 1200},
    {name: 'Michelangelo Simoni', salary: 3000},
    {name: 'Leonardo da Vinci', salary: 1700},
    {name: 'Donato Bardi', salary: 4500},
]

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddFort/>
        </div>
    );
}

export default App;