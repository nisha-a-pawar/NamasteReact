const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello world from React!");

console.log(heading);  //heading is nothing but a js object 
//  createElements accepts 3 parameters those are nothing but props
//  ->h1 is type
// -> "Hello world from React!" is childern
// ->{}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//  <div id="parent">
//     <div id="child">
//         <h1>I am an H1 tag</h1>
//         <h2>I am an H2 tag</h2>
//     </div>

/* <div id="child2">
//         <h1>I am an H1 tag</h1>
//         <h2>I am an H2 tag</h2>
//     </div> */
// </div>

const parent =
    React.createElement(
        "div",{ id: "parent" },
        [ 
            React.createElement( "div", { id: "child" },
           [ React.createElement("h1",{}, "I am h1 tag"),
             React.createElement("h2",{}, "I am h2 tag")
           ]
        ),
        React.createElement(
            "div",{ id: "child2" },
             [React.createElement("h1",{}, "I am h1 tag from child2"),
             React.createElement("h2",{}, "I am h2 tag"
            )]
        )
    ]

    );

    console.log(parent);
root.render(parent);
