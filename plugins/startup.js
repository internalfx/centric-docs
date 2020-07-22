
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import _ from 'lodash'
import Vue from 'vue'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.get = _.get

_.mixin({ isPresent: _.negate(_.isEmpty) })

export default ({ app, env, store }, inject) => {

}
