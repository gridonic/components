define(["require", "exports", "./FrameworkContainerBuilder"], function (require, exports, FrameworkContainerBuilder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AppKernel {
        constructor(env, isDebug = false) {
            this._env = env;
            this._isDebug = isDebug;
        }
        get env() {
            return this._env;
        }
        get isDebug() {
            return this._isDebug;
        }
        get appContainer() {
            return this._appContainer;
        }
        boot() {
            this._appContainer = this.createAppContainer();
            this.buildContainer();
            this.debug().log("App booted!");
            return this;
        }
        buildContainer() {
            const frameworkContainerBuilder = new FrameworkContainerBuilder_1.default();
            const appContainerBuilder = this.createAppContainerBuilder();
            this.appContainer.build(frameworkContainerBuilder, this.env, this.isDebug);
            this.appContainer.build(appContainerBuilder, this.env, this.isDebug);
        }
        debug() {
            return this._appContainer.debuggerService;
        }
    }
    exports.AppKernel = AppKernel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQU1JLFlBQVksR0FBVyxFQUFFLFVBQW1CLEtBQUs7WUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksR0FBRztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLE9BQU87WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO1FBRUQsSUFBSSxZQUFZO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVNLElBQUk7WUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVTLGNBQWM7WUFDcEIsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLG1DQUF5QixFQUFFLENBQUM7WUFDbEUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUU3RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRVMsS0FBSztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxDQUFDO0tBSUo7SUE5Q0QsOEJBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlYnVnZ2VyU2VydmljZSBmcm9tIFwiLi4vc2VydmljZS9kZWJ1Zy9EZWJ1Z2dlclNlcnZpY2VcIjtcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSBcIi4vQXBwQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tIFwiLi9Db250YWluZXJCdWlsZGVyXCI7XG5pbXBvcnQgRnJhbWV3b3JrQ29udGFpbmVyQnVpbGRlciBmcm9tIFwiLi9GcmFtZXdvcmtDb250YWluZXJCdWlsZGVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHBLZXJuZWwge1xuICAgIHByaXZhdGUgX2FwcENvbnRhaW5lcjogQXBwQ29udGFpbmVyO1xuXG4gICAgcHJpdmF0ZSBfZW52OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNEZWJ1ZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGVudjogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fZW52ID0gZW52O1xuICAgICAgICB0aGlzLl9pc0RlYnVnID0gaXNEZWJ1ZztcbiAgICB9XG5cbiAgICBnZXQgZW52KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnY7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVidWcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlYnVnO1xuICAgIH1cblxuICAgIGdldCBhcHBDb250YWluZXIoKTogQXBwQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYm9vdCgpOiBBcHBLZXJuZWwge1xuICAgICAgICB0aGlzLl9hcHBDb250YWluZXIgPSB0aGlzLmNyZWF0ZUFwcENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmJ1aWxkQ29udGFpbmVyKCk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZygpLmxvZyhcIkFwcCBib290ZWQhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZENvbnRhaW5lcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZnJhbWV3b3JrQ29udGFpbmVyQnVpbGRlciA9IG5ldyBGcmFtZXdvcmtDb250YWluZXJCdWlsZGVyKCk7XG4gICAgICAgIGNvbnN0IGFwcENvbnRhaW5lckJ1aWxkZXIgPSB0aGlzLmNyZWF0ZUFwcENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5idWlsZChmcmFtZXdvcmtDb250YWluZXJCdWlsZGVyLCB0aGlzLmVudiwgdGhpcy5pc0RlYnVnKTtcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuYnVpbGQoYXBwQ29udGFpbmVyQnVpbGRlciwgdGhpcy5lbnYsIHRoaXMuaXNEZWJ1Zyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlYnVnKCk6IERlYnVnZ2VyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBDb250YWluZXIuZGVidWdnZXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBcHBDb250YWluZXIoKTogQXBwQ29udGFpbmVyO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBcHBDb250YWluZXJCdWlsZGVyKCk6IENvbnRhaW5lckJ1aWxkZXI7XG59XG4iXX0=