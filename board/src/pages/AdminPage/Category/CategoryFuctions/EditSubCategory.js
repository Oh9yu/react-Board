import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { API } from '../../../../config/config';
import getToken from '../../../../utils/getToken';

const EditSubCategory = ({ data }) => {
  const [subCat, setSubCat] = useState([]);
  const token = getToken('TOKEN');
  const [options, setOptions] = useState('');
  const [subOptions, setSubOptions] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch(`${API.category}/sub?mainCatId=${options}`)
      .then(res => res.json())
      .then(data => setSubCat(data));
  }, [options]);

  const selectChange = e => {
    setOptions(e.target.value);
  };
  const buttonHandler = () => {
    fetch(`${API.category}/sub/admin`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        newSubCatName: inputValue,
        subCatId: subOptions,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message.includes('already exists')) {
          alert(res.message);
        } else alert(res.message);
      });
    setInputValue('');
  };

  return (
    <Container>
      <Title>Edit Sub Category</Title>
      <Section>
        <Select value={options} onChange={selectChange}>
          {data?.map(e => {
            return (
              <Option key={e.mainCatId} value={e.mainCatId}>
                {e.mainCatName}
              </Option>
            );
          })}
        </Select>
        <Select
          value={subOptions}
          onChange={e => {
            setSubOptions(e.target.value);
          }}
        >
          {subCat?.map(e => {
            return (
              <Option key={e.subCatId} value={e.subCatId}>
                {e.subCatName}
              </Option>
            );
          })}
        </Select>
      </Section>
      <Section>
        <Input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
          placeholder="Sub Category Name"
        />
        <Button name="Edit" onClick={buttonHandler} />
      </Section>
    </Container>
  );
};

export default EditSubCategory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 300px;
  height: 150px;
  border: 2px solid #9ab2eb;
  padding: 10px;
  border-radius: 5px;
`;

const Title = styled.p`
  color: #555;
  font-size: 18px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const Input = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 5px;
  padding-left: 5px;
  border: 2px solid #c9d9f9;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #7594dd;
  }
`;

const Select = styled.select`
  margin-top: 10px;
  width: 100px;
  height: 25px;
`;

const Option = styled.option``;
