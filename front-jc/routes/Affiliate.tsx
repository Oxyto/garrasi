import { useState, useEffect } from "preact/hooks";
import { connect, get } from "https://deno.land/x/redis/mod.ts";
import AffiliateIsland from "../islands/Affilate.tsx";
import Navbar from '../components/Navbar.tsx';
import { Head } from "$fresh/runtime.ts";
export default function Affiliate() {
    const [propositions, setPropositions] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPropositions = async () => {
            try {
                const redis = await connect({
                    hostname: "127.0.0.1",
                    port: 6379,
                });
                const keys = await redis.keys("review-proposition:*");
                let propositions = []
                for(const key of keys){
                    const json = await redis.get(key)
                    propositions.push(JSON.parse(json))
                }
                setPropositions(propositions);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPropositions();
    }, []);
    return(
        <>
            <Head>
                <link rel="stylesheet" href="/style.css" />
                <title>Garrasi - Affiliate</title>
            </Head>
            <Navbar />
            <div class="p-4 mx-auto max-w-screen-md">
                <AffiliateIsland propositions={propositions} />
            </div>
        </>
    );
}
