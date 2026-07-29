const input = document.getElementById("stateInput");
const alerts = document.getElementById("alerts");
const message = document.getElementById("message");

document.getElementById("searchBtn").addEventListener("click", () => {

    const state = input.value.trim().toUpperCase();

    alerts.innerHTML = "";
    message.innerHTML = "";

    if (!state) {
        message.innerHTML = "Enter a state code.";
        return;
    }

    fetch(`https://api.weather.gov/alerts/active?area=${state}`)
        .then(res => res.json())
        .then(data => {

            if (data.features.length === 0) {
                message.innerHTML = "No active weather alerts.";
                return;
            }

            data.features.forEach(alert => {
                alerts.innerHTML += `
                    <div class="alert-card">
                        <h3>${alert.properties.headline}</h3>
                        <p>${alert.properties.areaDesc}</p>
                    </div>
                `;
            });

        })
        .catch(() => {
            message.innerHTML = "Error fetching data.";
        });

});
