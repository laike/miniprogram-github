//获取系统基本信息


export default function debug (msg){
  wx.getSystemInfo({
    success: function(res) {
      if(res.platform === 'devtools'){
        console.log(msg);
      }
    }
  })

}
