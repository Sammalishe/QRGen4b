document.addEventListener('DOMContentLoaded', function() {
    // Handle the "Connect to Airport Free Wi-Fi" button click
    const connectWifiButton = document.getElementById('connect-wifi');
    connectWifiButton.addEventListener('click', function() {
        // Check if the device supports the Wi-Fi settings API
        if ('wifi' in navigator) {
            // Define the Wi-Fi network details
            const wifiConfig = {
                ssid: '#Airport Free Wi-Fi', // SSID to connect to
                signalStrength: 100 // Signal strength (percentage)
            };

            // Open the Wi-Fi settings and attempt to connect
            navigator.wifi.associate(wifiConfig)
                .then(() => {
                    console.log('Successfully connected to Wi-Fi.');
                })
                .catch(error => {
                    console.error('Failed to connect to Wi-Fi:', error);
                });
        } else {
            console.error('Wi-Fi settings API is not supported on this device.');
        }
    });
});
