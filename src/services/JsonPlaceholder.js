class JsonPlaceholder 
{
  axios
  baseUrl
  baseUrlTodos

  constructor(axios) {
    this.axios = axios
    this.baseUrl = 'https://jsonplaceholder.typicode.com/users/'
    this.baseUrlTodos = 'https://jsonplaceholder.typicode.com/todos?userId='
  }

  getUsers() {
    return this.axios.get(this.baseUrl);
  }
}

export default JsonPlaceholder