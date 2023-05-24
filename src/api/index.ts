import { request } from '@/utils/request'

export function getInfoConfig(params) {
  return request.Post('/h5/common/get_info_config', params)
}
