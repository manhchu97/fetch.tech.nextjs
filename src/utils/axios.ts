/* eslint-disable @typescript-eslint/no-explicit-any */
import { HOST_API } from '@/config/global'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
})

export const _getApi = (
  url: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> =>
  axiosInstance.get(url, options).then((response) => response.data)

export const _postApi = (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> =>
  axiosInstance.post(url, data, options).then((response) => response.data)

export const _putApi = (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> =>
  axiosInstance.put(url, data, options).then((response) => response.data)

export const _patchApi = (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> =>
  axiosInstance.patch(url, data, options).then((response) => response.data)

export const _deleteApi = (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance.delete(url).then((response) => response.data)

export const _uploadApi = (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> =>
  axiosInstance.post(url, data, options).then((response) => response.data)

export default axiosInstance
