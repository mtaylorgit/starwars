const Table = ({ people }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Homeworld</th>
            <th>Eye Color</th>
            <th>Gender</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {people.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.birth_year}</td>
              <td>{data.homeworld}</td>
              <td>{data.eye_color}</td>
              <td>{data.gender}</td>
              <td>{data.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  