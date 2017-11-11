define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AppKernel {
        init() {
            this.appContainer.build();
            this.getDebuggerService().log("Initialize app...");
            this.getDebuggerService().log("Register services...");
            this.getDebuggerService().log("Initialization complete!");
            return this;
        }
        getDebuggerService() {
            return this.appContainer.getDebuggerService();
        }
    }
    exports.AppKernel = AppKernel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUdXLElBQUk7WUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVTLGtCQUFrQjtZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELENBQUM7S0FDSjtJQWpCRCw4QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlYnVnZ2VyU2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2UvRGVidWcvRGVidWdnZXJTZXJ2aWNlXCI7XG5pbXBvcnQge0FwcENvbnRhaW5lcn0gZnJvbSBcIi4vQXBwQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHBLZXJuZWwge1xuICAgIHByaXZhdGUgYXBwQ29udGFpbmVyOiBBcHBDb250YWluZXI7XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBBcHBLZXJuZWwge1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5idWlsZCgpO1xuXG4gICAgICAgIHRoaXMuZ2V0RGVidWdnZXJTZXJ2aWNlKCkubG9nKFwiSW5pdGlhbGl6ZSBhcHAuLi5cIik7XG4gICAgICAgIHRoaXMuZ2V0RGVidWdnZXJTZXJ2aWNlKCkubG9nKFwiUmVnaXN0ZXIgc2VydmljZXMuLi5cIik7XG5cbiAgICAgICAgdGhpcy5nZXREZWJ1Z2dlclNlcnZpY2UoKS5sb2coXCJJbml0aWFsaXphdGlvbiBjb21wbGV0ZSFcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldERlYnVnZ2VyU2VydmljZSgpOiBEZWJ1Z2dlclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBDb250YWluZXIuZ2V0RGVidWdnZXJTZXJ2aWNlKCk7XG4gICAgfVxufVxuIl19