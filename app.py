import qrcode
import os
import uuid

def generate_qr_code(data, output_dir):
    # Generate a unique filename for the QR code image
    filename = os.path.join(output_dir, f"qr_code_{uuid.uuid4().hex}.png")

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="#043671", back_color="#1ac6ff")
    
    # Save the image to the specified directory with the unique filename
    img.save(filename)

    return filename

if __name__ == "__main__":
    landing_page_url = "https://sammalishe.github.io/QRGen4b/"
    output_directory = "qr_codes"  # The subdirectory to save QR codes

    # Create the output directory if it doesn't exist
    os.makedirs(output_directory, exist_ok=True)

    generated_qr_code = generate_qr_code(landing_page_url, output_directory)

    print(f"Landing Page QR Code generated and saved as {generated_qr_code}")
