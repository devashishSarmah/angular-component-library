import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { TabName } from '../../shared/scaffold/scaffold.component';
import { COMPONENT_NAV_ITEMS } from '../../../../navigation/nav-items';
import { WITH_ICON } from './examples/with-icon.component';
import { WITHIN_TOOLBAR } from './examples/within-toolbar.component';
import { ToolbarMenuPlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-toolbar-menu-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ToolbarMenu.md" [knobGroups]="knobGroups">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">Toolbar Menu</div>
                    <div class="example-description">
                        <div>A <code>&lt;blui-toolbar-menu&gt;</code> adds a menu to a text element.</div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-basic-toolbar-menu-demo></app-basic-toolbar-menu-demo>
                    </div>
                    <app-example-code [snippet]="BASIC"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Adding an Icon</div>
                    <div class="example-description">
                        <div>You can add icons to the front of the Toolbar Menu.</div>
                    </div>
                    <div class="example-demo-wrapper">
                        <app-with-icon-toolbar-menu-demo></app-with-icon-toolbar-menu-demo>
                    </div>
                    <app-example-code [snippet]="WITH_ICON" dataLine="2"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITH_ICON"></app-copy-code-button>
                    </div>
                </div>
                <div class="example-section">
                    <div class="example-heading">Common Use In Toolbars</div>
                    <div class="example-description">
                        Toolbar Menus are typically used in toolbar subtitles for toggling different views, locations,
                        etc.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-within-toolbar-toolbar-menu-demo></app-within-toolbar-toolbar-menu-demo>
                    </div>
                    <app-example-code [snippet]="WITHIN_TOOLBAR" dataLine="7-13"></app-example-code>
                    <div class="example-actions">
                        <app-copy-code-button [code]="WITHIN_TOOLBAR"></app-copy-code-button>
                    </div>
                </div>
            </div>
            <
            <app-toolbar-menu-playground
                playground
                [inputs]="allProps"
                (codeChange)="generatedCode = $event"
            ></app-toolbar-menu-playground>
            <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./toolbar-menu-doc.component.scss'],
})
export class ToolbarMenuDocComponent {
    routes = COMPONENT_NAV_ITEMS;
    BASIC = BASIC;
    WITH_ICON = WITH_ICON;
    WITHIN_TOOLBAR = WITHIN_TOOLBAR;

    generatedCode: string;

    requiredProps: Partial<ToolbarMenuPlaygroundKnobs> = {
        label: {
            componentDefault: '',
            value: 'Label',
            type: 'string',
            hint: 'The text to display for label',
        },
    };

    otherProps: Partial<ToolbarMenuPlaygroundKnobs> = {
        menuItemsCount: {
            value: 3,
            type: 'number',
            range: { min: 1, max: 4, step: 1, tickInterval: 1 },
            label: 'Menu Item Labels',
            hint: '',
        },
        showIcon: {
            label: 'Show Icon',
            value: true,
            type: 'boolean',
            hint: '',
        },
    };
    allProps = Object.assign({}, this.requiredProps, this.otherProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredProps,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: true,
        },
    ];

    createRouterLink(route: string): string {
        const tab: TabName = 'examples';
        return `/${route}/${tab}`;
    }
}
