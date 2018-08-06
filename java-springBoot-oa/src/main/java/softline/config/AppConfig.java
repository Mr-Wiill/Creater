package softline.config;

import javax.servlet.MultipartConfigElement;

import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 运行环境配置类

@Configuration
public class AppConfig {
	@Bean  
    MultipartConfigElement multipartConfigElement() {  
       MultipartConfigFactory factory = new MultipartConfigFactory();      
        factory.setLocation("d://");  //本地运行
       return factory.createMultipartConfig();  
   }  
}
