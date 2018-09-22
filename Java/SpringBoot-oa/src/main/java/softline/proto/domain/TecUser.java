package softline.proto.domain;

public class TecUser {
    private Integer id;

    private String acct;

    private String pswd;

    private String name;

    private String dept;

    private Boolean isFlag;

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

    public String getPswd() {
        return pswd;
    }

    public void setPswd(String pswd) {
        this.pswd = pswd == null ? null : pswd.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept == null ? null : dept.trim();
    }

    public Boolean getIsFlag() {
        return isFlag;
    }

    public void setIsFlag(Boolean isFlag) {
        this.isFlag = isFlag;
    }
}