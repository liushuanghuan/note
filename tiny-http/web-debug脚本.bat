::修改服务器根目录地址,=两边不可以使用空格。
@Set root=./

::server:http.js author:liwen
@call start tiny-http 8100 %root%
::延迟浏览器打开速度，减少404的情况。
@ping 127.0.0.1 -n 3 > nul
@call start http://127.0.0.1:8100

web-debug 8081