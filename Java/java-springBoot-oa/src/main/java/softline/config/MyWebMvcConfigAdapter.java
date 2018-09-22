package softline.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import softline.login.MyInterceptor;
/**
 * 登录接口不拦截（注册拦截器）
 * @author cl
 *
 */

@Configuration
public class MyWebMvcConfigAdapter extends WebMvcConfigurerAdapter {
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// TODO Auto-generated method stub
		registry.addInterceptor(new MyInterceptor()).addPathPatterns("/**").excludePathPatterns("/bbc/login").excludePathPatterns("/bbc/doLogin");
		super.addInterceptors(registry);
	}

	 
}
