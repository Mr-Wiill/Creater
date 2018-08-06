package softline.common;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.apache.commons.lang3.time.FastDateFormat;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.multipart.MultipartFile;

/**
 * 通用类，提供基本的操作。（日期时间格式化、数据类型的转换、日期大小比较、中文解码）
 * 
 * @author cl
 * 
 */
public class Common {
	
//	格式化时间：00:00:00
	public static Object parseTime(Long string) {
		try {
			int h = (int) (string / 3600);
			int m = (int) (string % 3600 / 60);
			int s = (int) (string % 60);
			if (string != 0) {
				if (h != 0 && m != 0 && m >= 10 && s != 0 && s >= 10) {
					return (h + ":" + m + ":" + s);
				}
				if (h != 0 && m != 0 && m < 10 && s != 0 && s >= 10) {
					return (h + ":" + "0" + m + ":" + s);
				}
				if (h != 0 && m != 0 && m > 10 && s != 0 && s < 10) {
					return (h + ":" + m + ":" + "0" + s);
				}
				if (h != 0 && m != 0 && m < 10 && s != 0 && s < 10) {
					return (h + ":" + "0" + m + ":" + "0" + s);
				}
				if (h != 0 && m != 0 && m > 10 && s == 0) {
					return (h + ":" + m + ":" + "0" + s);
				}
				if (h != 0 && m != 0 && m < 10 && s == 0) {
					return (h + ":" + "0" + m + ":" + "0" + s);
				}
				if (h != 0 && m == 0 && s != 0 && s >= 10) {
					return (h + ":" + "0" + m + ":" + s);
				}
				if (h != 0 && m == 0 && s != 0 && s < 10) {
					return (h + ":" + "0" + m + ":" + "0" + s);
				}
				if (h != 0 && m == 0 && s == 0) {
					return (h + ":" + "0" + m + ":" + "0" + s);
				}
				if (h == 0 && m != 0 && m < 10 && s != 0 && s < 10) {
					return ("0" + m + ":" + "0" + s);
				}
				if (h == 0 && m != 0 && m < 10 && s != 0 && s >= 10) {
					return ("0" + m + ":" + s);
				}
				if (h == 0 && m != 0 && m >= 10 && s != 0 && s < 10) {
					return (m + ":" + "0" + s);
				}
				if (h == 0 && m != 0 && m >= 10 && s != 0 && s >= 10) {
					return (m + ":" + s);
				}
				if (h == 0 && m != 0 && m >= 10 && s == 0) {
					return (m + ":" + "0" + s);
				}
				if (h == 0 && m != 0 && m < 10 && s == 0) {
					return ("0" + m + ":" + "0" + s);
				}
				if (h == 0 && m == 0 && s != 0 && s >= 10) {
					return (s);
				}
				if (h == 0 && m == 0 && s != 0 && s < 10) {
					return ("0" + s);
				}
			}
			return 0;
		} catch (Exception e) {
			return null;
		}
	}

	// log4j对象
	private static final Log logger = LogFactory.getLog(Common.class);

	/**
	 * 格式化数字
	 * 
	 * @param num
	 * @param pattern
	 * @return
	 */
	public static String formatNumber(Number num, String pattern) {
		if (num == null)
			return "";
		try {
			DecimalFormat df = new DecimalFormat(pattern);
			return df.format(num);
		} catch (Exception e) {
			return "";
		}
	}

	/**
	 * String类型转换Long型
	 * 
	 * @param string
	 * @return
	 */
	public static Long parseLong(String string) {
		try {
			return Long.parseLong(string);
		} catch (Exception e) {
			logger.warn("parseLong error:" + string + " is not Long");
			return null;
		}
	}

//	比较时间
	public static int compare_date(String date1, String date2) {
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");		//格式化时间
		try {
			Date dt1 = df.parse(date1);
			Date dt2 = df.parse(date2);
			if (dt1.getTime() >= dt2.getTime()) {
				return 1;
			} else {
				return -1;
			}
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return 0;
	}

	/**
	 * String类型转换Double
	 * 
	 * @param string
	 * @return
	 */
	
	public static Double parseDouble(String string) {
		try {
			return Double.parseDouble(string);
		} catch (Exception e) {
			logger.warn("parseDouble error:" + string + " is not Double");
			return null;
		}
	}

	/**
	 * String类型转换BigDecimal
	 * 
	 * @param string
	 * @return
	 */
	
//	BigDecimal实现精确加减乘除运算
	public static BigDecimal parseBigDecimal(String string) {
		try {
			return new BigDecimal(string);
		} catch (Exception e) {
			logger.warn("BigDecimal error:" + string + " is not BigDecimal");
			return null;
		}
	}

	/**
	 * String类型转换Integer
	 * 
	 * @param string
	 * @return
	 */
	public static Integer parseInteger(String string) {
		try {
			return Integer.parseInt(string);
		} catch (Exception e) {
			logger.warn("parseInteger error:" + string + " is not Integer");
			return null;
		}
	}

	/**
	 * String类型转换Date
	 * 
	 * @param string
	 * @param pattern
	 * @return
	 */
	public static Date parseDate(String string, String pattern) {
		try {
			return DateUtils.parseDate(string, new String[] { pattern });
		} catch (ParseException e) {
			logger.warn("parseDate error:" + string + " is not Date");
			return null;
		}
	}

	/**
	 * Date类型转换String
	 * 
	 * @param date
	 * @param pattern
	 * @return
	 */
	public static String getDate(Date date, String pattern) {
		return date == null ? null : FastDateFormat.getInstance(pattern)
				.format(date);
	}

	/**
	 * 把带"-"日期格式,转为8位不带"-"的日期格式
	 * 
	 * @param resource
	 *            : 带"-"日期格式
	 * @return: 8位不带"-"的日期格式
	 */
	public static String dateReduceSplit(String resource) {
		String target = "";
		String[] subResource = resource.split("-");
		if (subResource.length != 3) {
			return null;
		}
		for (int i = 0; i < subResource.length; i++) {
			subResource[i] = (subResource[i].length() == 2 || subResource[i]
					.length() == 4) ? subResource[i] : "0" + subResource[i];
			target += subResource[i];
		}
		if (StringUtils.isNumeric(target)) {
			return target;
		} else {
			return null;
		}
	}

	/**
	 * 把8位不带"-"的日期格式,转为带"-"日期格式
	 * 
	 * @param resource
	 *            ： 8位不带"-"的日期格式
	 * @return: 转为带"-"日期格式
	 */
	
//	日期格式化：0000-00-00
	public static String dateAddSplit(String resource) {
		if (StringUtils.isNumeric(resource) && resource.length() == 8) {
			String target = "";
			target = resource.substring(0, 4) + "-" + resource.substring(4, 6)
					+ "-" + resource.substring(6);
			return target;
		} else {
			return resource;
		}
	}

	/**
	 * 判断字符串是否为空
	 * 
	 * @param String
	 *            s
	 * @return boolean
	 */
	public static boolean notEmpty(String s) {
		return !StringUtils.isBlank(s);
	}
 
	/**
	 * 得到当前日期的8位字符串
	 * 
	 * @return
	 */
	
	public static String getDate() {
		return getDate("yyyyMMdd");
	}

	/**
	 * 获取日期
	 */
	public static String getDate(String pattern) {
		return FastDateFormat.getInstance(pattern).format(
				Calendar.getInstance());
	}

	public static boolean betweenDate(String objDate, String pattern,
			String beginDate, String endDate) {
		SimpleDateFormat sdf = new SimpleDateFormat(
				Common.notEmpty(pattern) ? pattern : "yyyyMMdd");
		boolean flag = true;
		try {
			Date obj = sdf.parse(objDate);
			if (Common.notEmpty(beginDate)) {
				Date begin = sdf.parse(beginDate);
				flag &= begin.before(obj);
			}
			if (Common.notEmpty(endDate)) {
				Date end = sdf.parse(endDate);
				flag &= end.after(obj);
			}
		} catch (ParseException e) {
			return false;
		}
		return flag;
	}

	/**
	 * 中文解码,处理operation.js的paramEscape转码后数据
	 * 
	 * @param name
	 * @return
	 */
	public static String paramUnescape(String name) {
		if (Common.notEmpty(name)) {
			name = name.replace("_", "%");
			name = name.replace("!", "_");
			name = unescape(name);
		}
		return name;
	}

	/**
	 * 中文解码（字节数组 --> 字符串）
	 * 
	 * @param src
	 * @return
	 */
	public static String unescape(String src) {
		StringBuffer tmp = new StringBuffer();
		tmp.ensureCapacity(src.length());
		int lastPos = 0, pos = 0;
		char ch;
		while (lastPos < src.length()) {
			pos = src.indexOf("%", lastPos);
			if (pos == lastPos) {
				if (src.charAt(pos + 1) == 'u') {
					ch = (char) Integer.parseInt(
							src.substring(pos + 2, pos + 6), 16);
					tmp.append(ch);
					lastPos = pos + 6;
				} else {
					ch = (char) Integer.parseInt(
							src.substring(pos + 1, pos + 3), 16);
					tmp.append(ch);
					lastPos = pos + 3;
				}
			} else {
				if (pos == -1) {
					tmp.append(src.substring(lastPos));
					lastPos = src.length();
				} else {
					tmp.append(src.substring(lastPos, pos));
					lastPos = pos;
				}
			}
		}
		return tmp.toString();
	}

	/**
	 * 判断字符串是正则匹配数字
	 * 
	 * @param String
	 *            id
	 */
	public static boolean isNumber(String id) {
		return NumberUtils.isNumber(id);
	}
	
	/**
	 * cl
	 * 查询时特殊字符处理
	 * @param name
	 * @return
	 */
	public static String goinSpecial(String name) {
		if (Common.notEmpty(name)) {
			name = name.replace("\\", "\\\\\\%");
		}
		return name;
	}

	/**
	 * JasonTang
	 * 数字去除小数点后面多余的0 （1111.1000 转成 1111.1）
	 * @param num
	 * @return
	 */
	public static String reverse(String num){
		StringBuffer sb=new StringBuffer(num);
		Double dd = Common.parseDouble(sb.reverse().toString());
		sb=new StringBuffer(dd.toString());
		return sb.reverse().toString();
	}
	
	/**
	 * 附件上传
	 * cl
	 * 
	 * @param file
	 * @param path
	 * @param request
	 * @return
	 */
	public static List<String> saveFile(MultipartFile file, String package_path, HttpServletRequest request) {
		List<String> fileStrList = new ArrayList<String>();
		// 获取文件名
		String name = file.getOriginalFilename();
		// 截取文件后缀
		String nameSub = name.substring(name.lastIndexOf("."));
		// 拼接项目名 + 包名： \ upload \ 项目名 \ xxx \
//		String ITEM = Common.getPath(pkgs, request);
		// 拼接路劲 \ opt \ upload \ 项目名 \ supermarketPicture \
//		String pathDir = decyStr + ITEM;
		// 创建新uuid
		String uuid = java.util.UUID.randomUUID() + "";
		// 文件最终路径 F:\apache-tomcat\apache-tomcat-6.0.44\webapps\ETMS \ upload \ uuid+fileNameSub
		String filePath = package_path + uuid + nameSub;
		
		fileStrList.add(name);
		fileStrList.add(package_path + uuid + nameSub);
		fileStrList.add(uuid + nameSub);
		// 创建文件夹
		File savePivtureDirFile = new File(package_path);
		if (!savePivtureDirFile.exists()) {
			savePivtureDirFile.mkdirs();
		}
		try {
			// 转存文件
			file.transferTo(new File(filePath));
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileStrList;
	}
	
	/**
	 * 获取项目下的包路径
	 * cl
	 * 
	 * @param path
	 * @param request
	 * @return
	 */
	public static String getPath(String pkgs, HttpServletRequest request) {
		String Item = File.separator
				+ request.getContextPath().substring(1)
				+ File.separator + pkgs
				+ File.separator;
		return Item;
	}
	
	/**
	 * cl
	 * 获取\apache-tomcat-7.0.63\webapps\item
	 * @param pkgs
	 * @param request
	 * @return
	 */
	public static String getItemPath(String pkgs, HttpServletRequest request) {
		String Item = request.getSession().getServletContext().getRealPath("") + File.separator + "WEB-INF" + pkgs;
		return Item;
	}
	
	/**
	 * 附件删除
	 * cl
	 * 
	 * @param path
	 * @param uuid
	 * @param request
	 */
	public static void deleteFile(String package_path, String uuid) {
		//获取已上传的文件
		File fileDelete = new File(package_path + uuid);
		//判断文件是否存在
		if (fileDelete.exists()) {
			//删除文件
			fileDelete.delete();
		}
	}
	
	/**
	 * 计算两个日期相差天数
	 * @param date1
	 * @param date2
	 * @return
	 * @throws ParseException
	 */
	public static int getDateSpace(String date1, String date2)
            throws ParseException {
		 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
         //取得现在的时间，首先使用Calendar的getInstance()取得一个Calendar的实例
		 Calendar cl = Calendar.getInstance();
		        //将假期开始时间设置给Calendar对象
		 cl.setTime(sdf.parse(date1));
		 //将时间转换成毫秒
         long begin = cl.getTimeInMillis();
		         //将假期结束时间设置给Calendar对象
		 cl.setTime(sdf.parse(date2));
		         //将时间转换成毫秒
		 long end = cl.getTimeInMillis();
		         //计算两个时间差（天）
		 Integer days = (int) ((end - begin) / (1000 * 3600 * 24));   
        return days;   
         
    }
	
	public static void main(String[] args) {
		String str="4";
		System.out.println(str.substring(0, 1));
		
	}
	
}
