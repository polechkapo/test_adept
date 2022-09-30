import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   companies: [
      { id: 1, name: 'Инград', people: 12, address: '813864, Оренбургская область, город Сергиев Посад, въезд Балканская, 20', status: false },
      { id: 2, name: 'Русагро', people: 50, address: '794556, Магаданская область, город Ступино, ул. Славы, 11', status: false },
      { id: 3, name: 'Адамас', people: 30, address: '114271, Пензенская область, город Озёры, бульвар Гоголя, 25', status: false },
      { id: 4, name: 'Светофор', people: 100, address: '246119, Архангельская область, город Павловский Посад, пр. Гагарина, 23', status: false },
      { id: 5, name: 'Велесстрой', people: 90, address: '902099, Орловская область, город Талдом, пр. Бухарестская, 78', status: false },
   ],
   titles: ['Компании', 'Название', 'Сотрудники', 'Aдрес', 'companies', 1, 'компанию']
};

const companiesSlice = createSlice({
   name: 'companies',
   initialState,
   reducers: {
      changeCompanies: (state, action) => {
         if (action.payload.id) { state.companies.map((el => el.id === +action.payload.id && (el.status = !el.status))) }
         else {
            if (action.payload.checked) {
               state.companies = state.companies.map(el => ({ ...el, status: true }))
            } else {
               state.companies = state.companies.map(el => ({ ...el, status: false }))
            }
         }
      },
      deleteCompany: (state, action) => {
         state.companies = state.companies.filter(el => el.id !== +action.payload);
      },
      editCompany: (state, action) => {
         state.companies = state.companies.map((el) => el.id === +action.payload.id ? { ...el, name: action.payload.companyName, address: action.payload.companyAddress } : el)
      },
      addCompany: (state, action) => {
         state.companies = [...state.companies,{id:(state.companies.length + 1), name: action.payload.name, people: 0, address: action.payload.address, status: false}]
      }
   },
   extraReducers: () => {
   },
});

export const { changeCompanies } = companiesSlice.actions;
export const { deleteCompany } = companiesSlice.actions;
export const { editCompany } = companiesSlice.actions;
export const { addCompany } = companiesSlice.actions;

export default companiesSlice.reducer;