const path = require('path')
// ref: https://umijs.org/config/
export default {
	treeShaking: true,
	hash:true,
	// exportStatic: {
	// 	htmlSuffix: true,
    // 	dynamicRoot: true,
	// },
	plugins: [ 
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: false,
			dynamicImport: false,
			title: 'WordPress',
			dll: false,
			routes: {
				exclude: [        
					/components\//,
				],
			},
		}],
		// ['./src/plugins/testPlugin.js', {
		// 	// plugin config
		// }]
	],
	theme: "./src/config/theme-config.js",
	targets:{ie:10},
	mountElementId:"___wp_app",
	alias:{
		"@":path.resolve(__dirname,'/src')
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		'react-router-dom': 'ReactRouterDOM'
	},
	"proxy": {
		"/api": {
			"target": "http://192.168.1.250:5566/",
			"changeOrigin": true,
			"pathRewrite": { "^/" : "" }
		}
	}
}
