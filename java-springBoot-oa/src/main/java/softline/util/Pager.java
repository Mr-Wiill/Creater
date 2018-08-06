package softline.util;

import java.io.Serializable;
import java.util.List;


/**
 * 	翻页实体类 	
 */
public class Pager<T> implements Serializable {

	private static final long serialVersionUID = -5501070445034432974L;
	
	private int pageSize;// 每页显示的行数
	
	private int totalPage;// 总页数
	
	private int currentPage;// 当前页号
	
	private int totalRecord;//总记录数
	
	private List<T>dataList;//每页显示的数据

	
	public Pager(List<T> list,int pageSize, int pageNum) {
		if(list==null){
			return;
		}
	this.pageSize=	pageSize;
	this.totalPage=	list.size()%pageSize==0?(list.size()/pageSize):(list.size()/pageSize+1);
	if(this.totalPage>=pageNum&&pageNum>0){
	this.currentPage=pageNum;
	} else if(pageNum>this.totalPage){
		this.currentPage=this.totalPage;
	} else{
		this.currentPage=1;
	}
	this.totalRecord=list.size();
	int fromIndex=(pageNum-1)*pageSize;
	int toIndex=pageNum*pageSize>this.totalRecord?this.totalRecord:pageNum*pageSize;
	if(fromIndex>=0&&fromIndex<toIndex){
	this.dataList=	list.subList(fromIndex, toIndex);
	}	
	}

	
	public Pager(int pageSize, int totalPage, int currentPage, int totalRecord,
			List<T> dataList) {
		super();
		this.pageSize = pageSize;
		this.totalPage = totalPage;
		this.currentPage = currentPage;
		this.totalRecord = totalRecord;
		this.dataList = dataList;
	}

	public Pager() {
		super();
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalRecord() {
		return totalRecord;
	}

	public void setTotalRecord(int totalRecord) {
		this.totalRecord = totalRecord;
	}

	public List<T> getDataList() {
		return dataList;
	}

	public void setDataList(List<T> dataList) {
		this.dataList = dataList;
	}
	

	
	
}
