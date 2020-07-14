'use strict'
import { mount } from '@vue/test-utils'
import Error from '../src/knowledge/components/error'

describe('Componsnt:Error', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Error)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
