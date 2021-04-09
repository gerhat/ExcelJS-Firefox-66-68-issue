import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';

// Comment the line below and Promise.finally works
import ExcelJS from 'exceljs';

let color = 'green';
let result = '# Promise.finally works!';
let error = '';

try {
  Promise.resolve(42).finally(() => {
    console.log(result);
  });
} catch (e) {
  color = 'red';
  result = '# Promise.finally fails :-(';
  error = 'Error: ' + e.message;
  console.log(e);
}

ReactDOM.render(
  <div>
    <h1>Promise.finally fails in Firefox 66-68</h1>
    <p style={{ color }}>
      {result}
      <br />
      {error}
    </p>
  </div>,
  document.getElementById('root'),
);
