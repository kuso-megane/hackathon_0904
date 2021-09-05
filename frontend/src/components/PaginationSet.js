import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationSet = ({ currentPage, totalPage, onClickEvent }) => {

  const numVisibleNearbyPages = 2;

  // ページネーションに表示するページ番号の集合
  let visiblePages = new Set();

  for (let i = 1; i <= numVisibleNearbyPages; i++) {
    if (1 <= i && i <= totalPage) {
      visiblePages.add(i);
    }
  }
  for (let i = totalPage; i > totalPage - numVisibleNearbyPages; i--) {
    if (1 <= i && i <= totalPage) {
      visiblePages.add(i);
    }
  }
  for (let i = currentPage - numVisibleNearbyPages; i <= currentPage + numVisibleNearbyPages; i++) {
    if (1 <= i && i <= totalPage) {
      visiblePages.add(i);
    }
  }

  // 1 ページだけ飛ばすのに ... が表示されていたら不格好なので埋める
  if (currentPage - 3 === 3) {
    visiblePages.add(3);
  }

  if (currentPage + 3 === totalPage - 2) {
    visiblePages.add(totalPage - 2);
  }

  console.log(visiblePages);

  // array に変換してソートする
  const arrVisiblePages = [...visiblePages].sort((a, b) => a - b);

  console.log(arrVisiblePages);


  let prevPage = 0;
  const items = [];

  for (const p of arrVisiblePages) {
    // 2 個以上飛んでいたら ... を表示する
    if (prevPage + 2 <= p) {
      items.push(<Pagination.Ellipsis disabled />)
    }
    // 普通にボタンを追加
    items.push(
      <Pagination.Item
        key={p}
        active={p === currentPage}
        onClick={() => onClickEvent(p)}
      >
        {p}
      </Pagination.Item>
    );
    prevPage = p;
  }


  return (
    <Pagination className="justify-content-center my-5">
      <Pagination.First
        disabled={currentPage === 1}
        onClick={() => onClickEvent(1)}
      />
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onClickEvent(currentPage - 1)}
      />

      {items.map((e) => e)}
      
      <Pagination.Next
        disabled={currentPage === totalPage}
        onClick={() => onClickEvent(currentPage + 1)}
      />
      <Pagination.Last
        disabled={currentPage === totalPage}
        onClick={() => onClickEvent(totalPage)}
      />
    </Pagination>
  );
};

export default PaginationSet;