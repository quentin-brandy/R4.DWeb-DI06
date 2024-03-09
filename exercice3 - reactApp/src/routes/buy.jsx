import Pricing from '../ui/Pricing'
import { useLoaderData } from 'react-router-dom';
import { fetchPricingData } from '../lib/loaders';

export async function loader(){
    let pricingData = await fetchPricingData();
    return pricingData
}
export default function Buy() {
   const data = useLoaderData()
  return (
    <>
      <section>
      <Pricing {...data}/>
      {/* ou
      <Pricing title={data.title} descritpion={data.descritpion} plans={data.plans} />*/}
      </section>
    </>
  );
}
