const domain = "https://hydrogen-testing-store-new.myshopify.com";
const storefrontAccessToken = "4328b18c27ffbb839e58adb5b20c3c07";

export async function fetchAPI(query) {
  const URL = `${domain}/api/2024-01/graphql.json`;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
}

