import debug from './debug'
export default function handleResponse(res){
  //处理响应成功的函数,这个地方现在暂时没有做处理，以后有自己服务器或者
  //api的话肯能就会用到了
  if(res.statusCode == 200){
    //请求成功
    return Object.assign({},res,{
      success:true,
    });
  }else if(res.statusCode == 404){
    return {
      data:'无法找到页面！',
      success:false
    }
  }
  return res;
}
