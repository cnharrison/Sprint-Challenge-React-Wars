# Answers

1.  What is React JS and what problems does it try and solve?

react js is a user interface library created by facebook. it solves the problem where you have a ton of data that is changing rapidly and you need to update the dom based on that data. 

2.  What does it mean to _think_ in react?

means that, once you have understood how nested components work and how data is passed around between them through props and state,  you visualize how your components will be nested, what state you will track and where it will live, and what props will be passed down before you even start your project

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

stateful components have thier own class, or tracked data, within their own scope. functional compoennts recieve data that is declared outside of their scope--props--from other components' states and display it. 

4.  Describe state.

an object declared by and owned by a component within its scope.

4.  Describe props.

when state from one compoennt is passd to another, it becomes props. it is immutable. 