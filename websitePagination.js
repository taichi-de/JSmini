function websitePagination(urls, pageSize, page) {
  //ここから書きましょう
  let urlMyPage = [];

  for (let i = pageSize * (page - 1); i < pageSize * page; i++) {
    if (i < urls.length) urlMyPage.push(urls[i]);
  }

  return urlMyPage;
}
