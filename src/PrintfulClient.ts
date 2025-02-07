/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ApprovalSheetsV2Service } from './services/ApprovalSheetsV2Service';
import { CatalogV2Service } from './services/CatalogV2Service';
import { CountriesV2Service } from './services/CountriesV2Service';
import { FilesV2Service } from './services/FilesV2Service';
import { MockupGeneratorV2Service } from './services/MockupGeneratorV2Service';
import { OAuthScopesV2Service } from './services/OAuthScopesV2Service';
import { OrdersV2Service } from './services/OrdersV2Service';
import { ShippingRatesV2Service } from './services/ShippingRatesV2Service';
import { StoresV2Service } from './services/StoresV2Service';
import { WarehouseProductsV2Service } from './services/WarehouseProductsV2Service';
import { WebhookV2Service } from './services/WebhookV2Service';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PrintfulClient {
    public readonly approvalSheetsV2: ApprovalSheetsV2Service;
    public readonly catalogV2: CatalogV2Service;
    public readonly countriesV2: CountriesV2Service;
    public readonly filesV2: FilesV2Service;
    public readonly mockupGeneratorV2: MockupGeneratorV2Service;
    public readonly oAuthScopesV2: OAuthScopesV2Service;
    public readonly ordersV2: OrdersV2Service;
    public readonly shippingRatesV2: ShippingRatesV2Service;
    public readonly storesV2: StoresV2Service;
    public readonly warehouseProductsV2: WarehouseProductsV2Service;
    public readonly webhookV2: WebhookV2Service;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.printful.com',
            VERSION: config?.VERSION ?? '2.0.0-beta',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.approvalSheetsV2 = new ApprovalSheetsV2Service(this.request);
        this.catalogV2 = new CatalogV2Service(this.request);
        this.countriesV2 = new CountriesV2Service(this.request);
        this.filesV2 = new FilesV2Service(this.request);
        this.mockupGeneratorV2 = new MockupGeneratorV2Service(this.request);
        this.oAuthScopesV2 = new OAuthScopesV2Service(this.request);
        this.ordersV2 = new OrdersV2Service(this.request);
        this.shippingRatesV2 = new ShippingRatesV2Service(this.request);
        this.storesV2 = new StoresV2Service(this.request);
        this.warehouseProductsV2 = new WarehouseProductsV2Service(this.request);
        this.webhookV2 = new WebhookV2Service(this.request);
    }
}

