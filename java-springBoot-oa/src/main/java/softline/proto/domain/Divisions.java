package softline.proto.domain;

public class Divisions {
    private Integer id;

    private Integer menuId;

    private String title;

    private String content1;

    private String content2;

    private String content3;

    private String content4;

    private String content5;

    private String remark;

    private String createAcct;

    private String modifyAcct;

    private String createTime;

    private String modifyTime;

    private String teamWork;//新增配合部门
    
    
    public String getTeamWork() {
		return teamWork;
	}

	public void setTeamWork(String teamWork) {
		this.teamWork = teamWork;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getContent1() {
        return content1;
    }

    public void setContent1(String content1) {
        this.content1 = content1 == null ? null : content1.trim();
    }

    public String getContent2() {
        return content2;
    }

    public void setContent2(String content2) {
        this.content2 = content2 == null ? null : content2.trim();
    }

    public String getContent3() {
        return content3;
    }

    public void setContent3(String content3) {
        this.content3 = content3 == null ? null : content3.trim();
    }

    public String getContent4() {
        return content4;
    }

    public void setContent4(String content4) {
        this.content4 = content4 == null ? null : content4.trim();
    }

    public String getContent5() {
        return content5;
    }

    public void setContent5(String content5) {
        this.content5 = content5 == null ? null : content5.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public String getCreateAcct() {
        return createAcct;
    }

    public void setCreateAcct(String createAcct) {
        this.createAcct = createAcct == null ? null : createAcct.trim();
    }

    public String getModifyAcct() {
        return modifyAcct;
    }

    public void setModifyAcct(String modifyAcct) {
        this.modifyAcct = modifyAcct == null ? null : modifyAcct.trim();
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime == null ? null : createTime.trim();
    }

    public String getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(String modifyTime) {
        this.modifyTime = modifyTime == null ? null : modifyTime.trim();
    }
}