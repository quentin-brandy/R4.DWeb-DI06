
import { useLoaderData , defer , Await } from "react-router-dom";
import Teams from '../ui/Team';
import Testimonial from '../ui/Testimonial';
import { fetchOurTeams , fetchTestimonialData } from "../lib/loaders";
import { Suspense } from "react";
import TeamSkeleton from "../ui/Team/TeamSkeleton";

export async function loader( {params}){
 let dataTeam =  fetchOurTeams( params.teamName);
 let testdata =  await fetchTestimonialData( params.teamName);
 return defer({team:dataTeam , testimonial:testdata});
}

    export default function OurTeams(){
        const data = useLoaderData();
       
        return(
            <>
            <Suspense fallback={<TeamSkeleton />}>
                <Await resolve={data.team} errorElement={<div>a louper</div>}>
           {teamData => <Teams {...teamData}/>} 
            </Await>
            </Suspense>
            <Testimonial data={data.testimonial}/>
            </>
        )
    }

    function Loading() {
        return <h2>🌀 Chargement...</h2>;
      }