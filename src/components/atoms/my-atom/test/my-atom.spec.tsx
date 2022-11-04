import { newSpecPage } from '@stencil/core/testing';
import { MyAtom } from '../my-atom';

describe('my-atom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAtom],
      html: `<my-atom></my-atom>`,
    });
    expect(page.root).toEqualHtml(`
      <my-atom>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-atom>
    `);
  });
});
