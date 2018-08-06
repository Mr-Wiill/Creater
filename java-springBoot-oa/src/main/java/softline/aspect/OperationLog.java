package softline.aspect;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import softline.common.BaseCommon;
import softline.common.Common;
import softline.proto.domain.Divisions;
import softline.proto.domain.TecFile;
import softline.proto.domain.TecMenu;
import softline.proto.domain.TecOperationLogs;
import softline.proto.domain.TecUser;
import softline.service.BondService;
import softline.service.impl.LogServiceImpl;
import softline.util.GetLocalIp;

@Component
@Aspect 
public class OperationLog {
	@Autowired
	private HttpServletRequest request;
	@Resource(name = "logService")
	private LogServiceImpl logservice;
	@Autowired
	private BondService bondService;
	@Pointcut("execution(* softline.controller.*.add*(..))")
	private void addRecordAspect() {		// 定义一个切入点
	}
	@Pointcut("execution(* softline.controller.*.delete*(..))")
	private void deleteAspect() {		// 定义一个切入点
	}	
	//	增加資料監控
	@After("addRecordAspect()")
	public void addRecordAop(JoinPoint joinPoint) {
		Object[] obj = joinPoint.getArgs();
		Object objType = null;
		int menuid=(Integer)obj[3];
		if(BaseCommon.gzdb!=menuid){
		  objType =  obj[0];
		  
		}else {
			 objType = obj[4];
			
		}
		operation(joinPoint, objType, "增加",menuid);

	}

	//	刪除監控
	@Before("deleteAspect()")
	public void deleteRecordAop(JoinPoint joinPoint) {
		Object[] obj = joinPoint.getArgs();
		int fileId = (Integer) obj[0];
		int menuId = (Integer) obj[1];
		Object domain=null;
		if(menuId!=1503){
			domain = bondService.selectByPrimaryKey(fileId);
		
		}else{
			domain = bondService.selectDivByPrimaryKey(fileId);
			
		}
		operation(joinPoint, domain, "删除",menuId );
	}
	//	把操作記錄保存到數據庫里
	private void operation(JoinPoint joinPoint, Object obj,
		String operation,int menuId) {
		TecUser user = (TecUser) request.getSession().getAttribute("userLogin");
		String acct = user.getAcct();
		String ip = GetLocalIp.getClientIp(request);
		TecOperationLogs tecOperationLogs = new TecOperationLogs();
		try {
			tecOperationLogs.setAcct(acct);
			tecOperationLogs.setIp(ip);
			tecOperationLogs.setMethod("执行了："
					+ joinPoint.getTarget().getClass().getName() + "."
					+ joinPoint.getSignature().getName() + "方法");
			if(menuId!=1503){
				TecFile tecFile=(TecFile)obj;
			TecMenu tecMenu = bondService.selectByMenuId(tecFile.getMenuId());
			TecMenu tecPmenu = bondService.selectPmenuByMenuId(tecMenu.getId());
			if(tecPmenu!=null){
				tecOperationLogs.setModule(operation + ":债券业务中心->" + tecPmenu.getName() + "->"
						+ tecMenu.getName() + "->" + tecFile.getTitle());
			}else {
				tecOperationLogs.setModule(operation + ":债券业务中心->"
						+ tecMenu.getName() + "->" + tecFile.getTitle());
			}
		}else{
			Divisions divisions=(Divisions)obj;
			
			tecOperationLogs.setModule(operation + ":债券业务中心->工作督办->" +divisions.getTitle());
		
		}
			tecOperationLogs.setTime(Common.getDate(new Date(),
					"yyyy-MM-dd HH:mm:ss"));
			tecOperationLogs.setCommite("执行成功！");
			
		} catch (Exception e) {
			tecOperationLogs.setCommite("执行失败！");
			e.printStackTrace();
			
		} finally{
			logservice.operationLog(tecOperationLogs);
		}

	}

}
