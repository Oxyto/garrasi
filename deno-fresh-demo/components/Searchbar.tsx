import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Searchbar() {
  return (
    <div id="search">
      <input id="searchbar" type="text" placeholder="Search topic"></input>
    </div>
  );
}
