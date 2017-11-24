import { renderComponent, expect } from '../test_helper'
import LoginForm from '../../src/components/LoginForm'

describe('LoginForm', () => {

    let component

    beforeEach(() => {
        component = renderComponent(LoginForm)
    })

    it('it has two inputs', () => {
        expect(component.find('input').length).to.equal(2)
    })

    it('it has a button', () => {
        expect(component.find('button').length).to.exist
    })

    describe('entering some valid text', () => {
        beforeEach(() => {
            component.find('#username').simulate('change', 'my@email.com')
            component.find('#password').simulate('change', '1234')
        })
        
        it('username field shows entered text', () => {
            expect(component.find('#username')).to.have.value('my@email.com')
        })

        it('username field validates', () => {
            expect(component.find('div')).to.not.contain('invalid')
        })

        it('password field shows entered text', () => {
            expect(component.find('#password')).to.have.value('1234')
        })
    })
})