import React from 'react';
import axios from 'axios';

interface Props {
  name: string;
  detail: string;
}

const Post = ({ name, detail }: Props) => (
  <>
    <div>{name}</div>
    <div>{detail}</div>
  </>
);

export async function getStaticPaths() {
  const {
    data: { data },
  } = await axios.get('http://rap2api.taobao.org/app/mock/282198/movies');

  const paths = data.map((post: { id: string }) => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const { data } = await axios.get(
    'http://rap2api.taobao.org/app/mock/282198/movies/detail'
  );

  return {
    props: {
      ...data,
    },
  };
}

export default Post;
