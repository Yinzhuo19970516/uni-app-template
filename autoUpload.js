const path = require('node:path')
const ci = require('miniprogram-ci')
const mainfest = require('./src/manifest.json')

async function upload() {
  const project = new ci.Project({
    appid: mainfest['mp-weixin'].appid, // appid
    type: 'miniProgram',
    projectPath: path.resolve(__dirname, './dist/build/mp-weixin'), // 项目路径
    privateKeyPath: path.resolve(__dirname, `./private.${mainfest['mp-weixin'].appid}.key`), // 小程序后台的上传密匙
    ignores: ['node_modules/**/*'],
  })

  await ci.upload({
    project,
    version: mainfest.versionName,
    desc: mainfest.description,
    setting: mainfest['mp-weixin'].setting,
  }).then((res) => {
    console.log(res)
    console.log(`上传成功，appId==${mainfest['mp-weixin'].appid},版本号==${mainfest.versionName}`)
  }).catch((error) => {
    console.log(`上传失败，appId==${mainfest['mp-weixin'].appid},版本号==${mainfest.versionName}`)
    throw error
  })
}

upload()
