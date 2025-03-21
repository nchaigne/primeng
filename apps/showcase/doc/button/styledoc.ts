import { Component } from '@angular/core';

@Component({
    selector: 'button-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-button</td>
                        <td>Button element</td>
                    </tr>
                    <tr>
                        <td>p-button-icon</td>
                        <td>Icon element</td>
                    </tr>
                    <tr>
                        <td>p-button-label</td>
                        <td>Label element of the button</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
