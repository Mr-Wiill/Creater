package softline.deploy.domain;

import softline.proto.domain.TecFile;

public class TecFileVo extends TecFile {

	private String menuName;
    private String startTime;	//搜索条件的起始时间
    private String parentMenuName;
    
	public String getParentMenuName() {
		return parentMenuName;
	}

	public void setParentMenuName(String parentMenuName) {
		this.parentMenuName = parentMenuName;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	
	
	
}
