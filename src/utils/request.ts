import type { RequestParams, RequestResponse } from '@/types/response'
import { HideLoading, ShowLoading, Toast } from '@/utils/tips'

const defaultParams: RequestParams = {
  url: '',
  method: 'POST',
  isShowLoading: true,
  isThrowError: false,
  params: {},
  contentType: 'application/json',
}
let requestCount = 0

function addLoading() {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestCount++
  if (requestCount === 1)
    ShowLoading()
}

function cancelLoading() {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestCount--
  if (requestCount === 0)
    HideLoading()
}

export default async function (requestParams: RequestParams): Promise<RequestResponse | any> {
  requestParams = Object.assign(defaultParams, requestParams)
  if (requestParams.isShowLoading)
    addLoading()

  return new Promise((resolve, reject) => {
    uni.request({
      url: requestParams.url,
      header: {
        'Content-Type': requestParams.contentType || 'application/json',
      },
      data: requestParams.params,
      timeout: 30000,
      method: requestParams.method || 'POST',
      success(response) {
        const res = response.data as RequestResponse
        const code = Number(res.errcode) || 0
        res.code = code
        if (res.errcode === -4) {
          // 跳转登录
        }
        else if (res.errcode === 0) {
          resolve(res.data || res || {})
        }
        else {
          if (requestParams.isThrowError) {
            reject(res)
          }
          else {
            Toast(res && res.errstr)
            reject(res)
          }
        }
      },
      fail(err) {
        setTimeout(() => {
          Toast('网络不给力啊，请您检查一下网络再试试吧')
        }, 10)
        reject(err)
      },
      complete() {
        if (requestParams.isShowLoading)
          cancelLoading()
      },
    })
  })
}
