export default function toast (obj){
  wx.showToast(Object.assign({},obj,{
    icon:'none'
  }))
}
