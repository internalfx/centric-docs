
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const fasIcon = function (name) {
  return {
    component: FontAwesomeIcon,
    props: {
      icon: ['fas', name]
    }
  }
}

export default function ({ app }) {
  const config = {
    icons: {
      iconfont: 'faSvg',
      values: {
        home: fasIcon('home')
      }
    },
    theme: {
      themes: {
        light: {
          primary: '#1D4F90',
          secondary: '#669EBA',
          accent: '#F15922'
        }
      },
      options: {
        customProperties: true
      }
    }
  }

  return config
}
