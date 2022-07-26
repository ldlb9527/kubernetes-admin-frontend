import axios from 'axios'
axios.default.baseUrl = 'localhost:10010'

import config from '../../config'
import process from "shelljs";

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      header: {}
    }
    return config;
  }
  interceptors (instance) {
    instance.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
      });
    instance.interceptors.response.use(function (response) {
      return response;
    },function (error) {
      return Promise.reject(error);
    })
  }

  request(options) {
    console.log(options)
    const instance = axios.create()
    options = {...this.getInsideConfig(),...options}
    this.interceptors(instance)
    console.log(options)
    return instance(options)
  }


}
export default new HttpRequest(baseUrl)
