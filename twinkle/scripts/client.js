function connect(){
    const socket = io("http://localhost:3005", {
        reconnectionDelayMax: 1000,
        auth: {
            username: "twinkle",
            password: "twinkle"
        },
        query: {
            "message": document.getElementById("message").value
        }
    });
}