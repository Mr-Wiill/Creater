package softline.deploy.domain;

import softline.proto.domain.TecUserColumn;

public class TecUserColumnVo extends TecUserColumn {
private String columnName;
private String columnUrl;

public String getColumnUrl() {
	return columnUrl;
}

public void setColumnUrl(String columnUrl) {
	this.columnUrl = columnUrl;
}

public String getColumnName() {
	return columnName;
}

public void setColumnName(String columnName) {
	this.columnName = columnName;
}

	
}
