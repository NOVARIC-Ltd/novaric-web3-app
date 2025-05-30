import { useParams } from "@remix-run/react";

export default function Checkout() {
    const { courseId } = useParams();
    const productName = courseId === "1" ? "Blockchain for HR" : "Web3 Recruitment Strategies";

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Checkout - {productName}</h2>
            <p>To complete your enrollment, confirm payment below.</p>
            <iframe
                src="https://commerce.coinbase.com/checkout/YOUR_CHECKOUT_ID"
                style={{ width: "100%", height: "600px", border: "none" }}
                allow="payment"
            ></iframe>
        </div>
    );
}
