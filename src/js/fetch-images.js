export default {
  APIKey: '18814496-71c3543716fd26683f05f95a8',
  serchQuery: '',
  page: 1,
  fetchImages() {
    const urlAPI = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchQuery}&page=${this.page}&per_page=12&key=${this.APIKey}`;

    return fetch(urlAPI)
      .then(res => res.json())
      .then(data => data.hits)
      .catch();
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
