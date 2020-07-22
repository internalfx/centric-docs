
const path = require('path')

module.exports = {
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  plugins: [
    'plugins/fontAwesomeSolid.js',
    'plugins/startup.js'
  ],
  vuetify: {
    defaultAssets: false,
    optionsPath: path.join(__dirname, 'vuetify.options.js')
  }
}
