import { renderComponent, expect } from '../test_helper'
import UserForm from '../../src/components/UserForm'
import { usernameRe, passwordRe } from '../../src/regex/index'

describe('UserForm', () => {

    describe('w/ validation', () => {
        let component
        let clickResult = null
        
        beforeEach(() => {
            component = renderComponent(UserForm, {  
                usernameValidator: usernameRe, 
                passwordValidator: passwordRe,
                loginClick: (creds) => {
                    clickResult = creds
                }
            })
        })
    
        it('it has two inputs', () => {
            expect(component.find('input').length).to.equal(2)
        })
    
        it('username field shows entered text', () => {
            component.find('#username').simulate('change', 'my@email.com')
            expect(component.find('#username')).to.have.value('my@email.com')
        })
    
        it('password field shows entered text', () => {
            component.find('#password').simulate('change', '123')
            expect(component.find('#password')).to.have.value('123')
        })
    
        it('it has a button', () => {
            expect(component.find('button').length).to.exist
        })
    
        it('button can be clicked', () => {
            //
        })
    
        describe('enter invalid values', () => {
            
            beforeEach(() => {
                component.find('#username').simulate('change', 'bademail.@@')
                component.find('#username').simulate('blur')
                component.find('#password').simulate('change', 'bad pass')
                component.find('#password').simulate('blur')
            })
    
            it('username field is invalid', () => {
                const text = component.find('div').text()
                expect(text.indexOf('invalid')).to.not.equal(-1)
            })
    
            it('password field is invalid', () => {
                const text = component.find('div').text()
                expect(text.indexOf('invalid')).to.not.equal(-1)
            })
    
            it('button is disabled', () => {
                expect(component.find('button[disabled]').length).to.equal(1)
            })
        })
    
        describe('enter valid values', () => {
            
            beforeEach(() => {
                component.find('#username').simulate('change', 'good@email.com')
                component.find('#username').simulate('blur')
                component.find('#password').simulate('change', 'Abcdef1@')
                component.find('#password').simulate('blur')
            })
    
            it('username field is valid', () => {
                const text = component.find('div').text()
                expect(text.indexOf('invalid')).to.equal(-1)
            })
    
            it('password field is valid', () => {
                const text = component.find('div').text()
                expect(text.indexOf('invalid')).to.equal(-1)
            })
    
            it('button is enabled', () => {
                expect(component.find('button[disabled]').length).to.equal(0)
            })

            it('button click returns credentials', () => {
                component.find('button').simulate('click')
                expect(clickResult).to.deep.equal({
                    username: 'good@email.com',
                    password: 'Abcdef1@'
                })
            })
        })
    })

    describe('w/out validation', () => {
        let component
        
            beforeEach(() => {
                component = renderComponent(UserForm, {  
                    usernameValidator: usernameRe, 
                    passwordValidator: passwordRe,
                    loginClick: () => {}
                })
            })
        
            it('it has two inputs', () => {
                expect(component.find('input').length).to.equal(2)
            })
        
            it('username field shows entered text', () => {
                component.find('#username').simulate('change', 'my@email.com')
                expect(component.find('#username')).to.have.value('my@email.com')
            })
        
            it('password field shows entered text', () => {
                component.find('#password').simulate('change', '123')
                expect(component.find('#password')).to.have.value('123')
            })
        
            it('it has a button', () => {
                expect(component.find('button').length).to.exist
            })
        
            it('button can be clicked', () => {
                //
            })
        
            describe('enter invalid values', () => {
                
                beforeEach(() => {
                    component.find('#username').simulate('change', 'bademail.@@')
                    component.find('#username').simulate('blur')
                    component.find('#password').simulate('change', 'bad pass')
                    component.find('#password').simulate('blur')
                })
        
                it('username field is invalid', () => {
                    const text = component.find('div').text()
                    expect(text.indexOf('invalid')).to.not.equal(-1)
                })
        
                it('password field is invalid', () => {
                    const text = component.find('div').text()
                    expect(text.indexOf('invalid')).to.not.equal(-1)
                })
        
                it('button is disabled', () => {
                    expect(component.find('button[disabled]').length).to.equal(1)
                })
            })
        
            describe('enter valid values', () => {
                
                beforeEach(() => {
                    component.find('#username').simulate('change', 'good@email.com')
                    component.find('#username').simulate('blur')
                    component.find('#password').simulate('change', 'Abcdef1@')
                    component.find('#password').simulate('blur')
                })
        
                it('username field is valid', () => {
                    const text = component.find('div').text()
                    expect(text.indexOf('invalid')).to.equal(-1)
                })
        
                it('password field is valid', () => {
                    const text = component.find('div').text()
                    expect(text.indexOf('invalid')).to.equal(-1)
                })
        
                it('button is enabled', () => {
                    expect(component.find('button[disabled]').length).to.equal(0)
                })
            })
    })    
})
