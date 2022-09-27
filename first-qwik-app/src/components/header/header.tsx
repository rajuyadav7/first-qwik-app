import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="#" target="_blank">
            Our Story
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Write
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Membership
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Sign In
          </a>
        </li>
      </ul>
    </header>
  );
});
