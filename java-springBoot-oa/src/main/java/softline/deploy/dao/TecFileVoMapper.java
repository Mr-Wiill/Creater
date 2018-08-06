package softline.deploy.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import softline.deploy.domain.TecFileVo;

/**
 * 
 */
@Mapper
public interface TecFileVoMapper {
	public List<TecFileVo> selectByMidAndCid(TecFileVo tecFileVo);	
	public List<TecFileVo> search(TecFileVo tecFileVo);		
	public List<TecFileVo> selectAllByCid(int columnId);
	public List<TecFileVo> selectLatest(Map<String,Integer>map);
}
