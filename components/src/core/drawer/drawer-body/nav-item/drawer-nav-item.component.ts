import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {DrawerService} from '../../service/drawer.service';
import {StateListener} from '../../state-listener.component';

export type DrawerNavItem = {
    statusColor?: string;
    title: string;
    subtitle?: string;
    chevron?: boolean;
    divider?: boolean;
    items?: Array<Omit<DrawerNavItem, 'icon'>>;
    onSelect?: any;
    icon?: string;
    itemID?: string;
    hasChildren?: boolean;
    ripple?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    useCustomIconAnimation?: boolean;
    hidePadding?: boolean;
};

export type ActiveItemBackgroundShape = 'round' | 'square';

@Component({
    selector: 'pxb-drawer-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-nav-item.component.scss'],
    template: `
        <div class="pxb-drawer-nav-item">
            <pxb-info-list-item
                (click)="selectItem($event, itemID)"
                [dense]="true"
                [statusColor]="statusColor"
                [chevron]="chevron"
                [divider]="divider ? 'full' : undefined"
                [class.pxb-info-list-item-active]="selected"
                [class.hide-padding]="hidePadding"
                [class.round]="activeItemBackgroundShape === 'round'"
                [class.square]="activeItemBackgroundShape === 'square' || !drawerOpen"
                matRipple
                [matRippleDisabled]="!ripple"
                style="display:flex; flex-direction: column"
            >
                <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                    <ng-content select="[icon]"></ng-content>
                </div>
                <div title>{{ title }}</div>
                <div subtitle>{{ subtitle }}</div>
                <!--
                <div rightContent *ngIf="hasChildren && expandIcon && !showNestedNavItems">
                    <mat-icon
                        class="pxb-drawer-nav-item-expand-icon"
                        >{{ expandIcon }}</mat-icon
                    >
                </div>
                <div rightContent *ngIf="hasChildren && collapseIcon && showNestedNavItems">
                    <mat-icon class="pxb-drawer-nav-item-collapse-icon">{{ collapseIcon }}</mat-icon>
                </div>
                <div rightContent *ngIf="hasChildren && !expandIcon && !collapseIcon">
                    <mat-icon
                        class="pxb-drawer-nav-item-default-expand-icon"
                        [ngClass]="showNestedNavItems ? 'inverted' : ''"
                        >keyboard_arrow_down</mat-icon
                    >
                </div> -->
            </pxb-info-list-item>
        </div>
        <!-- Nested Nav Items -->
        <mat-accordion *ngIf="hasChildren" displayMode="flat" class="pxb-drawer-nested-nav-item" #nestedNavItems>
            <mat-expansion-panel [(expanded)]="showNestedNavItems && drawerOpen">    
                <ng-content select="pxb-drawer-nav-item"></ng-content>
            </mat-expansion-panel>
        </mat-accordion>
    `,
})
export class DrawerNavItemComponent extends StateListener implements Omit<DrawerNavItem, 'items'> {
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'round';
    @Input() chevron = false;
    @Input() collapseIcon: string;
    @Input() divider = true;
    @Input() expandIcon: string;
    @Input() hidePadding: boolean;
    @Input() itemID: string;
    @Input() ripple = true;
    @Input() selected: boolean;
    @Input() statusColor: string;
    @Input() subtitle: string;
    @Input() title: string;
    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    drawerOpen: boolean;
    hasChildren = true;
    showNestedNavItems = false;

    @ViewChild("nestedNavItems", { static: false }) nestedEl: ElementRef;


    constructor(drawerService: DrawerService, private readonly changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngAfterViewInit(): void {
        this.hasChildren = this.nestedEl.nativeElement.children.length > 0;
        this.showNestedNavItems = false;
        this.changeDetectorRef.detectChanges();
    }

    selectItem(e: Event, id: string): void {
        this.drawerService.select(id);
        if (this.hasChildren) {
            this.toggleNestedNavItems();
        }
        this.select.emit(id);
    }

    toggleNestedNavItems(): void {
        this.showNestedNavItems = !this.showNestedNavItems;
    }
}
