import request from '@/utils/request'

export function getInfoConfig(params) {
  return request({
    url: '/h5/common/get_info_config',
    method: 'GET',
    params,
    requestParams: true,
    isThrowError: true,
  })
}
