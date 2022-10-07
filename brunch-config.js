module.exports = {

  optimize: true, //* Set as default instead of using --production option
  
  paths: {
    public: 'docs', //* Usually public_html but docs is GitHub Pages source
    watched: ['src']
  },

  conventions: {
    assets: /src\/assets\//,
  },
  
  modules: {
    wrapper: false
  },

  files: {

    stylesheets: {
      joinTo: {
        'css/magicssian.min.css': [
          /^(?!node_modules|src\/css\/main_draft.css)/
        ],
        'css/main.min.css': [
          /^(?!src\/css\/magicssian_draft.css)/
        ]
      }
    },

    javascripts: {
      joinTo: {
        'js/main.min.js': [
          /^(?!node_modules|src\/plugins)/,
        ],
        'js/plugins.min.js': [
          /^(node_modules|src\/plugins)/,
        ]
      }
    },

  },

  plugins: {

    postcss: { 
      map: true,
      processors: [
        require('postcss-import')(),
        require('postcss-media-variables')(),
        require('postcss-css-variables')({
          preserve: false
        }),
        require('postcss-color-function')({
          preserveCustomProps: false
        }),
        require('postcss-media-variables')()
      ]
    },

    cleancss: {
      /* Ignored skip files from process
       * keep in mind that cleancss runs on files created by joinTo */
      //ignored: /[regex]/,
      //sourceMap: true,
      level: 2,
    },

    keyword: {
      /* By default keyword-brunch has these keywords:
       * {!version!}, {!name!}, {!date!}, {!timestamp!}
       * from package.json data.
       * Extra files to process which `filePattern` wouldn't match */
      filePattern: /\.(js|css|html|txt|xml|php)$/,
      extraFiles: [
        //'humans.txt', 
        //'index.html'
      ],
      map: {
        project_name: 'Magicssian',
        project_url: 'https://codeinalabmx.github.io/magicssian/',
        dv_name: '',
        dv_alias: 'A59327424',
        dv_agency: 'Codeinalab',
        dv_url: 'http://codeinalab.com',
        ds_agency: 'Codeinalab',
        ds_url: 'http://codeinalab.com',
        last_update: (new Date).toISOString().slice(0, 10)
       }
    }
    

  }


}