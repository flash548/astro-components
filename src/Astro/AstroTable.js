import { RuxStatus } from '@astrouxds/rux-button/rux-button.js';

export default function AstroTable(props) {

    return (
        <table className="rux-table">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Remaddrks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className="rux-status rux-status--critical"></div></td>
                    <td>Cell 1A</td>
                    <td>Cell 2A</td>
                </tr>
                <tr>
                    <td><div className="rux-status rux-status--caution"></div></td>
                    <td>Cell 1B</td>
                    <td>Cell 2B</td>
                </tr>
                <tr>
                    <td><div className="rux-status rux-status--standby"></div></td>
                    <td>Cell 1B</td>
                    <td>Cell 2B</td>
                </tr>
                <tr>
                    <td><div className="rux-status rux-status--normal"></div></td>
                    <td>Cell 1B</td>
                    <td>Cell 2B</td>
                </tr>
                <tr>
                    <td><div className="rux-status rux-status--serious"></div></td>
                    <td>Cell 1B</td>
                    <td>Cell 2B</td>
                </tr>
                <tr>
                    <td><div className="rux-status rux-status--off"></div></td>
                    <td>Cell 1B</td>
                    <td>Cell 2B</td>
                </tr>
            </tbody>
        </table>
    )
}