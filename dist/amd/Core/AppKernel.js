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
    exports.default = AppKernel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwS2VybmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9jb3JlL0FwcEtlcm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQU1JLFlBQVksR0FBVyxFQUFFLFVBQW1CLEtBQUs7WUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksR0FBRztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLE9BQU87WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO1FBRUQsSUFBSSxZQUFZO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVNLElBQUk7WUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVTLGNBQWM7WUFDcEIsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLG1DQUF5QixFQUFFLENBQUM7WUFDbEUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUU3RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRVMsS0FBSztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxDQUFDO0tBSUo7SUE5Q0QsNEJBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlYnVnZ2VyU2VydmljZSBmcm9tIFwiLi4vc2VydmljZS9kZWJ1Zy9EZWJ1Z2dlclNlcnZpY2VcIjtcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSBcIi4vQXBwQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFpbmVyQnVpbGRlciBmcm9tIFwiLi9Db250YWluZXJCdWlsZGVyXCI7XG5pbXBvcnQgRnJhbWV3b3JrQ29udGFpbmVyQnVpbGRlciBmcm9tIFwiLi9GcmFtZXdvcmtDb250YWluZXJCdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFwcEtlcm5lbCB7XG4gICAgcHJpdmF0ZSBfYXBwQ29udGFpbmVyOiBBcHBDb250YWluZXI7XG5cbiAgICBwcml2YXRlIF9lbnY6IHN0cmluZztcbiAgICBwcml2YXRlIF9pc0RlYnVnOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZW52OiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9lbnYgPSBlbnY7XG4gICAgICAgIHRoaXMuX2lzRGVidWcgPSBpc0RlYnVnO1xuICAgIH1cblxuICAgIGdldCBlbnYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudjtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWJ1ZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVidWc7XG4gICAgfVxuXG4gICAgZ2V0IGFwcENvbnRhaW5lcigpOiBBcHBDb250YWluZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBib290KCk6IEFwcEtlcm5lbCB7XG4gICAgICAgIHRoaXMuX2FwcENvbnRhaW5lciA9IHRoaXMuY3JlYXRlQXBwQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYnVpbGRDb250YWluZXIoKTtcblxuICAgICAgICB0aGlzLmRlYnVnKCkubG9nKFwiQXBwIGJvb3RlZCFcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQ29udGFpbmVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmcmFtZXdvcmtDb250YWluZXJCdWlsZGVyID0gbmV3IEZyYW1ld29ya0NvbnRhaW5lckJ1aWxkZXIoKTtcbiAgICAgICAgY29uc3QgYXBwQ29udGFpbmVyQnVpbGRlciA9IHRoaXMuY3JlYXRlQXBwQ29udGFpbmVyQnVpbGRlcigpO1xuXG4gICAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmJ1aWxkKGZyYW1ld29ya0NvbnRhaW5lckJ1aWxkZXIsIHRoaXMuZW52LCB0aGlzLmlzRGVidWcpO1xuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5idWlsZChhcHBDb250YWluZXJCdWlsZGVyLCB0aGlzLmVudiwgdGhpcy5pc0RlYnVnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVidWcoKTogRGVidWdnZXJTZXJ2aWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcENvbnRhaW5lci5kZWJ1Z2dlclNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUFwcENvbnRhaW5lcigpOiBBcHBDb250YWluZXI7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUFwcENvbnRhaW5lckJ1aWxkZXIoKTogQ29udGFpbmVyQnVpbGRlcjtcbn1cbiJdfQ==