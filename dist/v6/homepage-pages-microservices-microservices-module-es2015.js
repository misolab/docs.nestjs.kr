(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-microservices-microservices-module"],{

/***/ "./src/app/homepage/pages/microservices/basics/basics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/basics/basics.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicsComponent", function() { return BasicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */ "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/banner-shop/banner-shop.component */ "./src/app/shared/components/banner-shop/banner-shop.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");









class BasicsComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
BasicsComponent.??fac = function BasicsComponent_Factory(t) { return ??BasicsComponent_BaseFactory(t || BasicsComponent); };
BasicsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BasicsComponent, selectors: [["app-basics"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 610, vars: 38, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/basics.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "overview"], ["src", "/assets/Microservices_1.png"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "getting-started"], [1, "filename"], ["app9814fd58407933afe9beaafd5bdca718113ff177", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "patterns"], ["appAnchor", "", "id", "request-response"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.confluent.io/3.0.0/streams/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nats-io/node-nats-streaming"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/microservices/basics#event-based"], ["rel", "nofollow", "target", "_blank", "href", "https://nats.io/"], ["app76f54a1474922ab0e846f8cbfb6c364d5b3b90cb", ""], ["appAnchor", "", "id", "asynchronous-responses"], ["app50c229e41e99b5c5e5380405759df7ad880c91e8", ""], ["appd225a43677bebbecd3aa42e54b56f05271cceab5", ""], ["appAnchor", "", "id", "event-based"], ["app00bba0c5cdba5a14e1292061fb31fb885261d3a8", ""], ["appAnchor", "", "id", "decorators"], ["app411251c3c48d24a4bf7cb21b5db3ad968230bdbf", ""], ["appAnchor", "", "id", "client"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/custom-providers#non-class-based-provider-tokens"], ["routerLink", "/techniques/custom-providers"], ["appe69d6d0bcc93d7904b0b1c9a9d2c47ac17ca87bb", ""], ["appAnchor", "", "id", "sending-messages"], ["appd278c4a9936ed424feb63aa121b1e1ce3e17f39c", ""], ["appAnchor", "", "id", "publishing-events"], ["app39a0606f17efd57a26bfd6af2dff7997a978ac93", ""], ["appAnchor", "", "id", "scopes"], ["routerLink", "/fundamentals/injection-scopes"]], template: function BasicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "In addition to traditional (sometimes called monolithic) application architectures, Nest natively supports the microservice architectural style of development. Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards and interceptors, apply equally to microservices. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets, and Microservices. This section covers the aspects of Nest that are specific to microservices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "In Nest, a microservice is fundamentally an application that uses a different ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " layer than HTTP.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Nest supports several built-in transport layer implementations, called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "transporters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, ", which are responsible for transmitting messages between different microservice instances. Most transporters natively support both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "request-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "event-based");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " message styles. Nest abstracts the implementation details of each transporter behind a canonical interface for both request-response and event-based messaging. This makes it easy to switch from one transport layer to another -- for example to leverage the specific reliability or performance features of a particular transport layer -- without impacting your application code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "To start building microservices, first install the required package:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n$ npm i --save @nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Getting started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "To instantiate a microservice, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "NestFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\nimport { NestFactory } from '@nestjs/core';\nimport { Transport } from '@nestjs/microservices';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.createMicroservice(AppModule, {\n    transport: Transport.TCP,\n  });\n  app.listen(() => console.log('Microservice is listening'));\n}\nbootstrap();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Microservices use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "TCP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " transport layer by default.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "The second argument of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " method is an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " object. This object may consist of two members:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Specifies the transporter (for example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Transport.NATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "A transporter-specific options object that determines transporter behavior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " object is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "TCP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " transporter exposes the properties described below. For other transporters (e.g, Redis, MQTT, etc.), see the relevant chapter for a description of the available options.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Connection hostname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "port");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Connection port");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "retryAttempts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Number of times to retry message (default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "retryDelay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Delay between message retry attempts (ms) (default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Microservices recognize both messages and events by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, ". A pattern is a plain value, for example, a literal object or a string. Patterns are automatically serialized and sent over the network along with the data portion of a message. In this way, message senders and consumers can coordinate which requests are consumed by which handlers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Request-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "The request-response message style is useful when you need to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " messages between various external services. With this paradigm, you can be certain that the service has actually received the message (without the need to manually implement a message ACK protocol). However, the request-response paradigm is not always the best choice. For example, streaming transporters that use log-based persistence, such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "NATS streaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, ", are optimized for solving a different range of issues, more aligned with an event messaging paradigm (see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "event-based messaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " below for more details).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "To enable the request-response message type, Nest creates two logical channels - one is responsible for transferring the data while the other waits for incoming responses. For some underlying transports, such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "NATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, ", this dual-channel support is provided out-of-the-box. For others, Nest compensates by manually creating separate channels. There can be overhead for this, so if you do not require a request-response message style, you should consider using the event-based method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "To create a message handler based on the request-response paradigm use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "@MessagePattern()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " decorator, which is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " package.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](164, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "app-tabs", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "\nimport { Controller } from '@nestjs/common';\nimport { MessagePattern } from '@nestjs/microservices';\n\n@Controller()\nexport class MathController {\n  @MessagePattern({ cmd: 'sum' })\n  accumulate(data: number[]): number {\n    return (data || []).reduce((a, b) => a + b);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "\nimport { Controller } from '@nestjs/common';\nimport { MessagePattern } from '@nestjs/microservices';\n\n@Controller()\nexport class MathController {\n  @MessagePattern({ cmd: 'sum' })\n  accumulate(data) {\n    return (data || []).reduce((a, b) => a + b);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "In the above code, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "accumulate()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "message handler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " listens for messages that fulfill the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " message pattern. The message handler takes a single argument, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " passed from the client. In this case, the data is an array of numbers which are to be accumulated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Asynchronous responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Message handlers are able to respond either synchronously or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "asynchronously");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, ". Hence, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " methods are supported.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "app-tabs", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "\n@MessagePattern({ cmd: 'sum' })\nasync accumulate(data: number[]): Promise<number> {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "\n@MessagePattern({ cmd: 'sum' })\nasync accumulate(data) {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "A message handler is also able to return an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, ", in which case the result values will be emitted until the stream is completed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "app-tabs", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): Observable<number> {\n  return from([1, 2, 3]);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): Observable<number> {\n  return from([1, 2, 3]);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "In the example above, the message handler will respond ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "3 times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " (with each item from the array).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Event-based");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "While the request-response method is ideal for exchanging messages between services, it is less suitable when your message style is event-based - when you just want to publish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, " without waiting for a response. In that case, you do not want the overhead required by request-response for maintaining two channels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Suppose you would like to simply notify another service that a certain condition has occurred in this part of the system. This is the ideal use case for the event-based message style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "To create an event handler, we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "@EventPattern()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " decorator, which is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " package.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](244, "app-tabs", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "\n@EventPattern('user_created')\nasync handleUserCreated(data: Record<string, unknown>) {\n  // business logic\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "\n@EventPattern('user_created')\nasync handleUserCreated(data) {\n  // business logic\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "handleUserCreated()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "event handler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " listens for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "'user_created'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, " event. The event handler takes a single argument, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, " passed from the client (in this case, an event payload which has been sent over the network).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](266, "app-banner-enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Decorators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "In more sophisticated scenarios, you may want to access more information about the incoming request. For example, in the case of NATS with wildcard subscriptions, you may want to get the original subject that the producer has sent the message to. Likewise, in Kafka you may want to access the message headers. In order to accomplish that, you can use built-in decorators as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](273, "app-tabs", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "\n@MessagePattern('time.us.*')\ngetDate(@Payload() data: number[], @Ctx() context: NatsContext) {\n  console.log(`Subject: ${context.getSubject()}`); // e.g. \"time.us.east\"\n  return new Date().toLocaleTimeString(...);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "\n@Bind(Payload(), Ctx())\n@MessagePattern('time.us.*')\ngetDate(data, context) {\n  console.log(`Subject: ${context.getSubject()}`); // e.g. \"time.us.east\"\n  return new Date().toLocaleTimeString(...);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "NatsContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, " are imported from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "A client Nest application can exchange messages or publish events to a Nest microservice using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, " class. This class defines several methods, such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, " (for request-response messaging) and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "emit()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, " (for event-driven messaging) that let you communicate with a remote microservice. Obtain an instance of this class in one of the following ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "One technique is to import the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, ", which exposes the static ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, " method. This method takes an argument which is an array of objects representing microservice transporters. Each such object has a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, " property, an optional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, " property (default is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Transport.TCP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "), and an optional transporter-specific ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, " property serves as an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "injection token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, " that can be used to inject an instance of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " where needed. The value of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, " property, as an injection token, can be an arbitrary string or JavaScript symbol, as described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, " property is an object with the same properties we saw in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, " method earlier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      { name: 'MATH_SERVICE', transport: Transport.TCP },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "Once the module has been imported, we can inject an instance of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, " configured as specified via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "'MATH_SERVICE'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, " transporter options shown above, using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "@Inject()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, " decorator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "\nconstructor(\n  @Inject('MATH_SERVICE') private readonly client: ClientProxy,\n) {}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, " classes are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "At times we may need to fetch the transporter configuration from another service (say a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "ConfigService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "), rather than hard-coding it in our client application. To do this, we can register a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "custom provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, " class. This class has a static ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "create()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, " method, which accepts a transporter options object, and returns a customized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "\n@Module({\n  providers: [\n    {\n      provide: 'MATH_SERVICE',\n      useFactory: (configService: ConfigService) => {\n        const mathSvcOptions = configService.getMathSvcOptions();\n        return ClientProxyFactory.create(mathSvcOptions);\n      },\n      inject: [ConfigService],\n    }\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, " is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "Another option is to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, " property decorator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "\n@Client({ transport: Transport.TCP })\nclient: ClientProxy;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, " decorator is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, " decorator is not the preferred technique, as it is harder to test and harder to share a client instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "lazy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, ". It doesn't initiate a connection immediately. Instead, it will be established before the first microservice call, and then reused across each subsequent call. However, if you want to delay the application bootstrapping process until a connection is established, you can manually initiate a connection using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, " object's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "connect()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, " method inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "OnApplicationBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, " lifecycle hook.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](456, "app-tabs", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "\nasync onApplicationBootstrap() {\n  await this.client.connect();\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "If the connection cannot be created, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "connect()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, " method will reject with the corresponding error object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "Sending messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, " exposes a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, " method. This method is intended to call the microservice and returns an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, " with its response. Thus, we can subscribe to the emitted values easily.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](481, "app-tabs", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "\naccumulate(): Observable<number> {\n  const pattern = { cmd: 'sum' };\n  const payload = [1, 2, 3];\n  return this.client.send<number>(pattern, payload);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](488, "\naccumulate() {\n  const pattern = { cmd: 'sum' };\n  const payload = [1, 2, 3];\n  return this.client.send(pattern, payload);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, " method takes two arguments, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "payload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, " should match one defined in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "@MessagePattern()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, " decorator. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "payload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, " is a message that we want to transmit to the remote microservice. This method returns a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "cold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, ", which means that you have to explicitly subscribe to it before the message will be sent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, "Publishing events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "To send an event, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, " object's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "emit()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, " method. This method publishes an event to the message broker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "app-tabs", null, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "\nasync publish() {\n  this.client.emit<number>('user_created', new UserCreatedEvent());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "\nasync publish() {\n  this.client.emit('user_created', new UserCreatedEvent());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, "emit()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, " method takes two arguments, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, "payload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](547, "should match one defined in an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](549, "@EventPattern()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, " decorator. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "payload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, " is an event payload that we want to transmit to the remote microservice. This method returns a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "hot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, " (unlike the cold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](561, " returned by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](564, "), which means that whether or not you explicitly subscribe to the observable, the proxy will immediately try to deliver the event.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](566, "app-banner-shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Scopes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "For people coming from different programming language backgrounds, it might be unexpected to learn that in Nest, almost everything is shared across incoming requests. We have a connection pool to the database, singleton services with global state, etc. Remember that Node.js doesn't follow the request/response Multi-Threaded Stateless Model in which every request is processed by a separate thread. Hence, using singleton instances is fully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, " for our applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "However, there are edge-cases when request-based lifetime of the handler may be the desired behavior, for instance per-request caching in GraphQL applications, request tracking or multi-tenancy. Learn how to control scopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "Request-scoped handlers and providers can inject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, "RequestContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](586, "@Inject()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, " decorator in combination with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "CONTEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, " token:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "\nimport { Injectable, Scope, Inject } from '@nestjs/common';\nimport { CONTEXT, RequestContext } from '@nestjs/microservices';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class CatsService {\n  constructor(@Inject(CONTEXT) private readonly ctx: RequestContext) {}\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "This provides access to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "RequestContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, " object, which has two properties:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, "\nexport interface RequestContext<T = any> {\n  pattern: string | Record<string, any>;\n  data: T;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](603, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](606, " property is the message payload sent by the message producer. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, " property is the pattern used to identify an appropriate handler to handle the incoming message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](50);
        const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](166);
        const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](199);
        const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](213);
        const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](245);
        const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](274);
        const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](482);
        const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](48, 32, "main", _r257.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](164, 35, "math.controller", _r258.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r258.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r258.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", "{", " cmd: 'sum' ", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r259.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r259.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r260.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r260.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r261.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r261.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r262.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r262.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r264.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r264.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r265.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r265.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__["BannerEnterpriseComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__["BannerShopComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_7__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??BasicsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](BasicsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basics',
                templateUrl: './basics.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/custom-transport/custom-transport.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/custom-transport/custom-transport.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomTransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTransportComponent", function() { return CustomTransportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class CustomTransportComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
    get rabbitMqServer() {
        return `
import * as amqp from 'amqplib';
import { Server, CustomTransportStrategy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export class RabbitMQServer extends Server implements CustomTransportStrategy {
    private server: amqp.Connection = null;
    private channel: amqp.Channel = null;

    constructor(
      private readonly host: string,
      private readonly queue: string) {
        super();
      }

  public async listen(callback: () => void) {
    await this.init();
    this.channel.consume(\`\${this.queue}_sub\`, this.handleMessage.bind(this), {
      noAck: true,
    });
  }

  public close() {
    this.channel && this.channel.close();
    this.server && this.server.close();
  }

  private async handleMessage(message) {
    const { content } = message;
    const messageObj = JSON.parse(content.toString());

    const handlers = this.getHandlers();
    const pattern = JSON.stringify(messageObj.pattern);
    if (!this.messageHandlers[pattern]) {
        return;
    }

    const handler = this.messageHandlers[pattern];
    const response$ = this.transformToObservable(await handler(messageObj.data)) as Observable<any>;
    response$ && this.send(response$, (data) => this.sendMessage(data));
  }

  private sendMessage(message) {
    const buffer = Buffer.from(JSON.stringify(message));
    this.channel.sendToQueue(\`\${this.queue}_pub\`, buffer);
  }

  private async init() {
    this.server = await amqp.connect(this.host);
    this.channel = await this.server.createChannel();
    this.channel.assertQueue(\`\${this.queue}_sub\`, { durable: false });
    this.channel.assertQueue(\`\${this.queue}_pub\`, { durable: false });
  }
}`;
    }
    get rabbitMqServerJs() {
        return `
import * as amqp from 'amqplib';
import { Server } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export class RabbitMQServer extends Server {
    constructor(host, queue) {
      super();

      this.host = host;
      this.queue = queue;
      this.server = null;
      this.channel = null;
    }

  async listen(callback) {
    await this.init();
    this.channel.consume(\`\${this.queue}_sub\`, this.handleMessage.bind(this), {
      noAck: true,
    });
  }

  close() {
    this.channel && this.channel.close();
    this.server && this.server.close();
  }

  async handleMessage(message) {
    const { content } = message;
    const messageObj = JSON.parse(content.toString());

    const handlers = this.getHandlers();
    const pattern = JSON.stringify(messageObj.pattern);
    if (!this.messageHandlers[pattern]) {
        return;
    }

    const handler = this.messageHandlers[pattern];
    const response$ = this.transformToObservable(await handler(messageObj.data));
    response$ && this.send(response$, (data) => this.sendMessage(data));
  }

  sendMessage(message) {
    const buffer = Buffer.from(JSON.stringify(message));
    this.channel.sendToQueue(\`\${this.queue}_pub\`, buffer);
  }

  async init() {
    this.server = await amqp.connect(this.host);
    this.channel = await this.server.createChannel();
    this.channel.assertQueue(\`\${this.queue}_sub\`, { durable: false });
    this.channel.assertQueue(\`\${this.queue}_pub\`, { durable: false });
  }
}`;
    }
    get setupServer() {
        return `
const app = await NestFactory.createMicroservice(ApplicationModule, {
    strategy: new RabbitMQServer('amqp://localhost', 'channel'),
});`;
    }
    get rabbitMqClient() {
        return `
import * as amqp from 'amqplib';
import { ClientProxy } from '@nestjs/microservices';

export class RabbitMQClient extends ClientProxy {
  constructor(
    private readonly host: string,
    private readonly queue: string) {
      super();
    }

  protected async sendSingleMessage(messageObj, callback: (err, result, disposed?: boolean) => void) {
    const server = await amqp.connect(this.host);
    const channel = await server.createChannel();

    const { sub, pub } = this.getQueues();
    channel.assertQueue(sub, { durable: false });
    channel.assertQueue(pub, { durable: false });

    channel.consume(pub, (message) => this.handleMessage(message, server, callback), { noAck: true });
    channel.sendToQueue(sub, Buffer.from(JSON.stringify(messageObj)));
  }

  private handleMessage(message, server, callback: (err, result, disposed?: boolean) => void) {
    const { content } = message;
    const { err, response, disposed } = JSON.parse(content.toString());
    if (disposed) {
        server.close();
    }
    callback(err, response, disposed);
  }

  private getQueues() {
    return { pub: \`\${this.queue}_pub\`, sub: \`\${this.queue}_sub\` };
  }
}`;
    }
    get rabbitMqClientJs() {
        return `
import * as amqp from 'amqplib';
import { ClientProxy } from '@nestjs/microservices';

export class RabbitMQClient extends ClientProxy {
  constructor(host, queue) {
      super();

      this.host = host;
      this.queue = queue;
    }

  async sendSingleMessage(messageObj, callback) {
    const server = await amqp.connect(this.host);
    const channel = await server.createChannel();

    const { sub, pub } = this.getQueues();
    channel.assertQueue(sub, { durable: false });
    channel.assertQueue(pub, { durable: false });

    channel.consume(pub, (message) => this.handleMessage(message, server, callback), { noAck: true });
    channel.sendToQueue(sub, Buffer.from(JSON.stringify(messageObj)));
  }

  handleMessage(message, server, callback) {
    const { content } = message;
    const { err, response, disposed } = JSON.parse(content.toString());
    if (disposed) {
        server.close();
    }
    callback(err, response, disposed);
  }

  getQueues() {
    return { pub: \`\${this.queue}_pub\`, sub: \`\${this.queue}_sub\` };
  }
}`;
    }
    get rabbitMqClientNew() {
        return `
this.client = new RabbitMQClient('amqp://localhost', 'example');`;
    }
}
CustomTransportComponent.??fac = function CustomTransportComponent_Factory(t) { return ??CustomTransportComponent_BaseFactory(t || CustomTransportComponent); };
CustomTransportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomTransportComponent, selectors: [["app-custom-transport"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 116, vars: 26, consts: [[1, "content"], ["href", "https://www.rabbitmq.com/", "target", "_blank", "rel", "nofollow"], ["href", "https://github.com/squaremo/amqp.node", "rel", "nofollow", "target", "_blank"], [1, "filename"], ["rabbitMqServerT", ""], [1, "language-typescript"], ["setupServerT", ""], ["rabbitMqClientT", ""], [1, "warning"], ["routerLink", "/fundamentals/dependency-injection"]], template: function CustomTransportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Custom Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " The Nest has a built-in transport via TCP and Redis, but other communication schemes can be implemented with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CustomTransportStrategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " interface. For demonstration purposes, we're going to port the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "RabbitMQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " transport strategy using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "ampqlib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " library. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Let's start from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "RabbitMQServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " which will match incoming messages to the right message handlers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "app-tabs", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "CustomTransportStrategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " forces to implement two fundamental methods - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "listen()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "close()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, ". Moreover, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "RabbitMQServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " shall extends the abstract ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " class. This class supplies the core ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "getHandlers()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " methods, and helper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "transformToObservable()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " The last step is to set up the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "RabbitMQServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "app-tabs", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "RabbitMQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " server's listening to messages. Now it's time to create a client class, which shall extends the abstract ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " class. To make it work, we only have to override ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "sendSingleMessage()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](86, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tabs", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Earlier, the Nest was responsible for creating the instance of the client class. We've been using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " decorator. Now, when we've created our own solution, we can just create the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "RabbitMQClient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " instance directly, using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " operator. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "blockquote", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " To make unit testing easy, you can provide a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "custom component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " instead of creating the instance directly in the class body. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);
        const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](67);
        const _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](23, 17, "rabbitmq-server", _r266.isJsActive), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r266.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.rabbitMqServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r266.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.rabbitMqServerJs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](65, 20, "main", _r267.isJsActive), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.setupServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](86, 23, "rabbitmq-client", _r268.isJsActive), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r268.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.rabbitMqClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r268.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.rabbitMqClientJs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.rabbitMqClientNew);
    } }, directives: [_shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??CustomTransportComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CustomTransportComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomTransportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-transport',
                templateUrl: './custom-transport.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/exception-filters/exception-filters.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/exception-filters/exception-filters.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MicroservicesExceptionFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesExceptionFiltersComponent", function() { return MicroservicesExceptionFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");







class MicroservicesExceptionFiltersComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MicroservicesExceptionFiltersComponent.??fac = function MicroservicesExceptionFiltersComponent_Factory(t) { return ??MicroservicesExceptionFiltersComponent_BaseFactory(t || MicroservicesExceptionFiltersComponent); };
MicroservicesExceptionFiltersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MicroservicesExceptionFiltersComponent, selectors: [["app-exception-filters"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 112, vars: 16, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/exception-filters.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "exception-filters"], ["routerLink", "/exception-filters"], [1, "language-typescript"], [1, "info"], [1, "language-json"], ["appAnchor", "", "id", "filters"], [1, "filename"], ["appaf77c2dd20129ad4becc57d7da657de7ec7786b0", ""], [1, ""], ["routerLink", "/faq/hybrid-application"], ["appb2707abbd77e2a273451f02fca88d18976070fb5", ""], ["appAnchor", "", "id", "inheritance"], ["app5310164009d0c1987f39bb393bf57cddb02e6d85", ""]], template: function MicroservicesExceptionFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Exception filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The only difference between the HTTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "exception filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " layer and the corresponding microservices layer is that instead of throwing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nthrow new RpcException('Invalid credentials.');");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "blockquote", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " class is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "With the sample above, Nest will handle the thrown exception and return the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " object with the following structure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n{\n  \"status\": \"error\",\n  \"message\": \"Invalid credentials.\"\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Microservice exception filters behave similarly to HTTP exception filters, with one small difference. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "catch()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " method must return an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](52, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-tabs", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\nimport { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';\nimport { Observable, throwError } from 'rxjs';\nimport { RpcException } from '@nestjs/microservices';\n\n@Catch(RpcException)\nexport class ExceptionFilter implements RpcExceptionFilter<RpcException> {\n  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {\n    return throwError(exception.getError());\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\nimport { Catch } from '@nestjs/common';\nimport { throwError } from 'rxjs';\n\n@Catch(RpcException)\nexport class ExceptionFilter {\n  catch(exception, host) {\n    return throwError(exception.getError());\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " You cannot set up global microservice exception filters when using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "hybrid application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "The following example uses a manually instantiated method-scoped filter. Just as with HTTP based applications, you can also use controller-scoped filters (i.e., prefix the controller class with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "@UseFilters()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " decorator).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "app-tabs", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "\n@UseFilters(new ExceptionFilter())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): number {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "\n@UseFilters(new ExceptionFilter())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data) {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Inheritance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Typically, you'll create fully customized exception filters crafted to fulfill your application requirements. However, there might be use-cases when you would like to simply extend the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "core exception filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, ", and override the behavior based on certain factors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "In order to delegate exception processing to the base filter, you need to extend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "BaseExceptionFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " and call the inherited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "catch()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "app-tabs", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\nimport { Catch, ArgumentsHost } from '@nestjs/common';\nimport { BaseRpcExceptionFilter } from '@nestjs/microservices';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseRpcExceptionFilter {\n  catch(exception: any, host: ArgumentsHost) {\n    return super.catch(exception, host);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\nimport { Catch } from '@nestjs/common';\nimport { BaseRpcExceptionFilter } from '@nestjs/microservices';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseRpcExceptionFilter {\n  catch(exception, host) {\n    return super.catch(exception, host);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "The above implementation is just a shell demonstrating the approach. Your implementation of the extended exception filter would include your tailored ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "business logic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " (e.g., handling various conditions).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);
        const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](75);
        const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](52, 13, "rpc-exception.filter", _r270.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r270.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r270.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r271.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r271.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r272.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r272.isJsActive);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??MicroservicesExceptionFiltersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MicroservicesExceptionFiltersComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MicroservicesExceptionFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exception-filters',
                templateUrl: './exception-filters.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/grpc/grpc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/grpc/grpc.component.ts ***!
  \*********************************************************************/
/*! exports provided: GrpcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrpcComponent", function() { return GrpcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */ "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");







class GrpcComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
GrpcComponent.??fac = function GrpcComponent_Factory(t) { return ??GrpcComponent_BaseFactory(t || GrpcComponent); };
GrpcComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GrpcComponent, selectors: [["app-grpc"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 681, vars: 36, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/grpc.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "grpc"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/grpc/grpc-node"], ["href", "https://developers.google.com/protocol-buffers"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], ["href", "microservices/grpc#options"], [1, "filename"], ["app46aa2637a854346ebf6b1c0fad2aebd1444b1bca", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["href", "https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md", "rel", "nofollow", "target", "_blank"], ["href", "https://grpc.io/grpc/node/grpc.ServerCredentials.html", "rel", "nofollow", "target", "_blank"], ["appAnchor", "", "id", "sample-grpc-service"], ["href", "microservices/basics#request-response"], ["app58383c95148359f60b7793d3e2b63383d317b9dc", ""], ["app2e8d1cc587913cde273ff9d8b43899d9328fdd20", ""], ["appc0e8bdc15fd1835784e0cec83aa526147f6a3f0f", ""], ["appAnchor", "", "id", "client"], ["href", "/microservices/basics#client"], ["app02c6b8e8c207f3cf41ab906ed49cfe4b953aff7a", ""], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/04-grpc"], ["appAnchor", "", "id", "grpc-streaming"], ["rel", "nofollow", "target", "_blank", "href", "https://grpc.io/docs/guides/concepts/"], ["appAnchor", "", "id", "streaming-sample"], ["appAnchor", "", "id", "subject-strategy"], ["appAnchor", "", "id", "call-stream-handler"], ["rel", "nofollow", "target", "_blank", "href", "https://grpc.github.io/grpc/node/grpc-ClientDuplexStream.html"], ["rel", "nofollow", "target", "_blank", "href", "https://grpc.github.io/grpc/node/grpc-ServerReadableStream.html"]], template: function GrpcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "gRPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "gRPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is a modern, open source, high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Like many RPC systems, gRPC is based on the concept of defining a service in terms of functions (methods) that can be called remotely. For each method, you define the parameters and return types. Services, parameters, and return types are defined in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " files using Google's open source language-neutral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "protocol buffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " mechanism.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "With the gRPC transporter, Nest uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " files to dynamically bind clients and servers to make it easy to implement remote procedure calls, automatically serializing and deserializing structured data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "To start building gRPC-based microservices, first install the required packages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n$ npm i --save grpc @grpc/proto-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Like other Nest microservices transport layer implementations, you select the gRPC transporter mechanism using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " property of the options object passed to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " method. In the following example, we'll set up a hero service. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " property provides metadata about that service; its properties are described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "app-tabs", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "\nconst app = await NestFactory.createMicroservice(AppModule, {\n  transport: Transport.GRPC,\n  options: {\n    package: 'hero',\n    protoPath: join(__dirname, 'hero/hero.proto'),\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "join()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " function is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " package; the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "gRPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " transporter options object exposes the properties described below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Protobuf package name (matches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " setting from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " file). Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "protoPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Absolute (or relative to the root dir) path to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " file. Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Connection url. String in the format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "ip address/dns name:port");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " (for example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "'localhost:50051'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, ") defining the address/port on which the transporter establishes a connection. Optional. Defaults to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "'localhost:5000'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "protoLoader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "NPM package name for the utility to load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " files. Optional. Defaults to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "'@grpc/proto-loader'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "@grpc/proto-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " options. These provide detailed control over the behavior of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " files. Optional. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " for more details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " Server credentials. Optional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Read more here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Sample gRPC service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Let's define our sample gRPC service called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, ". In the above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " object, the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "protoPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " property sets a path to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " definitions file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "hero.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "hero.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " file is structured using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "protocol buffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, ". Here's what it looks like:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "\n// hero/hero.proto\nsyntax = \"proto3\";\n\npackage hero;\n\nservice HeroService {\n  rpc FindOne (HeroById) returns (Hero) {}\n}\n\nmessage HeroById {\n  int32 id = 1;\n}\n\nmessage Hero {\n  int32 id = 1;\n  string name = 2;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " exposes a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "FindOne()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " method. This method expects an input argument of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "HeroById");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " and returns a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " message (protocol buffers use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " elements to define both parameter types and return types).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Next, we need to implement the service. To define a handler that fulfills this definition, we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "@GrpcMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " decorator in a controller, as shown below. This decorator provides the metadata needed to declare a method as a gRPC service method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "@MessagePattern()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, " decorator (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, ") introduced in previous microservices chapters is not used with gRPC-based microservices. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "@GrpcMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " decorator effectively takes its place for gRPC-based microservices.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](216, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "app-tabs", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\n@Controller()\nexport class HeroController {\n  @GrpcMethod('HeroService', 'FindOne')\n  findOne(data: HeroById, metadata: any): Hero {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "\n@Controller()\nexport class HeroController {\n  @GrpcMethod('HeroService', 'FindOne')\n  findOne(data, metadata) {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "@GrpcMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " decorator is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "The decorator shown above takes two arguments. The first is the service name (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "'HeroService'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "), corresponding to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " service definition in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "hero.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, ". The second (the string ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "'FindOne'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, ") corresponds to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "FindOne()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " rpc method defined within ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, " in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "hero.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, " file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "findOne()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, " handler method takes two arguments, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, " passed from the caller and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, " that stores gRPC request metadata.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "@GrpcMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, " decorator arguments are optional. If called without the second argument (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "'FindOne'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "), Nest will automatically associate the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " file rpc method with the handler based on converting the handler name to upper camel case (e.g., the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "findOne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " handler is associated with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "FindOne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, " rpc call definition). This is shown below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](288, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](289, "app-tabs", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "\n@Controller()\nexport class HeroController {\n  @GrpcMethod('HeroService')\n  findOne(data: HeroById, metadata: any): Hero {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "\n@Controller()\nexport class HeroController {\n  @GrpcMethod('HeroService')\n  findOne(data, metadata) {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "You can also omit the first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "@GrpcMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, " argument. In this case, Nest automatically associates the handler with the service definition from the proto definitions file based on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, " name where the handler is defined. For example, in the following code, class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, " associates its handler methods with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " service definition in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "hero.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, " file based on the matching of the name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "'HeroService'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](319, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "app-tabs", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "\n@Controller()\nexport class HeroService {\n  @GrpcMethod()\n  findOne(data: HeroById, metadata: any): Hero {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "\n@Controller()\nexport class HeroService {\n  @GrpcMethod()\n  findOne(data, metadata) {\n    const items = [\n      { id: 1, name: 'John' },\n      { id: 2, name: 'Doe' },\n    ];\n    return items.find(({ id }) => id === data.id);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "Nest applications can act as gRPC clients, consuming services defined in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, " files. You access remote services through a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, " object. You can obtain a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, " object in several ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "The preferred technique is to import the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, ". Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, " method to bind a package of services defined in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, " file to an injection token, and to configure the service. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " property is the injection token. For gRPC services, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "transport: Transport.GRPC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, " property is an object with the same properties described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "\nimports: [\n  ClientsModule.register([\n    {\n      name: 'HERO_PACKAGE',\n      transport: Transport.GRPC,\n      options: {\n        package: 'hero',\n        protoPath: join(__dirname, 'hero/hero.proto'),\n      },\n    },\n  ]),\n];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, " method takes an array of objects. Register multiple packages by providing a comma separated list of registration objects.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "Once registered, we can inject the configured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, " object with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "@Inject()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, ". Then we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, " object's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "getService()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, " method to retrieve the service instance, as shown below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "\n@Injectable()\nexport class AppService implements OnModuleInit {\n  private heroService: HeroService;\n\n  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}\n\n  onModuleInit() {\n    this.heroService = this.client.getService<HeroService>('HeroService');\n  }\n\n  getHero(): Observable<string> {\n    return this.heroService.findOne({ id: 1 });\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Notice that there is a small difference compared to the technique used in other microservice transport methods. Instead of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " class, we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, " class, which provides the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "getService()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, " method. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "getService()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, " generic method takes a service name as an argument and returns its instance (if available).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Alternatively, you can use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, " decorator to instantiate a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "ClientGrpc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, " object, as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "\n@Injectable()\nexport class AppService implements OnModuleInit {\n  @Client({\n    transport: Transport.GRPC,\n    options: {\n      package: 'hero',\n      protoPath: join(__dirname, 'hero/hero.proto'),\n    },\n  })\n  client: ClientGrpc;\n\n  private heroService: HeroService;\n\n  onModuleInit() {\n    this.heroService = this.client.getService<HeroService>('HeroService');\n  }\n\n  getHero(): Observable<string> {\n    return this.heroService.findOne({ id: 1 });\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "Finally, for more complex scenarios, we can inject a dynamically configured client using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, " class as described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "In either case, we end up with a reference to our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, " proxy object, which exposes the same set of methods that are defined inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, " file. Now, when we access this proxy object (i.e., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "heroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "), the gRPC system automatically serializes requests, forwards them to the remote system, returns a response, and deserializes the response. Because gRPC shields us from these network communication details, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "heroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, " looks and acts like a local provider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "Note, all service methods are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "lower camel cased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, " (in order to follow the natural convention of the language). So, for example, while our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, " file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "HeroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, " definition contains the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "FindOne()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, " function, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "heroService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, " instance will provide the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "findOne()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "\ninterface HeroService {\n  findOne(data: { id: number }): Observable<any>;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "A message handler is also able to return an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, ", in which case the result values will be emitted until the stream is completed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](469, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](470, "app-tabs", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, "\n@Get()\ncall(): Observable<any> {\n  return this.heroService.findOne({ id: 1 });\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "\n@Get()\ncall() {\n  return this.heroService.findOne({ id: 1 });\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "A full working example is available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "gRPC Streaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "gRPC on its own supports long-term live connections, conventionally known as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "streams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, ". Streams are useful for cases such as Chatting, Observations or Chunk-data transfers. Find more details in the official documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "Nest supports GRPC stream handlers in two possible ways:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "RxJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, " handler: can be useful to write responses right inside of a Controller method or to be passed down to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, " consumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "Pure GRPC call stream handler: can be useful to be passed to some executor which will handle the rest of dispatch for the Node standard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "Duplex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, " stream handler.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](517, "app-banner-enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "Streaming sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, "Let's define a new sample gRPC service called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "HelloService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "hello.proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, " file is structured using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "protocol buffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](531, ". Here's what it looks like:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "\n// hello/hello.proto\nsyntax = \"proto3\";\n\npackage hello;\n\nservice HelloService {\n  rpc BidiHello(stream HelloRequest) returns (stream HelloResponse)\n  rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse)\n}\n\nmessage HelloRequest {\n  string greeting = 1;\n}\n\nmessage HelloResponse {\n  string reply = 1;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "LotsOfGreetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, " method can be simply implemented with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, "@GrpcMethod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, " decorator (as in the examples above) since the returned stream can emit multiple values.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Based on this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](549, " file, let's define the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "HelloService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, " interface:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "\ninterface HelloService {\n  bidiHello(upstream: Observable<HelloRequest>): Observable<HelloResponse>;\n  lotsOfGreetings(\n    upstream: Observable<HelloRequest>,\n  ): Observable<HelloResponse>;\n}\n\ninterface HelloRequest {\n  greeting: string;\n}\n\ninterface HelloResponse {\n  reply: string;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Subject strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "@GrpcStreamMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, " decorator provides the function parameter as an RxJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](566, ". Thus, we can receive and process multiple messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "\n@GrpcStreamMethod()\nbidiHello(messages: Observable<any>): Observable<any> {\n  const subject = new Subject();\n\n  const onNext = message => {\n    console.log(message);\n    subject.next({\n      reply: 'Hello, world!'\n    });\n  };\n  const onComplete = () => subject.complete();\n  messages.subscribe(onNext, null, onComplete);\n\n  return subject.asObservable();\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, " For supporting full-duplex interaction with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](575, "@GrpcStreamMethod()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, " decorator, the controller method must return an RxJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "According to the service definition (in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, ".proto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, " file), the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](586, "BidiHello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, " method should stream requests to the service. To send multiple asynchronous messages to the stream from a client, we leverage an RxJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "ReplySubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, " class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "\nconst helloService = this.client.getService<HelloService>('HelloService');\nconst helloRequest$ = new ReplySubject<HelloRequest>();\n\nhelloRequest$.next({ greeting: 'Hello (1)!' });\nhelloRequest$.next({ greeting: 'Hello (2)!' });\nhelloRequest$.complete();\n\nreturn helloService.bidiHello(helloRequest$);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "In the example above, we wrote two messages to the stream (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "next()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, " calls) and notified the service that we've completed sending the data (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, "complete()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, " call).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "Call stream handler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](606, "When the method return value is defined as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, ", the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "@GrpcStreamCall()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](612, " decorator provides the function parameter as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "grpc.ServerDuplexStream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](615, ", which supports standard methods like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, ".on('data', callback)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, ".write(message)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, ".cancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, ". Full documentation on available methods can be found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](629, "Alternatively, when the method return value is not a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](631, "stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](632, ", the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, "@GrpcStreamCall()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, " decorator provides two function parameters, respectively ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](637, "grpc.ServerReadableStream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, " (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](640, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](641, ") and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](644, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Let's start with implementing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](648, "BidiHello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, " which should support a full-duplex interaction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "\n@GrpcStreamCall()\nbidiHello(requestStream: any) {\n  requestStream.on('data', message => {\n    console.log(message);\n    requestStream.write({\n      reply: 'Hello, world!'\n    });\n  });\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](654, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](655, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, " This decorator does not require any specific return parameter to be provided. It is expected that the stream will be handled similar to any other standard stream type.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](658, "In the example above, we used the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, "write()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](661, " method to write objects to the response stream. The callback passed into the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, ".on()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](664, " method as a second parameter will be called every time our service receives a new chunk of data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "Let's implement the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](668, "LotsOfGreetings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](669, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](671, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](672, "\n@GrpcStreamCall()\nlotsOfGreetings(requestStream: any, callback: (err: unknown, value: HelloResponse) => void) {\n  requestStream.on('data', message => {\n    console.log(message);\n  });\n  requestStream.on('end', () => callback(null, { reply: 'Hello, world!' }));\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](674, "Here we used the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, "callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](677, " function to send the response once processing of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679, "requestStream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](680, " has been completed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](53);
        const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](218);
        const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](290);
        const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](321);
        const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](471);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](51, 21, "main", _r274.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](216, 24, "hero.controller", _r275.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r275.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r275.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](288, 27, "hero.controller", _r276.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r276.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r276.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](319, 30, "hero.controller", _r277.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r277.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r277.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](469, 33, "hero.controller", _r278.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r278.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r278.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__["BannerEnterpriseComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??GrpcComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](GrpcComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GrpcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grpc',
                templateUrl: './grpc.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/guards/guards.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/guards/guards.component.ts ***!
  \*************************************************************************/
/*! exports provided: MicroservicesGuardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesGuardsComponent", function() { return MicroservicesGuardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");






class MicroservicesGuardsComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MicroservicesGuardsComponent.??fac = function MicroservicesGuardsComponent_Factory(t) { return ??MicroservicesGuardsComponent_BaseFactory(t || MicroservicesGuardsComponent); };
MicroservicesGuardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MicroservicesGuardsComponent, selectors: [["app-guards"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 45, vars: 4, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/guards.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "guards"], ["routerLink", "/guards"], [1, "info"], ["appAnchor", "", "id", "binding-guards"], [1, "filename"], ["app979e9b9dfc05bdb0535cffdee9d1ec230062f6bb", ""], [1, "language-typescript"]], template: function MicroservicesGuardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no fundamental difference between microservices guards and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular HTTP application guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ".\nThe only difference is that instead of throwing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "blockquote", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " class is exposed from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Binding guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "The following example uses a method-scoped guard. Just as with HTTP based applications, you can also use controller-scoped guards (i.e., prefix the controller class with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "@UseGuards()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " decorator).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-tabs", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n@UseGuards(AuthGuard)\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): number {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n@UseGuards(AuthGuard)\n@MessagePattern({ cmd: 'sum' })\naccumulate(data) {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r280.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r280.isJsActive);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]], encapsulation: 2, changeDetection: 0 });
const ??MicroservicesGuardsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MicroservicesGuardsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MicroservicesGuardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guards',
                templateUrl: './guards.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/interceptors/interceptors.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/interceptors/interceptors.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MicroservicesInterceptorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesInterceptorsComponent", function() { return MicroservicesInterceptorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");





class MicroservicesInterceptorsComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MicroservicesInterceptorsComponent.??fac = function MicroservicesInterceptorsComponent_Factory(t) { return ??MicroservicesInterceptorsComponent_BaseFactory(t || MicroservicesInterceptorsComponent); };
MicroservicesInterceptorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MicroservicesInterceptorsComponent, selectors: [["app-interceptors"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 24, vars: 4, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/interceptors.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "interceptors"], ["routerLink", "/interceptors"], [1, "filename"], ["app00f371b1832935d1e04b35e9466620e0cb876fe4", ""], [1, "language-typescript"]], template: function MicroservicesInterceptorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Interceptors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no difference between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular interceptors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and microservices interceptors. The following example uses a manually instantiated method-scoped interceptor. Just as with HTTP based applications, you can also use controller-scoped interceptors (i.e., prefix the controller class with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "@UseInterceptors()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " decorator).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-tabs", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n@UseInterceptors(new TransformInterceptor())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): number {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n@UseInterceptors(new TransformInterceptor())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data) {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r282.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r282.isJsActive);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], encapsulation: 2, changeDetection: 0 });
const ??MicroservicesInterceptorsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MicroservicesInterceptorsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MicroservicesInterceptorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interceptors',
                templateUrl: './interceptors.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/kafka/kafka.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/kafka/kafka.component.ts ***!
  \***********************************************************************/
/*! exports provided: KafkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafkaComponent", function() { return KafkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class KafkaComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
KafkaComponent.??fac = function KafkaComponent_Factory(t) { return ??KafkaComponent_BaseFactory(t || KafkaComponent); };
KafkaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: KafkaComponent, selectors: [["app-kafka"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 501, vars: 44, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/kafka.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "kafka"], ["rel", "nofollow", "target", "_blank", "href", "https://kafka.apache.org/"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], [1, "filename"], ["app7371455fdce0e6e343e46b7dbdbe204edfd65550", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["href", "https://kafka.js.org/docs/configuration", "rel", "nofollow", "target", "blank"], ["href", "https://kafka.js.org/docs/consuming#a-name-options-a-options", "rel", "nofollow", "target", "blank"], ["href", "https://kafka.js.org/docs/consuming", "rel", "nofollow", "target", "blank"], ["href", "https://kafka.js.org/docs/consuming#frombeginning", "rel", "nofollow", "target", "blank"], ["href", "https://kafka.js.org/docs/producing#options", "rel", "nofollow", "target", "blank"], ["appAnchor", "", "id", "client"], ["href", "https://docs.nestjs.com/microservices/basics#client"], ["appAnchor", "", "id", "message-response-subscription"], ["app3542c377bdb740f8014003555d218d614d6e11ea", ""], ["app81d29d6fc4408a33ffafa1cc30cf700b7938efdc", ""], ["appAnchor", "", "id", "message-pattern"], ["rel", "nofollow", "target", "_blank", "href", "https://www.enterpriseintegrationpatterns.com/patterns/messaging/ReturnAddress.html"], ["rel", "nofollow", "target", "_blank", "href", "https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html"], ["appAnchor", "", "id", "incoming"], ["appAnchor", "", "id", "outgoing"], ["appcc9a740c48b073bfeb0abffb961a2fda394182d9", ""], ["rel", "nofollow", "target", "_blank", "href", "https://docs.confluent.io/current/ksql/docs/developer-guide/partition-data.html#co-partitioning-requirements"], ["appb2548cf1e1f6dd3f440a8ed1c7fd3bcfec5e9e5d", ""], ["app1a2806c4e1fe0362e23db9479166a21db01ef388", ""], ["appAnchor", "", "id", "context"], ["app75f741f011145eb2716e2daf3fe1d7ed1d7c2563", ""], ["app8bfa60cb015012fca30b57df0480ff1ffbd7d723", ""], ["appAnchor", "", "id", "naming-conventions"], ["app50739ee301d54746809e11d0888eb2a204461b1a", ""], ["app5bdce67b25853f69a375d5d6637995d830a98e65", ""], ["app640a8700301faaa950934967b8443c33ff4e105d", ""]], template: function KafkaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is an open source, distributed streaming platform which has three key capabilities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Publish and subscribe to streams of records, similar to a message queue or enterprise messaging system.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Store streams of records in a fault-tolerant durable way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Process streams of records as they occur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "The Kafka project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. It integrates very well with Apache Storm and Spark for real-time streaming data analysis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Kafka transporter is experimental.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "To start building Kafka-based microservices, first install the required package:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n$ npm i --save kafkajs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Like other Nest microservices transport layer implementations, you select the Kafka transporter mechanism using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " property of the options object passed to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " method, along with an optional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " property, as shown below:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.KAFKA,\n  options: {\n    client: {\n      brokers: ['localhost:9092'],\n    }\n  }\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " property is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " transporter exposes the properties described below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Client configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "consumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Consumer configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "run");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Run configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Subscribe configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "producer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Producer configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Send configuration options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "There is a small difference in Kafka compared to other microservice transporters. Instead of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " class, we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Like other microservice transporters, you have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "several options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " for creating a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "One method for creating an instance is to use use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, ". To create a client instance with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ", import it and use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " method to pass an options object with the same properties shown above in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " method, as well as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " property to be used as the injection token. Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      {\n        name: 'HERO_SERVICE',\n        transport: Transport.KAFKA,\n        options: {\n          client: {\n            clientId: 'hero',\n            brokers: ['localhost:9092'],\n          },\n          consumer: {\n            groupId: 'hero-consumer'\n          }\n        }\n      },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Other options to create a client (either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, ") can be used as well. You can read about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, " decorator as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "\n@Client({\n  transport: Transport.KAFKA,\n  options: {\n    client: {\n      clientId: 'hero',\n      brokers: ['localhost:9092'],\n    },\n    consumer: {\n      groupId: 'hero-consumer'\n    }\n  }\n})\nclient: ClientKafka;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Message response subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " class provides the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "subscribeToResponseOf()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, " method. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "subscribeToResponseOf()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " method takes a request's topic name as an argument and adds the derived reply topic name to a collection of reply topics. This method is required when implementing the message pattern.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](208, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "app-tabs", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "\nonModuleInit() {\n  this.client.subscribeToResponseOf('hero.kill.dragon');\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "If the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " instance is created asynchronously, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "subscribeToResponseOf()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " method must be called before calling the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "connect()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](227, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "app-tabs", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "\nasync onModuleInit() {\n  this.client.subscribeToResponseOf('hero.kill.dragon');\n  await this.client.connect();\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Message pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "The Kafka microservice message pattern utilizes two topics for the request and reply channels. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "ClientKafka#send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " method sends messages with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "return address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " by associating a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "correlation id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, ", reply topic, and reply partition with the request message. This requires the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, " instance to be subscribed to the reply topic and assigned to at least one partition before sending a message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Subsequently, you need to have at least one reply topic partition for every Nest application running. For example, if you are running 4 Nest applications but the reply topic only has 3 partitions, then 1 of the Nest applications will error out when trying to send a message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "When new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " instances are launched they join the consumer group and subscribe to their respective topics. This process triggers a rebalance of topic partitions assigned to consumers of the consumer group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Normally, topic partitions are assigned using the round robin partitioner, which assigns topic partitions to a collection of consumers sorted by consumer names which are randomly set on application launch. However, when a new consumer joins the consumer group, the new consumer can be positioned anywhere within the collection of consumers. This creates a condition where pre-existing consumers can be assigned different partitions when the pre-existing consumer is positioned after the new consumer. As a result, the consumers that are assigned different partitions will lose response messages of requests sent before the rebalance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "To prevent the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " consumers from losing response messages, a Nest-specific built-in custom partitioner is utilized. This custom partitioner assigns partitions to a collection of consumers sorted by high-resolution timestamps (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "process.hrtime()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, ") that are set on application launch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Incoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Nest receives incoming Kafka messages as an object with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " properties that have values of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Buffer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, ". Nest then parses these values by transforming the buffers into strings. If the string is \"object like\", Nest attempts to parse the string as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, ". The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, " is then passed to its associated handler.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Outgoing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Nest sends outgoing Kafka messages after a serialization process when publishing events or sending messages. This occurs on arguments passed to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "emit()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "send()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " methods or on values returned from a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "@MessagePattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " method. This serialization \"stringifies\" objects that are not strings or buffers by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "JSON.stringify()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " or the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "toString()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " prototype method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](314, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](315, "app-tabs", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "\n@Controller()\nexport class HeroController {\n  @MessagePattern('hero.kill.dragon')\n  killDragon(@Payload() message: KillDragonMessage): any {\n    const dragonId = message.dragonId;\n    const items = [\n      { id: 1, name: 'Mythical Sword' },\n      { id: 2, name: 'Key to Dungeon' },\n    ];\n    return items;\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, " is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Outgoing messages can also be keyed by passing an object with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, " properties. Keying messages is important for meeting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "co-partitioning requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](342, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](343, "app-tabs", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "\n@Controller()\nexport class HeroController {\n  @MessagePattern('hero.kill.dragon')\n  killDragon(@Payload() message: KillDragonMessage): any {\n    const realm = 'Nest';\n    const heroId = message.heroId;\n    const dragonId = message.dragonId;\n\n    const items = [\n      { id: 1, name: 'Mythical Sword' },\n      { id: 2, name: 'Key to Dungeon' },\n    ];\n\n    return {\n      headers: {\n        realm\n      },\n      key: heroId,\n      value: items\n    }\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Additionally, messages passed in this format can also contain custom headers set in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, " hash property. Header hash property values must be either of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " or type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Buffer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](361, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](362, "app-tabs", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "\n@Controller()\nexport class HeroController {\n  @MessagePattern('hero.kill.dragon')\n  killDragon(@Payload() message: KillDragonMessage): any {\n    const realm = 'Nest';\n    const heroId = message.heroId;\n    const dragonId = message.dragonId;\n\n    const items = [\n      { id: 1, name: 'Mythical Sword' },\n      { id: 2, name: 'Key to Dungeon' },\n    ];\n\n    return {\n      headers: {\n        kafka_nestRealm: realm\n      },\n      key: heroId,\n      value: items\n    }\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "In more sophisticated scenarios, you may want to access more information about the incoming request. When using the Kafka transporter, you can access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "KafkaContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "app-tabs", null, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "\n@MessagePattern('hero.kill.dragon')\nkillDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {\n  console.log(`Topic: ${context.getTopic()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "\n@Bind(Payload(), Ctx())\n@MessagePattern('hero.kill.dragon')\nkillDragon(message, context) {\n  console.log(`Topic: ${context.getTopic()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "KafkaContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, " are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "To access the original Kafka ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "IncomingMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, " object, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "getMessage()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "KafkaContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, " object, as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "app-tabs", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "\n@MessagePattern('hero.kill.dragon')\nkillDragon(@Payload() message: KillDragonMessage, @Ctx() context: KafkaContext) {\n  const originalMessage = context.getMessage();\n  const { headers, partition, timestamp } = originalMessage;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "\n@Bind(Payload(), Ctx())\n@MessagePattern('hero.kill.dragon')\nkillDragon(message, context) {\n  const originalMessage = context.getMessage();\n  const { headers, partition, timestamp } = originalMessage;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "Where the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "IncomingMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, " fulfills the following interface:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "\ninterface IncomingMessage {\n  topic: string;\n  partition: number;\n  timestamp: string;\n  size: number;\n  attributes: number;\n  offset: string;\n  key: any;\n  value: any;\n  headers: Record<string, any>;\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "Naming conventions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "The Kafka microservice components append a description of their respective role onto the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "client.clientId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "consumer.groupId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, " options to prevent collisions between Nest microservice client and server components. By default the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, " components append ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "-client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "ServerKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, " components append ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "-server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, " to both of these options. Note how the provided values below are transformed in that way (as shown in the comments).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](452, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](453, "app-tabs", null, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.KAFKA,\n  options: {\n    client: {\n      clientId: 'hero', // hero-server\n      brokers: ['localhost:9092'],\n    },\n    consumer: {\n      groupId: 'hero-consumer' // hero-consumer-server\n    },\n  }\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "And for the client:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](462, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](463, "app-tabs", null, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "\n@Client({\n  transport: Transport.KAFKA,\n  options: {\n    client: {\n      clientId: 'hero', // hero-client\n      brokers: ['localhost:9092'],\n    },\n    consumer: {\n      groupId: 'hero-consumer' // hero-consumer-client\n    }\n  }\n})\nclient: ClientKafka;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, " Kafka client and consumer naming conventions can be customized by extending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "KafkaServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, " in your own custom provider and overriding the constructor.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "Since the Kafka microservice message pattern utilizes two topics for the request and reply channels, a reply pattern should be derived from the request topic. By default, the name of the reply topic is the composite of the request topic name with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, ".reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, " appended.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](485, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](486, "app-tabs", null, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "\nonModuleInit() {\n  this.client.subscribeToResponseOf('hero.get'); // hero.get.reply\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, " Kafka reply topic naming conventions can be customized by extending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "ClientKafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, " in your own custom provider and overriding the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "getResponsePatternName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, " method.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](49);
        const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](210);
        const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](229);
        const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](316);
        const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](344);
        const _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](363);
        const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](377);
        const _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](412);
        const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](454);
        const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](464);
        const _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](487);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](47, 17, "main", _r300.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](208, 20, "hero.controller", _r301.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](227, 23, "hero.controller", _r302.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](314, 26, "hero.controller", _r303.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](342, 29, "hero.controller", _r304.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](361, 32, "hero.controller", _r305.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r306.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r306.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r307.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r307.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](452, 35, "main", _r308.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](462, 38, "hero.controller", _r309.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](485, 41, "hero.controller", _r310.isJsActive), "\n");
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??KafkaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](KafkaComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](KafkaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kafka',
                templateUrl: './kafka.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/microservices.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/microservices.module.ts ***!
  \**********************************************************************/
/*! exports provided: MicroservicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesModule", function() { return MicroservicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basics/basics.component */ "./src/app/homepage/pages/microservices/basics/basics.component.ts");
/* harmony import */ var _custom_transport_custom_transport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-transport/custom-transport.component */ "./src/app/homepage/pages/microservices/custom-transport/custom-transport.component.ts");
/* harmony import */ var _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exception-filters/exception-filters.component */ "./src/app/homepage/pages/microservices/exception-filters/exception-filters.component.ts");
/* harmony import */ var _grpc_grpc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grpc/grpc.component */ "./src/app/homepage/pages/microservices/grpc/grpc.component.ts");
/* harmony import */ var _guards_guards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/guards.component */ "./src/app/homepage/pages/microservices/guards/guards.component.ts");
/* harmony import */ var _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/interceptors.component */ "./src/app/homepage/pages/microservices/interceptors/interceptors.component.ts");
/* harmony import */ var _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mqtt/mqtt.component */ "./src/app/homepage/pages/microservices/mqtt/mqtt.component.ts");
/* harmony import */ var _nats_nats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nats/nats.component */ "./src/app/homepage/pages/microservices/nats/nats.component.ts");
/* harmony import */ var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/pipes.component */ "./src/app/homepage/pages/microservices/pipes/pipes.component.ts");
/* harmony import */ var _rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rabbitmq/rabbitmq.component */ "./src/app/homepage/pages/microservices/rabbitmq/rabbitmq.component.ts");
/* harmony import */ var _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kafka/kafka.component */ "./src/app/homepage/pages/microservices/kafka/kafka.component.ts");
/* harmony import */ var _redis_redis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./redis/redis.component */ "./src/app/homepage/pages/microservices/redis/redis.component.ts");


















const routes = [
    {
        path: 'basics',
        component: _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__["BasicsComponent"],
        data: { title: 'Microservices' },
    },
    {
        path: 'redis',
        component: _redis_redis_component__WEBPACK_IMPORTED_MODULE_15__["RedisComponent"],
        data: { title: 'Redis - Microservices' },
    },
    {
        path: 'mqtt',
        component: _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_10__["MqttComponent"],
        data: { title: 'MQTT - Microservices' },
    },
    {
        path: 'nats',
        component: _nats_nats_component__WEBPACK_IMPORTED_MODULE_11__["NatsComponent"],
        data: { title: 'NATS - Microservices' },
    },
    {
        path: 'grpc',
        component: _grpc_grpc_component__WEBPACK_IMPORTED_MODULE_7__["GrpcComponent"],
        data: { title: 'gRPC - Microservices' },
    },
    {
        path: 'rabbitmq',
        component: _rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_13__["RabbitMQComponent"],
        data: { title: 'RabbitMQ - Microservices' },
    },
    {
        path: 'kafka',
        component: _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_14__["KafkaComponent"],
        data: { title: 'Kafka - Microservices' },
    },
    {
        path: 'pipes',
        component: _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_12__["MicroservicesPipesComponent"],
        data: { title: 'Pipes - Microservices' },
    },
    {
        path: 'exception-filters',
        component: _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_6__["MicroservicesExceptionFiltersComponent"],
        data: { title: 'Exception Filters - Microservices' },
    },
    {
        path: 'guards',
        component: _guards_guards_component__WEBPACK_IMPORTED_MODULE_8__["MicroservicesGuardsComponent"],
        data: { title: 'Guards - Microservices' },
    },
    {
        path: 'interceptors',
        component: _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_9__["MicroservicesInterceptorsComponent"],
        data: { title: 'Interceptors - Microservices' },
    },
    {
        path: 'custom-transport',
        component: _custom_transport_custom_transport_component__WEBPACK_IMPORTED_MODULE_5__["CustomTransportComponent"],
        data: { title: 'Custom Transport - Microservices' },
    },
];
class MicroservicesModule {
}
MicroservicesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: MicroservicesModule });
MicroservicesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function MicroservicesModule_Factory(t) { return new (t || MicroservicesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](MicroservicesModule, { declarations: [_basics_basics_component__WEBPACK_IMPORTED_MODULE_4__["BasicsComponent"],
        _redis_redis_component__WEBPACK_IMPORTED_MODULE_15__["RedisComponent"],
        _custom_transport_custom_transport_component__WEBPACK_IMPORTED_MODULE_5__["CustomTransportComponent"],
        _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_6__["MicroservicesExceptionFiltersComponent"],
        _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_12__["MicroservicesPipesComponent"],
        _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_9__["MicroservicesInterceptorsComponent"],
        _guards_guards_component__WEBPACK_IMPORTED_MODULE_8__["MicroservicesGuardsComponent"],
        _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_10__["MqttComponent"],
        _grpc_grpc_component__WEBPACK_IMPORTED_MODULE_7__["GrpcComponent"],
        _rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_13__["RabbitMQComponent"],
        _nats_nats_component__WEBPACK_IMPORTED_MODULE_11__["NatsComponent"],
        _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_14__["KafkaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MicroservicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                declarations: [
                    _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__["BasicsComponent"],
                    _redis_redis_component__WEBPACK_IMPORTED_MODULE_15__["RedisComponent"],
                    _custom_transport_custom_transport_component__WEBPACK_IMPORTED_MODULE_5__["CustomTransportComponent"],
                    _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_6__["MicroservicesExceptionFiltersComponent"],
                    _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_12__["MicroservicesPipesComponent"],
                    _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_9__["MicroservicesInterceptorsComponent"],
                    _guards_guards_component__WEBPACK_IMPORTED_MODULE_8__["MicroservicesGuardsComponent"],
                    _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_10__["MqttComponent"],
                    _grpc_grpc_component__WEBPACK_IMPORTED_MODULE_7__["GrpcComponent"],
                    _rabbitmq_rabbitmq_component__WEBPACK_IMPORTED_MODULE_13__["RabbitMQComponent"],
                    _nats_nats_component__WEBPACK_IMPORTED_MODULE_11__["NatsComponent"],
                    _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_14__["KafkaComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/mqtt/mqtt.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/mqtt/mqtt.component.ts ***!
  \*********************************************************************/
/*! exports provided: MqttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MqttComponent", function() { return MqttComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class MqttComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MqttComponent.??fac = function MqttComponent_Factory(t) { return ??MqttComponent_BaseFactory(t || MqttComponent); };
MqttComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MqttComponent, selectors: [["app-mqtt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 161, vars: 12, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/mqtt.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "mqtt"], ["rel", "nofollow", "target", "_blank", "href", "http://mqtt.org/"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], [1, "filename"], ["app7d36b67fbc4f1f9f51d82e4507d40e737999b88d", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/mqttjs/MQTT.js/#mqttclientstreambuilder-options"], ["appAnchor", "", "id", "client"], ["href", "https://docs.nestjs.com/microservices/basics#client"], ["appAnchor", "", "id", "context"], ["app561572aefe841a6d4ffe6d38a7b75ae6600904ad", ""], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/mqttjs/mqtt-packet"], ["appc11d7edd73178776b487680491aa37f19c595ff9", ""]], template: function MqttComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "MQTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "MQTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " (Message Queuing Telemetry Transport) is an open source, lightweight messaging protocol, optimized for high-latency. This protocol provides a scalable and cost-efficient way to connect devices using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "publish/subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " model. A communication system built on MQTT consists of the publishing server, a broker and one or more clients. It is designed for constrained devices and low-bandwidth, high-latency or unreliable networks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "To start building MQTT-based microservices, first install the required package:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n$ npm i --save mqtt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "To use the MQTT transporter, pass the following options object to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.MQTT,\n  options: {\n    host: 'localhost',\n    port: 1883,\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " object is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "MQTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " transporter exposes the properties described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Like other microservice transporters, you have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "several options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " for creating a MQTT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "One method for creating an instance is to use use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ". To create a client instance with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ", import it and use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " method to pass an options object with the same properties shown above in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " method, as well as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " property to be used as the injection token. Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      {\n        name: 'MATH_SERVICE',\n        transport: Transport.MQTT,\n        options: {\n          host: 'localhost',\n          port: 1883,\n        }\n      },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Other options to create a client (either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, ") can be used as well. You can read about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "In more sophisticated scenarios, you may want to access more information about the incoming request. When using the MQTT transporter, you can access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "MqttContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "app-tabs", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {\n  console.log(`Topic: ${context.getTopic()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(`Topic: ${context.getTopic()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "MqttContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "To access the original mqtt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "packet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, ", use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "getPacket()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "MqttContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " object, as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "app-tabs", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {\n  console.log(context.getPacket());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(context.getPacket());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);
        const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](119);
        const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](32, 9, "main", _r284.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r285.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r285.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r286.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r286.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??MqttComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MqttComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MqttComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mqtt',
                templateUrl: './mqtt.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/nats/nats.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/nats/nats.component.ts ***!
  \*********************************************************************/
/*! exports provided: NatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatsComponent", function() { return NatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class NatsComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
NatsComponent.??fac = function NatsComponent_Factory(t) { return ??NatsComponent_BaseFactory(t || NatsComponent); };
NatsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NatsComponent, selectors: [["app-nats"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 203, vars: 12, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/nats.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "nats"], ["rel", "nofollow", "target", "_blank", "href", "https://nats.io"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], [1, "filename"], ["appd47dfc3fcafa2d4610bdc17399fc68e2254783d1", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nats-io/node-nats#connect-options"], ["href", "https://docs.nestjs.com/microservices/nats#queue-groups"], ["appAnchor", "", "id", "client"], ["href", "https://docs.nestjs.com/microservices/basics#client"], ["appAnchor", "", "id", "request-response"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/microservices/basics#request-response"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nats.io/nats-concepts/reqreply"], ["appAnchor", "", "id", "event-based"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/microservices/basics#event-based"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nats.io/nats-concepts/pubsub"], ["appAnchor", "", "id", "queue-groups"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nats.io/nats-concepts/queue"], ["app0dd527d3c1521878cb985ba33bc63661a5d5ddfc", ""], ["appAnchor", "", "id", "context"], ["appb2346e7b2a35424ae6b3dc0a27f8e6799ff21f4d", ""]], template: function NatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "NATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "NATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is a simple, secure and high performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures. The NATS server is written in the Go programming language, but client libraries to interact with the server are available for dozens of major programming languages. NATS supports both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "At Most Once");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "At Least Once");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " delivery. It can run anywhere, from large servers and cloud instances, through edge gateways and even Internet of Things devices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "To start building NATS-based microservices, first install the required package:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n$ npm i --save nats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "To use the NATS transporter, pass the following options object to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.NATS,\n  options: {\n    url: 'nats://localhost:4222',\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " object is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "NATS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " transporter exposes the properties described ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, ".\nAdditionally, there is a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " property which allows you to specify the name of the queue that your server should subscribe to (leave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " to ignore this setting). Read more about NATS queue groups ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Like other microservice transporters, you have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "several options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " for creating a NATS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "One method for creating an instance is to use use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, ". To create a client instance with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ", import it and use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " method to pass an options object with the same properties shown above in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " method, as well as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " property to be used as the injection token. Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      {\n        name: 'MATH_SERVICE',\n        transport: Transport.NATS,\n        options: {\n          url: 'nats://localhost:4222',\n        }\n      },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Other options to create a client (either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, ") can be used as well. You can read about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Request-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "For the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "request-response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " message style (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "), the NATS transporter uses NATS built-in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Request-Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " mechanism. A request is published on a given subject with a reply subject, and responders listen on that subject and send responses to the reply subject. Reply subjects are usually a subject called an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "_INBOX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " that will be directed back to the requestor dynamically, regardless of location of either party.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Event-based");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "For the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "event-based");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " message style (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "), the NATS transporter uses NATS built-in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Publish-Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " mechanism. A publisher sends a message on a subject and any active subscriber listening on that subject receives the message. Subscribers can also register interest in wildcard subjects that work a bit like a regular expression. This one-to-many pattern is sometimes called fan-out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Queue groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "NATS provides a built-in load balancing feature called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "distributed queues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ". To create a queue subscription, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " property as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](165, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "app-tabs", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.NATS,\n  options: {\n    url: 'nats://localhost:4222',\n    queue: 'cats_queue',\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "In more sophisticated scenarios, you may want to access more information about the incoming request. When using the NATS transporter, you can access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "NatsContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "app-tabs", null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: NatsContext) {\n  console.log(`Subject: ${context.getSubject()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(`Subject: ${context.getSubject()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "NatsContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        const _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](167);
        const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](35, 6, "main", _r288.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](165, 9, "main", _r289.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r290.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r290.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??NatsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](NatsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nats',
                templateUrl: './nats.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/pipes/pipes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/pipes/pipes.component.ts ***!
  \***********************************************************************/
/*! exports provided: MicroservicesPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesPipesComponent", function() { return MicroservicesPipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");






class MicroservicesPipesComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MicroservicesPipesComponent.??fac = function MicroservicesPipesComponent_Factory(t) { return ??MicroservicesPipesComponent_BaseFactory(t || MicroservicesPipesComponent); };
MicroservicesPipesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MicroservicesPipesComponent, selectors: [["app-pipes"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 45, vars: 4, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/pipes.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "pipes"], ["routerLink", "/pipes"], [1, "info"], ["appAnchor", "", "id", "binding-pipes"], [1, "filename"], ["appbe44700bebabf90d8bc990865c608b5e5428a7d7", ""], [1, "language-typescript"]], template: function MicroservicesPipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no fundamental difference between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and microservices pipes. The only difference is that instead of throwing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "blockquote", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "RpcException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " class is exposed from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Binding pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "The following example uses a manually instantiated method-scoped pipe. Just as with HTTP based applications, you can also use controller-scoped pipes (i.e., prefix the controller class with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "@UsePipes()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " decorator).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-tabs", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n@UsePipes(new ValidationPipe())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data: number[]): number {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n@UsePipes(new ValidationPipe())\n@MessagePattern({ cmd: 'sum' })\naccumulate(data) {\n  return (data || []).reduce((a, b) => a + b);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r292.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r292.isJsActive);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]], encapsulation: 2, changeDetection: 0 });
const ??MicroservicesPipesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MicroservicesPipesComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MicroservicesPipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pipes',
                templateUrl: './pipes.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/rabbitmq/rabbitmq.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/rabbitmq/rabbitmq.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RabbitMQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitMQComponent", function() { return RabbitMQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class RabbitMQComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
RabbitMQComponent.??fac = function RabbitMQComponent_Factory(t) { return ??RabbitMQComponent_BaseFactory(t || RabbitMQComponent); };
RabbitMQComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RabbitMQComponent, selectors: [["app-rabbitmq"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 263, vars: 20, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/rabbitmq.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "rabbitmq"], ["rel", "nofollow", "target", "_blank", "href", "https://www.rabbitmq.com/"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], [1, "filename"], ["app4c04b896ca657c0410539e04cd9e5fa63fedd344", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["href", "https://www.squaremobius.net/amqp.node/channel_api.html#assertQueue", "rel", "nofollow", "target", "_blank"], ["href", "https://www.squaremobius.net/amqp.node/channel_api.html#socket-options", "rel", "nofollow", "target", "_blank"], ["appAnchor", "", "id", "client"], ["href", "https://docs.nestjs.com/microservices/basics#client"], ["appAnchor", "", "id", "context"], ["appbcea41cb9b7e365a14bf932c592080f18f6febd1", ""], ["app8207b6d4445bf3bd81aa93d5a0144f5dea7aefa5", ""], ["rel", "nofollow", "target", "_blank", "href", "https://www.rabbitmq.com/channels.html"], ["app4fe9dd974277bdb5b5b993092ce41ee29f011d3d", ""], ["appAnchor", "", "id", "message-acknowledgement"], ["rel", "nofollow", "target", "_blank", "href", "https://www.rabbitmq.com/confirms.html"], ["appaf9aae581c4e770abd9c845f3ed486240d4a3049", ""]], template: function RabbitMQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "RabbitMQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "RabbitMQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is an open-source and lightweight message broker which supports multiple messaging protocols. It can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements. In addition, it's the most widely deployed message broker, used worldwide at small startups and large enterprises.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "To start building RabbitMQ-based microservices, first install the required packages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n$ npm i --save amqplib amqp-connection-manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "To use the RabbitMQ transporter, pass the following options object to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.RMQ,\n  options: {\n    urls: ['amqp://localhost:5672'],\n    queue: 'cats_queue',\n    queueOptions: {\n      durable: false\n    },\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " property is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "RabbitMQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " transporter exposes the properties described below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "urls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Connection urls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Queue name which your server will listen to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "prefetchCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Sets the prefetch count for the channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "isGlobalPrefetchCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Enables per channel prefetching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "noAck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, ", manual acknowledgment mode enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "queueOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Additional queue options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "socketOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Additional socket options (read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Like other microservice transporters, you have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "several options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " for creating a RabbitMQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "One method for creating an instance is to use use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, ". To create a client instance with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, ", import it and use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " method to pass an options object with the same properties shown above in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " method, as well as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " property to be used as the injection token. Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      {\n        name: 'MATH_SERVICE',\n        transport: Transport.RMQ,\n        options: {\n          urls: ['amqp://localhost:5672'],\n          queue: 'cats_queue',\n          queueOptions: {\n            durable: false\n          },\n        },\n      },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Other options to create a client (either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, ") can be used as well. You can read about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "In more sophisticated scenarios, you may want to access more information about the incoming request. When using the RabbitMQ transporter, you can access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "RmqContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "app-tabs", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {\n  console.log(`Pattern: ${context.getPattern()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(`Pattern: ${context.getPattern()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "blockquote", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "RmqContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "To access the original RabbitMQ message (with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "), use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "getMessage()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "RmqContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, " object, as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](205, "app-tabs", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {\n  console.log(context.getMessage());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(context.getMessage());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "To retrieve a reference to the RabbitMQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, ", use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "getChannelRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "RmqContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, " object, as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "app-tabs", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {\n  console.log(context.getChannelRef());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(context.getChannelRef());\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Message acknowledgement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "To make sure a message is never lost, RabbitMQ supports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "message acknowledgements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, ". An acknowledgement is sent back by the consumer to tell RabbitMQ that a particular message has been received, processed and that RabbitMQ is free to delete it. If a consumer dies (its channel is closed, connection is closed, or TCP connection is lost) without sending an ack, RabbitMQ will understand that a message wasn't processed fully and will re-queue it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "To enable manual acknowledgment mode, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "noAck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, " property to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "\noptions: {\n  urls: ['amqp://localhost:5672'],\n  queue: 'cats_queue',\n  noAck: false,\n  queueOptions: {\n    durable: false\n  },\n},");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "When manual consumer acknowledgements are turned on, we must send a proper acknowledgement from the worker to signal that we are done with a task.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "app-tabs", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {\n  const channel = context.getChannelRef();\n  const originalMsg = context.getMessage();\n\n  channel.ack(originalMsg);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  const channel = context.getChannelRef();\n  const originalMsg = context.getMessage();\n\n  channel.ack(originalMsg);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);
        const _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](165);
        const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](206);
        const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](226);
        const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](29, 17, "main", _r294.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r295.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r295.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r296.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r296.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r297.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r297.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r298.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r298.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??RabbitMQComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](RabbitMQComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RabbitMQComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rabbitmq',
                templateUrl: './rabbitmq.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/microservices/redis/redis.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/pages/microservices/redis/redis.component.ts ***!
  \***********************************************************************/
/*! exports provided: RedisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedisComponent", function() { return RedisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/extension.pipe */ "./src/app/shared/pipes/extension.pipe.ts");






class RedisComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
RedisComponent.??fac = function RedisComponent_Factory(t) { return ??RedisComponent_BaseFactory(t || RedisComponent); };
RedisComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RedisComponent, selectors: [["app-redis"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 169, vars: 8, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/microservices/redis.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "redis"], ["rel", "nofollow", "target", "_blank", "href", "https://redis.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://redis.io/topics/pubsub"], ["src", "/assets/Redis_1.png"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], [1, "filename"], ["app9126f6c72218068f62eee4bc4c03fb538478bd04", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "options"], ["appAnchor", "", "id", "client"], ["href", "https://docs.nestjs.com/microservices/basics#client"], ["appAnchor", "", "id", "context"], ["app6abe7f555a7d7e90d6a56814f5c09b2df3597963", ""]], template: function RedisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Redis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Redis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " transporter implements the publish/subscribe messaging paradigm and leverages the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Pub/Sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " feature of Redis. Published messages are categorized in channels, without knowing what subscribers (if any) will eventually receive the message. Each microservice can subscribe to any number of channels. In addition, more than one channel can be subscribed to at a time. Messages exchanged through channels are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "fire-and-forget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ", which means that if a message is published and there are no subscribers interested in it, the message is removed and cannot be recovered. Thus, you don't have a guarantee that either messages or events will be handled by at least one service. A single message can be subscribed to (and received) by multiple subscribers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "To start building Redis-based microservices, first install the required package:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "code", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n$ npm i --save redis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "To use the Redis transporter, pass the following options object to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "app-tabs", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\nconst app = await NestFactory.createMicroservice(ApplicationModule, {\n  transport: Transport.REDIS,\n  options: {\n    url: 'redis://localhost:6379',\n  },\n});");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " enum is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " property is specific to the chosen transporter. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Redis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " transporter exposes the properties described below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Connection url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "retryAttempts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Number of times to retry message (default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "retryDelay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Delay between message retry attempts (ms) (default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Like other microservice transporters, you have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "several options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " for creating a Redis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "ClientProxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "One method for creating an instance is to use use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, ". To create a client instance with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, ", import it and use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "register()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " method to pass an options object with the same properties shown above in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "createMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " method, as well as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " property to be used as the injection token. Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "ClientsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "\n@Module({\n  imports: [\n    ClientsModule.register([\n      {\n        name: 'MATH_SERVICE',\n        transport: Transport.REDIS,\n        options: {\n          url: 'redis://localhost:6379',\n        }\n      },\n    ]),\n  ]\n  ...\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Other options to create a client (either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "ClientProxyFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "@Client()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, ") can be used as well. You can read about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "In more sophisticated scenarios, you may want to access more information about the incoming request. When using the Redis transporter, you can access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "RedisContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "app-tabs", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "\n@MessagePattern('notifications')\ngetNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {\n  console.log(`Channel: ${context.getChannel()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "\n@Bind(Payload(), Ctx())\n@MessagePattern('notifications')\ngetNotifications(data, context) {\n  console.log(`Channel: ${context.getChannel()}`);\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "@Payload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "@Ctx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "RedisContext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " are imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "@nestjs/microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);
        const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](38, 5, "main", _r312.isJsActive), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r313.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r313.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]], encapsulation: 2, changeDetection: 0 });
const ??RedisComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](RedisComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RedisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-redis',
                templateUrl: './redis.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=homepage-pages-microservices-microservices-module-es2015.js.map