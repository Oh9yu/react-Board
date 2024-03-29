import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateMainCategory from './CategoryFuctions/CreateMainCategory';
import CreateSubCategory from './CategoryFuctions/CreateSubCategory';
import EditMainCategory from './CategoryFuctions/EditMainCategory';
import { API } from '../../../config/config';
import DeleteMainCategory from './CategoryFuctions/DeleteMainCategory';
import EditSubCategory from './CategoryFuctions/EditSubCategory';
import DeleteSubCategory from './CategoryFuctions/DeleteSubCategory';

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API.category}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Container>
      <Section>
        <CreateMainCategory />
        <EditMainCategory data={data} />
        <DeleteMainCategory data={data} />
      </Section>
      <Section>
        <CreateSubCategory data={data} />
        <EditSubCategory data={data} />
        <DeleteSubCategory data={data} />
      </Section>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 800px;
  border: 2px solid #738cd3;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;
