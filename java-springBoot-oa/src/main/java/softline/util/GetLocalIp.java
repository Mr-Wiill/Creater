package softline.util;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;


/**
 * 获取本地ID
 * 	
 */
public class GetLocalIp {

 

    public static String getClientIp(HttpServletRequest request) {

    	String ip=request.getHeader("X-Forwarded-For");
		if (ip!=null && ip.length()!=0 && !"unknown".equalsIgnoreCase(ip)) {
			//多次反向代理会有多个ip，第一个ip才是真实ip；
			if (ip.indexOf(",")!=-1) {
				ip=ip.split(",")[0];
			}
		}
		
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getHeader("Proxy-Client-IP");
		}
		
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getHeader("WL-Proxy-Client-IP");
		}
		
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getHeader("HTTP_CLIENT_IP");
		}
		
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getHeader("HTTP_X_FORWARDED_FOR");
		}
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getHeader("X-Real-IP");
		}
		
		if (ip==null || ip.length()==0 || "unknown".equalsIgnoreCase(ip)) {
			ip=request.getRemoteAddr();
			if (ip.equals("127.0.0.1") ||ip.equals("0:0:0:0:0:0:0:1")) {
				try {
					ip=InetAddress.getLocalHost().getHostAddress();
				} catch (UnknownHostException e) {
					e.printStackTrace();
				}
			}
		}
		return ip;
    }
}
