# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
`Stateful component is one which keeps track of state. Thus, a stateful component keeps track of the changing data in contrast with a stateless component which merely prints out what is provided to it via props. `

`Functional component is just another name for a stateless component. Thus, functional components are mainly responsible for rendering the UI by accepting data via props and displaying it in some form. `

2. When does a componentWillMount function be called? What about a componentWillUpdate?
`componentWillMount triggers before the initial render and any action inside of this method will trigger only once.`
`componentWillUpdate is called in case of changes to the state/props. However this method is usually called before the next render()`
`Both these methods have been deemed unsafe for use in any new code written`

3. Define stateful logic.
`Stateful Logic comes into play when custom hooks are defined and used. Custom Hooks are JavaScript functions. These functions are named in such a way that they start with the word 'use' and they also call other Hooks. Stateful logic thus means that a fresh instance of the state variable is instantiated every time a custom hook is used. Thus, the states inside the hook are not shared between users of the said custom hook. Every time a custom hook is used, all the state and effects inside of it are fully isolated.`

4. What are the three step of creating a successful test? What is done in each phase?
`Three steps for creating a successful test are Arrange, Act and Assert`
`Arrange step identifies and arranges the inputs / targets to be tested`
`Act phase performs an action or a behavior on the target object such as inputting a value or clicking a button`
`Assert phase verifies the response from an action or a behavior to see if it is in line with the expected outcome`
