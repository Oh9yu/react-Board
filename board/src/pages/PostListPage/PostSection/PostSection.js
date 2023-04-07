import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../config/config';
import PostList from '../../../components/PostList/PostList';
import PostHeader from './PostHeader/PostHeader';

const PostSection = ({ status }) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch(`${API.post}/list?subCategory=${status}`)
      .then(res => res.json())
      .then(data => setPostData(data));
  }, [status]);

  console.log(postData);
  return (
    <Container>
      <PostHeader
        title="제목"
        name="이름"
        views="조회수"
        likes="좋아요"
        createdAt="날짜"
      />
      {postData?.map(e => {
        return (
          <PostList
            key={e._id}
            id={e._id}
            title={e.title}
            name={e.name}
            views={e.views}
            likes={e.likes}
            createdAt={e.createdAt}
          />
        );
      })}
    </Container>
  );
};

export default PostSection;

const Container = styled.div`
  width: 800px;
  height: 600px;
`;