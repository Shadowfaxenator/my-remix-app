import { json } from "@remix-run/cloudflare"; 
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
  context,
  params,
}) => {

 const p =  await context.KV.get("my")
  return {
    p
  }
};
export default function Index() {
  const product = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {product}
      
    </div>
  );
}
