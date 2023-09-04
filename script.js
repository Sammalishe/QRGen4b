// JavaScript code for interactivity

document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const dataInput = document.getElementById("data");
    const qrCodeImage = document.getElementById("qr-code-image");

    generateButton.addEventListener("click", function () {
        const data = dataInput.value.trim();

        if (data !== "") {
            // Clear any existing QR code
            qrCodeImage.src = "";

            // Generate the QR code
            const qrcode = new QRCode(qrCodeImage, {
                text: data,
                width: 128,
                height: 128
            });

            // Set the source of the <img> element to the data URL of the generated QR code
            qrCodeImage.src = qrcode.toDataURL();
        }
    });
});
