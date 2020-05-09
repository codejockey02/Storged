import http from 'k6/http';

export default function () {
    var url = "https://storge.herokuapp.com/register";
    var payload = JSON.stringify({
        name: "VirtualUser",
        contact: "112211",
        password: "1234"
    });

    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}