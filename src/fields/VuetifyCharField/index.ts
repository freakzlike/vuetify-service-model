import { CharField } from 'vue-service-model/lib/fields/CharField'
import { InputProps } from 'vue-service-model/lib/types'

export class VuetifyCharField extends CharField {
  async prepareInputRender (inputProps: InputProps, renderProps?: object | null): Promise<any> {
    const [value, label] = await Promise.all([this.value, this.label])

    return {
      props: {
        value: value,
        label: label,
        disabled: inputProps.disabled,
        readonly: inputProps.readonly,
        ...(renderProps || {})
      },
      on: {
        input: (inputValue: any) => (this.value = inputValue)
      }
    }
  }

  get inputComponent () {
    return import('./input')
  }
}
