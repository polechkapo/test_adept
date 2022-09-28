import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   companies: [
      { id: 1, name: 'Инград', people: 12, address: '813864, Оренбургская область, город Сергиев Посад, въезд Балканская, 20', status: false },
      { id: 2, name: 'Русагро', people: 50, address: '794556, Магаданская область, город Ступино, ул. Славы, 11', status: false },
      { id: 3, name: 'Адамас', people: 30, address: '114271, Пензенская область, город Озёры, бульвар Гоголя, 25', status: false },
      { id: 4, name: 'Светофор', people: 100, address: '246119, Архангельская область, город Павловский Посад, пр. Гагарина, 23', status: false },
      { id: 5, name: 'Велесстрой', people: 90, address: '902099, Орловская область, город Талдом, пр. Бухарестская, 78', status: false },
   ],
};

const companiesSlice = createSlice({
   name: 'companies',
   initialState,
   reducers: {
      changeCompanies: (state, action) => {
         if (action.payload) { state.companies.map((el => el.id === +action.payload ? el.status = !el.status : el.status = false)) }
         else { state.companies = state.companies.map(el => ({ ...el, status: !el.status })) }
      },
   },
   extraReducers: () => {
   },
});

export const { changeCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;