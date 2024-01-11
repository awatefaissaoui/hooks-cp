import Movie from "./Movie";

function Liste({ movies }) {








  return (
    <div style={{ display: 'flex',flexWrap:"wrap" }}>
      {
        movies.map((Element, index) => {
          return <div key={index}  style={{ display: 'flex' }}>
            <Movie movie={Element} /> </div>

        })
      }

    </div>
  );
}

export default Liste;