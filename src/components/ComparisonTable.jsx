// ComparisonTable.jsx - compares the three packages side by side.
// On small screens the table scrolls sideways inside its box, and the first
// column ("Feature") stays fixed so you always know which row you are reading.
import Icon from './Icon.jsx';
import { packages, comparisonRows } from '../data/packages.js';
import './ComparisonTable.css';

// Shows a tick, a dash or text depending on the value
function Cell({ value }) {
  if (value === true) {
    return (
      <span className="cell-yes">
        <Icon name="check" size={20} />
        <span className="visually-hidden">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="cell-no">
        <Icon name="minus" size={20} />
        <span className="visually-hidden">Not included</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <>
      <p className="scroll-hint">
        <Icon name="arrowRight" size={18} />
        Swipe the table sideways to see all packages.
      </p>

      {/* tabIndex lets keyboard users focus the box and scroll it with the arrow keys */}
      <div className="table-scroll" role="region" aria-labelledby="compare-caption" tabIndex="0">
        <table className="compare-table">
          <caption id="compare-caption">
            Package comparison: Essential, Comfort and Premium Living
          </caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              {packages.map((pkg) => (
                <th scope="col" key={pkg.id} className={pkg.popular ? 'is-popular' : ''}>
                  {pkg.name}
                  {pkg.popular && <small>Most popular</small>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, index) => (
                  <td key={packages[index].id}>
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="table-key">
        <span><Icon name="check" size={16} /> = included</span>
        <span><Icon name="minus" size={16} /> = not included</span>
      </p>
    </>
  );
}
