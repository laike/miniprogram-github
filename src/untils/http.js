/**
封装用于http请求的类,使用单例模式
*/

import wepy from '@wepy/core'
import eventHub from '../common/eventHub'
import handleResponse from './handleResponse'
import handleError from './handleError'
import debug from './debug'
import {BASE_URL} from '../consts/consts'
 class Http{
  static instance = null;
  constructor(){
    //这里进行部分初始化
  }
   get(url,data){
     return new Promise((resolve,reject)=>{
       wx.request({
         url:`${BASE_URL}/${url}`,
         data,
         method:'GET',
         success:(res)=>{
           resolve(handleResponse(res))
         },
         fail:(error)=>{
           //失败回调
           handleError(error)
           //打印错误信息
           debug(error)
           reject(error)
         }
       })
     })
  }
  post(url,data){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:`${BASE_URL}/${url}`,
        data,
        method:'POST',
        header:{
          'Content-Type':"application/x-www-form-urlencoded"
        },
        success:(res)=>{
          resolve(handleResponse(res))
        },
        fail:(error)=>{
          //失败回调
          handleError(error)
          //打印错误信息
          debug(error)
          reject(error)
        }
      })
    })
 }
 put(url,data){
   return new Promise((resolve,reject)=>{
     wx.request({
       url:`${BASE_URL}/${url}`,
       data,
       method:'PUT',
       success:(res)=>{
         resolve(handleResponse(res))
       },
       fail:(error)=>{
         //失败回调
         handleError(error)
         //打印错误信息
         debug(error)
         reject(error)
       }
     })
   })
}
delete(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
       url:`${BASE_URL}/${url}`,
      data,
      method:'DELETE',
      success:(res)=>{
        resolve(handleResponse(res))
      },
      fail:(error)=>{
        //失败回调
        handleError(error)
        //打印错误信息
        debug(error)
        reject(error)
      }
    })
  })
}
  static getInstance(){
    if(Http.instance instanceof Http){
      return Http.instance;
    }else{
      return Http.instance = new Http()
    }
  }
}

export default Http.getInstance()
