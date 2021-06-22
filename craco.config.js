const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                'primary-color': '#3a3b3a',
                'secondary-color':'purple',
                "link-color": "#6fb327",
                "success-color": "#0DD078",
            },
            javascriptEnabled: true,
          },
        },  
      },
    },
  ],
};