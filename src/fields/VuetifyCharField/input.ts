import { CreateElement } from 'vue'
import { BaseInputFieldRender } from 'vue-service-model'
import { VTextField } from 'vuetify/lib'

export default BaseInputFieldRender.extend({
  methods: {
    renderField (h: CreateElement) {
      return h(VTextField, { ...this.renderData })
    }
  }
})
