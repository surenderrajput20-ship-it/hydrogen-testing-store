"use client";

export default function AddToCart({ variantId }: any) {

  async function addToCart() {
    
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ variantId }),
    });

    const data = await res.json();
    console.log(data);
     alert("Product added to cart 22 ✅");
  }

  async function buyNow() {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ variantId }),
    });

    const data = await res.json();

    const url = data.data.cartCreate.cart.checkoutUrl;
    window.location.href = url;
  }

  return (
    <div className="flex gap-2 mt-2">
      <button
        onClick={addToCart}
        className="bg-black text-white px-4 py-2"
      >
        Add to Cart
      </button>

      <button
        onClick={buyNow}
        className="bg-green-600 text-white px-4 py-2"
      >
        Buy Now
      </button>
    </div>
  );
}