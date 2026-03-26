import { fetchAPI } from "../lib/shopify";
import AddToCart from "../components/AddToCart";
import Header from "../components/header";

export default async function Home() {

  const query = `
  {
    shop {
      name
      brand {
        logo {
          image {
            url
          }
        }
      }
    }

    menu(handle: "main-menu") {
      items {
        title
        url
      }
    }

    products(first: 8) {
      edges {
        node {
          id
          title
          handle
          images(first:1){
            edges{
              node{
                url
              }
            }
          }
          variants(first:1){
            edges{
              node{
                id   
                price{
                  amount
                  currencyCode
                }
                compareAtPrice{
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const data = await fetchAPI(query);

  const products = data.data.products.edges;
  const menu = data.data.menu.items;
  const logo = data.data.shop.brand.logo.image.url;

  return (
    <div className="p-10">

      {/* ✅ HEADER */}
      <Header menu={menu} logo={logo} />

      <h1 className="text-2xl font-bold mb-6">My Shopify Products</h1>

      {/* GRID */}
      <div className="grid grid-cols-4 gap-6">
        {products.map(({ node }: any) => {

          const price = node.variants.edges[0]?.node.price.amount;
          const compare = node.variants.edges[0]?.node.compareAtPrice?.amount;
          const variantId = node.variants.edges[0]?.node.id;

          return (
            <div key={node.id} className="border p-4 rounded">
              <img src={node.images.edges[0]?.node.url} />
              <h2 className="mt-2 font-semibold">{node.title}</h2>

              <div className="flex gap-2 items-center">
                
                {compare && (
                  <span className="line-through text-gray-500">
                    ₹{compare}
                  </span>
                )}

                <span className="font-bold text-lg">
                  ₹{price}
                </span>
              </div>

              {/* ✅ BUTTON */}
              <AddToCart variantId={variantId} />
            </div>
          );
        })}
      </div>
    </div>
  );
}