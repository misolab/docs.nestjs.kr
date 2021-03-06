function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-graphql-graphql-module"], {
  /***/
  "./src/app/homepage/pages/graphql/federation/federation.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/federation/federation.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FederationComponent */

  /***/
  function srcAppHomepagePagesGraphqlFederationFederationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FederationComponent", function () {
      return FederationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var FederationComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(FederationComponent, _page_page_component_);

      function FederationComponent() {
        _classCallCheck(this, FederationComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(FederationComponent).apply(this, arguments));
      }

      return FederationComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    FederationComponent.??fac = function FederationComponent_Factory(t) {
      return ??FederationComponent_BaseFactory(t || FederationComponent);
    };

    FederationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FederationComponent,
      selectors: [["app-federation"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 177,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/federation.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "federation"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/apollo-server/federation/introduction/"], ["rel", "nofollow", "target", "_blank", "href", "https://blog.apollographql.com/apollo-federation-f260cf525d21"], [1, "warning"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/MichalLytek/type-graphql/issues/351"], ["appAnchor", "", "id", "federated-example-users"], [1, "language-bash"], [1, "language-graphql"], [1, "language-typescript"], ["appAnchor", "", "id", "federated-example-posts"], ["appAnchor", "", "id", "federated-example-gateway"], [1, "info"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graph-manager/federation/"], ["appAnchor", "", "id", "sharing-context"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/apollo-server/api/apollo-gateway/#remotegraphqldatasource"], ["appAnchor", "", "id", "async-configuration"], ["href", "/graphql/quick-start#async-configuration"]],
      template: function FederationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Federation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Apollo Federation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " offers a means of splitting your monolith GraphQL server into independent microservices. It consists of two components: A gateway and one or more federated microservices. Each microservice holds part of the schema and the gateway merges the schemas into one single schema that can be consumed by the client.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "To quote the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Apollo docs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, ", Federation is designed with these core principles:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Building a graph should be ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "declarative.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " With federation, you compose a graph declaratively from within your schema instead of writing imperative schema stitching code.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Code should be separated by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "concern");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, ", not by types. Often no single team controls every aspect of an important type like a User or Product, so the definition of these types should be distributed across teams and codebases, rather than centralized.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "The graph should be simple for clients to consume. Together, federated services can form a complete, product-focused graph that accurately reflects how it\u2019s being consumed on the client.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "It\u2019s just ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ", using only spec-compliant features of the language. Any language, not just JavaScript, can implement federation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Apollo Federation currently does not support subscriptions, and only the schema-first approach is currently supported due to limitations with the decorators not yet supporting GraphQL directives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "In the next example, we'll set up a demo application with a gateway and two federated endpoints: a user- and posts service.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Federated example: Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "First install the optional dependency for federation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\n$ npm install --save @apollo/federation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "The User service has a simple schema. Note the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "@key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " directive, it tells the Apollo query planner that a particular instance of User can be fetched if you have its ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, ". Also note that we extend the Query type.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\ntype User @key(fields: \"id\") {\n  id: ID!\n  name: String!\n}\n\nextend type Query {\n  getUser(id: ID!): User\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Our resolver has one extra method: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "resolveReference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, ". It's called by the Apollo Gateway whenever a related resource requires a User instance. We'll see an example of this in the Posts service later on. Please note the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "@ResolveReference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\nimport { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';\nimport { UsersService } from './users.service';\n\n@Resolver('User')\nexport class UsersResolvers {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Query()\n  getUser(@Args('id') id: string) {\n    return this.usersService.findById(id);\n  }\n\n  @ResolveReference()\n  resolveReference(reference: { __typename: string; id: string }) {\n    return this.usersService.findById(reference.id);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Finally, we hook everything up in a module together with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "GraphQLFederationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ". This module accepts the same options as the regular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\nimport { Module } from '@nestjs/common';\nimport { GraphQLFederationModule } from '@nestjs/graphql';\nimport { UsersResolvers } from './users.resolvers';\n\n@Module({\n  imports: [\n    GraphQLFederationModule.forRoot({\n      typePaths: ['**/*.graphql'],\n    }),\n  ],\n  providers: [UsersResolvers],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Federated example: Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "The Posts service references the User type in its schema by marking it with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "extend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " keyword. It also adds one property to the User type. Note the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "@key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " directive used for matching instances of User, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "@external");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " directive indicating that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " field is managed elsewhere.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\ntype Post @key(fields: \"id\") {\n  id: ID!\n  title: String!\n  body: String!\n  user: User\n}\n\nextend type User @key(fields: \"id\") {\n  id: ID! @external\n  posts: [Post]\n}\n\nextend type Query {\n  getPosts: [Post]\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Our resolver has one method of interest here: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "getUser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, ". It returns a reference containing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "__typename");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " and any additional properties your application needs to resolve the reference, in this case only an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "__typename");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " is used by the GraphQL Gateway to pinpoint the microservice responsible for the User type and request the instance. The User service discussed above will be called on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "resolveReference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\nimport { Query, Resolver, Parent, ResolveProperty } from '@nestjs/graphql';\nimport { PostsService } from './posts.service';\nimport { Post } from './posts.interfaces';\n\n@Resolver('Post')\nexport class PostsResolvers {\n  constructor(private readonly postsService: PostsService) {}\n\n  @Query('getPosts')\n  getPosts() {\n    return this.postsService.findAll();\n  }\n\n  @ResolveProperty('user')\n  getUser(@Parent() post: Post) {\n    return { __typename: 'User', id: post.userId };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "The Posts service has virtually the same module, but is included below for the sake of completeness:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\nimport { Module } from '@nestjs/common';\nimport { GraphQLFederationModule } from '@nestjs/graphql';\nimport { PostsResolvers } from './posts.resolvers';\n\n@Module({\n  imports: [\n    GraphQLFederationModule.forRoot({\n      typePaths: ['**/*.graphql'],\n    }),\n  ],\n  providers: [PostsResolvers],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Federated example: Gateway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "First install the optional dependency for the gateway: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "npm install --save @apollo/gateway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Our gateway only needs a list of endpoints and will auto-discover the schemas from there. The code for our gateway is therefore very short:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "\nimport { Module } from '@nestjs/common';\nimport { GraphQLGatewayModule } from '@nestjs/graphql';\n\n@Module({\n  imports: [\n    GraphQLGatewayModule.forRoot({\n      server: {\n        // ... Apollo server options\n        cors: true,\n      },\n      gateway: {\n        serviceList: [\n          { name: 'users', url: 'http://user-service/graphql' },\n          { name: 'posts', url: 'http://post-service/graphql' },\n        ],\n      },\n    }),\n  ],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " Apollo recommends that you don't rely on the service discovery in a production environment but use their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Graph Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " instead.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Sharing context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "You can customize the requests between the gateway and federated services using a build service. This allows you to share context about the request. You can easily extend the default ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "RemoteGraphQLDataSource");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " and implement one of the hooks. Please refer to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Apollo Docs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "RemoteGraphQLDataSource");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " for more information about the possibilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "\nimport { Module } from '@nestjs/common';\nimport { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';\nimport { RemoteGraphQLDataSource } from '@apollo/gateway';\nimport { decode } from 'jsonwebtoken';\n\nclass AuthenticatedDataSource extends RemoteGraphQLDataSource {\n  async willSendRequest({ request, context }) {\n    const { userId } = await decode(context.jwt);\n    request.http.headers.set('x-user-id', userId);\n  }\n}\n\n@Module({\n  providers: [\n    {\n      provide: AuthenticatedDataSource,\n      useValue: AuthenticatedDataSource,\n    },\n    {\n      provide: GATEWAY_BUILD_SERVICE,\n      useFactory: AuthenticatedDataSource => {\n        return ({ name, url }) => new AuthenticatedDataSource({ url });\n      },\n      inject: [AuthenticatedDataSource],\n    },\n  ],\n  exports: [GATEWAY_BUILD_SERVICE],\n})\nclass BuildServiceModule {}\n\n@Module({\n  imports: [\n    GraphQLGatewayModule.forRootAsync({\n      useFactory: async () => ({\n        gateway: {\n          serviceList: [\n            /* services */\n          ],\n        },\n        server: {\n          context: ({ req }) => ({\n            jwt: req.headers.authorization,\n          }),\n        },\n      }),\n      imports: [BuildServiceModule],\n      inject: [GATEWAY_BUILD_SERVICE],\n    }),\n  ],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Async configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Both the Federation and Gateway modules support asynchronous initialization using the same ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "forRootAsync");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " that's documented in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Quick start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??FederationComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](FederationComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FederationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-federation',
          templateUrl: './federation.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/graphql.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/homepage/pages/graphql/graphql.module.ts ***!
    \**********************************************************/

  /*! exports provided: GraphqlModule */

  /***/
  function srcAppHomepagePagesGraphqlGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphqlModule", function () {
      return GraphqlModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _guards_interceptors_guards_interceptors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards-interceptors/guards-interceptors.component */
    "./src/app/homepage/pages/graphql/guards-interceptors/guards-interceptors.component.ts");
    /* harmony import */


    var _mutations_mutations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mutations/mutations.component */
    "./src/app/homepage/pages/graphql/mutations/mutations.component.ts");
    /* harmony import */


    var _quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quick-start/quick-start.component */
    "./src/app/homepage/pages/graphql/quick-start/quick-start.component.ts");
    /* harmony import */


    var _resolvers_map_resolvers_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resolvers-map/resolvers-map.component */
    "./src/app/homepage/pages/graphql/resolvers-map/resolvers-map.component.ts");
    /* harmony import */


    var _scalars_scalars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./scalars/scalars.component */
    "./src/app/homepage/pages/graphql/scalars/scalars.component.ts");
    /* harmony import */


    var _schema_stitching_schema_stitching_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./schema-stitching/schema-stitching.component */
    "./src/app/homepage/pages/graphql/schema-stitching/schema-stitching.component.ts");
    /* harmony import */


    var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./subscriptions/subscriptions.component */
    "./src/app/homepage/pages/graphql/subscriptions/subscriptions.component.ts");
    /* harmony import */


    var _federation_federation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./federation/federation.component */
    "./src/app/homepage/pages/graphql/federation/federation.component.ts");

    var routes = [{
      path: 'quick-start',
      component: _quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_6__["QuickStartComponent"],
      data: {
        title: 'GraphQL + TypeScript'
      }
    }, {
      path: 'resolvers-map',
      component: _resolvers_map_resolvers_map_component__WEBPACK_IMPORTED_MODULE_7__["ResolversMapComponent"],
      data: {
        title: 'GraphQL + TypeScript - Resolvers Map'
      }
    }, {
      path: 'mutations',
      component: _mutations_mutations_component__WEBPACK_IMPORTED_MODULE_5__["MutationsComponent"],
      data: {
        title: 'GraphQL + TypeScript - Mutations'
      }
    }, {
      path: 'scalars',
      component: _scalars_scalars_component__WEBPACK_IMPORTED_MODULE_8__["ScalarsComponent"],
      data: {
        title: 'GraphQL + TypeScript - Scalars'
      }
    }, {
      path: 'subscriptions',
      component: _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__["SubscriptionsComponent"],
      data: {
        title: 'GraphQL + TypeScript - Subscriptions'
      }
    }, {
      path: 'guards-interceptors',
      redirectTo: 'tooling'
    }, {
      path: 'tooling',
      component: _guards_interceptors_guards_interceptors_component__WEBPACK_IMPORTED_MODULE_4__["GuardsInterceptorsComponent"],
      data: {
        title: 'GraphQL + TypeScript - Other features'
      }
    }, {
      path: 'schema-stitching',
      component: _schema_stitching_schema_stitching_component__WEBPACK_IMPORTED_MODULE_9__["SchemaStitchingComponent"],
      data: {
        title: 'GraphQL - Schema Stitching'
      }
    }, {
      path: 'federation',
      component: _federation_federation_component__WEBPACK_IMPORTED_MODULE_11__["FederationComponent"],
      data: {
        title: 'GraphQL - Federation'
      }
    }];

    var GraphqlModule = function GraphqlModule() {
      _classCallCheck(this, GraphqlModule);
    };

    GraphqlModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: GraphqlModule
    });
    GraphqlModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function GraphqlModule_Factory(t) {
        return new (t || GraphqlModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](GraphqlModule, {
        declarations: [_quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_6__["QuickStartComponent"], _resolvers_map_resolvers_map_component__WEBPACK_IMPORTED_MODULE_7__["ResolversMapComponent"], _mutations_mutations_component__WEBPACK_IMPORTED_MODULE_5__["MutationsComponent"], _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__["SubscriptionsComponent"], _schema_stitching_schema_stitching_component__WEBPACK_IMPORTED_MODULE_9__["SchemaStitchingComponent"], _guards_interceptors_guards_interceptors_component__WEBPACK_IMPORTED_MODULE_4__["GuardsInterceptorsComponent"], _scalars_scalars_component__WEBPACK_IMPORTED_MODULE_8__["ScalarsComponent"], _federation_federation_component__WEBPACK_IMPORTED_MODULE_11__["FederationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](GraphqlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_6__["QuickStartComponent"], _resolvers_map_resolvers_map_component__WEBPACK_IMPORTED_MODULE_7__["ResolversMapComponent"], _mutations_mutations_component__WEBPACK_IMPORTED_MODULE_5__["MutationsComponent"], _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__["SubscriptionsComponent"], _schema_stitching_schema_stitching_component__WEBPACK_IMPORTED_MODULE_9__["SchemaStitchingComponent"], _guards_interceptors_guards_interceptors_component__WEBPACK_IMPORTED_MODULE_4__["GuardsInterceptorsComponent"], _scalars_scalars_component__WEBPACK_IMPORTED_MODULE_8__["ScalarsComponent"], _federation_federation_component__WEBPACK_IMPORTED_MODULE_11__["FederationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/guards-interceptors/guards-interceptors.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/guards-interceptors/guards-interceptors.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: GuardsInterceptorsComponent */

  /***/
  function srcAppHomepagePagesGraphqlGuardsInterceptorsGuardsInterceptorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardsInterceptorsComponent", function () {
      return GuardsInterceptorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var GuardsInterceptorsComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(GuardsInterceptorsComponent, _page_page_component_2);

      function GuardsInterceptorsComponent() {
        _classCallCheck(this, GuardsInterceptorsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(GuardsInterceptorsComponent).apply(this, arguments));
      }

      return GuardsInterceptorsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    GuardsInterceptorsComponent.??fac = function GuardsInterceptorsComponent_Factory(t) {
      return ??GuardsInterceptorsComponent_BaseFactory(t || GuardsInterceptorsComponent);
    };

    GuardsInterceptorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GuardsInterceptorsComponent,
      selectors: [["app-guards-interceptors"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 165,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/guards-interceptors.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "other-features"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/apollo-server/schema/directives/"], ["routerLink", "/guards"], ["routerLink", "/interceptors"], ["appAnchor", "", "id", "overview"], ["routerLink", "/exception-filters"], ["routerLink", "/pipes"], ["routerLink", "/custom-decorators"], [1, "language-typescript"], ["appAnchor", "", "id", "execution-context"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/execution-context"], ["appAnchor", "", "id", "exception-filters"], [1, "info"], ["appAnchor", "", "id", "custom-decorators"]],
      template: function GuardsInterceptorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Other features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "In the GraphQL world, there is a lot of debate about handling issues like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ", or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "side-effects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " of operations. Should we handle things inside the business logic? Should we use a higher-order function to enhance queries and mutations with authorization logic? Or should we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "schema directives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "? There is no single one-size-fits-all answer to these questions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Nest helps address these issues with its cross-platform features like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ". The philosophy is to reduce redundancy and provide tooling that helps create well-structured, readable, and consistent applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "You can use standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "pipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " in the same fashion with GraphQL as with any RESTful application. Additionally, you can easily create your own decorators by leveraging the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "custom decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " feature. Let's take a look at a sample GraphQL query handler.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "\n@Query('author')\n@UseGuards(AuthGuard)\nasync getAuthor(@Args('id', ParseIntPipe) id: number) {\n  return this.authorsService.findOneById(id);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "As you can see, GraphQL works with both guards and pipes in the same way as HTTP REST handlers. Because of this, you can move your authentication logic to a guard; you can even reuse the same guard class across both a REST and GraphQL API interface. Similarly, interceptors work across both types of applications in the same way:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\n@Mutation()\n@UseInterceptors(EventsInterceptor)\nasync upvotePost(@Args('postId') postId: number) {\n  return this.postsService.upvoteById({ id: postId });\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Execution context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Since GraphQL receives a different type of data in the incoming request, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " received by both guards and interceptors is somewhat different with GraphQL vs. REST. GraphQL resolvers have a distinct set of arguments: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "root");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "args");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, ". Thus guards and interceptors must transform the generic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " to a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "GqlExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ". This is straightforward:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\nimport { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';\nimport { GqlExecutionContext } from '@nestjs/graphql';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const ctx = GqlExecutionContext.create(context);\n    return true;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "The GraphQL context object returned by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "GqlExecutionContext.create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " exposes a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "get");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " method for each GraphQL resolver argument (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "getArgs()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "getContext()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, ", etc). Once transformed, we can easily pick out any GraphQL argument for the current request.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Exception filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Nest standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "exception filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " are compatible with GraphQL applications as well. As with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, ", GraphQL apps should transform the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " object to a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "GqlArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "\n@Catch(HttpException)\nexport class HttpExceptionFilter implements GqlExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const gqlHost = GqlArgumentsHost.create(host);\n    return exception;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "GqlExceptionFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "GqlArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " are imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Note that unlike the REST case, you don't use the native ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " object to generate a response.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Custom decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "As mentioned, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "custom decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " feature works as expected with GraphQL resolvers. The only difference is that the factory function takes an array of GraphQL request arguments as its second argument, instead of a single ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " object (as with REST applications).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "\nexport const User = createParamDecorator(\n  (data, [root, args, ctx, info]) => ctx.user,\n);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "@User()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " custom decorator as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "\n@Mutation()\nasync upvotePost(\n  @User() user: UserEntity,\n  @Args('postId') postId: number,\n) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " In the above example, we have assumed that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " object is assigned to the context of your GraphQL application.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??GuardsInterceptorsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](GuardsInterceptorsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GuardsInterceptorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guards-interceptors',
          templateUrl: './guards-interceptors.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/mutations/mutations.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/mutations/mutations.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MutationsComponent */

  /***/
  function srcAppHomepagePagesGraphqlMutationsMutationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationsComponent", function () {
      return MutationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MutationsComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(MutationsComponent, _page_page_component_3);

      function MutationsComponent() {
        _classCallCheck(this, MutationsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(MutationsComponent).apply(this, arguments));
      }

      return MutationsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    MutationsComponent.??fac = function MutationsComponent_Factory(t) {
      return ??MutationsComponent_BaseFactory(t || MutationsComponent);
    };

    MutationsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MutationsComponent,
      selectors: [["app-mutations"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 113,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/mutations.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "mutations"], ["rel", "nofollow", "target", "_blank", "href", "http://graphql.org/learn/queries/#mutations"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graphql-tools/generate-schema.html"], ["appAnchor", "", "id", "schema-first"], ["routerLink", "/graphql/resolvers-map"], [1, "language-typescript"], ["appAnchor", "", "id", "type-definitions"], [1, "language-graphql"], ["appAnchor", "", "id", "code-first"], [1, "info"]],
      template: function MutationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Mutations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "In GraphQL, we use mutations to modify server-side data (read more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "). The official ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Apollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " documentation uses an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "upvotePost()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " mutation example. This mutation implements a method to increase a post's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " property value. To create an equivalent mutation in Nest, we'll make use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "@Mutation()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Let's extend our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "AuthorResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " used in the previous section (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n@Resolver('Author')\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query('author')\n  async getAuthor(@Args('id') id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @Mutation()\n  async upvotePost(@Args('postId') postId: number) {\n    return this.postsService.upvoteById({ id: postId });\n  }\n\n  @ResolveProperty('posts')\n  async getPosts(@Parent() { id }) {\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Note that we assumed above that the business logic has been moved to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "PostsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " (querying the post and incrementing its ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " property).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Type definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "The last step is to add our mutation to the existing types definition.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\ntype Author {\n  id: Int!\n  firstName: String\n  lastName: String\n  posts: [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String\n  votes: Int\n}\n\ntype Query {\n  author(id: Int!): Author\n}\n\ntype Mutation {\n  upvotePost(postId: Int!): Post\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "upvotePost(postId: Int!): Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " mutation is now available to be called as part of our application's GraphQL API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Let's add another method to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "AuthorResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " used in the previous section (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n@Resolver(of => Author)\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query(returns => Author, { name: 'author' })\n  async getAuthor(@Args({ name: 'id', type: () => Int }) id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @Mutation(returns => Post)\n  async upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {\n    return this.postsService.upvoteById({ id: postId });\n  }\n\n  @ResolveProperty('posts')\n  async getPosts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "upvotePost()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " method takes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "postId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Int");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, ") as an argument and returns an updated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " entity. For the reasons explained in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " section, we have to explicitly set the expected type.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "If the mutation needs to take an object as an argument, we can create an input type.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "\n@InputType()\nexport class UpvotePostInput {\n  @Field() postId: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "@InputType()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "@Field()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " are imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "We can then use this type in the resolver class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n@Mutation(returns => Post)\nasync upvotePost(\n  @Args('upvotePostData') upvotePostData: UpvotePostInput,\n) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??MutationsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MutationsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MutationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mutations',
          templateUrl: './mutations.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/quick-start/quick-start.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/quick-start/quick-start.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: QuickStartComponent */

  /***/
  function srcAppHomepagePagesGraphqlQuickStartQuickStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickStartComponent", function () {
      return QuickStartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");

    var QuickStartComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(QuickStartComponent, _page_page_component_4);

      function QuickStartComponent() {
        _classCallCheck(this, QuickStartComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(QuickStartComponent).apply(this, arguments));
      }

      return QuickStartComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    QuickStartComponent.??fac = function QuickStartComponent_Factory(t) {
      return ??QuickStartComponent_BaseFactory(t || QuickStartComponent);
    };

    QuickStartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: QuickStartComponent,
      selectors: [["app-quick-start"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 348,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/quick-start.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "harnessing-the-power-of-typescript--graphql"], ["rel", "nofollow", "target", "_blank", "href", "https://graphql.org/"], ["rel", "nofollow", "target", "_blank", "href", "https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b"], ["rel", "nofollow", "target", "_blank", "href", "https://www.typescriptlang.org/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "overview"], ["appAnchor", "", "id", "getting-started-with-graphql--typescript"], [1, "filename"], ["app78ca2307a2902db198eea27ba06a7a1829ef94a6", ""], [1, "language-typescript"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server.html#constructor-options-lt-ApolloServer-gt"], ["app0992e6e5f4d6e5e022c7ba9822d26b115b797e33", ""], ["appAnchor", "", "id", "playground"], ["src", "/assets/playground.png", "alt", ""], ["appAnchor", "", "id", "multiple-endpoints"], ["appAnchor", "", "id", "schema-first"], [1, "info"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/12-graphql-apollo"], ["appAnchor", "", "id", "code-first"], ["rel", "nofollow", "target", "_blank", "href", "https://typegraphql.ml/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/23-type-graphql"], ["appAnchor", "", "id", "async-configuration"], ["href", "https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory"]],
      template: function QuickStartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Harnessing the power of TypeScript & GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is a powerful query language for APIs and a runtime for fulfilling those queries with your existing data. It's an elegant approach that solves many problems typically found with REST APIs. For background, we suggest reading this ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "comparison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " between GraphQL and REST. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "GraphQL combined with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " helps you develop better type safety with your GraphQL queries, giving you get end-to-end typing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "In this chapter, we assume a basic understanding of GraphQL, and focus on how to work with the built-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " module. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " is a wrapper around the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Apollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " server. We use this proven GraphQL package to provide a way to use GraphQL with Nest.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Start by installing the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n$ npm i --save @nestjs/graphql graphql-tools graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "And depending on what you use (Express or Fastify), you need to install ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "apollo-server-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "apollo-server-fastify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Nest offers two ways of building GraphQL applications, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " methods.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "In the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " approach, the source of truth is a GraphQL SDL (Schema Definition Language) SDL is a language-agnostic way to share schema files between different platforms. Nest automatically generates your TypeScript definitions based on the GraphQL schemas (using either classes or interfaces) to reduce redundancy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "In the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Getting started with GraphQL & TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Once the packages are installed, we can import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " and configure it with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " static method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\n\n@Module({\n  imports: [\n    GraphQLModule.forRoot({}),\n  ],\n})\nexport class ApplicationModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " method takes an options object as an argument. These options are passed through to the underlying Apollo instance (read more about available settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "). For example, if you want to disable the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "playground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " and turn off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "debug");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " mode, pass the following options:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\nimport { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\n\n@Module({\n  imports: [\n    GraphQLModule.forRoot({\n      debug: false,\n      playground: false,\n    }),\n  ],\n})\nexport class ApplicationModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "As mentioned, these options will be forwarded to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "ApolloServer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " constructor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Playground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "The playground is a graphical, interactive, in-browser GraphQL IDE, available by default on the same URL as the GraphQL server itself. With your application running in the background, open your web browser and navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "http://localhost:3000/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " (host and port may vary depending on your configuration). You should see the GraphQL playground, as shown below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Multiple endpoints");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Another useful feature of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " module is the ability to serve multiple endpoints at once. This lets you decide which modules should be included in which endpoint. By default, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " searches for resolvers throughout the whole app. To limit this scan to only a subset of modules, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\nGraphQLModule.forRoot({\n  include: [CatsModule],\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "To use the schema first approach, start by adding a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "typePaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " property to the options object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\nGraphQLModule.forRoot({\n  typePaths: ['./**/*.graphql'],\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "typePaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " property indicates where the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " should look for GraphQL files. These files will be combined in memory; this allows you to split your schemas into several files and locate them near their resolvers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Creating GraphQL types and corresponding TypeScript definitions is redundant and tedious. It leaves us without a single source of truth -- each change made within SDL forces us to adjust interfaces as well. To address this, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " package can automatically generate TS definitions from the abstract syntax tree (AST). To enable this feature, add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " options property when configuring the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "\nGraphQLModule.forRoot({\n  typePaths: ['./**/*.graphql'],\n  definitions: {\n    path: join(process.cwd(), 'src/graphql.ts'),\n  },\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "The path property of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " object (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "src/graphql.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " above) indicates where to save TypeScript output. By default, all types are generated as interfaces. To generate classes instead, specify the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "outputAs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " property with a value of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "'class'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "\nGraphQLModule.forRoot({\n  typePaths: ['./**/*.graphql'],\n  definitions: {\n    path: join(process.cwd(), 'src/graphql.ts'),\n    outputAs: 'class',\n  },\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "The above approach dynamically generates type definitions each time the application starts. Alternatively, it may be preferable to build a simple script to generate these on demand. For example, assume we create the following script as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "generate-typings.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "\nimport { GraphQLDefinitionsFactory } from '@nestjs/graphql';\nimport { join } from 'path';\n\nconst definitionsFactory = new GraphQLDefinitionsFactory();\ndefinitionsFactory.generate({\n  typePaths: ['./src/**/*.graphql'],\n  path: join(process.cwd(), 'src/graphql.ts'),\n  outputAs: 'class',\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Now you can run this script only when needed:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "\n$ ts-node generate-typings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "blockquote", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " You can compile the script beforehand (e.g., with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, ") and use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, " to execute it.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "To enable watch mode for the script (to automatically generate typings whenever any ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, ".graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " file changes), pass the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "watch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " option to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "generate()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "\ndefinitionsFactory.generate({\n  typePaths: ['./src/**/*.graphql'],\n  path: join(process.cwd(), 'src/graphql.ts'),\n  outputAs: 'class',\n  watch: true,\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "A fully working sample is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "In the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Nest uses the powerful ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " library under the hood to provide this functionality. To start using it, first install the package.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "\n$ npm i type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Once installation is complete, we can add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "autoSchemaFile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, " property to the options object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "\nGraphQLModule.forRoot({\n  autoSchemaFile: 'schema.gql',\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "autoSchemaFile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " property value is the path where your automatically generated schema will be created. Additionally, you can pass the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "buildSchemaOptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, " property - an options object which will be passed in to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "buildSchema()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, " function (from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, " package). Alternatively, the schema can be generated on-the-fly in memory. To enable this, set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "autoSchemaFile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, " property to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "\nGraphQLModule.forRoot({\n  autoSchemaFile: true,\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "A fully working sample is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Async configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "When you need to pass module options asynchronously instead of statically, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "forRootAsync()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, " method. As with most dynamic modules, Nest provides several techniques to deal with async configuration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "One technique is to use a factory function:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "\nGraphQLModule.forRootAsync({\n  useFactory: () => ({\n    typePaths: ['./**/*.graphql'],\n  }),\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Like other factory providers, our factory function can be ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " and can inject dependencies through ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "inject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "\nGraphQLModule.forRootAsync({\n  imports: [ConfigModule],\n  useFactory: async (configService: ConfigService) => ({\n    typePaths: configService.getString('GRAPHQL_TYPE_PATHS'),\n  }),\n  inject: [ConfigService],\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Alternatively, you can configure the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " using a class instead of a factory, as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "\nGraphQLModule.forRootAsync({\n  useClass: GqlConfigService,\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "The construction above instantiates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "GqlConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, " inside ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, ", using it to create options object. Note that in this example, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "GqlConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, " has to implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "GqlOptionsFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, " interface, as shown below. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, " will call the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "createGqlOptions()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " method on the instantiated object of the supplied class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "\n@Injectable()\nclass GqlConfigService implements GqlOptionsFactory {\n  createGqlOptions(): GqlModuleOptions {\n    return {\n      typePaths: ['./**/*.graphql'],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "If you want to reuse an existing options provider instead of creating a private copy inside the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, ", use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "useExisting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, " syntax.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "\nGraphQLModule.forRootAsync({\n  imports: [ConfigModule],\n  useExisting: ConfigService,\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__["BannerEnterpriseComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??QuickStartComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](QuickStartComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](QuickStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quick-start',
          templateUrl: './quick-start.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/resolvers-map/resolvers-map.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/resolvers-map/resolvers-map.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ResolversMapComponent */

  /***/
  function srcAppHomepagePagesGraphqlResolversMapResolversMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResolversMapComponent", function () {
      return ResolversMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-shop/banner-shop.component */
    "./src/app/shared/components/banner-shop/banner-shop.component.ts");

    var ResolversMapComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(ResolversMapComponent, _page_page_component_5);

      function ResolversMapComponent() {
        _classCallCheck(this, ResolversMapComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ResolversMapComponent).apply(this, arguments));
      }

      return ResolversMapComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ResolversMapComponent.??fac = function ResolversMapComponent_Factory(t) {
      return ??ResolversMapComponent_BaseFactory(t || ResolversMapComponent);
    };

    ResolversMapComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ResolversMapComponent,
      selectors: [["app-resolvers-map"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 327,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/resolvers-map.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "resolvers"], ["appAnchor", "", "id", "schema-first"], ["routerLink", "/graphql/quick-start"], ["rel", "nofollow", "target", "_blank", "href", "http://graphql.org/learn/schema/#type-language"], [1, "language-graphql"], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "typings"], ["routerLink", "/techniques/validation"], [1, "warning"], ["routerLink", "/pipes"], ["appAnchor", "", "id", "code-first"], ["appAnchor", "", "id", "decorators"], ["appAnchor", "", "id", "module"], ["rel", "nofollow", "target", "_blank", "href", "http://graphql.org/learn/queries/"]],
      template: function ResolversMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Resolvers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Typically, you create a resolvers map manually. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " package, on the other hand, generates a resolvers map automatically using the metadata provided by the decorators. To demonstrate the library basics, we'll create a simple authors API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "As mentioned in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " chapter, in the schema first approach we manually define our types in SDL (read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\ntype Author {\n  id: Int!\n  firstName: String\n  lastName: String\n  posts: [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  votes: Int\n}\n\ntype Query {\n  author(id: Int!): Author\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Our GraphQL schema contains a single exposed query - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "author(id: Int!): Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, ". Now, let's create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "AuthorResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n@Resolver('Author')\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query()\n  async author(@Args('id') id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty()\n  async posts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "blockquote", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " If you use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " decorator, you don't have to mark a class as an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "@Injectable()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " decorator does not affect queries and mutations (neither ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "@Query()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " nor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "@Mutation()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " decorators). It only informs Nest that each ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "@ResolveProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " inside this particular class has a parent, which is an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " type in this case (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Author.posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " relation). Basically, instead of setting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " at the top of the class, this can be done close to the method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n@Resolver('Author')\n@ResolveProperty()\nasync posts(@Parent() author) {\n  const { id } = author;\n  return this.postsService.findAll({ authorId: id });\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "However, if you have multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "@ResolveProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " decorators inside one class, you must add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " to all of them, which is not necessarily a good practice (as it creates extra overhead).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Conventionally, we would use something like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "getAuthor()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "getPosts()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " as method names. We can easily do this by passing the real names as arguments of the decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\n@Resolver('Author')\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query('author')\n  async getAuthor(@Args('id') id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty('posts')\n  async getPosts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "blockquote", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " decorator can be used at the method-level as well.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Typings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Assuming that we have enabled the typings generation feature (with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "outputAs: 'class'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " as shown in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " chapter), once you run the application it should generate the following file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\nexport class Author {\n  id: number;\n  firstName?: string;\n  lastName?: string;\n  posts?: Post[];\n}\n\nexport class Post {\n  id: number;\n  title: string;\n  votes?: number;\n}\n\nexport abstract class IQuery {\n  abstract author(id: number): Author | Promise<Author>;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Generating classes (instead of interfaces) allows you to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, ", which makes them extremely useful for validation purposes (read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "). For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\nimport { MinLength, MaxLength } from 'class-validator';\n\nexport class CreatePostInput {\n  @MinLength(3)\n  @MaxLength(50)\n  title: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " To enable auto-validation of your inputs (and parameters), use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "ValidationPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, ". Read more about validation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " or more specifically about pipes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "However, if you add decorators directly to the automatically generated file, they will be ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "overwritten");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " each time the file is generated. Instead, create a separate file and simply extend the generated class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "\nimport { MinLength, MaxLength } from 'class-validator';\nimport { Post } from '../../graphql.ts';\n\nexport class CreatePostInput extends Post {\n  @MinLength(3)\n  @MaxLength(50)\n  title: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "In the code first approach, we don't write SDL by hand. Instead we use decorators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "\nimport { Field, Int, ObjectType } from 'type-graphql';\nimport { Post } from './post';\n\n@ObjectType()\nexport class Author {\n  @Field(type => Int)\n  id: number;\n\n  @Field({ nullable: true })\n  firstName?: string;\n\n  @Field({ nullable: true })\n  lastName?: string;\n\n  @Field(type => [Post])\n  posts: Post[];\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " model has been created. Now, let's create the missing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "\nimport { Field, Int, ObjectType } from 'type-graphql';\n\n@ObjectType()\nexport class Post {\n  @Field(type => Int)\n  id: number;\n\n  @Field()\n  title: string;\n\n  @Field(type => Int, { nullable: true })\n  votes?: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "With our models in place, we can move to the resolver class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "\n@Resolver(of => Author)\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query(returns => Author)\n  async author(@Args({ name: 'id', type: () => Int }) id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty()\n  async posts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Conventionally, we would use something like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "getAuthor()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "getPosts()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " as method names. We can easily do this by passing the real names as arguments of the decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "\n@Resolver(of => Author)\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query(returns => Author, { name: 'author' })\n  async getAuthor(@Args({ name: 'id', type: () => Int }) id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty('posts', returns => [Post])\n  async getPosts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Usually, you won't have to pass such an object into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "@Args()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " decorator. For example, if your identifier's type is string, the following construction would be sufficient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "\n@Args('id') id: string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "However, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " type doesn't give ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " enough information about the expected GraphQL representation (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Int");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " vs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "). Thus we have to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "explicitly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, " pass the type reference.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Moreover, you can create a dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "AuthorArgs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "\n@Args() args: AuthorArgs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "With the following body:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "\n@ArgsType()\nclass AuthorArgs {\n  @Field(type => Int)\n  @Min(1)\n  id: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "blockquote", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Int");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, " and both decorators ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "@Field()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "@ArgsType()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " are imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "type-graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " package, while ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "@Min()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, " comes from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "You may also notice that such classes play very well with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "ValidationPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " (read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "app-banner-shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "You may note that we refer to the following arguments using dedicated decorators. Below is a comparison of the provided decorators and the plain Apollo parameters they represent.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "@Root()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "@Parent()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "root");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "parent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "@Context(param?: string)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "context[param]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "@Info(param?: string)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "info[param]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "@Args(param?: string)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "args");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "args[param]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "Once we're done here, we have to provide the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "AuthorResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " somewhere. For example, we can do this in the newly created ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "AuthorsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "\n@Module({\n  imports: [PostsModule],\n  providers: [AuthorsService, AuthorResolver],\n})\nexport class AuthorsModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, " will take care of reflecting the metadata and transforming classes into the correct resolvers map automatically. The only thing you need to be aware of is that you need to import this module somewhere, so Nest will be able to utilize ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "AuthorsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "blockquote", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, " Learn more about GraphQL queries ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_4__["BannerShopComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ResolversMapComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ResolversMapComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ResolversMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resolvers-map',
          templateUrl: './resolvers-map.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/scalars/scalars.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/scalars/scalars.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ScalarsComponent */

  /***/
  function srcAppHomepagePagesGraphqlScalarsScalarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScalarsComponent", function () {
      return ScalarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var ScalarsComponent =
    /*#__PURE__*/
    function (_page_page_component_6) {
      _inherits(ScalarsComponent, _page_page_component_6);

      function ScalarsComponent() {
        _classCallCheck(this, ScalarsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ScalarsComponent).apply(this, arguments));
      }

      return ScalarsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ScalarsComponent.??fac = function ScalarsComponent_Factory(t) {
      return ??ScalarsComponent_BaseFactory(t || ScalarsComponent);
    };

    ScalarsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ScalarsComponent,
      selectors: [["app-scalars"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 113,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/scalars.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "scalars"], ["appAnchor", "", "id", "schema-first"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graphql-tools/scalars.html"], [1, "language-bash"], [1, "language-typescript"], [1, "language-graphql"], ["appAnchor", "", "id", "code-first"]],
      template: function ScalarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Scalars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "GraphQL includes the following default types: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Int");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "String");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, ". In addition to these built-in types, you may need to support custom atomic data types (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "To define a custom scalar (read more about scalars ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "), create a type definition and a dedicated resolver. Here (as in the official documentation), we\u2019ll use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "graphql-type-json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " package for demonstration purposes. This npm package defines a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " GraphQL scalar type.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Start by installing the package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n$ npm i --save graphql-type-json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Once the package is installed, we pass a custom resolver to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\nimport * as GraphQLJSON from 'graphql-type-json';\n\n@Module({\n  imports: [\n    GraphQLModule.forRoot({\n      typePaths: ['./**/*.graphql'],\n      resolvers: { JSON: GraphQLJSON },\n    }),\n  ],\n})\nexport class ApplicationModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Now we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " scalar in our type definitions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\nscalar JSON\n\ntype Foo {\n  field: JSON\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Another method to define a scalar type is to create a simple class. Assume we want to enhance our schema with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " type.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\nimport { Scalar, CustomScalar } from '@nestjs/graphql';\nimport { Kind, ValueNode } from 'graphql';\n\n@Scalar('Date')\nexport class DateScalar implements CustomScalar<number, Date> {\n  description = 'Date custom scalar type';\n\n  parseValue(value: number): Date {\n    return new Date(value); // value from the client\n  }\n\n  serialize(value: Date): number {\n    return value.getTime(); // value sent to the client\n  }\n\n  parseLiteral(ast: ValueNode): Date {\n    if (ast.kind === Kind.INT) {\n      return new Date(ast.value);\n    }\n    return null;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "With this in place, register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "DateScalar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " as a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\n@Module({\n  providers: [DateScalar],\n})\nexport class CommonModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Now we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " scalar in type definitions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "\nscalar Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "To create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " scalar, simply create a new class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "\nimport { Scalar, CustomScalar } from '@nestjs/graphql';\nimport { Kind, ValueNode } from 'graphql';\n\n@Scalar('Date', type => Date)\nexport class DateScalar implements CustomScalar<number, Date> {\n  description = 'Date custom scalar type';\n\n  parseValue(value: number): Date {\n    return new Date(value); // value from the client\n  }\n\n  serialize(value: Date): number {\n    return value.getTime(); // value sent to the client\n  }\n\n  parseLiteral(ast: ValueNode): Date {\n    if (ast.kind === Kind.INT) {\n      return new Date(ast.value);\n    }\n    return null;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "With this in place, register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "DateScalar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " as a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "\n@Module({\n  providers: [DateScalar],\n})\nexport class CommonModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Now we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " type in our classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\n@Field()\ncreationDate: Date;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ScalarsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ScalarsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScalarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scalars',
          templateUrl: './scalars.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/schema-stitching/schema-stitching.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/schema-stitching/schema-stitching.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SchemaStitchingComponent */

  /***/
  function srcAppHomepagePagesGraphqlSchemaStitchingSchemaStitchingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemaStitchingComponent", function () {
      return SchemaStitchingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var SchemaStitchingComponent =
    /*#__PURE__*/
    function (_page_page_component_7) {
      _inherits(SchemaStitchingComponent, _page_page_component_7);

      function SchemaStitchingComponent() {
        _classCallCheck(this, SchemaStitchingComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SchemaStitchingComponent).apply(this, arguments));
      }

      _createClass(SchemaStitchingComponent, [{
        key: "stitchingExample",
        get: function get() {
          return "\nmergeInfo => ({\n  User: {\n    chirps: {\n      fragment: `fragment UserFragment on User { id }`,\n      resolve(parent, args, context, info) {\n        const authorId = parent.id;\n        return mergeInfo.delegate(\n          'query',\n          'chirpsByAuthorId',\n          {\n            authorId,\n          },\n          context,\n          info,\n        );\n      },\n    },\n  }\n})";
        }
      }, {
        key: "stitchNestWay",
        get: function get() {
          return "\n@Resolver('User')\n@DelegateProperty('chirps')\nfindChirpsByUserId() {\n  return (mergeInfo: MergeInfo) => ({\n    fragment: `fragment UserFragment on User { id }`,\n    resolve(parent, args, context, info) {\n      const authorId = parent.id;\n      return mergeInfo.delegate(\n        'query',\n        'chirpsByAuthorId',\n        {\n          authorId,\n        },\n        context,\n        info,\n      );\n    },\n  });\n}";
        }
      }, {
        key: "createSchema",
        get: function get() {
          return "\nconfigure(consumer) {\n  const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');\n  const localSchema = this.graphQLFactory.createSchema({ typeDefs });\n  const delegates = this.graphQLFactory.createDelegates();\n  const schema = mergeSchemas({\n    schemas: [localSchema, chirpSchema, linkTypeDefs],\n    resolvers: delegates,\n  });\n\n  consumer\n    .apply(graphqlExpress(req => ({ schema, rootValue: req })))\n    .forRoutes('/graphql');\n}";
        }
      }, {
        key: "chirpsSchema",
        get: function get() {
          return "\nimport { makeExecutableSchema } from 'graphql-tools';\n    \nconst chirpSchema = makeExecutableSchema({\n  typeDefs: `\n    type Chirp {\n      id: ID!\n      text: String\n      authorId: ID!\n    }\n\n    type Query {\n      chirpById(id: ID!): Chirp\n      chirpsByAuthorId(authorId: ID!): [Chirp]\n    }\n  `\n});\nconst linkTypeDefs = `\n  extend type User {\n    chirps: [Chirp]\n  }\n\n  extend type Chirp {\n    author: User\n  }\n`;";
        }
      }]);

      return SchemaStitchingComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SchemaStitchingComponent.??fac = function SchemaStitchingComponent_Factory(t) {
      return ??SchemaStitchingComponent_BaseFactory(t || SchemaStitchingComponent);
    };

    SchemaStitchingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SchemaStitchingComponent,
      selectors: [["app-schema-stitching"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 82,
      vars: 8,
      consts: [[1, "content"], ["href", "https://www.apollographql.com/docs/graphql-tools/schema-stitching.html", "target", "_blank", "rel", "nofollow"], ["href", "https://www.apollographql.com/docs/graphql-tools/schema-stitching.html#adding-resolvers", "target", "_blank", "rel", "nofollow"], [1, "language-typescript"], [1, "info"], [1, "filename"], ["appModuleSchemaT", ""], ["href", "https://www.apollographql.com/docs/graphql-tools/schema-stitching.html#mergeSchemas", "target", "_blank", "rel", "nofollow"]],
      template: function SchemaStitchingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Schema stitching");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " The schema stitching is a feature that allows creating a single GraphQL schema from multiple underlying GraphQL APIs. You can read more about it ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Proxying");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " To add the ability to proxy fields between schemas, you need to create additional resolvers between them. Let's have a look on the example from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Apollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " documentation: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Here we delegate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "chirps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " property of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " to another GraphQL API. In order to achieve the same behavior in Nest, we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "@DelegateProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " decorator. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "blockquote", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "@Resolver()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " decorator is used here at the method-level, but you can use it at top (class) level as well. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Then, let's take a step back to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "graphqlExpress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " middleware. We need to merge our schemas and add delegates between them. To create delegates we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "createDelegates()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " method of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "GraphQLFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " class. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](52, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-tabs", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " In order to merge schemas, we have used ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "mergeSchemas()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " function (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "). Moreover, you may notice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "chirpsSchema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "linkTypeDefs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " variables. They're copied & pasted directly from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Apollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " documentation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "app-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " That's all. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.stitchingExample);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.stitchNestWay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](52, 5, "app.module", _r235.isJsActive), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.createSchema);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.chirpsSchema);
        }
      },
      directives: [_shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_3__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??SchemaStitchingComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](SchemaStitchingComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SchemaStitchingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schema-stitching',
          templateUrl: './schema-stitching.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/graphql/subscriptions/subscriptions.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/graphql/subscriptions/subscriptions.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SubscriptionsComponent */

  /***/
  function srcAppHomepagePagesGraphqlSubscriptionsSubscriptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function () {
      return SubscriptionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SubscriptionsComponent =
    /*#__PURE__*/
    function (_page_page_component_8) {
      _inherits(SubscriptionsComponent, _page_page_component_8);

      function SubscriptionsComponent() {
        _classCallCheck(this, SubscriptionsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionsComponent).apply(this, arguments));
      }

      return SubscriptionsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SubscriptionsComponent.??fac = function SubscriptionsComponent_Factory(t) {
      return ??SubscriptionsComponent_BaseFactory(t || SubscriptionsComponent);
    };

    SubscriptionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SubscriptionsComponent,
      selectors: [["app-subscriptions"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 156,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/graphql/subscriptions.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "subscriptions"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graphql-subscriptions"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graphql-subscriptions/subscriptions-to-schema.html"], [1, "language-typescript"], [1, "warning"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/graphql-subscriptions/setup.html"], ["appAnchor", "", "id", "schema-first"], ["appAnchor", "", "id", "type-definitions"], [1, "language-graphql"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/blob/master/sample/12-graphql-apollo"], ["appAnchor", "", "id", "code-first"], ["appAnchor", "", "id", "pubsub"], ["routerLink", "/fundamentals/custom-providers"], ["appAnchor", "", "id", "module"], ["rel", "nofollow", "target", "_blank", "href", "https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server.html#constructor-options-lt-ApolloServer-gt"]],
      template: function SubscriptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Subscriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Subscription is another GraphQL operation type, like Query and Mutation. It allows creating real-time subscriptions over a bi-directional transport layer, mainly over websockets. Read more about subscriptions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ". Below is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "commentAdded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " subscription example, copied directly from the official ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Apollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " documentation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nSubscription: {\n  commentAdded: {\n    subscribe: () => pubSub.asyncIterator('commentAdded');\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "blockquote", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "pubSub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " object is an instance of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "PubSub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " class. Read more about it ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Schema first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "To create an equivalent subscription in Nest, we'll make use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "@Subscription()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\nconst pubSub = new PubSub();\n\n@Resolver('Author')\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query('author')\n  async getAuthor(@Args('id') id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty('posts')\n  async getPosts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n\n  @Subscription()\n  commentAdded() {\n    return pubSub.asyncIterator('commentAdded');\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "To filter out specific events based on context and arguments, set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n@Subscription('commentAdded', {\n  filter: (payload, variables) =>\n    payload.commentAdded.repositoryName === variables.repoFullName,\n})\ncommentAdded() {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "To mutate the published payload, we can use a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "resolve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " function.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\n@Subscription('commentAdded', {\n  resolve: value => value,\n})\ncommentAdded() {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "If you need to access injected providers (e.g., use an external service to validate the data), use the following construction:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n@Subscription('commentAdded', {\n  resolve(this: AuthorResolver, value) {\n    // \"this\" refers to an instance of \"AuthorResolver\"\n    return value;\n  }\n})\ncommentAdded() {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "The same construction works with filters:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\n@Subscription('commentAdded', {\n  filter(this: AuthorResolver, payload, variables) {\n    // \"this\" refers to an instance of \"AuthorResolver\"\n    return payload.commentAdded.repositoryName === variables.repoFullName;\n  }\n})\ncommentAdded() {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Type definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "The last step is to update the type definitions file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "\ntype Author {\n  id: Int!\n  firstName: String\n  lastName: String\n  posts: [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String\n  votes: Int\n}\n\ntype Query {\n  author(id: Int!): Author\n}\n\ntype Comment {\n  id: String\n  content: String\n}\n\ntype Subscription {\n  commentAdded(repoFullName: String!): Comment\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "With this, we've created a single ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "commentAdded(repoFullName: String!): Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " subscription. You can find a full sample implementation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Code first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "To create a subscription using the code-first approach, we'll make use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "@Subscription()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\nconst pubSub = new PubSub();\n\n@Resolver('Author')\nexport class AuthorResolver {\n  constructor(\n    private readonly authorsService: AuthorsService,\n    private readonly postsService: PostsService,\n  ) {}\n\n  @Query(returns => Author, { name: 'author' })\n  async getAuthor(@Args({ name: 'id', type: () => Int }) id: number) {\n    return this.authorsService.findOneById(id);\n  }\n\n  @ResolveProperty('posts')\n  async getPosts(@Parent() author) {\n    const { id } = author;\n    return this.postsService.findAll({ authorId: id });\n  }\n\n  @Subscription(returns => Comment)\n  commentAdded() {\n    return pubSub.asyncIterator('commentAdded');\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "To filter out specific events based on context and arguments, set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "\n@Subscription(returns => Comment, {\n  filter: (payload, variables) =>\n    payload.commentAdded.repositoryName === variables.repoFullName,\n})\ncommentAdded(@Args({ name: 'repoFullName', type: () => String }) repoFullName: string ) {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "To mutate the published payload, we can use a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "resolve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " function.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "\n@Subscription(returns => Comment, {\n  resolve: value => value,\n})\ncommentAdded() {\n  return pubSub.asyncIterator('commentAdded');\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "PubSub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "We used a local ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "PubSub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " instance above. The preferred approach is to define ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "PubSub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " and inject it through the constructor (using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " decorator). This allows us to re-use the instance across the whole application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\n{\n  provide: 'PUB_SUB',\n  useValue: new PubSub(),\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "To enable subscriptions, set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "installSubscriptionHandlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " property to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "\nGraphQLModule.forRoot({\n  typePaths: ['./**/*.graphql'],\n  installSubscriptionHandlers: true,\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "To customize the subscriptions server (e.g., change the listener port), use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "subscriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " options property (read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??SubscriptionsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](SubscriptionsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SubscriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subscriptions',
          templateUrl: './subscriptions.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-graphql-graphql-module-es5.js.map