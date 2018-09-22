package softline.proto.domain;

/**
 * 	部门表
 */
public class TecMenu {
    private Integer id;

    private Integer columnId;

    private String name;

    private String code;

    private Integer parentId;

    private Byte order;

    private Boolean level;

    private Boolean isFlag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getColumnId() {
        return columnId;
    }

    public void setColumnId(Integer columnId) {
        this.columnId = columnId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Byte getOrder() {
        return order;
    }

    public void setOrder(Byte order) {
        this.order = order;
    }

    public Boolean getLevel() {
        return level;
    }

    public void setLevel(Boolean level) {
        this.level = level;
    }

    public Boolean getIsFlag() {
        return isFlag;
    }

    public void setIsFlag(Boolean isFlag) {
        this.isFlag = isFlag;
    }
}