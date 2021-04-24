import React from 'react';
import axios from 'axios';

interface Props {
  list: Array<{ id: string; name: string }>;
}

const Movie = ({ list }: Props) =>
  list.map((item) => <div key={item.id}>{item.name}</div>);

export async function getStaticProps() {
  const { data } = await axios.get(
    'http://rap2api.taobao.org/app/mock/282198/name'
  );

  return {
    props: {
      list: data.list,
    },
  };
}

export default Movie;
