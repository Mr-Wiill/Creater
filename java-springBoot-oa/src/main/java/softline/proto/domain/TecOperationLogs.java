package softline.proto.domain;


/**
 * 	操作日志
 */
public class TecOperationLogs {
    private Integer id;

    private String acct;

    private String module;

    private String method;

    private String ip;

    private String time;

    private String commite;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAcct() {
        return acct;
    }

    public void setAcct(String acct) {
        this.acct = acct == null ? null : acct.trim();
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module == null ? null : module.trim();
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method == null ? null : method.trim();
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip == null ? null : ip.trim();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time == null ? null : time.trim();
    }

    public String getCommite() {
        return commite;
    }

    public void setCommite(String commite) {
        this.commite = commite == null ? null : commite.trim();
    }
}