import { createAlova } from 'alova';
import AdapterUniapp from '@alova/adapter-uniapp';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const alovaInstance = createAlova({
    baseURL: BASE_URL,
    ...AdapterUniapp()
});

export const request = alovaInstance

// import { createAlova } from 'alova'
// import AdapterUniapp from '@alova/adapter-uniapp'
// import { ContentTypeEnum,RESPONSE } from '@/enums/httpEnum'
//
// const HEADER = {
//   'Content-Type': ContentTypeEnum.JSON,
//   'Accept': 'application/json, text/plain, */*',
// }
//
// /**
//  * alova 请求实例
//  * @link https://github.com/alovajs/alova
//  */
// const BASE_URL = import.meta.env.VITE_APP_BASE_URL
//
// const alovaInstance = createAlova({
//   baseURL: BASE_URL,
//   ...AdapterUniapp(),
//   timeout: 5000,
//   beforeRequest: (method) => {
//     method.config.headers = Object.assign(method.config.headers, HEADER);
//   },
//   responsed: {
//       /**
//        * 请求成功的拦截器
//        * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
//        * @param response
//        * @param method
//        */
//       onSuccess: async (response, method) => {
//           const { config } = method;
//           const { enableDownload, enableUpload } = config;
//           // @ts-ignore
//           const { statusCode, data: rawData } = response;
//           const { code, message, data } = rawData as RESPONSE;
//           if (statusCode === 200) {
//               if (enableDownload) {
//                   // 下载处理
//                   return rawData;
//               }
//               if (enableUpload) {
//                   // 上传处理
//                   return rawData;
//               }
//               if (code === ResultEnum.SUCCESS) {
//                   return data as any;
//               }
//           }
//           message && Toast(message);
//           return Promise.reject(rawData);
//       },
//
//       /**
//        * 请求失败的拦截器，请求错误时将会进入该拦截器。
//        * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
//        * @param err
//        * @param method
//        */
//       onError: (err, method) => {
//           // error('Request Error!');
//           return Promise.reject({ err, method });
//       },
//   },
// })
//
// export const request = alovaInstance
