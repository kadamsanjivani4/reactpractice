const heading = React.createElement("h1",{id:"heading"},"This is first react program");
const parent = React.createElement("div",
{id:"pdiv"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"In h1 tag"),
React.createElement("h2",{},"In h2 tag")
]
)
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);