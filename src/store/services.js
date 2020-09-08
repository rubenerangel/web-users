import Axios from 'axios'
import jsonPlace from '../services/JsonPlaceholder'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
  jsonPlace: new jsonPlace(Axios)
}
