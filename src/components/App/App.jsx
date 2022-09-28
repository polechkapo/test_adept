import { useSelector } from "react-redux";
import Table from "../Table/Table";
import TableContent from "../TableContent/TableContent";
import TableHead from "../TableHead/TableHead";

function App() {
  const companies = useSelector(state => state.companiesSlice.companies);
  const employees = useSelector(state => state.employeesSlice.currentEmployees);
  return (
    <div className="App">
      <Table>
        <TableHead titles={['Компании', 'Название', 'Сотрудники', 'Aдрес', 'companies', 1]} />
        <TableContent companies={companies} />
      </Table>
      {employees.length > 0 &&
        <Table>
          <TableHead titles={['Сотрудники', 'Фамилия', 'Имя', 'Должность', 'employees', 2]} />
          <TableContent employees={employees} />
        </Table>
      }
    </div>
  );
}

export default App;
