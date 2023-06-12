export default () => (
  <table className="pricing-table">
    <tbody>
      <tr>
        <th>Quantity</th>
        <td>1&ndash;11</td>
        <td>12&ndash;23</td>
        <td dangerouslySetInnerHTML={{ __html: '24&plus;' }} />
      </tr>

      <tr>
        <th>Price</th>
        <td>$3.50/ea</td>
        <td>$3.00/ea</td>
        <td>$2.50/ea</td>
      </tr>
    </tbody>
  </table>
)