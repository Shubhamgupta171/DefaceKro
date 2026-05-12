import React from 'react';

const Sidebar = () => {
  return (
    <div className="flat-sidebar-hacked"> {/* Changed tag from <aside> to <div> */}
      <center>
        <h6 style={{color: 'red'}}>SYSTEM DOWN</h6>
      </center>

      {/* Replaced semantic <nav> with a non-semantic <table> - Massive L1 Trigger */}
      <table border="1" style={{width: '100%', color: 'white', background: 'black'}}>
        <tbody>
          <tr><td>ACCESS DENIED</td></tr>
          <tr><td>ACCESS DENIED</td></tr>
          <tr><td>ACCESS DENIED</td></tr>
          <tr><td>ACCESS DENIED</td></tr>
        </tbody>
      </table>

      {/* Bottom status indicators removed */}
    </div>
  );
};

export default Sidebar;
