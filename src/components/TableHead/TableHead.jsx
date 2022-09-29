import React from 'react';

function TableHead({ titles }) {
   return (
      <thead className='table__head'>
            <tr className='table__subtitle'>
               <td>{titles[1]}</td>
               <td>{titles[2]}</td>
               <td>{titles[3]}</td>
            </tr>
         </thead>
   );
}

export default TableHead;