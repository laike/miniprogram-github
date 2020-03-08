/**
处理请求失败的状态码，信息提示
*/
import toast from './toast'
export default function handleError({statusCode,errMsg,message}){
  switch (statusCode) {
    case 404:
      toast({
        title:'请求的地址无法找到！'
      })
      break;
    case 401:
    toast({
      title:'请求的权限不够！'
    })
    break;
    case 304:
     toast({
      title:'请求的地址已经永久性转移了！',
    })
    break;
    case 100:
    toast({
      title:'请求超时！'
    })
    break;
    default:
    toast({
      title:errMsg ? errMsg : message
    })
    break;
  }
}
