import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { VuetifyCharField } from '@/fields/VuetifyCharField'
import { InputField } from 'vue-service-model'

const localVue = createLocalVue()

describe('VuetifyCharField', () => {
  let vuetify: typeof Vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const field = new VuetifyCharField({
    label: 'VuetifyCharField'
  }, { value: 'VuetifyCharField' })

  it('should render disabled input field', async () => {
    const wrapper = mount(InputField, {
      localVue,
      vuetify,
      propsData: {
        field,
        disabled: true
      }
    })

    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
