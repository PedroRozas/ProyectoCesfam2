import {FaTrash} from 'react-icons/fa';

export default function MedsRow({ med }) {
  return (
    <tr>
        <td>{med.codigo}</td>
        <td>{med.descp}</td>
        <td>{med.fabricante}</td>
        <td>{med.tipo}</td>
        <td>{med.componentes}</td>
        <td>{med.contenido}</td>
        <td>{med.cantidad}</td>
        <td>{med.gramaje}</td>
        <td>{med.formato}</td>
        <td>
            <button className="btn btn-danger btn-sm">
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
