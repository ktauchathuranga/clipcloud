document.addEventListener("DOMContentLoaded", function () {
    // Get the query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const text = params.get("text");

    console.log("Text received:", text);

    if (text) {
        if (text.trim() !== "") {
            console.log("Generating QR code for:", text);

            // Create the QR code
            const qrcode = new QRCode(document.getElementById("qrcode"), {
                text: text,
                width: 250,
                height: 250,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            console.log("QR code generated successfully!");
        } else {
            document.body.innerText = "The selected text is empty.";
        }
    } else {
        document.body.innerText = "No text selected.";
    }
});
