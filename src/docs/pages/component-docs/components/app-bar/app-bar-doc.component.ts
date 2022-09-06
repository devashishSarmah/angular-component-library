import { Component } from '@angular/core';
import { COLLAPSED } from './examples/collapsed.component';
import { EXPANDED } from './examples/expanded.component';
import { SNAP } from './examples/snap.component';
import { THREE_LINER } from './examples/three-liner.component';

@Component({
    selector: 'app-app-bar-doc',
    template: `
        <app-component-doc-scaffold mdFileName="AppBar.md">
            <div examples class="app-example">
                <div class="example-section">
                    <div class="example-heading">App Bar with Snap Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> will resize between <code>collapsedHeight</code> and
                        <code>expandedHeight</code> as the window is scrolled.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-snap-app-bar-demo></app-snap-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="SNAP" dataLine="2-9"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/snap"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="SNAP"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">App Bar with Expanded Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> with an <code>expanded</code> variant will stay fixed at the
                        <code>expandedHeight</code> size.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-expanded-app-bar-demo></app-expanded-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="EXPANDED" dataLine="2-4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/expanded"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="EXPANDED"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">App Bar with Collapsed Variant</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> with a <code>collapsed</code> variant will stay fixed at the
                        <code>collapsedHeight</code> size.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-collapsed-app-bar-demo></app-collapsed-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="COLLAPSED" dataLine="2-4"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/collapsed"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="COLLAPSED"></app-copy-code-button>
                    </div>
                </div>

                <div class="example-section">
                    <div class="example-heading">App Bar with ThreeLiner Component</div>
                    <div class="example-description">
                        A <code>&lt;blui-app-bar&gt;</code> can accept a <code>&lt;blui-three-liner&gt;</code> to
                        conditionally render tersiary data.
                    </div>
                    <div class="example-demo-wrapper">
                        <app-three-liner-app-bar-demo></app-three-liner-app-bar-demo>
                    </div>
                    <app-example-code [snippet]="THREE_LINER" dataLine="9-11"></app-example-code>
                    <div class="example-actions">
                        <app-view-code-button
                            examplePath="app-bar/examples/three-liner"
                            style="margin-right: 16px"
                        ></app-view-code-button>
                        <app-copy-code-button [code]="THREE_LINER"></app-copy-code-button>
                    </div>
                </div>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./app-bar-doc.component.scss'],
})
export class AppBarDocComponent {
    SNAP = SNAP;
    COLLAPSED = COLLAPSED;
    EXPANDED = EXPANDED;
    THREE_LINER = THREE_LINER;
}
