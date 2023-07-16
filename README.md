<div align="center">
  <h1>The CAT Accountant 🐱</h1>
  <img src="https://github.com/deka27/gitresources/blob/main/images/product.jpg" alt="Logo">
  <h3>This is an expense tracker application made with MERN stack</h3>
</div>

###  

Client includes all front end content & Server includes all backend component.
Please make sure your environment variables are correct & available.

<div align="center">
  <img src="https://github.com/deka27/gitresources/blob/main/images/login.jpg" alt="Logo">
</div>

#  

`Libraries that have been used`

Client(FrontEnd) | Server(BackEnd) |
------------- |------------- |
Axios  | mongoose |
moment | express |
react-icons | concurrently |
cors | dotenv |
antd | jsonwebtoken |
tailwind | bcrypt |
react-hot-toast | morgan |
redux | nodemon |
webvitals | validator |

## To run the app
1. Clone the repository to local
2. If you are working in VS code, split the terminal (hopefully you are in the working directory). If you are working with terminal(mac) or cmd(windows), you will have to run the next steps individually in the respective folders. (just work in VS code, life is much simpler 😼) 
3. Change directory to client and run `npm i` or `npm install` (This will install all dependencies marked in the package.json)
4. Change directory to server and run `npm i` or `npm install` (This will install all dependencies marked in the package.json)
5. In Client, run `npm start`
6. In Server, create environment variables in `.env`

   You should take make sure have three environment variables
   * MONGO_URI (Use connect from MongoDB Atlas to get the URL and don't forget to include password) 
   * PORT (use like 8080 or any other)
   * SECRET_KEY (This will be used for signature in JWT)
     
7. In Server, run `npm run server`
8. Alternatively you can run command `npm run dev` in server to run client and server concurrently.
9. Also make sure the proxy in client matches the port for server. (Very important)
10. Enjoy the App. 😽

P.S. Take care of tailwind by reading the docs at their official website

## Known Issues

1. If your proxy is not able to connect to backend server, you should delete the `package-lock.json` and `node_modules` in client and run `npm i` or `npm install` again. Before doing this, kill all the terminals and reset everything. This issue seems to be because of cache.

## Contributions
