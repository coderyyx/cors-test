This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
- npm run start ---> start frontEnd project
>Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- npm run devS ---> start server project


## CORS
### 一个 CORS 预检请求是用于检查服务器是否支持 CORS 即跨域资源共享。

- 它一般是用了以下几个 HTTP 请求首部的 OPTIONS 请求
>Access-Control-Request-Method 和 Access-Control-Request-Headers，以及一个 Origin 首部。
- 当有必要的时候，浏览器会自动发出一个预检请求；所以在正常情况下，前端开发者不需要自己去发这样的请求。

- request headers
```javascript
OPTIONS /resource/foo 
Access-Control-Request-Method: DELETE 
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

- reponse headers
```javascript
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

## preflight request
### 简单请求不会触发预检请求
- 使用下列方法之一：
1、GET
2、HEAD
3、POST

- Content-Type 的值仅限于下列三者之一：
1、text/plain
2、multipart/form-data
3、application/x-www-form-urlencoded



### 复杂请求触发预检请求
- 使用了下面任一 HTTP 方法：
1、PUT
2、DELETE
3、CONNECT
4、OPTIONS
5、TRACE
6、PATCH
- Content-Type 的值不属于下列之一:（application/json）
1、application/x-www-form-urlencoded
2、multipart/form-data
3、text/plain
- 请求中的XMLHttpRequestUpload 对象注册了任意多个事件监听器。
- 请求中使用了ReadableStream对象。




## 附带身份凭证的请求
- 客户端设置withCredentials = true
- 服务端的ACAO（access-control-allow-origin）字段不能是通配符 *，必须和request header的origin字段值相同(but only one is allowed)
- 服务器设置response header -->Access-Control-Allow-Credentials: true

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
