import React from 'react';

const costObj = {
  Brian: 5000,
  Tom: 103000,
  James: 24000,
};
const names = Object.keys(costObj);
const name = 'Tom';

function Dashboard() {
  return (
    <div className="">
      <head></head>

      <body>
        <h1>Dashboard</h1>
        <table class="table table-bordered ">
          <thead>
            <tr class="table-primary">
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>{costObj[name]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button class="btn btn-primary">push</button>
      </body>
    </div>
  );
}

export default Dashboard;
