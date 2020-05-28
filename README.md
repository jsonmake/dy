
- 环境安装
	1. `create-react-app my_cnode` 创建项目
	2. `cd my_cnode` 进入目录	
	3. `npm i redux -S` 安装redux
	4. `npm i react-redux -S` 安装redux
	5. `npm i redux-thunk -S` 安装中间件
	6. `npm i react-router-dom -S` 安装react路由
	7. `npm i axios -S` 安装axios
	8. `npm i antd -S` 安装antd
	9. 修改配置环境，以适应 antd([官网参考](https://ant.design/docs/react/use-with-create-react-app-cn))
		- `npm i react-app-rewired -D` 
		- 修改package.json的启动配置
		`
			"scripts": {
			    "start": "react-app-rewired start",
			    "build": "react-app-rewired build",
			    "test": "react-app-rewired test --env=jsdom",
			    "eject": "react-scripts eject"
			  }
		`	
		- `npm i babel-plugin-import -D`
		- 项目根目录创建config-overrides.js
		`
		  const { injectBabelPlugin } = require('react-app-rewired');
		  module.exports = function override(config, env) {
		  	config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
		    return config;
		  };
		`
	
				
		
	
