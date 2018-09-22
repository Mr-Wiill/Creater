package softline.util;

import java.io.Serializable;
import java.util.List;



public class PagerService<T> implements Serializable {
	

	private static final long serialVersionUID = 5034110111946595777L;

	
	/**
	 * @param t 对象条件
	 * @param currentPage 当前页码
	 * @param pageSize 页面大小
	 * @param list 要分页的集合
	 * @return 当前页对象
	 */
	public  Pager<T> getCurretPageData(int currentPage,int pageSize,List<T>list){
		
		
		Pager<T>pager=new Pager<T>(list, pageSize, currentPage);
		 
		
	     return pager;	
	}
	
	

}
