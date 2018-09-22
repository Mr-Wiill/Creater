package softline.controller;

import java.io.File;
import java.io.IOException;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;



import softline.common.Common;
import softline.common.FileOperationCommon;
import softline.common.BaseCommon;
import softline.deploy.domain.TecFileVo;

import softline.proto.domain.Divisions;
import softline.proto.domain.TecFile;
import softline.proto.domain.TecMenu;
import softline.proto.domain.TecUser;
import softline.service.BondService;
import softline.util.MD5Util;
import softline.util.Pager;
import softline.util.PagerService;

@Controller
@RequestMapping("/bbc")
@SuppressWarnings("unchecked")

/**
 * 	控制器方法(控制层)
 */
public class BondController <T>{
	private static org.apache.logging.log4j.Logger log = LogManager
			.getLogger(BondController.class);

	@Resource(name = "bondService")
	private BondService bondService;
	
	@RequestMapping(value = "/addRecord/{menu_id}", method = RequestMethod.POST)
	
	//	添加资源方法
	public String addRecord(TecFile tecFile, MultipartFile file,HttpSession session,@PathVariable(value = "menu_id") Integer menu_id,Divisions divisions, Model model) {
		String curentDate = Common.getDate(new Date(), "yyyy-MM-dd");
		TecUser user = (TecUser) session.getAttribute("userLogin");
		if(file!=null){
		String filename = FileOperationCommon.uploadFile(file,BaseCommon.bond_filePath).getName();
		String originalFileNameString=file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(File.separator)+1);
		tecFile.setPath(BaseCommon.bond_filePath + filename);
		tecFile.setName(originalFileNameString);
		tecFile.setUuid(filename.substring(0, filename.lastIndexOf(".")));
		tecFile.setIsTop(Short.valueOf(Common.notEmpty(tecFile.getTopTime())
				&& Common.compare_date(tecFile.getTopTime(), curentDate) == 1 ? "1"
				: "0"));
		}
	    tecFile.setMenuId(menu_id);
		tecFile.setColumnId(1);
		tecFile.setIsFlag(false);
		tecFile.setCreateAcct(user.getAcct());
		tecFile.setIssueTime(curentDate);
		
		/**
		 * 添加人员动态
		 */				
		if( BaseCommon.rydt==menu_id.intValue()){
			if("0".equals(tecFile.getContent2())){
				tecFile.setContent5(tecFile.getContent1()+":【活动】"+tecFile.getContent3()+" "+tecFile.getTitle()+"。");
			}else if("1".equals(tecFile.getContent2())){
				tecFile.setContent5(tecFile.getContent1()+":【休假】"+tecFile.getContent3()+"~"+tecFile.getContent4()+" "+tecFile.getTitle()+"。");
			}else if("2".equals(tecFile.getContent2())){
				tecFile.setContent5(tecFile.getContent1()+":【出差】"+tecFile.getContent3()+"~"+tecFile.getContent4()+" "+tecFile.getTitle()+"。");
			}else{
				tecFile.setContent5(tecFile.getContent1()+":【其它】"+tecFile.getContent3()+" "+tecFile.getTitle()+"。");
			}
			
		}
		try {
			
			/**
			 * 添加公告周知
			 */
			if(file!=null ||(BaseCommon.rydt==menu_id.intValue()||BaseCommon.ggzz==menu_id.intValue())&&(null==tecFile.getId()||"".equals(tecFile.getId()))){
				bondService.insertSelective(tecFile);
				
			}else if(BaseCommon.rydt==menu_id.intValue()||BaseCommon.ggzz==menu_id.intValue()){
				bondService.updateByPrimaryKey(tecFile);
				
			/**
			 * 添加工作督办
			 */
			}else if(BaseCommon.gzdb==menu_id.intValue()&&(null==divisions.getId()||"".equals(divisions.getId()))){
				String dep1=divisions.getContent2();
				String dep2=divisions.getTeamWork();//配合部门
				divisions.setContent2(dep1+"-->"+dep2);
				divisions.setMenuId(BaseCommon.gzdb);
				divisions.setCreateAcct(user.getAcct());
				divisions.setCreateTime(curentDate);
				bondService.insertSelective(divisions);				
				
			}else {
				String dep1=divisions.getContent2();
				String dep2=divisions.getTeamWork();//配合部门
				divisions.setContent2(dep1+"-->"+dep2);
				divisions.setMenuId(BaseCommon.gzdb);
				divisions.setModifyAcct(user.getAcct());
				divisions.setModifyTime(curentDate);
				bondService.updateByPrimaryKeySelective(divisions);
				
			}
				
			
		} catch (Exception e) {
			log.error(e);
		}
		
		return "redirect:/bbc/page2/" + menu_id;

	}
	
	/**
	 * 文档下载
	 */	
	@RequestMapping("/download/{tecFile_id}")
	public void download(HttpServletResponse response,
			@PathVariable("tecFile_id") Integer id) {
		TecFile tecFile = bondService.selectByPrimaryKey(id);
		String filePath = tecFile.getPath();
		String originalName = tecFile.getName();
		log.log(org.apache.logging.log4j.Level.INFO, "下载文件：" + filePath);
		FileOperationCommon.downloadFile(response, filePath, originalName);
	}

	@RequestMapping("/confirmDown/{tecFile_id}")
	@ResponseBody
	public Boolean confirmDown(HttpServletResponse response,	//确认下载
		@PathVariable("tecFile_id") Integer id,HttpSession session) {
		TecFile tecFile = bondService.selectByPrimaryKey(id);
		TecMenu pMenu=	bondService.selectPmenuByMenuId(tecFile.getMenuId());
		
		String filePath = tecFile.getPath();
		TecUser	tecUser=(TecUser)session.getAttribute("userLogin");		//获取用户信息
		String dept=tecUser.getDept();		//读取用户部门
		File newFile=new File(filePath);
		boolean flag=false;
	if(newFile.exists()){
		
		/**
		 * 用户权限控制
		 */
		if("dept_all".equals(dept)){	//管理员具有全部权限
			flag= true;
		} else if(pMenu.getId()==BaseCommon.zxxx && "dept1".equals(dept)){
			flag= true;	
		}else if(pMenu.getId()==BaseCommon.bmxx && "dept2".equals(dept)){
			flag= true;	
		}else if(pMenu.getId()==BaseCommon.jgxx && "dept3".equals(dept)){
			flag= true;	
		}else if(pMenu.getId()==BaseCommon.pxzl && "dept4".equals(dept)){
			flag= true;	
		}
}
		return flag;	
			
	}	

	/**
	 * 删除文档
	 */
	@RequestMapping(value = "/delete/{delete_fileId}/{menuId}",method=RequestMethod.POST)
	public @ResponseBody void delete(@PathVariable("delete_fileId") Integer id,@PathVariable("menuId") Integer menuId) {
		if(BaseCommon.gzdb!=menuId.intValue()){
		TecFile tecFile = new TecFile();
		tecFile.setId(id);
		tecFile.setIsFlag(true);
		bondService.updateByPrimaryKeySelective(tecFile);
		tecFile = bondService.selectByPrimaryKey(id);
		log.log(org.apache.logging.log4j.Level.INFO,
				"删除文件:" + tecFile.getPath());
		}else{
			bondService.deleteDivById(id);	
		}
	}
	
	/**
	 * 页面跳转控制
	 */
	@RequestMapping(value = "/page2Home/{pageNum}/{menu_id}")		//page2的子级页面
	public String page2Home(@PathVariable("pageNum") Integer pageNum,
		Model model, @PathVariable("menu_id") Integer menu_id) {
		getView(model, menu_id, pageNum);
		return "pageDiv";
	}
	
	@RequestMapping(value = "/page2/{menu_id}")		//page2 页面
	public String page2(Model model,@PathVariable("menu_id") Integer menu_id) {
		getView(model, menu_id, 1);		
		return "page2";
	}
	

	@RequestMapping(value = "/login")		//登录页面
	public String login() {
		return "login";
	}

	@RequestMapping(value = "/logout")		//退出系统，跳转
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/bbc/login";
	}

	@ResponseBody
	@RequestMapping(value = "/doLogin")
	public Boolean doLogin(HttpSession session, TecUser user) {
		Boolean flag = false;
		user.setPswd(MD5Util.stringMD5(user.getPswd()));	//MD5加密
		user = bondService.doLogin(user);
		if (user != null) {
			flag = true;
			session.setAttribute("userLogin", user);
		}
		return flag;
	}

	/**
	 * 搜索方法（模糊搜索）
	 */
	@RequestMapping(value = "/search/{pageNum}")
	public String search(TecFileVo tecFileVo, Model model,
			@PathVariable("pageNum") Integer pageNum, HttpSession session)
			throws IOException {
		tecFileVo.setColumnId(1);
		List<TecFileVo> recordList = bondService.search(tecFileVo);
		pagination((List<T>) recordList, pageNum, model);
		model.addAttribute("tecFileVo", tecFileVo);
		return "page3";
	}
	
	/**
	 * 首页menuId
	 */
	@RequestMapping(value = "/menu/{menu_id}", produces = "html/text;charset=utf-8")
	@ResponseBody
	public  String headMenu(Map<String, Object> map,
			@PathVariable(value = "menu_id") String menu_id) {
		map.put("level", 1);
		map.put("parentId", null);
		List<TecMenu> pMenuList = bondService.selectAllMenu(map);
		StringBuffer sb = new StringBuffer();
		for (TecMenu pMenu : pMenuList) {
			
			if (pMenu.getId().intValue() == BaseCommon.sy) {
				sb.append("<li class='level1'><a href='" + pMenu.getCode()
						+ "'>" + pMenu.getName() + "</a></li>");
			} else {
				if (menu_id != null
						&& menu_id.substring(0, 1).equals(
								pMenu.getId().toString())) {
					sb.append("<li class='active level1'>");
				} else {
					sb.append("<li class='level1'>");
				}
				sb.append("<a href='javascript:js_menu(" + '"'
						+ pMenu.getId() + '"' + ");'>" + pMenu.getName()
						+ "</a><ul>");
				map.put("level", 2);
				map.put("parentId", pMenu.getId());
				List<TecMenu> menuList = bondService.selectAllMenu(map);
				for (TecMenu tecMenu : menuList) {
						sb.append("<li><a href='javascript:js_menu(" + '"'
								+ tecMenu.getId() + '"' + ");'>"
								+ tecMenu.getName() + "</a></li>");
						
				}
				sb.append("</ul></li>");
			}

		}
		return sb.toString();
	}

	/**
	 * 首页跳转
	 */
	@RequestMapping(value = "/home")
	public String home(Model model, HttpSession session) throws IOException {
		Map<String, Integer> map = new LinkedHashMap<String, Integer>();
		map.put("pageNum", 10);
		List<TecFileVo> latestList = bondService.selectLatest(map);
		List<TecFile>per_list=bondService.personActive();
		List<TecFile>noticeList=bondService.noticeList();
		map.put("menuId", BaseCommon.gzdb);
		List<Divisions>divList=bondService.seletAllDivByMenu(map);
		model.addAttribute("latestList", latestList);
		model.addAttribute("per_list", per_list);
		model.addAttribute("noticeList", noticeList);
		model.addAttribute("divList", divList);
		
		return "home";
	}

	/**
	 * 	编辑工作督办
	 */
  @RequestMapping(value = "/edit/{fileId}/{menuId}")
  @ResponseBody
 public Object edit(@PathVariable Integer fileId,@PathVariable Integer menuId) throws IOException {
	  Object obj=null;
		
		if(BaseCommon.gzdb!=menuId.intValue()){
			obj=bondService.selectByPrimaryKey(fileId);
			
		}else{
			obj=bondService.selectDivByPrimaryKey(fileId);
		}
		
	
		return obj;
	}
  
  	/**
	 * 	查看工作督办
	 */
 @RequestMapping("/alertContent/{fileId}/{menuId}")
 public String  alertContent(@PathVariable Integer fileId,@PathVariable int menuId,Model model){

	 if(BaseCommon.gzdb!=menuId){
	 TecFile tecFile=bondService.selectByPrimaryKey(fileId);
	 model.addAttribute("record", tecFile);
	 }else{
		 Divisions divs=bondService.selectDivByPrimaryKey(fileId);
		 String []demps=divs.getContent2().split("-->");
		 divs.setContent2(demps[0]);
		 divs.setTeamWork(demps[1]);
		 model.addAttribute("record", divs);
	 }
	 model.addAttribute("menuId", menuId);
	 return "alertPub";
 }

 	/**
	 * 	部门信息与导航栏的匹配
	 */
	private void getView(Model model, Integer menu_id, int pageNum) {

		TecMenu tecMenu = bondService.selectByMenuId(menu_id);
		List<TecFileVo> recordList = null;
		List<TecMenu> menuList = null;
		if (tecMenu.getParentId() != null) {
			TecFileVo tecFileVo = new TecFileVo();
			tecFileVo.setColumnId(1);
			tecFileVo.setMenuId(menu_id);
			menuList = bondService.selectMenuByPid(tecMenu.getParentId());
			recordList = bondService.selectByMidAndCid(tecFileVo);
			model.addAttribute("menu_level", 2);
			if(BaseCommon.zxxx==tecMenu.getParentId())	
			model.addAttribute("dept", "dept1");
			if(BaseCommon.bmxx==tecMenu.getParentId())
				model.addAttribute("dept", "dept2");
			if(BaseCommon.jgxx==tecMenu.getParentId())
				model.addAttribute("dept", "dept3");
			if(BaseCommon.pxzl==tecMenu.getParentId())
				model.addAttribute("dept", "dept4");
		
		
		} else {
			menuList = bondService.selectMenuByPid(menu_id);
			Map<String, Integer> map = new LinkedHashMap<String, Integer>();
			map.put("menuPid", menu_id);
			map.put("columnId", 3);
			map.put("toIndex", null);
			recordList = bondService.selectAllByMenuPid(map);
			model.addAttribute("menu_level", 1);
		}
		
		/**
		 *  人员动态、工作周知、工作督办、最新文件的详情页
		 */
		Map<String, Integer> map = new LinkedHashMap<String, Integer>();
		if (menu_id==BaseCommon.zxwj) {
			List<TecFileVo>tecVo=bondService.selectLatest(map);	
			pagination((List<T>) tecVo, pageNum, model);
		}else if (menu_id==BaseCommon.gzdb) {
			map.put("pageNum", null);
			map.put("menuId", BaseCommon.gzdb);
			List<Divisions>divisions=bondService.seletAllDivByMenu(map);
			pagination((List<T>) divisions, pageNum, model);
		}else if (menu_id==BaseCommon.ggzz ||menu_id==BaseCommon.rydt){
			map.put("menuId", menu_id);
			List<TecFile>tecVo=bondService.selectSchedule(map);
			pagination((List<T>) tecVo, pageNum, model);
		}else{ 
			pagination((List<T>) recordList, pageNum, model);
		}
		
		model.addAttribute("menu_id", menu_id);
		model.addAttribute("menuList", menuList);
	}
 
	/**
	 * 	分页
	 */
	private void pagination(List<T> recordList, int pageNum, Model model) {
		PagerService<T> pagerService = new PagerService<T>();
		Pager<T> pager = (Pager<T>) pagerService.getCurretPageData(pageNum, 10,recordList);
		model.addAttribute("pager", pager);
	}

	
	/**
	 * 加载首页内容
	 * @param model
	 */
	public void loadIndexPage(Model model){
		Map<String, Integer> map = new LinkedHashMap<String, Integer>();
		map.put("pageNum", 10);
		List<TecFileVo> latestList = bondService.selectLatest(map);
		List<TecFile>per_list=bondService.personActive();
		List<TecFile>noticeList=bondService.noticeList();
		map.put("menuId", BaseCommon.gzdb);
		List<Divisions>divList=bondService.seletAllDivByMenu(map);
		model.addAttribute("latestList", latestList);	//最新文件
		model.addAttribute("per_list", per_list);		//人员动态
		model.addAttribute("noticeList", noticeList);		//公告周知
		model.addAttribute("divList", divList);		//工作督办
	}
	
	
	
	
	
}