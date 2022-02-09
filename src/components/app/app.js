import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddFort from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

const data = [
    {name: 'Raffaello Santi', salary: 1200, increase: false, id: 1},
    {name: 'Michelangelo Simoni', salary: 3000, increase: true, id: 2},
    {name: 'Leonardo da Vinci', salary: 1700, increase: false, id: 3},
    {name: 'Donato Bardi', salary: 4500, increase: false, id: 4}
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