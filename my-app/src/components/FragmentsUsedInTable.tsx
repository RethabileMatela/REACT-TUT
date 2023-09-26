import React from "react";
import FragmentsUsedInColumn from "./FragmentsUsedInColumn";

function FragmentsUsedInTable() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <FragmentsUsedInColumn></FragmentsUsedInColumn>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FragmentsUsedInTable;
