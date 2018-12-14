let express = require('express');
let app = express();

app.get('/api/v1/profile/address', (request, response) => {
    return response.json(
        {
            "addresses": [
                {
                    "slug": "abcsd",
                    "label": "default",
                    "isDefault": false,
                    "latitude": "78.90",
                    "longitude": "44.555",
                    "zipCode": "560103",
                    "line": "A3-004, Genesis Apartments",
                    "landmark": "Near SunCity Apartments",
                    "city": "Bengaluru",
                    "state": "Karnataka"
                },
                {
                    "slug": "aaabcsd",
                    "label": "other",
                    "isDefault": false,
                    "latitude": "78.90",
                    "longitude": "44.555",
                    "zipCode": "560103",
                    "line": "A302, Vishnu Residency, Kundanahalli, Marathalli",
                    "landmark": "Kachra road",
                    "city": "Bengaluru",
                    "state": "Karnataka"
                }
            ]
        }
    );
})
app.listen(3000, () => {
    console.log("Listening at 3000...");
});
