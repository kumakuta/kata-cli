
import { JsonObject, Component } from "merapi";
import { IHelper } from "interfaces/main";

export default class Api extends Component {
    private draftApi: any;
    private apiClient: any;
    private bearer: any;
    private botApi: any;
    private authApi: any;
    private userApi: any;
    private teamApi: any;
    private deploymentApi: any;
    private channelApi: any;
    private sessionApi: any;
    private cachesApi: any;
    private utilApi: any;
    private nluApi: any;

    constructor(private helper: IHelper, private zaun: any) {
        super();

        this.apiClient = this.zaun.ApiClient.instance;
        let basePath = this.helper.getProp("zaunUrl") || "https://api.kata.ai";
        
        this.apiClient.basePath = basePath;
        this.bearer = this.apiClient.authentications['Bearer'];
        let currentLogin = <string> this.helper.getProp("current_login") || "user";
        let tokenObj = <JsonObject> this.helper.getProp("token") || {};
        this.bearer.apiKey = `Bearer ${tokenObj[currentLogin]}`;
        
        this.botApi = new this.zaun.BotApi();
        this.authApi = new this.zaun.AuthApi();
        this.userApi = new this.zaun.UserApi();
        this.teamApi = new this.zaun.TeamApi();
        this.deploymentApi = new this.zaun.DeploymentApi();
        this.draftApi = new this.zaun.DraftApi();
        this.channelApi = new this.zaun.ChannelApi();
        this.sessionApi = new this.zaun.SessionApi();
        this.cachesApi = new this.zaun.CacheApi();
        this.utilApi = new this.zaun.UtilApi();
        this.nluApi = new this.zaun.NluApi();
    }
}
