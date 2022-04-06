const postList = [
    {
      "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6
    },
    {
      "no": 2,
      "title": "두번째 게시글입니다.",
      "content": "두번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 5
    },
    {
      "no": 3,
      "title": "세번째 게시글입니다.",
      "content": "세번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 1
    },
  ];
  
  const getPostByNo = no => {
    const array = postList.filter(x => x.no === no);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    postList,
    getPostByNo
  };