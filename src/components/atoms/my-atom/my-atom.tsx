import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-atom',
  styleUrl: 'my-atom.css',
  shadow: true,
})
export class MyAtom {

  render() {
    return (
      <Host>
        <h1>my atom</h1>
      </Host>
    );
  }

}
