function greeting() {
    console.log("Greeting Function");

    function welcome() {
        console.log("Welcome to my class");
    }

    return welcome;
}

greeting()();
/*greeting()();
│         │
│         └── return হওয়া function call
│
└────────── greeting() call*/