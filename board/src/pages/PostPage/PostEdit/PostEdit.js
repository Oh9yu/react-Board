import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config/config';
import getToken from '../../../utils/getToken';

const PostEdit = ({ title, contents, postId }) => {
  const token = getToken();
  const navigate = useNavigate('');

  const editHandler = () => {
    navigate('/editor', {
      state: { title: title, contents: contents, postId: postId },
    });
  };

  const deleteHandler = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      fetch(`${API.post}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({ postId: postId }),
      })
        .then(res => res.json())
        .then(res => alert(res.message))
        .then(navigate('/'));
    }
  };

  return (
    <Container>
      <Btn onClick={editHandler}>게시글 수정</Btn>
      <Btn onClick={deleteHandler}>게시글 삭제</Btn>
    </Container>
  );
};

export default PostEdit;

const Container = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin: 10px;
  padding: 5px;
  border: 2px solid #afc9ff;
  background-color: #fff;
  border-radius: 3px;
  &:hover {
    background-color: #afc9ff;
  }
`;
