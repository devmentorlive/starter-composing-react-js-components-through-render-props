import React from "react";

export default function ListItem({ screencast }) {
  return (
    <div className='__dml_list_item'>
      <a
        href={`https://www.youtube.com/watch?v=${screencast.ext_id}`}
      >
        <img src={`/thumbs/${screencast.ext_id}.png`} width='100%' />
        <div>{screencast.title}</div>
      </a>
    </div>
  );
}
