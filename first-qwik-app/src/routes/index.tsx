import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import Product from '~/components/products/product';

export default component$(() => {
  return (
    <div>
      <Product />

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
