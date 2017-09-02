export default {
	"server": {
		"protocol": "http",
		"host": "localhost:3000"
	},
	"facebook": {
		"key": process.env.FB_APP_ID,
		"secret": process.env.FB_APP_SECRET,
		"callback": "/success",
		"scope": [""]
	}
}