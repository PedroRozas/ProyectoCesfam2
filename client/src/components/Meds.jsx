import {gql, useQuery} from '@apollo/client';
import MedsRow from './MedsRow';

const getMeds = gql`
  query getMeds {
    meds{
      codigo,
      descp,
      fabricante,
      tipo,
      componentes,
      contenido,
      gramaje,
      formato

    }
  }
`;

export default function Medicamentos() {
  const {loading, error, data } = useQuery(getMeds);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
    {!loading && !error && 
     (<table className='table table-hover mt-3'>
      
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Descripción</th>
          <th>Fabricante</th>
          <th>Tipo</th>
          <th>Componentes</th>
          <th>Cantidad</th>
          <th>Gramaje</th>
          <th>Formato</th>

        </tr>
      </thead>
      <tbody>
        {data.meds.map((meds) => (
          <MedsRow key={meds.id} med={meds} />
          
        ))}

      </tbody>
     </table>)}  
    </>
  )
}
