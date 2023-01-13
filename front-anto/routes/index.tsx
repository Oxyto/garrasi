import { Head } from "$fresh/runtime.ts";
import { Searchbar } from "../components/Searchbar.tsx";
import { Filter } from "../components/Filter.tsx";
import { Bodyarticle } from "../components/Bodyarticle.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Garrasi</title>
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <body>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <div id="container">
          <Filter></Filter>
          <Bodyarticle></Bodyarticle>
        </div>
        <div>
          <button type="submit" id="navigate_prev">Previous</button>
          <button type="submit" id="navigate_next">Next</button>
        </div>
      </body>
    </>
  );
}
