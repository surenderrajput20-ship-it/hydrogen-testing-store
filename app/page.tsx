import { fetchAPI } from "../lib/shopify";
import AddToCart from "../components/AddToCart";
import Header from "../components/HeaderNew";

export default async function Home() {

  const query = `
  {
    shop {
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
    <div>

      {/* ✅ HEADER inside return */}
      <Header menu={menu} logo={logo} />

      <h1>My Shopify Products</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map(({ node }: any) => {
          const variantId = node.variants.edges[0]?.node.id;

          return (
            <div key={node.id}>
              <img src={node.images.edges[0]?.node.url} />
              <h2>{node.title}</h2>

              <AddToCart variantId={variantId} />
            </div>
          );
        })}
      </div>

    </div>
  );
}