import '../SearchResultList/style.css'
import  SearchResult  from "../SearchResult";

export default function SearchResultsList({ results }){
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
