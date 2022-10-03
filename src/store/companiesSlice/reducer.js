import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [
    {
      id: 1,
      name: 'Инград',
      address:
        '813864, Оренбургская область, город Сергиев Посад, въезд Балканская, 20',
      status: false,
    },
    {
      id: 2,
      name: 'Русагро',
      address: '794556, Магаданская область, город Ступино, ул. Славы, 11',
      status: false,
    },
    {
      id: 3,
      name: 'Адамас',
      address: '114271, Пензенская область, город Озёры, бульвар Гоголя, 25',
      status: false,
    },
    {
      id: 4,
      name: 'Светофор',

      address:
        '246119, Архангельская область, город Павловский Посад, пр. Гагарина, 23',
      status: false,
    },
    {
      id: 5,
      name: 'Велесстрой',
      address: '902099, Орловская область, город Талдом, пр. Бухарестская, 78',
      status: false,
    },
  ],
  titles: [
    'Компании',
    'Название',
    'Сотрудники',
    'Aдрес',
    'companies',
    1,
    'компанию',
  ],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeCompanies: (state, action) => {
      if (action.payload.id) {
        state.companies.map(
          (company) => company.id === +action.payload.id && (company.status = !company.status)
        );
      } else {
        if (action.payload.checked) {
          state.companies = state.companies.map((company) => ({
            ...company,
            status: true,
          }));
        } else {
          state.companies = state.companies.map((company) => ({
            ...company,
            status: false,
          }));
        }
      }
    },
    deleteCompany: (state, action) => {
      if (+action.payload === 'number') {
        state.companies = state.companies.filter(
          (company) => company.id !== +action.payload
        );
      } else {
        state.companies = state.companies.filter((company) => company.status !== true);
      }
    },
    editCompany: (state, action) => {
      state.companies = state.companies.map((company) =>
        company.id === +action.payload.id
          ? {
              ...company,
              name: action.payload.companyName,
              address: action.payload.companyAddress,
            }
          : company
      );
    },
    addCompany: (state, action) => {
      state.companies = [
        ...state.companies,
        {
          id: new Date().valueOf(),
          name: action.payload.name,
          people: 0,
          address: action.payload.address,
          status: false,
        },
      ];
    },
  },
  extraReducers: () => {},
});

export const { changeCompanies, deleteCompany, editCompany, addCompany } = companiesSlice.actions;

export default companiesSlice.reducer;
