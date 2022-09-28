import React from 'react';
import { useSelector } from "react-redux";
import Table from "../Table/Table";
import TableContent from "../TableContent/TableContent";
import TableHead from "../TableHead/TableHead";

function Page() {
   const companies = useSelector(state => state.companiesSlice.companies);
   const employees = useSelector(state => state.employeesSlice.currentEmployees);
   const titles1 = useSelector(state => state.companiesSlice.titles);
   const titles2 = useSelector(state => state.employeesSlice.titles);
   return (
      <>
         <Table>
            <TableHead titles={titles1} />
            <TableContent companies={companies} />
         </Table>
         {employees.length > 0 &&
            <Table>
               <TableHead titles={titles2} />
               <TableContent employees={employees} />
            </Table>
         }
      </>
   );
}

export default Page;