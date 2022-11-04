import { newE2EPage } from '@stencil/core/testing';

describe('my-atom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-atom></my-atom>');

    const element = await page.find('my-atom');
    expect(element).toHaveClass('hydrated');
  });
});
