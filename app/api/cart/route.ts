export async function POST(req: Request) {

  // 1️⃣ frontend se data aaya
  const { variantId } = await req.json();

  // 2️⃣ Shopify GraphQL mutation
  const query = `
  mutation {
    cartCreate(
      input: {
        lines: [
          {
            quantity: 1
            merchandiseId: "${variantId}"
          }
        ]
      }
    ) {
      cart {
        id
        checkoutUrl
      }
    }
  }
  `;

  // 3️⃣ Shopify API call
  const res = await fetch(
    "https://hydrogen-testing-store-new.myshopify.com/api/2024-01/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": "4328b18c27ffbb839e58adb5b20c3c07",
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await res.json();

  // 4️⃣ response wapas frontend ko
  return Response.json(data);
}