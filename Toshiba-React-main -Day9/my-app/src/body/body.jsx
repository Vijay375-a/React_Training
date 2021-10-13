import React from 'react';



export const Body = () => <div class="row align-items-start">
    <div class="col">
        <h2>Declarative</h2>
        <p>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

            Declarative views make your code more predictable and easier to debug.
        </p>
    </div>
    <div class="col">
        <h2 style={ {
            color:'red'
        } } >Component-Based</h2>
        <p>
            Build encapsulated components that manage their own state, then compose them to make complex UIs.

            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        </p>
    </div>
    <div class="col">
        <h2>Learn Once, Write Anywhere</h2>
        <p>
            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

            React can also render on the server using Node and power mobile apps using React Native.
        </p>
    </div>
</div>;