package softline.common;

import java.io.File;
import java.io.OutputStream;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.springframework.web.multipart.MultipartFile;

public class FileOperationCommon {
private static  org.apache.logging.log4j.Logger log=LogManager.getLogger(FileOperationCommon.class);
	
	
	/**
	 * cl
	 * @param filePath 文件全路径包括文件名；
	 * @param filename文件名包括后缀； 
	 */

//	下载文件
	public static void downloadFile(HttpServletResponse response,
			String filePath, String filename) {
		try {
			response.setContentType("application/octet-stream");
			filename=new String(filename.getBytes("gbk"),"iso-8859-1");
			response.setHeader("Content-disposition", "attachment;filename="
	 				+ filename); 
			OutputStream os = response.getOutputStream();
			File file = new File(filePath);
			FileUtils.copyFile(file, os);
			os.close();
			log.log(org.apache.logging.log4j.Level.INFO, "下载文件："+filePath);
		} catch (Exception e) {
			log.error("下载文件错误："+filePath, e);
			e.printStackTrace();

		}

	}
	
	/**
	 * cl
	 * @param file  
	 * @param uploadPath 上传文件的位置
	 * @return 文件
	 */
	
//	上传文件
	public static File uploadFile(MultipartFile file,String uploadPath)	{
		File  newfile=null;
		String filename=null;
		try{
			
		String originalFilename=file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(File.separator)+1);
		String uuid=UUID.randomUUID().toString();
		uuid=uuid.replace("-", "");
	    filename=uuid+originalFilename.substring(originalFilename.lastIndexOf("."));
		  newfile=new File(uploadPath+filename);
		if(!newfile.getParentFile().exists()){
			newfile.getParentFile().mkdirs();
		}
		file.transferTo(newfile);
		log.log(org.apache.logging.log4j.Level.INFO, "上传文件："+uploadPath+filename);	
		}catch(Exception e){
			log.log(org.apache.logging.log4j.Level.INFO, "上传文件错误："+uploadPath+filename);
			e.printStackTrace();
		}
		
		return newfile;
	}
	
	/**
	 * cl
	 * @param filePath 删除文件全路径
	 * @return
	 */
	
//	删除文件
	public static boolean deleteFile(String filePath)	{
		
		File file=new File(filePath);
		if(file.exists()){
			file.delete();
			return true;
		}
		return false;
	}	
	
	
}
