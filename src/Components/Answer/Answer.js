import React from 'react';

const Answer = () => {
    return (
        <div>
            <div>
                Question & Answer Section
            </div>
            <div>
                <div className='mb-7 p-7 text-left'>
                    <h1 className='font-bold'>Q-1: How will you improve
                        the performance of a React Application?
                    </h1>
                    <div>
                        Use React.memo() to memoize components that don't need to be re-rendered every time.

                        Use shouldComponentUpdate() or PureComponent to avoid re-rendering
                        components that haven't changed.

                        Avoid using inline arrow functions in render() methods, as they create
                        new function instances every time the component re-renders. Instead,
                        use class methods or bind functions in the constructor.

                        Use lazy loading and code splitting to only load the parts of your
                        application that are needed.

                        Use the React DevTools to identify and eliminate unnecessary re-renders.

                        Use a production build of React, which is optimized for performance.

                        Optimize the performance of your API calls and data fetching.

                        Use CSS and images that are optimized for the web.

                        Minimize the number of third-party dependencies,
                        and only use those that are essential to your application.

                        Use server-side rendering (SSR) to speed up the initial load time of your application.
                    </div>
                </div>
                <div className='mb-7 p-7 text-left'>
                    <h1 className='font-bold'>
                        Q-2:  What are the different ways to manage
                        a state in a react application?
                    </h1>
                    <div>
                        React Component State: React component state is used to manage small
                        pieces of data that are specific to a single component.
                        It can be updated using the setState method and is local to the component.

                        React Context API: The React Context API allows for global state management
                        in a React application. It provides a way to share data between components
                        without the need to pass data down through props.

                        Redux: Redux is a predictable state container for JavaScript applications.
                        It can be used to manage the state of an entire application and provides
                        a single source of truth for the data in an application.

                        MobX: MobX is a simple and scalable state management library that makes
                        it easy to manage the state of your application. It is a reactive library,
                        which means that it will automatically update the state of your application
                        as changes occur.

                        React Query: React Query is a library for managing server state
                        and caching in React applications. It provides a simple API for
                        fetching data from a server, caching that data, and keeping it up to date.

                        Apollo Client: Apollo Client is a state management library that is
                        specifically designed for use with GraphQL. It provides a way to manage the
                        state of a GraphQL application and provides tools for fetching data, caching it,
                        and updating it.
                    </div>
                </div>
                <div className='mb-7 p-7 text-left'>
                    <h1 className='font-bold'>
                        Q-3:How does prototypical inheritance work?
                    </h1>
                    <div>
                        In JavaScript, prototypical inheritance is a way of creating
                        objects that inherit properties and methods from a prototype object.
                        When a property or method is accessed on an object, JavaScript first
                        checks if the property or method exists on the object itself. If not,
                        it looks up the prototype chain to see if the property or method exists
                        on the object's prototype. If it's still not found, JavaScript looks up
                        the prototype chain again on the prototype's prototype, and so on, until
                        it reaches the top of the chain, which is the base Object.prototype.

                        When an object is created in JavaScript, it has a __proto__ property that points
                        to the prototype of the constructor function that was used to create the object.
                        This prototype can be modified to add new properties and methods that will be
                        inherited by all objects created by the constructor function. This allows for inheritance
                        between objects in JavaScript, without the need for classes and class-based inheritance
                    </div>
                </div>
                <div className='mb-7 p-7 text-left'>
                    <h1 className='font-bold'>
                        Q-4: Why you do not set the state directly in React.For example,
                        if you have const [products,setProducts] = useState([]).
                        Why you do not set products = [...] instead,you use the setProducts
                    </h1>
                    <div>
                        The state variables created by the useState hook are immutable,
                        which means we cannot directly modify their value. We can only
                        update the state using the setState function returned by the useState hook.

                        When we update the state using setState, React internally creates
                        a new state object with the updated values and re-renders the component
                        to reflect the changes. If we modify the state directly, React will not be able
                        to detect the change and will not trigger a re-render. This can lead to
                        inconsistent UI and bugs.
                    </div>
                </div>
                <div className='mb-7 p-7 text-left'>
                    <h1 className='font-bold'>
                        Q-5:  What is an unit tests? Why should write unit tests?
                    </h1>
                    <div>
                        Ensure code correctness: Unit tests verify that individual units of code
                        are working correctly, which can help prevent errors from occurring later
                        in the development process.

                        Facilitate refactoring: Unit tests can help ensure that changes to the
                        code do not break existing functionality. This allows developers to make
                        changes to the codebase with more confidence and reduces the risk of introducing bugs.

                        Improve code quality: Writing unit tests encourages developers to write
                        code that is modular, testable, and maintainable.

                        Save time and resources: By catching errors early in the development process,
                        unit tests can save time and resources by reducing the amount of time spent debugging
                        and fixing issues later on.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;