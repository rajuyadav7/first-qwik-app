import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
    // <div>
    //   <head>
    //     <meta charSet="utf-8" />
    //   </head>
    //   <table id="products">
    //     <caption>Products</caption>
    //     <thead><tr><th>Sn.</th> <th>Item</th><th>Unit Cost</th><th>Quantity</th><th>Total Cost</th></tr></thead>
    //     <tbody><tr><td>1</td> <td>Item1</td><td>50</td><td>1</td><td>50</td></tr>
    //       <tr><td>1</td> <td>Item2</td><td>150</td><td>2</td><td>300</td></tr>
    //     </tbody>
    //   </table>
    // </div>
  );
});
