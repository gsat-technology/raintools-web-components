import { renderComponent, expect } from '../test_helper'
import VerificationCodeForm from '../../src/components/VerificationCodeForm'

describe('VerificationCodeForm', () => {
  describe('form', () => {
    let component
    let verifyCode = null

    beforeEach(() => {
      component = renderComponent(VerificationCodeForm, {
        verifyButtonClick: code => {
          verifyCode = code
        },
        length: 6,
        buttonLabel: 'verify'
      })
    })

    it('it has 6 code fields', () => {
      expect(component.find('input').length).to.equal(6)
    })

    it('it has a button', () => {
      expect(component.find('button').length).to.exist
    })

    it('returns code in handler', () => {
      component.find('input#0').simulate('change', '0')
      component.find('input#1').simulate('change', '1')
      component.find('input#2').simulate('change', '2')
      component.find('input#3').simulate('change', '3')
      component.find('input#4').simulate('change', '4')
      component.find('input#5').simulate('change', '5')
      component.find('button').simulate('click')
      expect(verifyCode).to.equal('012345')
    })

    it('button disabled when code not (fully) entered', () => {
      component.find('input#0').simulate('change', '0')
      component.find('input#1').simulate('change', '1')
      component.find('button').simulate('click')
      expect(component.find('button[disabled]').length).to.equal(1)
    })

    it('button enabled when code entered', () => {
      component.find('input#0').simulate('change', '0')
      component.find('input#1').simulate('change', '1')
      component.find('input#2').simulate('change', '2')
      component.find('input#3').simulate('change', '3')
      component.find('input#4').simulate('change', '4')
      component.find('input#5').simulate('change', '5')
      expect(component.find('button[disabled]').length).to.equal(0)
    })
  })
})
