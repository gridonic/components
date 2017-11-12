define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Container {
        constructor() {
            this.registration = {};
            this.instances = {};
        }
        build(builder, env, isDebug) {
            builder.build(this, env, isDebug);
        }
        register(name, init) {
            this.registration[name] = init;
            return this;
        }
        get(name) {
            if (!(name in this.instances)) {
                if (!(name in this.registration)) {
                    throw new Error(`Service ${name} is not registered!`);
                }
                this.instances[name] = this.createInstance(this.registration[name]);
            }
            return this.instances[name];
        }
        createInstance(init) {
            return init();
        }
    }
    exports.default = Container;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9jb3JlL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ1ksaUJBQVksR0FBa0MsRUFBRSxDQUFDO1lBQ2pELGNBQVMsR0FBNEIsRUFBRSxDQUFDO1FBNEJwRCxDQUFDO1FBdkJVLEtBQUssQ0FBQyxPQUF5QixFQUFFLEdBQVcsRUFBRSxPQUFnQjtZQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVNLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBZTtZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxHQUFHLENBQUksSUFBWTtZQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUkscUJBQXFCLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQU0sQ0FBQztRQUNyQyxDQUFDO1FBRVMsY0FBYyxDQUFDLElBQWU7WUFDcEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLENBQUM7S0FDSjtJQTlCRCw0QkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tIFwiLi9Db250YWluZXJCdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSByZWdpc3RyYXRpb246IHsgW2tleTogc3RyaW5nXTogKCkgPT4gYW55OyB9ID0ge307XG4gICAgcHJpdmF0ZSBpbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogYW55OyB9ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGJ1aWxkIHRoZSBjb250YWluZXIsIHJlZ2lzdGVyaW5nIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGxpa2Ugc2VydmljZXMsIGZhY3RvcmllcywgcGFyYW1ldGVycywgLi4uXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkKGJ1aWxkZXI6IENvbnRhaW5lckJ1aWxkZXIsIGVudjogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgYnVpbGRlci5idWlsZCh0aGlzLCBlbnYsIGlzRGVidWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGluaXQ6ICgpID0+IGFueSk6IENvbnRhaW5lciB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uW25hbWVdID0gaW5pdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldDxUPihuYW1lOiBzdHJpbmcpOiBUIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLmluc3RhbmNlcykpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy5yZWdpc3RyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2aWNlICR7bmFtZX0gaXMgbm90IHJlZ2lzdGVyZWQhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tuYW1lXSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UodGhpcy5yZWdpc3RyYXRpb25bbmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW25hbWVdIGFzIFQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUluc3RhbmNlKGluaXQ6ICgpID0+IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBpbml0KCk7XG4gICAgfVxufVxuIl19