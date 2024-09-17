import { algoliasearch } from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination,
  Configure,
} from "react-instantsearch";

const searchClient = algoliasearch(
  "3O60EW4TL2",
  "a96796dbbd43b4e068b6ff6c2b99d21c"
);

// eslint-disable-next-line react/prop-types
function Hit({ hit }) {
  console.log(hit);
  return (
    <>
      <div className="card">
        {/* <div>
          <img src={hit.image} alt={hit.title} width={100} height={100} />
        </div> */}
        <div className="content">
          <p>
            Name: <Highlight attribute="title" hit={hit} />
          </p>

          {/* <p>Description: {hit.description}</p>
          <h4>Price: {hit.price}</h4> */}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="1">
      <Configure hitsPerPage={5} />
      <SearchBox className="container" />
      <Hits hitComponent={Hit} />
      {/* <Pagination /> */}
    </InstantSearch>
  );
}

export default App;
