import React from "react";
import { useSelector } from "react-redux";
import Title from "../TitleTable/TitleTable";
import Body from "./Body/Body";
import Head from "../HeadTable/HeadTable";

function CompaniesTable(props) {
  const companies = useSelector((state) => state.companiesSlice.companies);

  const companyTitles = useSelector((state) => state.companiesSlice.titles);
  return (
    <Title className="table__content" titles={companyTitles}>
      <Head titles={companyTitles} tableType={companyTitles[4]} />
      <Body companies={companies} />
    </Title>
  );
}

export default CompaniesTable;
