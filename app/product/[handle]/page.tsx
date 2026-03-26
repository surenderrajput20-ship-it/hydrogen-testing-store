import { fetchAPI } from "../../../lib/shopify";

export default async function Product({ params }: any) {

  const query = `
  {
    product(handle: "${params.handle}") {
      title
      description
      images(first:1){
        edges{
          node{
            url
          }
        }
      }
    }
  }
  `;

  const data = await fetchAPI(query);
  const product = data.data.product;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{product.title}</h1>
      <img src={product.images.edges[0]?.node.url} width="300" />
      <p>{product.description}</p>
    </div>
  );
}