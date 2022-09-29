import React from 'react';
import { useSelector } from "react-redux";
import Table from "../Table/Table";
import TableContent from "../TableContent/TableContent";
import TableHead from "../TableHead/TableHead";
import './page.scss'

function Page() {
   const companies = useSelector(state => state.companiesSlice.companies);
   const employees = useSelector(state => state.employeesSlice.currentEmployees);
   const titles1 = useSelector(state => state.companiesSlice.titles);
   const titles2 = useSelector(state => state.employeesSlice.titles);
   return (
      <div className='table'>
         <div className='table__container'>
         <Table className='table__content' titles={titles1}>
            <TableHead titles={titles1} />
            <TableContent companies={companies} />
         </Table>
         {employees.length > 0 &&
            <Table titles={titles2}>
               <TableHead titles={titles2} />
               <TableContent employees={employees} />
            </Table>
         }
      </div>
      </div>
   );
}

export default Page;